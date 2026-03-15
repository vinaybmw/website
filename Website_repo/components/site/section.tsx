import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  dark?: boolean;
  children: ReactNode;
  className?: string;
};

export function Section({ id, dark = false, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`${dark ? "bg-bodiqo-charcoal text-bodiqo-white" : "bg-bodiqo-white text-bodiqo-charcoal"} ${className}`}
    >
      <div className="section-shell">{children}</div>
    </section>
  );
}

type CardProps = {
  title: string;
  body: string;
  dark?: boolean;
  meta?: string;
};

export function OfferCard({ title, body, dark = false, meta }: CardProps) {
  return (
    <article
      className={`rounded-3xl border p-6 sm:p-7 ${
        dark
          ? "border-bodiqo-electric/20 bg-white/5"
          : "border-bodiqo-electric/20 bg-gradient-to-b from-white to-bodiqo-light/35"
      }`}
    >
      {meta ? (
        <p className={`text-xs uppercase tracking-[0.2em] ${dark ? "text-bodiqo-light/80" : "text-bodiqo-electric/75"}`}>
          {meta}
        </p>
      ) : null}
      <h3 className={`mt-3 text-2xl font-bold tracking-tight ${dark ? "text-white" : "text-bodiqo-charcoal"}`}>{title}</h3>
      <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-bodiqo-light/86" : "text-bodiqo-charcoal/78"}`}>{body}</p>
    </article>
  );
}
