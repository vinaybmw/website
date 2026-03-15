import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import Link from "next/link";

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-white text-bodiqo-charcoal">
      <Navbar />
      <section className="bg-gradient-to-b from-white to-bodiqo-light/26 pb-16 pt-28 sm:pt-36">
        <div className="section-shell">
          <p className="eyebrow">Offers</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">BODIQO Offers</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
            The detailed individual offers architecture is currently available under the For Individuals route. This page remains a light
            placeholder for future multi-audience offer expansion.
          </p>
          <Link
            href="/individuals"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-bodiqo-electric/24 px-6 py-3 text-sm font-semibold text-bodiqo-charcoal transition hover:bg-bodiqo-light/40"
          >
            View For Individuals Offers
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
