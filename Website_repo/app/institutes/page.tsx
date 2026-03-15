import { FadeIn } from "@/components/site/fade-in";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Institutes | BODIQO",
  description:
    "Premium wellness systems for institutes through structured delivery formats that improve participation, energy, and team outcomes."
};

const deliveryFormats = [
  {
    title: "Workplace Wellness",
    body: "Office yoga, ergonomics, dance, and over 50 science-backed wellness activities with measurable outcomes and reports for HR teams."
  },
  {
    title: "Employee Engagement",
    body: "From board-game arenas and quiz nights to dance, art, and music therapy, we create stress-free spaces for teams to bond."
  },
  {
    title: "Offsites & Retreats",
    body: "Curated offsites, retreats, and immersive experiences that blend relaxation, movement, and team bonding."
  },
  {
    title: "Facility Management & Wellness Staffing",
    body: "End-to-end staffing, management, and SOPs for office gyms, hotel spas, and hospitality chains."
  }
];

const whyBodiqo = [
  {
    title: "Premium delivery quality",
    body: "Formats are designed to feel elevated, modern, and credible - not generic or low-effort."
  },
  {
    title: "Structured execution",
    body: "Programs are planned with greater clarity around delivery, participation, and follow-through."
  },
  {
    title: "Range without fragmentation",
    body: "From wellness sessions to engagement formats and staffing solutions, BODIQO can support multiple needs without feeling scattered."
  },
  {
    title: "Coaching + experience design",
    body: "The work combines practical wellness value with stronger participant experience and brand perception."
  }
];

const outcomes = [
  {
    title: "Better participation",
    body: "Formats that are easier for teams to engage with and return to."
  },
  {
    title: "Stronger team energy",
    body: "Sessions and experiences designed to improve wellbeing, mood, and team atmosphere."
  },
  {
    title: "Healthier routines",
    body: "Practical movement, recovery, posture, and nutrition awareness integrated into real schedules."
  },
  {
    title: "Premium employee experience",
    body: "Wellness that feels thoughtful, current, and aligned with modern workplace expectations."
  },
  {
    title: "More credible internal wellness initiatives",
    body: "Programs that help teams take wellness communication more seriously."
  },
  {
    title: "Flexible formats for different goals",
    body: "Delivery that can support engagement, wellbeing, recovery, culture, or facility operations."
  }
];

const whoThisIsFor = [
  {
    title: "Corporates",
    body: "For companies that want stronger employee wellbeing, engagement, and cultural energy."
  },
  {
    title: "Educational Institutes",
    body: "For schools, colleges, and learning environments that want healthier routines and more meaningful participation."
  },
  {
    title: "Hospitality & Managed Facilities",
    body: "For hotels, spas, gyms, and premium spaces that need staffing, SOPs, and wellness operations."
  },
  {
    title: "Communities & Group Environments",
    body: "For residential, club, or shared environments where wellness programming can improve participation and connection."
  }
];

export default function InstitutesPage() {
  return (
    <main className="min-h-screen bg-white text-bodiqo-charcoal">
      <Navbar />

      <section className="bg-[radial-gradient(circle_at_84%_12%,rgba(45,125,255,0.16),transparent_36%),linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] pb-16 pt-28 sm:pt-36">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">FOR INSTITUTES</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Premium wellness systems for stronger teams and better outcomes
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              From workshops and wellness activations to longer-term engagement systems, BODIQO helps institutes build healthier, more resilient
              teams.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-bodiqo-electric px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(45,125,255,0.24)] transition hover:opacity-95"
              >
                Request Proposal
              </Link>
              <a
                href="#delivery-formats"
                className="inline-flex items-center justify-center rounded-full border border-bodiqo-electric/24 px-6 py-3 text-sm font-semibold text-bodiqo-charcoal transition hover:bg-bodiqo-light/40"
              >
                Explore Delivery Formats
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="delivery-formats" className="bg-gradient-to-b from-white to-bodiqo-light/24 py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">DELIVERY FORMATS</p>
            <h2 className="section-title mt-4">Built for different team needs and operating environments</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {deliveryFormats.map((card, index) => (
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
            <h2 className="section-title mt-4">Why institutes choose BODIQO</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {whyBodiqo.map((card, index) => (
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
            <p className="eyebrow">OUTCOMES</p>
            <h2 className="section-title mt-4">Wellness that supports culture, energy, and participation</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((card, index) => (
              <FadeIn
                key={card.title}
                delay={index * 0.04}
                className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6 shadow-[0_10px_24px_rgba(17,22,31,0.05)]"
              >
                <h3 className="text-lg font-bold tracking-tight">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bodiqo-charcoal/74">{card.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">WHO THIS IS FOR</p>
            <h2 className="section-title mt-4">Designed for modern teams, organizations, and managed spaces</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {whoThisIsFor.map((card, index) => (
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
            <p className="eyebrow">TRUST</p>
            <h2 className="section-title mt-4">Built to work across teams, formats, and environments</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              BODIQO has been featured across media, conversations, and wellness formats that reflect both credibility and cultural relevance.
            </p>
          </FadeIn>
          <FadeIn className="mt-8 rounded-3xl border border-bodiqo-electric/18 bg-white p-6 shadow-[0_10px_24px_rgba(17,22,31,0.05)] sm:p-8">
            <div className="overflow-hidden rounded-2xl border border-bodiqo-electric/12 bg-bodiqo-light/12 p-4 sm:p-6">
              <Image
                src="/media/media-features.webp"
                alt="BODIQO media feature logos and institutional trust markers"
                width={1600}
                height={700}
                className="h-auto w-full object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
