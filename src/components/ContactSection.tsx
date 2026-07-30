import { useState } from "react";
import { toast } from "sonner";
import { useInViewRef } from "@/components/useInViewRef";
import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from "lucide-react";

const INQUIRIES = [
  "Hiring Global Talent",
  "Work & Employer Visa",
  "Student Visa",
  "Family Migration",
];

const DESTINATIONS = [
  "United Kingdom",
  "Canada",
  "United States",
  "Germany",
  "Australia",
  "New Zealand",
  "United Arab Emirates",
];

export function ContactSection() {
  const head = useInViewRef<HTMLDivElement>(0.2);
  const [sending, setSending] = useState(false);

  return (
    <section className="wb-sec" id="contact" style={{ background: "#08090c" }}>
      <div className="wb-glow" aria-hidden />
      <div
        ref={head.ref}
        className={`wb-sec-inner wb-reveal${head.inView ? " is-in" : ""}`}
      >
        <p className="wb-eyebrow font-display">Get In Touch</p>
        <ContactCard
          className="mt-6"
          title="Tell Us Your Dream. We'll Build The Plan."
          description="Whether you're picturing a new country, a bigger career or your whole family together again, the first conversation costs nothing and commits you to nothing. You'll leave it knowing exactly what's possible."
          contactInfo={[
            { icon: MailIcon, label: "Email", value: "info@westbrook.ae" },
            { icon: PhoneIcon, label: "Phone", value: "+971 54 165 9928" },
            {
              icon: ClockIcon,
              label: "Consultation Hours",
              value: "Sunday – Thursday, 09:00 – 18:00 GST",
            },
            {
              icon: MapPinIcon,
              label: "Our Office",
              value:
                "Office 315, Healthcare City, Umm Hurrair, near Wafi Mall, Dubai",
              className: "sm:col-span-2",
            },
          ]}
        >
          <form
            className="ct-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            setTimeout(() => {
              setSending(false);
              (e.target as HTMLFormElement).reset();
              toast.success("Request received — an advisor will contact you shortly.");
            }, 700);
          }}
        >
          <input required placeholder="First name" aria-label="First name" />
          <input required placeholder="Last name" aria-label="Last name" />
          <input required type="email" placeholder="Email" aria-label="Email" />
          <input required placeholder="Phone" aria-label="Phone" />
          <select className="ct-span" defaultValue="" aria-label="Inquiry type" required>
            <option value="" disabled>
              Inquiry type
            </option>
            {INQUIRIES.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
          <select className="ct-span" defaultValue="" aria-label="Destination" required>
            <option value="" disabled>
              Destination of interest
            </option>
            {DESTINATIONS.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <textarea
            className="ct-span"
            rows={4}
            placeholder="Tell us about your dream — the role, the country, the life you're picturing"
            aria-label="Message"
          />
          <button className="ct-submit ct-span font-display" disabled={sending}>
            {sending ? "Sending…" : "Start My Journey"}
          </button>
          </form>
        </ContactCard>
      </div>
    </section>
  );
}
