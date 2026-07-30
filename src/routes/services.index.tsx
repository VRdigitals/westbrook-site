import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { FadeIn } from "@/components/FadeIn";
import { TiltCard } from "@/components/TiltCard";
import { useInViewRef } from "@/components/useInViewRef";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Westbrook International" },
      {
        name: "description",
        content:
          "Global recruitment, work and employer visas, student visas and family migration — four ways we turn a dream abroad into a real, working plan.",
      },
      { property: "og:title", content: "Services — Westbrook International" },
      {
        property: "og:description",
        content:
          "Four services. One promise: the plan behind your dream actually works.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesIndexPage,
});

function ServiceBlock({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
  const { ref, inView } = useInViewRef<HTMLDivElement>(0.2);
  const reverse = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`svcs-block${reverse ? " is-reverse" : ""} wb-reveal${inView ? " is-in" : ""}`}
    >
      <div className="svcs-media">
        <span className="svcs-media-num">{String(index + 1).padStart(2, "0")}</span>
        <TiltCard className="svcs-media-frame" max={5}>
          <img src={service.spotlightImage} alt={service.title} loading="lazy" />
        </TiltCard>
        <div className="svcs-badge">
          <div className="svcs-badge-v">{service.stats[0].value}</div>
          <div className="svcs-badge-l">{service.stats[0].label}</div>
        </div>
      </div>
      <div className="svcs-copy">
        <p className="wb-eyebrow font-display">Service {service.numeral}</p>
        <h3 className="font-display text-gold-gradient">{service.title}</h3>
        <p className="svcs-blurb">{service.blurb}</p>
        <div className="svcs-pills">
          {service.points.map((p) => (
            <span
              key={p}
              className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 px-3.5 py-1.5 text-xs uppercase tracking-wider text-gold"
            >
              {p}
            </span>
          ))}
        </div>
        <Link
          to="/services/$slug"
          params={{ slug: service.slug }}
          className="bg-gold-gradient inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-90"
        >
          Explore This Service
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function ServicesIndexPage() {
  return (
    <main className="w-full bg-[#0B0C10] text-white">
      {/* HERO */}
      <section className="ab-hero">
        <div className="ab-hero-glow" aria-hidden />
        <div className="relative z-20">
          <SiteNav />
        </div>
        <div className="ab-hero-in">
          <FadeIn delay={150} duration={800}>
            <p className="wb-eyebrow font-display">What We Do</p>
          </FadeIn>
          <AnimatedHeading
            text={"Four ways we make\nyour dream real."}
            className="ab-display font-display text-gold-light"
            letterSpacing="0.02em"
            delay={300}
            charDelay={26}
          />
          <FadeIn delay={1100} duration={900}>
            <p className="wb-lead ab-hero-lead">
              Whether you're picturing a new career, a classroom overseas, or your
              whole family under one roof again — there's a service here built
              around getting you there properly.
            </p>
          </FadeIn>
        </div>
        <div className="ab-hero-fade" aria-hidden />
      </section>

      {/* SERVICE BLOCKS */}
      <section className="wb-sec" style={{ paddingTop: "2rem" }}>
        <div className="wb-glow" aria-hidden />
        <div className="wb-sec-inner">
          {SERVICES.map((service, i) => (
            <ServiceBlock key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
