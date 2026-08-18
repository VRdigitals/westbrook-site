import { useState } from "react";
import { useInViewRef } from "@/components/useInViewRef";

type Sector = {
  key: string;
  intro: string;
  roles: { title: string; body: string }[];
};

const SECTORS: Sector[] = [
  {
    key: "Healthcare",
    intro:
      "Clinical talent placed into licensed hospital groups, verified before a single interview.",
    roles: [
      { title: "Registered Nurses", body: "Licence conversion and placement into accredited hospital groups." },
      { title: "Paramedical Specialists", body: "Lab, radiology and physiotherapy roles with qualification mapping." },
    ],
  },
  {
    key: "Engineering & IT",
    intro:
      "Senior technical talent matched only to firms with confirmed sponsorship capacity.",
    roles: [
      { title: "Software & Cyber Specialists", body: "Matched to sponsor-licensed technology firms." },
      { title: "Civil & Mechanical Engineers", body: "Placements with chartered-body recognition guidance." },
    ],
  },
  {
    key: "Transport & Logistics",
    intro:
      "Licensed drivers and supply-chain crews, with licence conversion mapped from day one.",
    roles: [
      { title: "Heavy Goods Drivers", body: "Category conversion and placement with freight carriers." },
      { title: "Fleet & Operations", body: "Depot supervisors and fleet controllers." },
    ],
  },
  {
    key: "Technical Trades",
    intro:
      "Certified tradespeople with safety cards and site clearances ready before arrival.",
    roles: [
      { title: "Certified Welders & Fabricators", body: "Coded placements in construction and heavy engineering." },
      { title: "Plant & Industrial Operators", body: "Factory and processing roles with safety accreditation." },
    ],
  },
  {
    key: "Industrial",
    intro:
      "Volume workforce mobilisation handled end to end, under one accountable team.",
    roles: [
      { title: "Manufacturing & Production", body: "Machine operators and production supervisors at scale." },
      { title: "Construction & Site Crew", body: "Masons and heavy equipment handlers for major projects." },
    ],
  },
  {
    key: "Hospitality",
    intro:
      "Front-of-house and culinary talent placed into licensed hotels and resorts.",
    roles: [
      { title: "Chefs", body: "Kitchen brigade roles matched to qualification and cuisine specialism." },
      { title: "Guest Relations Officers", body: "Front-desk and concierge placements with service-standard training." },
      { title: "Floor Managers", body: "Operations oversight roles across hotel and dining floors." },
    ],
  },
];

export function Workforce() {
  const [active, setActive] = useState(0);
  const head = useInViewRef<HTMLDivElement>(0.25);
  const sector = SECTORS[active];

  return (
    <section className="wb-sec wf-sec" id="sectors">
      <div className="wb-sec-inner">
        <div ref={head.ref} className={`wb-reveal${head.inView ? " is-in" : ""}`}>
          <p className="wb-eyebrow font-display">Skilled Workforce Placement</p>
          <h2 className="wb-h2 font-display">
            Sectors We Move People Into.
          </h2>
        </div>

        <div className="wf-tabs" role="tablist">
          {SECTORS.map((s, i) => (
            <button
              key={s.key}
              role="tab"
              aria-selected={i === active}
              className={`wf-tab font-display${i === active ? " is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {s.key}
            </button>
          ))}
        </div>

        <div className="wf-panel" key={sector.key}>
          <div className="wf-fade">
            <p className="wb-lead">{sector.intro}</p>
            <a
              href="#contact"
              className="ct-submit font-display"
              style={{ display: "inline-block", marginTop: "1.6rem" }}
            >
              Book a Free Consultation
            </a>
          </div>
          <div className="wf-cards wf-fade">
            {sector.roles.map((r) => (
              <article key={r.title} className="wf-card">
                <h4 className="font-display">{r.title}</h4>
                <p>{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
