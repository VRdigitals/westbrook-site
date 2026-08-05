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
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <iframe
          className="absolute left-1/2 top-1/2 h-[62vw] min-h-[112%] w-[195vh] min-w-[112%] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube-nocookie.com/embed/u10sRtSVzik?autoplay=1&mute=1&loop=1&playlist=u10sRtSVzik&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&disablekb=1"
          title="Westbrook International hero background video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
      </div>

      {/* Mask any transient YouTube title/UI chrome at the very top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-24 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0)_100%)]"
      />

      {/* Seamless blend into the pitch-black section below */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[45vh] bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_35%,rgba(0,0,0,0.72)_72%,#000_100%)]"
      />

      <div className="relative z-10 flex h-full flex-col">
        <SiteNav />

        <div className="flex flex-1 flex-col justify-end px-6 pb-16 md:px-12 md:pb-20 lg:px-16 lg:pb-24">
          <div className="max-w-2xl">
            <FadeIn delay={200} duration={800}>
              <p className="mb-6 inline-block rounded-md bg-black/45 px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.4em] text-gold backdrop-blur-[2px] md:text-sm">
                Global Immigration &amp; Visa Experts
              </p>
            </FadeIn>
            <AnimatedHeading
              text={"We make your dream\ncome true."}
              className="mb-7 font-display text-3xl font-semibold uppercase leading-[1.1] text-gold-light md:text-4xl lg:text-5xl xl:text-6xl"
              letterSpacing="0.04em"
            />
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
