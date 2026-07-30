import React from "react";
import { cn } from "@/lib/utils";
import { type LucideIcon, PlusIcon } from "lucide-react";

type ContactInfoProps = React.ComponentProps<"div"> & {
  icon: LucideIcon;
  label: string;
  value: string;
};

type ContactCardProps = React.ComponentProps<"div"> & {
  title?: string;
  description?: string;
  contactInfo?: ContactInfoProps[];
  formSectionClassName?: string;
};

export function ContactCard({
  title = "Contact With Us",
  description,
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "relative grid w-full overflow-hidden border border-[rgba(237,188,80,0.22)] bg-[#0a0b0e] lg:grid-cols-2",
        className,
      )}
      {...props}
    >
      {/* corner plus marks */}
      <PlusIcon className="absolute -left-3 -top-3 h-6 w-6 text-[#edbc50]/60" />
      <PlusIcon className="absolute -right-3 -top-3 h-6 w-6 text-[#edbc50]/60" />
      <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-[#edbc50]/60" />
      <PlusIcon className="absolute -bottom-3 -right-3 h-6 w-6 text-[#edbc50]/60" />

      <div className="relative flex flex-col justify-between gap-10 p-8 md:p-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(120% 90% at 0% 0%, rgba(237,188,80,0.13), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative">
          <h2 className="font-display text-gold-gradient text-3xl font-semibold uppercase leading-tight tracking-[0.06em] md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
              {description}
            </p>
          ) : null}
        </div>

        <div className="relative grid grid-cols-1 gap-px overflow-hidden border border-[rgba(237,188,80,0.18)] bg-[rgba(237,188,80,0.18)] sm:grid-cols-2">
          {contactInfo?.map((info, index) => (
            <ContactInfo key={index} {...info} />
          ))}
        </div>
      </div>

      <div
        className={cn(
          "border-t border-[rgba(237,188,80,0.22)] bg-[#08090c] p-8 md:p-12 lg:border-l lg:border-t-0",
          formSectionClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  className,
  ...props
}: ContactInfoProps) {
  return (
    <div
      className={cn("flex items-start gap-3 bg-[#0a0b0e] p-5", className)}
      {...props}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(237,188,80,0.4)] bg-black">
        <Icon className="h-4 w-4 text-[#edbc50]" />
      </div>
      <div className="min-w-0">
        <p className="font-display text-[0.65rem] uppercase tracking-[0.24em] text-[#edbc50]">
          {label}
        </p>
        <p className="mt-1 break-words text-sm leading-relaxed text-white/70">
          {value}
        </p>
      </div>
    </div>
  );
}