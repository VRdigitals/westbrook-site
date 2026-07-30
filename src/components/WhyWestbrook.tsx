import { useEffect, useRef, useState } from "react";
import { Typewriter } from "./Typewriter";
const pillars = [
  {
    numeral: "I",
    title: "Your Dream, Done Right",
    tag: "Ethical",
    description:
      "Every route we build is honest and above board, so your new start begins on solid ground.",
    orbit: 4,
    angle: 30,
  },
  {
    numeral: "II",
    title: "No Surprises, Ever",
    tag: "Transparent",
    description:
      "You'll always know where your case stands — clear timelines, honest costs, and a straight answer when you ask one.",
    orbit: 2,
    angle: 180,
  },
  {
    numeral: "III",
    title: "Done Right, The First Time",
    tag: "Compliance",
    description:
      "Every application is built to the destination country's exact standard and checked by licensed advisors before it's ever filed.",
    orbit: 3,
    angle: 130,
  },
  {
    numeral: "IV",
    title: "A Network You Can Trust",
    tag: "Verified",
    description:
      "Every employer and partner is vetted, licensed and re-checked every year — so the opportunity waiting for you is real.",
    orbit: 4,
    angle: 220,
  },
];

const badges = ["IATA", "ICCRC", "MARA", "OISC", "ISO 9001"];

/* curved words that ride the orbit lines on scroll */
const curvedRings = [
  { radius: 155, words: ["Ethical"], speed: -140 },
  { radius: 220, words: ["Transparent"], speed: 110 },
  { radius: 285, words: ["Legal", "Global"], speed: -85 },
  { radius: 350, words: ["Verified", "Ethical", "Global"], speed: 65 },
];

function ringPath(r: number) {
  return `M 360 360 m -${r} 0 a ${r} ${r} 0 1 1 ${r * 2} 0 a ${r} ${r} 0 1 1 -${r * 2} 0`;
}

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useCountUp(target: number, active: boolean, duration = 2000, delay = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const timer = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [target, active, duration, delay]);

  return value;
}

/** 0 -> 1 as the section travels through the viewport */
function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const total = window.innerHeight + rect.height;
      const p = (window.innerHeight - rect.top) / total;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { ref, progress };
}

function CurvedOrbitText({ progress }: { progress: number }) {
  return (
    <svg className="wb-curved-svg" viewBox="0 0 720 720" aria-hidden>
      <defs>
        <linearGradient id="wb-curved-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8a5824" />
          <stop offset="30%" stopColor="#f9dd7b" />
          <stop offset="60%" stopColor="#edbc50" />
          <stop offset="100%" stopColor="#f4bd50" />
        </linearGradient>
        {curvedRings.map((ring) => (
          <path key={ring.radius} id={`wb-ring-${ring.radius}`} d={ringPath(ring.radius)} />
        ))}
      </defs>

      {curvedRings.map((ring) => (
        <g
          key={ring.radius}
          style={{
            transform: `rotate(${progress * ring.speed}deg)`,
            transformOrigin: "360px 360px",
          }}
        >
          {ring.words.map((word, i) => (
            <text key={`${word}-${i}`} className="wb-curved-text font-display">
              <textPath
                href={`#wb-ring-${ring.radius}`}
                startOffset={`${(i / ring.words.length) * 100 + 4}%`}
                fill="url(#wb-curved-gold)"
              >
                {word.toUpperCase()}
              </textPath>
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}

export function WhyWestbrook() {
  const header = useInView<HTMLDivElement>(0.25);
  const stage = useInView<HTMLDivElement>(0.2);
  const count = useCountUp(20, stage.inView);
  const scroll = useScrollProgress<HTMLElement>();

  return (
    <section
      id="why-westbrooke"
      ref={scroll.ref}
      className="wb-section"
      aria-labelledby="why-westbrooke-heading"
    >
      <div className="wb-seal-glow" aria-hidden />

      <div className="wb-inner">
        <div className="wb-left" ref={header.ref}>
          <p className={`wb-eyebrow wb-reveal font-display${header.inView ? " is-in" : ""}`}>
            The Westbrook Standard
          </p>
          <Typewriter
            id="why-westbrooke-heading"
            className="wb-headline font-display"
            text="Your Dream Deserves More Than A Promise."
            start={header.inView}
            speed={38}
            delay={250}
          />
          <p className={`wb-subhead wb-reveal wb-reveal-delay${header.inView ? " is-in" : ""}`}>
            We're not a broker chasing volume — we're the team that verifies every
            employer and every route long before we ever hand you a plan, so the future
            we promise is one we can actually deliver.
          </p>

          <div className="wb-pillars">
            {pillars.map((p, i) => (
              <div
                key={p.numeral}
                className={`wb-pillar${header.inView ? " is-in" : ""}`}
                style={{ transitionDelay: `${0.2 + i * 0.12}s` }}
              >
                <span className="wb-pillar-num font-display">{p.numeral}</span>
                <h3 className="wb-pillar-title font-display">{p.title}</h3>
                <p className="wb-pillar-desc">{p.description}</p>
              </div>
            ))}
          </div>

          <div className="wb-btn-wrap">
            <a href="#contact" className="wb-btn font-display">
              <span>Book a Consultation</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div
          ref={stage.ref}
          className={`wb-orbit-stage${stage.inView ? " is-in" : ""}`}
          aria-hidden
        >
          <div className="wb-orbit wb-orbit-1" />
          <div className="wb-orbit wb-orbit-2" />
          <div className="wb-orbit wb-orbit-3" />
          <div className="wb-orbit wb-orbit-4" />

          <div className="wb-center">
            <div className="wb-center-num font-display">{count}k+</div>
            <div className="wb-center-label font-display">Verified Placements</div>
          </div>

          <CurvedOrbitText progress={scroll.progress} />
        </div>
      </div>

      <div className="wb-ticker">
        <div className="wb-ticker-track">
          {[...badges, ...badges, ...badges, ...badges].map((b, i) => (
            <span key={`${b}-${i}`} className="wb-ticker-item font-display">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
