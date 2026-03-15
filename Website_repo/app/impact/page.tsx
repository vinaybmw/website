import { FadeIn } from "@/components/site/fade-in";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact | BODIQO",
  description: "Explore how BODIQO creates measurable impact across individuals, institutes, and media platforms."
};

const impactCards = [
  {
    title: "Better consistency",
    body: "The BODIQO system is designed to improve follow-through by combining structure, visibility, and support."
  },
  {
    title: "Sharper execution",
    body: "Training, nutrition, and accountability are delivered with more clarity and less guesswork."
  },
  {
    title: "Institutional credibility",
    body: "The same operating model can extend from individual coaching into workplace and institute environments."
  },
  {
    title: "Broader relevance",
    body: "Media visibility and partner trust help reinforce the brand's wider credibility."
  }
];

const proofCards = [
  {
    title: "Individual coaching",
    body: "Clients use BODIQO to improve body composition, nutrition quality, consistency, and execution through a system-led approach rather than fragmented advice."
  },
  {
    title: "Institutes and teams",
    body: "BODIQO supports wellness-performance through workshops, engagement formats, retreats, and operational wellness delivery for organizations and managed spaces."
  },
  {
    title: "Media and visibility",
    body: "The brand has appeared across business, lifestyle, health, and culture platforms that reflect relevance beyond one delivery format."
  }
];

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-white text-bodiqo-charcoal">
      <Navbar />

      <section className="bg-gradient-to-b from-white to-bodiqo-light/26 pb-16 pt-28 sm:pt-36">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">IMPACT</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              BODIQO travels across people, teams, and platforms
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              From individual transformations to institutional wellness formats and media visibility, BODIQO is built to create credible,
              visible change through stronger systems and better execution.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">FEATURED IN</p>
            <h2 className="section-title mt-4">Seen in conversations that shape wellness, performance, and culture</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              BODIQO has been featured across media platforms that reflect both relevance and credibility. These features help signal that the
              brand resonates not only in coaching environments, but also in wider conversations around lifestyle, health, and performance.
            </p>
          </FadeIn>
          <FadeIn className="mt-9 text-center">
            <Image
              src="/media/media-features.webp"
              alt="BODIQO media features and press logos"
              width={1600}
              height={700}
              className="mx-auto h-auto w-full max-w-4xl object-contain"
            />
          </FadeIn>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-bodiqo-light/24 py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">WHAT IMPACT LOOKS LIKE</p>
            <h2 className="section-title mt-4">Built to create measurable change</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {impactCards.map((card, index) => (
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
            <p className="eyebrow">PROOF</p>
            <h2 className="section-title mt-4">Different formats, one system</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {proofCards.map((card, index) => (
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
            <h2 className="section-title mt-4">A system that holds across contexts</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              Whether the context is one-to-one coaching, a team experience, a nutrition-led health intervention, or a larger institutional
              format, BODIQO is built to keep delivery quality, clarity, and participation stronger.
            </p>
          </FadeIn>
          <div className="mt-8 text-center">
            <Image
              src="/media/media-features.webp"
              alt="BODIQO media trust and visibility markers"
              width={1600}
              height={700}
              className="mx-auto h-auto w-full max-w-3xl object-contain"
            />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6 text-sm text-bodiqo-charcoal/74 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
              Logo placeholder
            </article>
            <article className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6 text-sm text-bodiqo-charcoal/74 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
              Logo placeholder
            </article>
            <article className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6 text-sm text-bodiqo-charcoal/74 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
              Logo placeholder
            </article>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
              <p className="text-sm leading-relaxed text-bodiqo-charcoal/74">
                "Placeholder quote: Delivery quality stayed strong across planning, participation, and execution."
              </p>
            </article>
            <article className="rounded-3xl border border-bodiqo-electric/18 bg-white p-6 shadow-[0_10px_24px_rgba(17,22,31,0.05)]">
              <p className="text-sm leading-relaxed text-bodiqo-charcoal/74">
                "Placeholder quote: The format felt premium and practical, not performative."
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="mx-auto max-w-3xl rounded-3xl border border-bodiqo-electric/18 bg-white p-8 text-center shadow-[0_16px_38px_rgba(45,125,255,0.1)] sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-bodiqo-charcoal sm:text-4xl">Work with BODIQO</h2>
            <p className="mt-4 text-base text-bodiqo-charcoal/74">Start with the right offer, the right format, or the right conversation.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-bodiqo-electric px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(45,125,255,0.24)] transition hover:opacity-95"
              >
                Book a Consultation
              </Link>
              <Link
                href="/institutes"
                className="inline-flex items-center justify-center rounded-full border border-bodiqo-electric/24 px-6 py-3 text-sm font-semibold text-bodiqo-charcoal transition hover:bg-bodiqo-light/40"
              >
                Request Proposal
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
