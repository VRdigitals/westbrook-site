import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/westbrook-logo-horizontal.png";
import { SERVICES } from "@/data/services";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Sectors", href: "/#sectors" },
  { label: "Network", href: "/#global-network" },
];

function ServicesNavItem() {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const openMenu = () => {
    window.clearTimeout(closeTimer.current);
    const rect = triggerRef.current?.getBoundingClientRect();
    if (rect) setCoords({ top: rect.bottom + 12, left: rect.left + rect.width / 2 });
    setOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      ref={triggerRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <Link
        to="/services"
        className="flex items-center gap-1.5 font-display text-sm uppercase tracking-[0.22em] text-white/85 transition-colors hover:text-gold"
      >
        Services
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`mt-px transition-transform duration-200${open ? " rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Link>
      {open &&
        createPortal(
          <div
            className="fixed z-50 w-72 -translate-x-1/2"
            style={{ top: coords.top, left: coords.left }}
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <div className="liquid-glass rounded-xl border border-gold/15 p-2">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="block rounded-lg px-4 py-3 transition-colors hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  <p className="font-display text-xs uppercase tracking-[0.16em] text-gold">
                    Service {s.numeral}
                  </p>
                  <p className="mt-1 font-display text-sm text-white/90">{s.title}</p>
                </Link>
              ))}
              <Link
                to="/services"
                className="mt-1 block rounded-lg px-4 py-2.5 text-center font-display text-xs uppercase tracking-[0.18em] text-gold/80 transition-colors hover:bg-white/5 hover:text-gold"
                onClick={() => setOpen(false)}
              >
                View All Services
              </Link>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

export function SiteNav() {
  return (
    <div className="px-6 pt-6 md:px-12 lg:px-16">
      <nav className="liquid-glass flex items-center justify-between rounded-xl px-5 py-3">
        <Link to="/">
          <img
            src={logoUrl}
            alt="Westbrook International logo"
            className="h-9 w-auto sm:h-10 md:h-12"
          />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href={LINKS[0].href}
            className="font-display text-sm uppercase tracking-[0.22em] text-white/85 transition-colors hover:text-gold"
          >
            {LINKS[0].label}
          </a>
          <ServicesNavItem />
          {LINKS.slice(1).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-sm uppercase tracking-[0.22em] text-white/85 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/#contact"
          className="bg-gold-gradient rounded-lg px-6 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-90"
        >
          Book a Consultation
        </a>
      </nav>
    </div>
  );
}
