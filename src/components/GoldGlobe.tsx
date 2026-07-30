import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import worldMapUrl from "@/assets/gold-world-map.png";

const RADIUS = 1.5;

function Globe() {
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
          emissive="#f4bd50"
          emissiveIntensity={0.85}
          metalness={0.4}
          roughness={0.6}
        />
      </mesh>
      <mesh ref={wireRef}>
        <sphereGeometry args={[RADIUS + 0.006, 28, 18]} />
        <meshBasicMaterial color="#f9dd7b" wireframe transparent opacity={0.14} />
      </mesh>
      <mesh>
        <sphereGeometry args={[RADIUS + 0.14, 48, 48]} />
        <meshBasicMaterial color="#f4bd50" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>
    </>
  );
}

export function GoldGlobe() {
  return (
    <div className="gn3d-canvas-wrap">
      <Canvas camera={{ position: [0, 0, 4.3], fov: 40 }} dpr={[1, 2]}>
        <ambientLight intensity={0.75} color="#fff3d1" />
        <pointLight position={[5, 3, 5]} intensity={8} color="#fff2c8" decay={2} />
        <pointLight position={[-4, -2, -3]} intensity={3} color="#8a5824" decay={2} />
        <Suspense fallback={null}>
          <Globe />
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
