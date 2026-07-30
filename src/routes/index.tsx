import { createFileRoute } from "@tanstack/react-router";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { FadeIn } from "@/components/FadeIn";
import { WhyWestbrook } from "@/components/WhyWestbrook";
import { OurServices } from "@/components/OurServices";
import { GlobalNetwork } from "@/components/GlobalNetwork";
import { Approach } from "@/components/Approach";
import { Workforce } from "@/components/Workforce";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Westbrook International — We Make Your Global Dream Come True" },
      {
        name: "description",
        content:
          "Westbrook International turns the dream of a life abroad into a real, working plan — work visas, student visas, family migration and ethical global recruitment, guided from first call to arrival day.",
      },
      {
        property: "og:title",
        content: "Westbrook International — We Make Your Global Dream Come True",
      },
      {
        property: "og:description",
        content:
          "Work visas, student visas, family migration and ethical global recruitment — your dream destination, made real.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="w-full bg-[#0B0C10] text-white">
      <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Seamless blend into the pitch-black section below */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[45vh] bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_35%,rgba(0,0,0,0.72)_72%,#000_100%)]"
      />

      <div className="relative z-10 flex h-full flex-col">
        <SiteNav />

        <div className="flex flex-1 flex-col justify-end px-6 pb-12 md:px-12 lg:grid lg:grid-cols-2 lg:items-end lg:px-16 lg:pb-16">
          <div className="max-w-3xl">
            <FadeIn delay={200} duration={800}>
              <p className="mb-5 inline-block rounded-md bg-black/45 px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.4em] text-gold backdrop-blur-[2px] md:text-sm">
                Global Immigration &amp; Visa Experts
              </p>
            </FadeIn>
            <AnimatedHeading
              text={"We make your dream\ncome true."}
              className="mb-5 font-display text-3xl font-semibold uppercase leading-[1.1] text-gold-light md:text-4xl lg:text-5xl xl:text-6xl"
              letterSpacing="0.04em"
            />
            <FadeIn delay={800} duration={1000}>
              <p className="mb-7 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                A new country, a better career, a family reunited — whatever your
                version of &ldquo;there&rdquo; looks like, we build the real, working
                path that gets you there.
              </p>
            </FadeIn>
            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-gold-gradient rounded-lg px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-90">
                  Book a Consultation
                </a>
                <a href="#our-services" className="liquid-glass rounded-lg border border-gold/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:border-gold hover:text-gold-light">
                  Explore Your Options
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="mt-10 flex items-end justify-start lg:mt-0 lg:justify-end">
            <FadeIn delay={1400} duration={1000}>
              <div className="liquid-glass rounded-xl border border-gold/30 px-7 py-4">
                <p className="text-gold-gradient font-display text-lg font-medium uppercase tracking-[0.25em] md:text-xl lg:text-2xl">
                  Migrate. Work. Settle.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      </section>

      <WhyWestbrook />
      <OurServices />
      <Approach />
      <Workforce />
      <GlobalNetwork />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
