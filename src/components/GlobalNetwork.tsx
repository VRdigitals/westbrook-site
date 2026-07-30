import { useEffect, useRef, useState } from "react";
import { GoldGlobe } from "@/components/GoldGlobe";

const COUNTRIES = [
  { name: "United Arab Emirates", code: "ae" },
  { name: "United Kingdom", code: "gb" },
  { name: "Canada", code: "ca" },
  { name: "Australia", code: "au" },
  { name: "Germany", code: "de" },
  { name: "Singapore", code: "sg" },
  { name: "India", code: "in" },
  { name: "Saudi Arabia", code: "sa" },
  { name: "New Zealand", code: "nz" },
  { name: "United States", code: "us" },
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
          {mounted && <GoldGlobe />}
          <p className="gn3d-hint font-display">Drag to explore</p>
        </div>
      </div>
    </section>
  );
}
