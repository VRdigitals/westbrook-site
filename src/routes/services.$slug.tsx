import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { FadeIn } from "@/components/FadeIn";
import { WordReveal } from "@/components/WordReveal";
import { TiltCard } from "@/components/TiltCard";
import { useInViewRef } from "@/components/useInViewRef";
import { SERVICES, getService, type ServiceDetail } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): ServiceDetail => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.title} — Westbrook International`
      : "Services — Westbrook International";
    const description = loaderData?.blurb ?? "Immigration and global recruitment services.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServicePage,
});

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInViewRef<HTMLDivElement>();
  return (
    <div ref={ref} className={`wb-reveal${inView ? " is-in" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function ServicePage() {
  const service: ServiceDetail = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <main className="w-full bg-[#0B0C10] text-white">
      {/* HERO */}
      <section className="sp-hero" key={service.slug}>
        <img className="sp-hero-bg" src={service.spotlightImage} alt={service.title} />
        <div className="absolute inset-x-0 top-0 z-20">
          <SiteNav />
        </div>
        <div className="sp-hero-in">
          <FadeIn delay={150} duration={700}>
            <p className="wb-eyebrow font-display">
              Service {service.numeral} — Westbrook International
            </p>
          </FadeIn>
          <AnimatedHeading
            text={service.title}
            className="sp-display font-display text-gold-light"
            letterSpacing="0.01em"
            delay={280}
            charDelay={20}
          />
          <FadeIn delay={900} duration={800}>
            <p className="wb-lead" style={{ marginTop: "1.2rem", maxWidth: "50ch" }}>
              {service.heroLine}
            </p>
          </FadeIn>
          <FadeIn delay={1150} duration={900}>
            <div className="sp-stats">
              {service.stats.map((s) => (
                <div key={s.label} className="sp-stat">
                  <div className="sp-stat-v text-gold-gradient">{s.value}</div>
                  <div className="sp-stat-l">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INTRO */}
      <section className="wb-sec">
        <div className="wb-glow" aria-hidden />
        <div className="wb-sec-inner">
          <WordReveal
            text={service.intro}
            className="wb-lead"
            wordDelay={14}
          />

          {/* DELIVERABLES */}
          <div style={{ marginTop: "3.6rem" }}>
            <p className="wb-eyebrow font-display">What We Handle</p>
            <div className="sp-deliv-grid">
              {service.deliverables.map((d, i) => (
                <Reveal key={d.title} delay={i * 90}>
                  <TiltCard className="sp-deliv-card" max={6}>
                    <span className="sp-deliv-n font-display">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="font-display">{d.title}</h4>
                    <p>{d.body}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>

          {/* WHO THIS IS FOR */}
          <div style={{ marginTop: "3.6rem" }}>
            <p className="wb-eyebrow font-display">Who This Is For</p>
            <div className="sp-suited" style={{ maxWidth: "70ch" }}>
              {service.suitedTo.map((s, i) => (
                <Reveal key={s} delay={i * 80}>
                  <div className="sp-suited-item">
                    <span className="sp-suited-check" aria-hidden>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span>{s}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* OTHER SERVICES */}
          <div style={{ marginTop: "4rem" }}>
            <div className="wb-rule" style={{ marginBottom: "2rem" }} />
            <p className="wb-eyebrow font-display">Other Services</p>
            <div className="sp-other-grid">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 100}>
                  <Link to="/services/$slug" params={{ slug: o.slug }} className="sp-other-card">
                    <img src={o.image} alt={o.title} loading="lazy" />
                    <div className="sp-other-in">
                      <p className="sp-other-tag font-display">Service {o.numeral}</p>
                      <h4 className="sp-other-title font-display">{o.title}</h4>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
