import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/westbrook-logo-horizontal.png";
import { SERVICES } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="ft">
      <div className="ft-inner">
        <div>
          <img
            src={logoUrl}
            alt="Westbrook International logo"
            className="mb-4 h-10 w-auto"
          />
          <p style={{ maxWidth: "34ch" }}>
            We help people and families turn the dream of a life abroad into a
            real, working plan — and help employers build the global teams
            they need.
          </p>
        </div>
        <div>
          <h5 className="font-display">Services</h5>
          {SERVICES.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}>
              {s.title}
            </Link>
          ))}
        </div>
        <div>
          <h5 className="font-display">Company</h5>
          <Link to="/about">About Us</Link>
          <a href="/#approach">Our Approach</a>
          <a href="/#sectors">Sectors</a>
          <a href="/#impact">Global Impact</a>
          <a href="/#contact">Contact</a>
        </div>
        <div>
          <h5 className="font-display">Contact</h5>
          <a href="mailto:info@westbrook.ae">info@westbrook.ae</a>
          <a href="tel:+971541659928">+971 54 165 9928</a>
          <p>Office 315, Healthcare City, Umm Hurrair, near Wafi Mall, Dubai</p>
          <p>Sun – Thu, 09:00 – 18:00 GST</p>
        </div>
      </div>
      <div className="ft-bottom">
        <span>© {new Date().getFullYear()} Westbrook International. All rights reserved.</span>
        <span>Ethical recruitment · Transparent process · Legal compliance</span>
      </div>
    </footer>
  );
}
