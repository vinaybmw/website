import { FadeIn } from "@/components/site/fade-in";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import Image from "next/image";
import Link from "next/link";

const audienceCards = [
  {
    title: "For Individuals",
    href: "/individuals",
    body: "Premium coaching and accountability for people pursuing better body composition, sharper routines, and sustained consistency."
  },
  {
    title: "For Institutes",
    href: "/institutes",
    body: "High-trust wellness-performance systems for institutes that care about team energy, resilience, and measurable behavior change."
  }
];

const offers = [
  {
    title: "EDGE",
    body: "Complete coaching architecture combining training, nutrition, app-led accountability, and structured guidance."
  },
  {
    title: "ALIGN",
    body: "A high-touch coaching system built around one-to-one guidance, precision execution, and elevated accountability."
  },
  {
    title: "NOVA",
    body: "Personalized nutrition and health report-focused guidance designed to reverse lifestyle conditions and improve health markers."
  }
];

const workflow = [
  { step: "01", title: "Assess", body: "Baseline mapping of goals, constraints, recovery, and behavior patterns." },
  { step: "02", title: "Personalize", body: "A tailored BODIQO roadmap is designed around your priorities and context." },
  { step: "03", title: "Coach", body: "High-touch guidance and accountability convert strategy into daily execution." },
  { step: "04", title: "Track", body: "Progress is measured through clear markers and system-led visibility." },
  { step: "05", title: "Evolve", body: "The method adapts as outcomes improve to sustain long-term progression." }
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BODIQO",
  url: "https://www.bodiqo.com",
  logo: "https://www.bodiqo.com/brand/bodiqo-wordmark-black.png",
  slogan: "Stronger systems. Better outcomes.",
  description:
    "BODIQO is a premium wellness-performance brand helping individuals and institutes improve body, mind, and consistency through coaching, technology, experiences, and high-touch systems."
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BODIQO",
  url: "https://www.bodiqo.com",
  description: "Premium wellness-performance offerings for individuals and institutes."
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-bodiqo-charcoal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Navbar />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_16%_12%,rgba(45,125,255,0.14),transparent_36%),radial-gradient(circle_at_88%_18%,rgba(129,186,255,0.3),transparent_38%),linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] pb-20 pt-28 sm:pb-24 sm:pt-36">
        <div className="section-shell relative">
          <FadeIn className="mx-auto max-w-4xl text-center">
            <Image
              src="/brand/bodiqo-wordmark-black.png"
              alt="BODIQO black wordmark logo"
              width={560}
              height={96}
              className="mx-auto h-14 w-auto sm:h-16"
              priority
            />
            <h1 className="mt-5 text-sm font-semibold tracking-tight sm:text-base">Stronger systems, Better outcomes.</h1>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/#offers"
                className="inline-flex items-center justify-center rounded-full bg-bodiqo-electric px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(45,125,255,0.24)] transition hover:opacity-95"
              >
                Explore Offers
              </Link>
              <Link
                href="/#final-cta"
                className="inline-flex items-center justify-center rounded-full border border-bodiqo-electric/25 bg-white px-6 py-3 text-sm font-semibold text-bodiqo-charcoal transition hover:bg-bodiqo-light/40"
              >
                Book a Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="section-title mt-4">A premium system for consistency, clarity, and measurable progress</h2>
            <p className="mt-5 text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              BODIQO is designed as a premium operating model where outcomes are driven by structure, feedback, and execution quality - not short
              bursts of motivation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-bodiqo-light/26 py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">Audience</p>
            <h2 className="section-title mt-4">Two entry points. One BODIQO system.</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {audienceCards.map((card, index) => (
              <FadeIn key={card.title} delay={index * 0.05}>
                <article className="rounded-3xl border border-bodiqo-electric/18 bg-white p-7 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
                  <h3 className="text-2xl font-bold tracking-tight text-bodiqo-charcoal">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-bodiqo-charcoal/74">{card.body}</p>
                  <Link
                    href={card.href}
                    className="mt-5 inline-flex rounded-full border border-bodiqo-electric/24 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-bodiqo-electric transition hover:bg-bodiqo-light/40"
                  >
                    Explore
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">Core Offers</p>
            <h2 className="section-title mt-4">Three offers, built inside one method.</h2>
            <p className="mt-5 max-w-2xl text-base text-bodiqo-charcoal/74">
              EDGE, ALIGN, and NOVA are structured to serve different priorities while staying inside the same BODIQO method.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {offers.map((offer, index) => (
              <FadeIn key={offer.title} delay={index * 0.05}>
                <article className="rounded-3xl border border-bodiqo-electric/18 bg-white p-7 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
                  <h3 className="text-2xl font-bold tracking-tight text-bodiqo-charcoal">{offer.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-bodiqo-charcoal/74">{offer.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-bodiqo-light/26 to-white py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">How BODIQO Works</p>
            <h2 className="section-title mt-4">Outcomes through systems, not motivation alone</h2>
          </FadeIn>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {workflow.map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.04}>
                <li className="rounded-3xl border border-bodiqo-electric/18 bg-white p-5 shadow-[0_8px_18px_rgba(17,22,31,0.04)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bodiqo-electric/74">{item.step}</p>
                  <h3 className="mt-2 text-lg font-bold text-bodiqo-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bodiqo-charcoal/74">{item.body}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      <section id="impact" className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">Trust</p>
            <h2 className="section-title mt-4">Impact</h2>
            <p className="mt-5 max-w-2xl text-base text-bodiqo-charcoal/74">
              BODIQO combines transformation outcomes, consistency proof, and institutional credibility inside one premium delivery model.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <FadeIn className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6">
              <h3 className="text-lg font-bold text-bodiqo-charcoal">Client Outcomes</h3>
              <p className="mt-2 text-sm leading-relaxed text-bodiqo-charcoal/74">
                Placeholder for concise, quantified results across adherence, progress, and consistency improvements.
              </p>
            </FadeIn>
            <FadeIn delay={0.05} className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6">
              <h3 className="text-lg font-bold text-bodiqo-charcoal">Transformation Proof</h3>
              <p className="mt-2 text-sm leading-relaxed text-bodiqo-charcoal/74">
                Placeholder for premium testimonial highlights and proof-led narratives from both individuals and institutes.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6">
              <h3 className="text-lg font-bold text-bodiqo-charcoal">Institutional Credibility</h3>
              <p className="mt-2 text-sm leading-relaxed text-bodiqo-charcoal/74">
                Placeholder for institute references, collaborations, and trust markers aligned with corporate buyers.
              </p>
            </FadeIn>
          </div>
          <FadeIn className="mt-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bodiqo-electric/72">Featured In</p>
            <Image
              src="/media/media-features.webp"
              alt="BODIQO media feature logos and press mentions"
              width={1600}
              height={700}
              className="mx-auto mt-5 h-auto w-full max-w-3xl object-contain"
            />
          </FadeIn>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-bodiqo-light/24 py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Brand Philosophy</p>
            <h2 className="section-title mt-4">Structure, consistency, and better outcomes</h2>
            <p className="mt-5 text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              BODIQO is built for high-trust, long-term progress through clear systems and refined execution.
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="final-cta" className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="mx-auto max-w-3xl rounded-3xl border border-bodiqo-electric/18 bg-white p-8 text-center shadow-[0_16px_38px_rgba(45,125,255,0.1)] sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-bodiqo-charcoal sm:text-4xl">Start with the right BODIQO offer</h2>
            <p className="mt-4 text-base text-bodiqo-charcoal/74">
              Begin with a consultation and we&apos;ll map the right BODIQO offering for your goals.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-bodiqo-electric px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(45,125,255,0.24)] transition hover:opacity-95"
              >
                Book a Consultation
              </Link>
              <Link
                href="/#offers"
                className="inline-flex items-center justify-center rounded-full border border-bodiqo-electric/24 px-6 py-3 text-sm font-semibold text-bodiqo-charcoal transition hover:bg-bodiqo-light/40"
              >
                Explore Offers
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
