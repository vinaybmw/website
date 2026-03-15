import { FadeIn } from "@/components/site/fade-in";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EDGE | BODIQO",
  description: "EDGE is a flexible entry into the BODIQO system with structured training, nutrition, and accountability."
};

const inclusionGroups = [
  {
    title: "Training architecture",
    items: ["Customized workouts", "Home / gym options", "Recorded videos", "Progress reports", "Additional guidance"]
  },
  {
    title: "Nutrition architecture",
    items: ["Personalized food structure", "Recipe guidance", "Nutrition values", "Food logging", "Real-time monitoring"]
  },
  {
    title: "System layer",
    items: ["BODIQO app access", "Progress tracking", "Daily monitoring", "Scheduling support", "Real-time coach feedback"]
  },
  {
    title: "Execution support",
    items: [
      "Clear follow-through",
      "Better adherence",
      "Ongoing support",
      "Stronger routine-building",
      "Accountability built into delivery"
    ]
  }
];

const trackCards = [
  {
    title: "Training Track",
    duration: "3 months",
    price: "₹8000",
    body: "Structured workout programming and coaching for clients who want better movement quality, body composition, and consistency.",
    upgrade: "Senior Coach Upgrade: +₹4000"
  },
  {
    title: "Nutrition Track",
    duration: "3 months",
    price: "₹8000",
    body: "Personalized nutrition guidance for clients who want stronger eating structure, better compliance, and improved day-to-day control.",
    upgrade: "Senior Coach Upgrade: +₹4000"
  },
  {
    title: "Complete Track",
    duration: "3 months",
    price: "₹12500",
    body: "Training and nutrition together for clients who want a more complete architecture across execution, accountability, and results.",
    upgrade: "Senior Coach Upgrade: +₹8000"
  }
];

const benefits = [
  {
    title: "Flexible starting point",
    body: "Enter the BODIQO system through training, nutrition, or both."
  },
  {
    title: "Stronger day-to-day consistency",
    body: "The app, monitoring, and support layer make follow-through easier."
  },
  {
    title: "Clearer progress visibility",
    body: "Tracking and review make execution less guess-based."
  },
  {
    title: "Built to deepen later",
    body: "Clients can start with EDGE and move deeper only when their goals require it."
  }
];

const bestFor = [
  "clients who want a flexible but structured starting point",
  "clients who want training-only or nutrition-only support without losing the system layer",
  "clients who want training + nutrition together in one more complete track"
];

export default function EdgePage() {
  return (
    <main className="min-h-screen bg-white text-bodiqo-charcoal">
      <Navbar />

      <section className="bg-[radial-gradient(circle_at_84%_12%,rgba(45,125,255,0.16),transparent_36%),linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] pb-16 pt-28 sm:pt-36">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">EDGE</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Flexible entry into the BODIQO system</h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              EDGE is designed for clients who want focused support around training, nutrition, or both - while staying inside the full BODIQO
              method of coaching, tracking, accountability, scheduling, and real-time feedback.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <h2 className="section-title">What EDGE is built for</h2>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
            EDGE is the most flexible way to enter BODIQO. It is ideal for clients who want sharper body composition, better eating structure,
            improved consistency, and stronger day-to-day execution without needing the deeper one-to-one intensity of ALIGN.
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
          <h2 className="section-title">Choose the right EDGE track</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {trackCards.map((track) => (
              <article key={track.title} className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
                <h3 className="text-xl font-bold tracking-tight">{track.title}</h3>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-bodiqo-electric/74">{track.duration}</p>
                <p className="mt-1 text-lg font-bold text-bodiqo-charcoal">{track.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-bodiqo-charcoal/74">{track.body}</p>
                <p className="mt-3 text-sm font-semibold text-bodiqo-charcoal/80">{track.upgrade}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-bodiqo-light/24 py-16 sm:py-24">
        <div className="section-shell">
          <h2 className="section-title">Why clients choose EDGE</h2>
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

      <section className="bg-gradient-to-b from-white to-bodiqo-light/24 py-16 sm:py-24">
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

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="mx-auto max-w-3xl rounded-3xl border border-bodiqo-electric/18 bg-white p-8 text-center shadow-[0_16px_38px_rgba(45,125,255,0.1)] sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Start with EDGE</h2>
            <p className="mt-4 text-base text-bodiqo-charcoal/74">
              Choose the track that matches your priority, then build from a stronger system.
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
