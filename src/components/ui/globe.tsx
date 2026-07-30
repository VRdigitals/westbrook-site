import { useCallback, useEffect, useRef, useState } from "react";
import type { COBEOptions } from "cobe";

import { cn } from "@/lib/utils";

/* brand-matched: black landmass, metallic gold dots + glow */
export const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.16, 0.12, 0.06],
  markerColor: [249 / 255, 221 / 255, 123 / 255],
  glowColor: [0.28, 0.21, 0.09],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
    { location: [25.2048, 55.2708], size: 0.09 },
    { location: [51.5072, -0.1276], size: 0.08 },
    { location: [43.6532, -79.3832], size: 0.07 },
    { location: [-33.8688, 151.2093], size: 0.07 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
  onPhi,
  children,
}: {
  className?: string;
  config?: COBEOptions;
  onPhi?: (phi: number) => void;
  children?: React.ReactNode;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);
  const onPhiRef = useRef(onPhi);
  onPhiRef.current = onPhi;

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onResize = useCallback(() => {
    if (canvasRef.current) widthRef.current = canvasRef.current.offsetWidth;
  }, []);

  useEffect(() => {
    let globe: { destroy: () => void } | undefined;
    let cancelled = false;

    window.addEventListener("resize", onResize);
    onResize();

    import("cobe").then(({ default: createGlobe }) => {
      if (cancelled || !canvasRef.current) return;
      globe = createGlobe(canvasRef.current, {
        ...config,
        width: widthRef.current * 2,
        height: widthRef.current * 2,
        onRender: (state: Record<string, number>) => {
          if (pointerInteracting.current === null) phiRef.current += 0.004;
          state.phi = phiRef.current + r;
          state.width = widthRef.current * 2;
          state.height = widthRef.current * 2;
          onPhiRef.current?.(state.phi);
        },
      } as unknown as COBEOptions);
      requestAnimationFrame(() => {
        if (canvasRef.current) canvasRef.current.style.opacity = "1";
      });
    });

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      globe?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[600px]", className)}>
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-0 transition-opacity duration-1000 [contain:layout_paint_size]"
        onPointerDown={(e) =>
          updatePointerInteraction(e.clientX - pointerInteractionMovement.current)
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
      {children}
    </div>
  );
}