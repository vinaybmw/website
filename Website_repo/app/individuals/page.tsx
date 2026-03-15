import { FadeIn } from "@/components/site/fade-in";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Individuals | BODIQO",
  description: "Explore EDGE, ALIGN, and NOVA - three entry points into the same BODIQO wellness-performance system."
};

const offerCards = [
  {
    title: "EDGE",
    body: "Flexible entry into the BODIQO system through training, nutrition, or both - with app-led tracking, daily monitoring, and structured coach support.",
    href: "/edge"
  },
  {
    title: "ALIGN",
    body: "A high-touch coaching system for clients who want one-to-one sessions, elevated accountability, closer feedback, and more precise execution quality.",
    href: "/align"
  },
  {
    title: "NOVA",
    body: "Nutrition and health-marker strategy for clients who need deeper food structure, better health visibility, and measurable lifestyle improvement.",
    href: "/nova"
  }
];

const systemCards = [
  {
    title: "Structured onboarding",
    body: "Goals, constraints, schedule, and context are mapped clearly before execution begins."
  },
  {
    title: "High-touch coaching",
    body: "Guidance is paired with feedback loops and real-time support so execution improves over time."
  },
  {
    title: "Progress visibility",
    body: "Tracking, scheduling, reports, and app-based accountability reduce guesswork and improve follow-through."
  },
  {
    title: "Flexible depth",
    body: "The system can start focused and deepen when needed without losing continuity."
  }
];

const whyCards = [
  {
    title: "One system, not mixed messages",
    body: "Coaching, nutrition, tracking, and accountability sit inside one operating model."
  },
  {
    title: "Progress you can see",
    body: "The app, reviews, and tracking layer make improvement easier to measure and sustain."
  },
  {
    title: "Support that adapts",
    body: "The architecture can deepen across nutrition, one-to-one coaching, and health reporting without becoming fragmented."
  },
  {
    title: "Built for real life",
    body: "The system is designed to work with schedules, travel, imperfect routines, and changing priorities."
  }
];

export default function IndividualsPage() {
  return (
    <main className="min-h-screen bg-white text-bodiqo-charcoal">
      <Navbar />

      <section className="bg-gradient-to-b from-white to-bodiqo-light/24 pb-16 pt-28 sm:pb-24 sm:pt-36">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">CORE OFFERS</p>
            <h2 className="section-title mt-4">Three offers, built inside one method.</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              Each BODIQO offer is designed around a different priority - while staying inside the same architecture of coaching, tracking,
              scheduling, accountability, and real-time feedback.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {offerCards.map((offer, index) => (
              <FadeIn
                key={offer.title}
                delay={index * 0.05}
                className="rounded-3xl border border-bodiqo-electric/18 bg-white p-7 shadow-[0_10px_24px_rgba(17,22,31,0.05)]"
              >
                <h3 className="text-2xl font-bold tracking-tight">{offer.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bodiqo-charcoal/74">{offer.body}</p>
                <Link
                  href={offer.href}
                  className="mt-5 inline-flex rounded-full border border-bodiqo-electric/24 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-bodiqo-electric transition hover:bg-bodiqo-light/40"
                >
                  Explore {offer.title}
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">THE BODIQO SYSTEM</p>
            <h2 className="section-title mt-4">Structured for better outcomes</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              BODIQO is designed for individuals who want more than fragmented advice or short-term motivation. The system combines coaching,
              nutrition, accountability, progress visibility, scheduling, and real-time support into one architecture built for real life.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {systemCards.map((card, index) => (
              <FadeIn
                key={card.title}
                delay={index * 0.05}
                className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6 shadow-[0_10px_24px_rgba(17,22,31,0.05)]"
              >
                <h3 className="text-xl font-bold tracking-tight">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bodiqo-charcoal/74">{card.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">WHY BODIQO</p>
            <h2 className="section-title mt-4">The system matters more than the individual coach</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              BODIQO is designed so outcomes come from structure, feedback, tracking, scheduling, and execution quality - not dependence on a
              single trainer.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {whyCards.map((card, index) => (
              <FadeIn
                key={card.title}
                delay={index * 0.05}
                className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6 shadow-[0_10px_24px_rgba(17,22,31,0.05)]"
              >
                <h3 className="text-xl font-bold tracking-tight">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bodiqo-charcoal/74">{card.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
