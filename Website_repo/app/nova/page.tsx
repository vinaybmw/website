import { FadeIn } from "@/components/site/fade-in";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NOVA | BODIQO",
  description: "NOVA is BODIQO's nutrition and health-marker strategy offer backed by structured coaching and accountability."
};

const inclusionGroups = [
  {
    title: "Assessment",
    items: ["Bloodwork assessments", "Video consultations", "Detailed medical assessments", "Health reporting", "Progress review"]
  },
  {
    title: "Nutrition coaching",
    items: ["Personalized food planning", "Daily meal monitoring", "Nutrition and lifestyle coaching", "Real-time updates", "Improved eating structure"]
  },
  {
    title: "Health-marker visibility",
    items: [
      "Bloodwork / report sharing",
      "Health-condition context",
      "Better interpretation",
      "Scorecard-led progress review",
      "More measurable improvement"
    ]
  },
  {
    title: "System layer",
    items: ["BODIQO app access", "Progress tracking", "Real-time feedback", "Accountability support", "Clearer follow-through"]
  }
];

const bestFor = [
  "weight loss",
  "gut issues",
  "diabetes / BP / thyroid",
  "PCOD / PCOS",
  "immunity-related concerns",
  "clients seeking stronger health markers and daily nutrition consistency"
];

const benefits = [
  {
    title: "Better health visibility",
    body: "The offer connects food structure to actual markers and reports."
  },
  {
    title: "More consistent nutrition",
    body: "Daily monitoring and feedback improve follow-through."
  },
  {
    title: "Less guesswork",
    body: "Guidance is based on assessment, context, and measurable progress."
  },
  {
    title: "More relevant support",
    body: "The offer is built for real health concerns, not just generic meal plans."
  }
];

export default function NovaPage() {
  return (
    <main className="min-h-screen bg-white text-bodiqo-charcoal">
      <Navbar />

      <section className="bg-[radial-gradient(circle_at_84%_12%,rgba(45,125,255,0.16),transparent_36%),linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] pb-16 pt-28 sm:pt-36">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">NOVA</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Nutrition and health-marker strategy, backed by structure
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              NOVA is designed to align dietary habits with individual biology, health markers, and lifestyle realities through personalized
              guidance, detailed assessment, and real-time monitoring.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <h2 className="section-title">What NOVA is built for</h2>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
            NOVA is the nutrition-first BODIQO offer for clients who want better health visibility, better food structure, stronger consistency, and
            measurable lifestyle improvement tied to real markers rather than guesswork.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-bodiqo-light/24 py-16 sm:py-24">
        <div className="section-shell">
          <h2 className="section-title">What&apos;s included</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {inclusionGroups.map((group) => (
              <article key={group.title} className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
                <h3 className="text-xl font-bold tracking-tight">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-bodiqo-charcoal/74">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <h2 className="section-title">Best suited for</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {bestFor.map((item) => (
              <article key={item} className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
                <p className="text-sm leading-relaxed text-bodiqo-charcoal/74">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-bodiqo-light/24 py-16 sm:py-24">
        <div className="section-shell">
          <h2 className="section-title">Pricing</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-bodiqo-electric/18 bg-white p-7 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bodiqo-electric/74">3 months</p>
              <p className="mt-2 text-2xl font-bold tracking-tight text-bodiqo-charcoal">₹12000</p>
            </article>
            <article className="rounded-3xl border border-bodiqo-electric/18 bg-white p-7 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bodiqo-electric/74">Senior Coach Upgrade</p>
              <p className="mt-2 text-2xl font-bold tracking-tight text-bodiqo-charcoal">+₹6000</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <h2 className="section-title">Why clients choose NOVA</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
                <h3 className="text-xl font-bold tracking-tight">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bodiqo-charcoal/74">{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="mx-auto max-w-3xl rounded-3xl border border-bodiqo-electric/18 bg-white p-8 text-center shadow-[0_16px_38px_rgba(45,125,255,0.1)] sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Start with NOVA</h2>
            <p className="mt-4 text-base text-bodiqo-charcoal/74">
              Build better health markers, better eating structure, and better consistency inside one system.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-bodiqo-electric px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(45,125,255,0.24)] transition hover:opacity-95"
              >
                Book a Consultation
              </Link>
              <Link
                href="/individuals"
                className="inline-flex items-center justify-center rounded-full border border-bodiqo-electric/24 px-6 py-3 text-sm font-semibold text-bodiqo-charcoal transition hover:bg-bodiqo-light/40"
              >
                Back to For Individuals
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
