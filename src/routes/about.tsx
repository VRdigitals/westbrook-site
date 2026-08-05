import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { FadeIn } from "@/components/FadeIn";
import { Typewriter } from "@/components/Typewriter";
import { WordReveal } from "@/components/WordReveal";
import { useInViewRef } from "@/components/useInViewRef";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Westbrook International — We Make Your Global Dream Come True" },
      {
        name: "description",
        content:
          "Who we are: an international team built to turn the dream of a life abroad into a real, working plan — verified employers, complete files and honest fees, every step of the way.",
      },
      {
        property: "og:title",
        content: "About Westbrook International — We Make Your Global Dream Come True",
      },
      {
        property: "og:description",
        content:
          "Our story, our standards, and the people behind every dream we help make real.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const PILLARS = [
  {
    n: "01",
    title: "Your Dream, Done Right",
    body: "Honest and above board, start to finish.",
  },
  {
    n: "02",
    title: "Nothing Left To Chance",
    body: "Every document checked before it's filed.",
  },
  {
    n: "03",
    title: "Honest Numbers, Upfront",
    body: "Scope, timeline and fee, before you pay.",
  },
  {
    n: "04",
    title: "One Person Who Knows Your Story",
    body: "The same advisor, first call to arrival.",
  },
];

const NUMBERS = [
  { k: "20k+", v: "Verified placements" },
  { k: "18", v: "Destination markets" },
  { k: "96%", v: "First-attempt approvals" },
  { k: "11 yrs", v: "International practice" },
];

const TIMELINE = [
  {
    year: "2015",
    title: "One Office, One Promise",
    body: "Started in Dubai, rebuilding applications others had refused.",
  },
  {
    year: "2018",
    title: "Opening Doors For Employers Too",
    body: "Built an employer desk to match talent, not just process it.",
  },
  {
    year: "2021",
    title: "More Dreams, More Destinations",
    body: "Extended into student and skilled-trade routes across four countries.",
  },
  {
    year: "2026",
    title: "Eighteen Markets, One Team",
    body: "Eighteen regulated destinations — still one advisor per story.",
  },
];

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, inView } = useInViewRef<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`wb-reveal${inView ? " is-in" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function AboutPage() {
  const { ref: headRef, inView: headIn } = useInViewRef<HTMLDivElement>(0.3);

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
            <p className="wb-eyebrow font-display">Who We Are</p>
          </FadeIn>
          <AnimatedHeading
            text={"Distance is just\ngeography."}
            className="ab-display font-display text-gold-light"
            letterSpacing="0.02em"
            delay={300}
            charDelay={26}
          />
          <FadeIn delay={1100} duration={900}>
            <p className="wb-lead ab-hero-lead">
              Your dream isn't. We turn the life you're picturing into a plan
              that actually works.
            </p>
          </FadeIn>
        </div>
        <div className="ab-hero-fade" aria-hidden />
      </section>

      {/* NUMBERS */}
      <section className="wb-sec ab-sec-black" style={{ paddingTop: "3.5rem" }}>
        <div className="wb-sec-inner">
          <div className="ab-nums">
            {NUMBERS.map((n, i) => (
              <Reveal key={n.k} delay={i * 110}>
                <div className="ab-num">
                  <span className="ab-num-k font-display text-gold-gradient">{n.k}</span>
                  <span className="ab-num-v">{n.v}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="wb-sec ab-sec-light">
        <div className="wb-sec-inner" ref={headRef}>
          <p className="wb-eyebrow font-display">Our Story</p>
          <Typewriter
            text="Every Dream Deserves A Real Plan."
            className="ab-h2 font-display"
            start={headIn}
            speed={38}
            delay={120}
          />
          <div className="ab-story">
            <WordReveal
              className="wb-lead"
              text="We began in a single Dubai office, rebuilding applications refused people had almost given up on. A dream is only as good as the plan behind it."
              wordDelay={22}
            />
            <Reveal delay={140}>
              <p className="wb-lead">
                A decade later we span employers, trades, healthcare and family
                migration — same promise: the truth, then a plan that actually
                works.
              </p>
            </Reveal>
          </div>

          <FadeIn delay={200} duration={900} className="ab-quote-wrap">
            <p className="ab-quote ab-shimmer font-display">
              We don't just process paperwork. We make dreams come true.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PILLARS */}
      <section className="wb-sec ab-sec-black">
        <div className="wb-sec-inner">
          <div className="wb-rule" style={{ marginBottom: "3rem" }} />
          <p className="wb-eyebrow font-display">What We Stand On</p>
          <h2 className="ab-h2 font-display text-gold-gradient">Four Promises We Keep.</h2>
          <div className="ab-pillars">
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
                <article className="ab-pillar">
                  <span className="ab-pillar-n font-display">{p.n}</span>
                  <h3 className="ab-pillar-t font-display">{p.title}</h3>
                  <p className="ab-pillar-b">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="wb-sec ab-sec-light">
        <div className="wb-sec-inner">
          <div className="wb-rule" style={{ marginBottom: "3rem" }} />
          <p className="wb-eyebrow font-display">The Path So Far</p>
          <h2 className="ab-h2 font-display">Eleven Years Of Dreams Made Real.</h2>
          <ol className="ab-timeline">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 110}>
                <li className="ab-tl-item">
                  <span className="ab-tl-year font-display">{t.year}</span>
                  <div>
                    <h3 className="ab-tl-title font-display">{t.title}</h3>
                    <p className="ab-tl-body">{t.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}