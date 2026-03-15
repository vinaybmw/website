import { FadeIn } from "@/components/site/fade-in";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | BODIQO",
  description: "Contact BODIQO for individual coaching, institute proposals, retreats, and partnerships."
};

const contactCards = [
  {
    title: "Individuals",
    body: "For coaching, consultations, and support around EDGE, ALIGN, or NOVA."
  },
  {
    title: "Institutes",
    body: "For workplace wellness, employee engagement, retreats, staffing, and proposal-led conversations."
  },
  {
    title: "Partnerships & Other Inquiries",
    body: "For collaborations, media, hospitality, and brand opportunities."
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-bodiqo-charcoal">
      <Navbar />

      <section className="bg-gradient-to-b from-white to-bodiqo-light/26 pb-16 pt-28 sm:pt-36">
        <div className="section-shell">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">CONTACT</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Start the right conversation with BODIQO</h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-bodiqo-charcoal/74 sm:text-lg">
              Whether you are exploring individual coaching, institutional delivery, retreats, or a custom collaboration, we&apos;ll help direct
              your inquiry to the right next step.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <div className="grid gap-5 md:grid-cols-3">
            {contactCards.map((card, index) => (
              <FadeIn
                key={card.title}
                delay={index * 0.05}
                className="rounded-3xl border border-bodiqo-electric/18 bg-white p-7 shadow-[0_10px_24px_rgba(17,22,31,0.05)]"
              >
                <h2 className="text-2xl font-bold tracking-tight">{card.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-bodiqo-charcoal/74">{card.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-bodiqo-light/24 py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="mx-auto max-w-4xl rounded-3xl border border-bodiqo-electric/18 bg-white p-7 shadow-[0_12px_28px_rgba(17,22,31,0.06)] sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-bodiqo-charcoal sm:text-4xl">Tell us what you need</h2>
            <form className="mt-8 grid gap-5" aria-label="Contact form">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-bodiqo-charcoal">
                  Full Name
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="rounded-2xl border border-bodiqo-electric/20 px-4 py-3 text-sm font-normal outline-none transition focus:border-bodiqo-electric/50 focus:ring-2 focus:ring-bodiqo-electric/15"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-bodiqo-charcoal">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="rounded-2xl border border-bodiqo-electric/20 px-4 py-3 text-sm font-normal outline-none transition focus:border-bodiqo-electric/50 focus:ring-2 focus:ring-bodiqo-electric/15"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-bodiqo-charcoal">
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="rounded-2xl border border-bodiqo-electric/20 px-4 py-3 text-sm font-normal outline-none transition focus:border-bodiqo-electric/50 focus:ring-2 focus:ring-bodiqo-electric/15"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-bodiqo-charcoal">
                  Organization / Institute (optional)
                  <input
                    type="text"
                    name="organization"
                    className="rounded-2xl border border-bodiqo-electric/20 px-4 py-3 text-sm font-normal outline-none transition focus:border-bodiqo-electric/50 focus:ring-2 focus:ring-bodiqo-electric/15"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-bodiqo-charcoal">
                Inquiry Type
                <select
                  name="inquiryType"
                  required
                  className="rounded-2xl border border-bodiqo-electric/20 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-bodiqo-electric/50 focus:ring-2 focus:ring-bodiqo-electric/15"
                >
                  <option>Individual Coaching</option>
                  <option>Institute Proposal</option>
                  <option>Retreat / Offsite</option>
                  <option>Partnership / Collaboration</option>
                  <option>Media / Press</option>
                  <option>General Inquiry</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-semibold text-bodiqo-charcoal">
                Goal / Requirement
                <input
                  type="text"
                  name="goal"
                  required
                  className="rounded-2xl border border-bodiqo-electric/20 px-4 py-3 text-sm font-normal outline-none transition focus:border-bodiqo-electric/50 focus:ring-2 focus:ring-bodiqo-electric/15"
                />
              </label>

              <fieldset className="rounded-2xl border border-bodiqo-electric/20 px-4 py-4">
                <legend className="px-1 text-sm font-semibold text-bodiqo-charcoal">Preferred Contact Method</legend>
                <div className="mt-2 flex flex-wrap gap-4">
                  <label className="inline-flex items-center gap-2 text-sm text-bodiqo-charcoal/84">
                    <input type="radio" name="contactMethod" value="Email" defaultChecked />
                    Email
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm text-bodiqo-charcoal/84">
                    <input type="radio" name="contactMethod" value="Phone" />
                    Phone
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm text-bodiqo-charcoal/84">
                    <input type="radio" name="contactMethod" value="WhatsApp" />
                    WhatsApp
                  </label>
                </div>
              </fieldset>

              <label className="grid gap-2 text-sm font-semibold text-bodiqo-charcoal">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="rounded-2xl border border-bodiqo-electric/20 px-4 py-3 text-sm font-normal outline-none transition focus:border-bodiqo-electric/50 focus:ring-2 focus:ring-bodiqo-electric/15"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-fit items-center justify-center rounded-full bg-bodiqo-electric px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(45,125,255,0.24)] transition hover:opacity-95"
              >
                Send Inquiry
              </button>
            </form>
            <p className="mt-6 text-sm text-bodiqo-charcoal/68">
              We&apos;ll review your inquiry and guide you toward the right consultation, proposal, or next step.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="max-w-3xl">
            <h2 className="section-title">Reach us directly</h2>
            <div className="mt-5 space-y-2 text-base text-bodiqo-charcoal/78 sm:text-lg">
              <p>+91 89287 67448</p>
              <p>info@bodiqo.com</p>
              <p>Breach Candy, Warden Road, Mumbai 400026</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-bodiqo-light/24 py-16 sm:py-24">
        <div className="section-shell">
          <FadeIn className="mx-auto max-w-3xl rounded-3xl border border-bodiqo-electric/18 bg-white p-8 text-center shadow-[0_16px_38px_rgba(45,125,255,0.1)] sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-bodiqo-charcoal sm:text-4xl">Prefer to start with the website?</h2>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-bodiqo-electric px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(45,125,255,0.24)] transition hover:opacity-95"
              >
                Return Home
              </Link>
              <Link
                href="/individuals"
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
