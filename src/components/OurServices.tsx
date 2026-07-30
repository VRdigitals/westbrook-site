import { Link } from "@tanstack/react-router";
import { Typewriter } from "@/components/Typewriter";
import { useInViewRef as useInView } from "@/components/useInViewRef";
import { SERVICES } from "@/data/services";

export function OurServices() {
  const head = useInView<HTMLDivElement>(0.35);
  const grid = useInView<HTMLDivElement>(0.12);

  return (
    <section className="svc-section" id="our-services">
      <div className="svc-grain" aria-hidden />
      <div className="svc-inner">
        <div ref={head.ref} className={`svc-head${head.inView ? " is-in" : ""}`}>
          <p className="svc-eyebrow font-display">Our Core Services</p>
          <Typewriter
            text="Global Visas & Ethical Recruitment."
            className="svc-title font-display text-gold-gradient"
            start={head.inView}
            speed={38}
            delay={200}
          />
          <p className="svc-sub">
            Comprehensive, legally compliant guidance. Whether you are a professional
            seeking overseas placement or an employer building a global workforce, we
            provide structured guidance at every stage.
          </p>
        </div>

        <div ref={grid.ref} className={`svc-grid${grid.inView ? " is-in" : ""}`}>
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="svc-card"
              style={{ transitionDelay: `${120 + i * 130}ms` }}
            >
              <div className="svc-media">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
                <span className="svc-numeral font-display">{s.numeral}</span>
                <span className="svc-sheen" aria-hidden />
              </div>
              <div className="svc-body">
                <h3 className="svc-card-title font-display">{s.title}</h3>
                <p className="svc-blurb">{s.blurb}</p>
                <ul className="svc-points">
                  {s.points.map((p) => (
                    <li key={p}>
                      <span className="svc-bullet" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  className="svc-link font-display"
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                >
                  Learn More
                  <svg viewBox="0 0 24 24" aria-hidden>
                    <path
                      d="M4 12h15M13 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
