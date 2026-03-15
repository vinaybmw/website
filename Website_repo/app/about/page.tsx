import { FadeIn } from "@/components/site/fade-in";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | BODIQO",
  description: "Learn how BODIQO combines coaching, technology, and structure into a premium wellness-performance system."
};

const differentCards = [
  {
    title: "Coaching + technology",
    body: "Human guidance is strengthened by systems, tracking, and visibility."
  },
  {
    title: "Consistency over motivation spikes",
    body: "BODIQO is designed for sustained follow-through, not short bursts of intensity."
  },
  {
    title: "Real-life usability",
    body: "The system is built to work within actual schedules, constraints, travel, and changing priorities."
  },
  {
    title: "High-touch architecture",
    body: "Support can deepen when needed without breaking continuity or clarity."
  }
];

const serveCards = [
  {
    title: "Individuals",
    body: "For people who want better body composition, stronger habits, better health markers, and more reliable execution."
  },
  {
    title: "Institutes",
    body: "For teams and organizations that want healthier culture, stronger energy, and measurable engagement."
  },
  {
    title: "Experiences",
    body: "Retreats, workshops, and immersive formats extend the same BODIQO philosophy into shared environments."
  }
];

const methodCards = [
  {
    title: "Assess",
    body: "Establish goals, constraints, health context, and starting point."
  },
  {
    title: "Personalize",
    body: "Build the right architecture around the individual or group."
  },
  {
    title: "Coach",
    body: "Translate strategy into action through guidance and accountability."
  },
  {
    title: "Track",
    body: "Use clear reviews and visibility to understand what is improving."
  },
  {
    title: "Evolve",
    body: "Adjust the system as goals, progress, and realities change."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-bodiqo-charcoal">
      <Navbar />

      <section className="bg-[radial-gradient(circle_at_84%_10%,rgba(45,125,255,0.16),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] pb-16 pt-28 sm:pt-36">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">ABOUT BODIQO</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              A premium wellness-performance system built for real life
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              BODIQO helps individuals and institutes improve body, mind, and consistency through coaching, technology, experiences, and high-touch
              systems. It is built for people and teams that value reliable outcomes over guesswork.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">WHAT BODIQO IS</p>
            <h2 className="section-title mt-4">A system, not a loose collection of services</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              BODIQO is built as a premium operating model for better outcomes. It combines coaching, technology, structure, and experiences into
              one clear architecture designed to improve execution quality and long-term consistency.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-bodiqo-light/24 py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">WHAT MAKES IT DIFFERENT</p>
            <h2 className="section-title mt-4">Structure over guesswork</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {differentCards.map((card, index) => (
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
            <p className="eyebrow">WHO WE SERVE</p>
            <h2 className="section-title mt-4">Designed for individuals and institutes</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {serveCards.map((card, index) => (
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

      <section className="bg-gradient-to-b from-white to-bodiqo-light/24 py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2 className="section-title mt-4">A clear method for better outcomes</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {methodCards.map((card, index) => (
              <FadeIn
                key={card.title}
                delay={index * 0.04}
                className="rounded-3xl border border-bodiqo-electric/18 bg-white p-5 shadow-[0_8px_18px_rgba(17,22,31,0.04)]"
              >
                <h3 className="text-lg font-bold tracking-tight">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bodiqo-charcoal/74">{card.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-4xl rounded-3xl border border-bodiqo-electric/18 bg-white p-7 shadow-[0_10px_24px_rgba(17,22,31,0.05)] sm:p-8">
            <p className="eyebrow">FOUNDER</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Built by Vinay Bhambwani</h2>
            <p className="mt-5 text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              Founded by Vinay Bhambwani, BODIQO draws on 11+ years of work across coaching, nutrition, behavior change, retreats, and
              wellness-performance delivery. The goal is not to create dependence on a personality, but to build a system that helps people and
              teams perform better with more clarity and consistency.
            </p>
            <p className="mt-4 text-sm font-semibold text-bodiqo-charcoal/76">The brand is founder-led in vision, but system-led in delivery.</p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-bodiqo-light/24 py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">PHILOSOPHY</p>
            <h2 className="section-title mt-4">Stronger systems. Better outcomes.</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              The BODIQO belief is simple: better outcomes come from better systems. When coaching, accountability, technology, and structure work
              together, consistency becomes easier to sustain - and progress becomes easier to trust.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="mx-auto max-w-3xl rounded-3xl border border-bodiqo-electric/18 bg-white p-8 text-center shadow-[0_16px_38px_rgba(45,125,255,0.1)] sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-bodiqo-charcoal sm:text-4xl">Explore the system behind BODIQO</h2>
            <p className="mt-4 text-base text-bodiqo-charcoal/74">
              Start with the homepage or book a consultation to understand where you fit best.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-bodiqo-electric/24 px-6 py-3 text-sm font-semibold text-bodiqo-charcoal transition hover:bg-bodiqo-light/40"
              >
                Return Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-bodiqo-electric px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(45,125,255,0.24)] transition hover:opacity-95"
              >
                Book a Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
