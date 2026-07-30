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
      "Clinical and paramedical talent placed into hospital groups and care networks that hold current licensing in their jurisdiction — with credential verification handled before a single interview.",
    roles: [
      { title: "Registered Nurses", body: "Licence conversion, bridging programmes and placement into accredited hospital groups." },
      { title: "Paramedical Specialists", body: "Laboratory, radiology, pharmacy and physiotherapy support roles with recognised qualification mapping." },
      { title: "Healthcare Assistants", body: "Structured employer matching plus visa handling for direct patient-care staff." },
      { title: "Clinical Support Teams", body: "Ward operations, sterilisation and records roles filled through compliant channels only." },
    ],
  },
  {
    key: "Engineering & IT",
    intro:
      "Senior technical professionals introduced to firms that can actually sponsor them — sponsorship capacity is confirmed before your CV is ever released.",
    roles: [
      { title: "Software & Cyber Specialists", body: "Developers, network and security engineers matched to sponsor-licensed technology firms." },
      { title: "Civil & Mechanical Engineers", body: "Project-based and permanent placements with chartered-body recognition guidance." },
      { title: "Technical Programme Leads", body: "Senior delivery and operations leadership roles across infrastructure and energy." },
    ],
  },
  {
    key: "Transport & Logistics",
    intro:
      "Licensed drivers and supply-chain personnel supplied to freight operators, with international licence conversion mapped from day one.",
    roles: [
      { title: "Heavy Goods Drivers", body: "Category conversion, medical clearance and placement with established freight carriers." },
      { title: "Fleet & Operations", body: "Depot supervisors and fleet controllers for regulated transport networks." },
      { title: "Warehouse & Supply Chain", body: "Distribution, inventory and coordination roles across export-driven economies." },
    ],
  },
  {
    key: "Technical Trades",
    intro:
      "Certified tradespeople sourced against destination safety codes, so competence cards and site clearances are in place before arrival.",
    roles: [
      { title: "Certified Welders & Fabricators", body: "Coded welding and fabrication placements in construction and heavy engineering." },
      { title: "Plant & Industrial Operators", body: "Factory, plant and processing roles with documented safety accreditation." },
      { title: "Food Processing Specialists", body: "Trained butchery and processing personnel for regulated production facilities." },
    ],
  },
  {
    key: "Industrial",
    intro:
      "Volume workforce mobilisation handled end to end — sourcing, screening, contracts, visas and arrival logistics under one accountable team.",
    roles: [
      { title: "Manufacturing & Production", body: "Machine operators, line staff and production supervisors at scale." },
      { title: "Construction & Site Crew", body: "Masons, general operatives and heavy equipment handlers for major projects." },
      { title: "Facilities & Maintenance", body: "Cleaning, upkeep and building services teams recruited to written labour standards." },
    ],
  },
];

export function Workforce() {
  const [active, setActive] = useState(0);
  const head = useInViewRef<HTMLDivElement>(0.25);
  const sector = SECTORS[active];

  return (
    <section className="wb-sec" id="sectors" style={{ background: "#08090c" }}>
      <div className="wb-sec-inner">
        <div ref={head.ref} className={`wb-reveal${head.inView ? " is-in" : ""}`}>
          <p className="wb-eyebrow font-display">Skilled Workforce Placement</p>
          <h2 className="wb-h2 font-display text-gold-gradient">
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
