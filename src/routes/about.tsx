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
      { title: "About Westbrook Advisory — We Make Your Global Dream Come True" },
      {
        name: "description",
        content:
          "Who we are: an advisory built to turn the dream of a life abroad into a real, working plan — verified employers, complete files and honest fees, every step of the way.",
      },
      {
        property: "og:title",
        content: "About Westbrook Advisory — We Make Your Global Dream Come True",
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
    body: "Every route we build is honest and above board, so your new start begins on solid ground.",
  },
  {
    n: "02",
    title: "Nothing Left To Chance",
    body: "Your file leaves our desk only once every document, gap and question has already been answered.",
  },
  {
    n: "03",
    title: "Honest Numbers, Upfront",
    body: "A written scope, timeline and fee before you pay a single dirham. Nothing invented later.",
  },
  {
    n: "04",
    title: "One Person Who Knows Your Story",
    body: "The same advisor from your first call to your arrival week — no handovers, no repeating yourself.",
  },
];

const NUMBERS = [
  { k: "20k+", v: "Verified placements" },
  { k: "18", v: "Destination markets" },
  { k: "96%", v: "First-attempt approvals" },
  { k: "11 yrs", v: "Advisory practice" },
];

const TIMELINE = [
  {
    year: "2015",
    title: "One Office, One Promise",
    body: "Started as a two-person practice in Dubai, rebuilding refused applications for healthcare professionals who'd been told no elsewhere.",
  },
  {
    year: "2018",
    title: "Opening Doors For Employers Too",
    body: "Hospitals and fabrication groups started asking us to find their people, not just process them — so we built an employer desk to match.",
  },
  {
    year: "2021",
    title: "More Dreams, More Destinations",
    body: "Extended into student routes and skilled trades across the UK, Ireland, Canada and New Zealand.",
  },
  {
    year: "2026",
    title: "Eighteen Markets, One Team",
    body: "A verified employer network spanning eighteen regulated destinations and four continents — still one advisor per story.",
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
              Your dream isn't. Westbrook Advisory exists to turn the life you're
              picturing — a new country, a bigger career, a family reunited — into
              a plan that actually works, legally and completely.
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
      <section className="wb-sec ab-sec-black">
        <div className="wb-glow" aria-hidden />
        <div className="wb-sec-inner" ref={headRef}>
          <p className="wb-eyebrow font-display">Our Story</p>
          <Typewriter
            text="Every Dream Deserves A Real Plan."
            className="ab-h2 font-display text-gold-gradient"
            start={headIn}
            speed={38}
            delay={120}
          />
          <div className="ab-story">
            <WordReveal
              className="wb-lead"
              text="We began in a single Dubai office, rebuilding applications that other firms had rushed and refused people had almost given up on. That work taught us the only thing that really matters: someone's dream is only as good as the plan behind it."
              wordDelay={22}
            />
            <Reveal delay={140}>
              <p className="wb-lead">
                A decade later the practice spans employers, skilled trades,
                healthcare, study routes and family migration — but the promise
                hasn't changed. We tell you the truth about what's possible, and
                then we build it properly, so nothing stands between you and where
                you're going.
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
      <section className="wb-sec ab-sec-black">
        <div className="wb-sec-inner">
          <div className="wb-rule" style={{ marginBottom: "3rem" }} />
          <p className="wb-eyebrow font-display">The Path So Far</p>
          <h2 className="ab-h2 font-display text-gold-gradient">Eleven Years Of Dreams Made Real.</h2>
          <ol className="ab-timeline">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 110}>
                <li className="ab-tl-item">
                  <span className="ab-tl-year font-display text-gold-gradient">{t.year}</span>
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