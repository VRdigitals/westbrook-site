import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import worldMapUrl from "@/assets/gold-world-map.png";

const RADIUS = 1.5;

export type GlobeMarker = { name: string; lat: number; lon: number };

/** lat/lon (degrees) -> position on the sphere, matching the equirectangular texture. */
function latLonToVector3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function GlobeMarkers({ markers }: { markers: GlobeMarker[] }) {
  const positions = useMemo(
    () => markers.map((m) => ({ ...m, pos: latLonToVector3(m.lat, m.lon, RADIUS + 0.02) })),
    [markers],
  );

  return (
    <group>
      {positions.map((m) => (
        <group key={m.name} position={m.pos}>
          <mesh>
            <sphereGeometry args={[0.034, 12, 12]} />
            <meshBasicMaterial color="#fff8e6" />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.062, 12, 12]} />
            <meshBasicMaterial color="#ffe066" transparent opacity={0.35} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Globe({ markers }: { markers?: GlobeMarker[] }) {
  const wireRef = useRef<THREE.Mesh>(null);
  const map = useLoader(THREE.TextureLoader, worldMapUrl);
  map.colorSpace = THREE.SRGBColorSpace;

  useFrame((_, delta) => {
    if (wireRef.current) wireRef.current.rotation.y += delta * 0.03;
  });

  return (
    <>
      <mesh>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshStandardMaterial
          color="#3a2a12"
          emissiveMap={map}
          emissive="#ffd93d"
          emissiveIntensity={0.85}
          metalness={0.4}
          roughness={0.6}
        />
      </mesh>
      <mesh ref={wireRef}>
        <sphereGeometry args={[RADIUS + 0.006, 28, 18]} />
        <meshBasicMaterial color="#ffe066" wireframe transparent opacity={0.14} />
      </mesh>
      <mesh>
        <sphereGeometry args={[RADIUS + 0.14, 48, 48]} />
        <meshBasicMaterial color="#ffd93d" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>
      {markers && markers.length > 0 && <GlobeMarkers markers={markers} />}
    </>
  );
}

export function GoldGlobe({ markers }: { markers?: GlobeMarker[] }) {
  return (
    <div className="gn3d-canvas-wrap">
      <Canvas camera={{ position: [0, 0, 4.3], fov: 40 }} dpr={[1, 2]}>
        <ambientLight intensity={0.75} color="#fff3d1" />
        <pointLight position={[5, 3, 5]} intensity={8} color="#fff2c8" decay={2} />
        <pointLight position={[-4, -2, -3]} intensity={3} color="#9c7a1e" decay={2} />
        <Suspense fallback={null}>
          <Globe markers={markers} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.7}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
