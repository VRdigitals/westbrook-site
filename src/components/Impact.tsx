import { useInViewRef } from "@/components/useInViewRef";
import { Testimonials } from "@/components/Testimonials";

const STATS = [
  { num: "07", title: "Leading Economies", body: "Active corridors into the UK, Canada, USA, Germany, Australia, New Zealand and the Gulf." },
  { num: "05", title: "Workforce Sectors", body: "Healthcare, engineering and IT, transport, technical trades and industrial operations." },
  { num: "100%", title: "Documented Process", body: "Written scope, written fees, written timelines — issued before any engagement begins." },
  { num: "360°", title: "Relocation Cover", body: "Eligibility through to arrival week, including dependants and settlement planning." },
  { num: "Vetted", title: "Employer Network", body: "Sponsorship capacity and labour compliance confirmed before any introduction is made." },
];

export function Impact() {
  const head = useInViewRef<HTMLDivElement>(0.25);
  const grid = useInViewRef<HTMLDivElement>(0.12);

  return (
    <section className="wb-sec" id="impact">
      <div className="wb-glow" aria-hidden />
      <div className="wb-sec-inner">
        <div ref={head.ref} className={`wb-reveal${head.inView ? " is-in" : ""}`}>
          <p className="wb-eyebrow font-display">Global Impact</p>
          <h2 className="wb-h2 font-display text-gold-gradient">
            Relied On By Employers. Chosen By Professionals.
          </h2>
          <p className="wb-lead" style={{ marginTop: "1.2rem" }}>
            Individuals and families guided through immigration systems that punish
            imprecision — and international businesses supplied with talent that
            clears every compliance check the first time.
          </p>
        </div>

        <div ref={grid.ref} className={`imp-grid wb-reveal${grid.inView ? " is-in" : ""}`}>
          {STATS.map((s) => (
            <article key={s.title} className="imp-card">
              <p className="imp-num font-display text-gold-gradient">{s.num}</p>
              <h4 className="font-display">{s.title}</h4>
              <p>{s.body}</p>
            </article>
          ))}
        </div>

        <Testimonials />

      </div>
    </section>
  );
}
