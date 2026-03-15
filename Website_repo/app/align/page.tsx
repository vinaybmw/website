import { FadeIn } from "@/components/site/fade-in";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ALIGN | BODIQO",
  description: "ALIGN offers high-touch one-to-one coaching with elevated accountability and deeper support."
};

const inclusionGroups = [
  {
    title: "One-to-one coaching",
    items: ["36 workouts across 3 months", "One-to-one guided sessions", "Elevated accountability", "Structured reviews", "Closer execution support"]
  },
  {
    title: "Support architecture",
    items: ["Nutritionist support", "BODIQO app access", "Progress tracking", "Scheduling support", "Real-time coach feedback"]
  },
  {
    title: "Movement quality",
    items: ["Breathing guidance", "Posture correction", "Mobility integration", "Execution quality focus"]
  },
  {
    title: "Delivery quality",
    items: ["More oversight", "More feedback", "More precision", "Stronger correction", "Higher-touch support"]
  }
];

const upgrades = [
  { title: "Home Visits / Offline Training in Mumbai", value: "+₹10000" },
  { title: "Senior Coach Upgrade", value: "+₹7500" },
  { title: "Additional Sessions", value: "Request a Quote" },
  { title: "Psychology / Consistency / Motivation Coaching", value: "₹2500 per session" }
];

const bestFor = [
  "clients who want one-to-one coaching and elevated support",
  "clients who want sharper accountability and closer feedback",
  "clients who want training quality, posture, breathing, mobility, and consistency coached more precisely"
];

const benefits = [
  {
    title: "Closer guidance",
    body: "For clients who want more direct correction, feedback, and coaching presence."
  },
  {
    title: "Better accountability",
    body: "More touchpoints create stronger follow-through and less drift."
  },
  {
    title: "Higher execution quality",
    body: "Breathing, posture, mobility, and exercise quality can be coached more precisely."
  },
  {
    title: "Deeper support",
    body: "The offer is built for clients who need more than a lighter-touch system."
  }
];

export default function AlignPage() {
  return (
    <main className="min-h-screen bg-white text-bodiqo-charcoal">
      <Navbar />

      <section className="bg-[radial-gradient(circle_at_84%_12%,rgba(45,125,255,0.18),transparent_36%),linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] pb-16 pt-28 sm:pt-36">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">ALIGN</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              High-touch one-to-one coaching with deeper support
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              ALIGN is built for clients who want elevated accountability, closer guidance, one-to-one coaching sessions, and a more precise
              relationship between plan and execution.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <h2 className="section-title">What ALIGN is built for</h2>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
            ALIGN is the most high-touch coaching offer inside BODIQO. It is designed for clients who want sharper execution, more oversight,
            closer guidance, and a more supported journey across body, behavior, and daily consistency.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-bodiqo-light/24 py-16 sm:py-24">
        <div className="section-shell">
          <p className="eyebrow">Why it&apos;s called ALIGN</p>
          <h2 className="section-title">Built for better alignment between plan and execution</h2>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
            ALIGN is where strategy, accountability, one-to-one support, and daily execution sit closer together. It is designed for clients who
            do not just want a program, but a more closely guided coaching relationship.
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
          <h2 className="section-title">Pricing</h2>
          <article className="mt-8 max-w-md rounded-3xl border border-bodiqo-electric/18 bg-white p-7 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bodiqo-electric/74">3 months</p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-bodiqo-charcoal">Starts at ₹25000</p>
          </article>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-bodiqo-light/24 py-16 sm:py-24">
        <div className="section-shell">
          <h2 className="section-title">Available upgrades</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {upgrades.map((upgrade) => (
              <article key={upgrade.title} className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
                <h3 className="text-lg font-bold tracking-tight">{upgrade.title}</h3>
                <p className="mt-3 text-sm font-semibold text-bodiqo-charcoal/82">{upgrade.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <h2 className="section-title">Why clients choose ALIGN</h2>
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
          <h2 className="section-title">Best for</h2>
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
          <FadeIn className="mx-auto max-w-3xl rounded-3xl border border-bodiqo-electric/18 bg-white p-8 text-center shadow-[0_16px_38px_rgba(45,125,255,0.1)] sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Step into ALIGN</h2>
            <p className="mt-4 text-base text-bodiqo-charcoal/74">
              For clients who want deeper support, closer execution, and a higher-touch coaching experience.
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
