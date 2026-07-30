import { motion } from "motion/react";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns-1";

const TESTIMONIALS: Testimonial[] = [
  {
    text: "I had been turned down once already and assumed that closed the door. Westbrook rebuilt the file properly, explained exactly where the first application failed, and my licence transfer went through on the second attempt.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
    name: "Anjali R.",
    role: "Registered Nurse — Manchester",
  },
  {
    text: "As an employer we needed twelve coded welders with verifiable certification, not twelve CVs. Every candidate arrived screened, documented and site-ready.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
    name: "Marcus D.",
    role: "Operations Director, Fabrication Group",
  },
  {
    text: "What I valued most was being told what was not possible. They ruled out two countries in the first call instead of taking a fee to try anyway. My family and I landed in Toronto nine months later.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
    name: "Samir K.",
    role: "Logistics Manager — relocated with dependants",
  },
  {
    text: "The written scope arrived before any payment. Timelines, fees and the documents I had to produce were all listed. Nothing was invented later.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop",
    name: "Priya N.",
    role: "Radiographer — relocated to Dublin",
  },
  {
    text: "Our sponsor licence paperwork had stalled for months. Their team took it over, corrected the compliance gaps and we were approved to hire within one quarter.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80&auto=format&fit=crop",
    name: "Daniel O.",
    role: "HR Head, Care Group",
  },
  {
    text: "My student route needed a financial history that made sense to a caseworker. They restructured the evidence and the visa was issued without a single query.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
    name: "Fatima A.",
    role: "Postgraduate Student — Toronto",
  },
  {
    text: "Dependant applications are where most firms get lazy. Ours were filed to the same standard as mine, and we travelled together as planned.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&auto=format&fit=crop",
    name: "Ibrahim S.",
    role: "HGV Driver — relocated with family",
  },
  {
    text: "One advisor from the first call to the arrival week. No handovers, no repeating my case to a new person every month.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80&auto=format&fit=crop",
    name: "Grace M.",
    role: "Theatre Nurse — relocated to Auckland",
  },
  {
    text: "We now source technicians through Westbrook exclusively. Credentials are verified before we ever see a shortlist, which saves us weeks.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop",
    name: "Andreas K.",
    role: "Plant Manager, Industrial Services",
  },
];

const firstColumn = TESTIMONIALS.slice(0, 3);
const secondColumn = TESTIMONIALS.slice(3, 6);
const thirdColumn = TESTIMONIALS.slice(6, 9);

export function Testimonials() {
  return (
    <div style={{ marginTop: "4.5rem" }}>
      <div className="wb-rule" style={{ marginBottom: "2.6rem" }} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="wb-eyebrow font-display">In Their Words</p>
        <h2 className="wb-h2 font-display text-gold-gradient">
          Dreams That Became Addresses.
        </h2>
        <p className="wb-lead" style={{ marginTop: "1.2rem", maxWidth: "62ch" }}>
          Every one of these started as someone's "what if." Here's what
          they say now that they're actually living it.
        </p>
      </motion.div>

      <div className="ts-marquee">
        <TestimonialsColumn testimonials={firstColumn} duration={17} />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="ts-col-md"
          duration={21}
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="ts-col-lg"
          duration={19}
        />
      </div>
    </div>
  );
}
