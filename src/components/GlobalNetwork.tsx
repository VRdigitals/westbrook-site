import { useEffect, useRef, useState } from "react";
import { GoldGlobe } from "@/components/GoldGlobe";
import { useIsMobile } from "@/hooks/use-mobile";

const COUNTRIES = [
  { name: "United Arab Emirates", code: "ae", lat: 23.4, lon: 53.8 },
  { name: "United Kingdom", code: "gb", lat: 55.4, lon: -3.4 },
  { name: "Canada", code: "ca", lat: 56.1, lon: -106.3 },
  { name: "Australia", code: "au", lat: -25.3, lon: 133.8 },
  { name: "Germany", code: "de", lat: 51.2, lon: 10.5 },
  { name: "Singapore", code: "sg", lat: 1.35, lon: 103.8 },
  { name: "India", code: "in", lat: 22.4, lon: 78.7 },
  { name: "Saudi Arabia", code: "sa", lat: 23.9, lon: 45.1 },
  { name: "New Zealand", code: "nz", lat: -41.5, lon: 173.0 },
  { name: "United States", code: "us", lat: 39.8, lon: -98.6 },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

export function GlobalNetwork() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => setMounted(true), []);

  return (
    <section className="gn-section" id="global-network">
      <div className="gn-grain" aria-hidden />
      <div className="gn-inner">
        <div ref={ref} className={`gn-copy${inView ? " is-in" : ""}`}>
          <p className="gn-eyebrow font-display">Our Global Network</p>
          <h2 className="gn-title font-display">
            <span className="text-gold-gradient">Borders Mapped.</span>
            <br />
            Pathways Opened.
          </h2>
          <p className="gn-sub">
            Wherever your dream is waiting, we're already there — licensed partners,
            employers and legal counsel across ten destinations, each placement
            handled inside that country&rsquo;s own rules, properly.
          </p>

          <ul className="gn-flags">
            {COUNTRIES.map((c, i) => (
              <li
                key={c.code}
                className="gn-coin"
                style={{ transitionDelay: `${120 + i * 70}ms` }}
                title={c.name}
              >
                <span className="gn-coin-face">
                  <img
                    src={`https://flagcdn.com/w160/${c.code}.png`}
                    alt={`${c.name} flag`}
                    loading="lazy"
                    width={64}
                    height={64}
                  />
                </span>
                <span className="gn-coin-label font-display">{c.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="gn-globe-wrap">
          {mounted && (
            <GoldGlobe markers={isMobile ? COUNTRIES : undefined} />
          )}
          <p className="gn3d-hint font-display">Drag to explore</p>
        </div>
      </div>
    </section>
  );
}
