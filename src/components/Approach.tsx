import { ArrowRight } from "lucide-react";
import { Typewriter } from "@/components/Typewriter";
import { useInViewRef } from "@/components/useInViewRef";
import apMediaImage from "@/assets/ap-media.jpg";

const POINTS = [
  { n: "01", t: "Assess", d: "Credentials read against real entry criteria." },
  { n: "02", t: "Match", d: "Only employers and institutions we have verified." },
  { n: "03", t: "Prepare", d: "Files built to the authority's exact standard." },
  { n: "04", t: "Arrive", d: "Guided through submission, landing and settlement." },
];

export function Approach() {
  const head = useInViewRef<HTMLDivElement>(0.3);
  const media = useInViewRef<HTMLDivElement>(0.15);

  return (
    <section className="wb-sec ap-sec" id="approach">
      <div className="wb-sec-inner ap-grid ap-grid--minimal">
        <div ref={head.ref} className={`wb-reveal${head.inView ? " is-in" : ""}`}>
          <p className="wb-eyebrow font-display">Our Approach</p>
          <Typewriter
            text="Four Moves. No Guesswork."
            className="wb-h2 font-display text-gold-gradient"
            start={head.inView}
            speed={38}
            delay={150}
          />

          <ol className="ap-points">
            {POINTS.map((p, i) => (
              <li
                key={p.n}
                className="ap-point"
                style={{
                  transitionDelay: `${420 + i * 140}ms`,
                  opacity: head.inView ? 1 : 0,
                  transform: head.inView ? "none" : "translateY(22px)",
                }}
              >
                <span className="ap-point-n font-display">{p.n}</span>
                <span className="ap-point-body">
                  <span className="ap-point-t font-display">{p.t}</span>
                  <span className="ap-point-d">{p.d}</span>
                </span>
              </li>
            ))}
          </ol>

          <a href="#contact" className="ap-cta font-display">
            Start Your Assessment
            <ArrowRight size={16} />
          </a>
        </div>

        <div
          ref={media.ref}
          className={`ap-media wb-reveal${media.inView ? " is-in" : ""}`}
        >
          <img className="ap-media-photo" src={apMediaImage} alt="" aria-hidden />
          <div className="ap-media-veil" aria-hidden />
        </div>
      </div>
    </section>
  );
}
