import Image from "next/image";
import Link from "next/link";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service-refunds", label: "Terms of Service & Refunds" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const socialLinks = [
  { href: "#", label: "Instagram", icon: "ig" },
  { href: "#", label: "LinkedIn", icon: "in" },
  { href: "#", label: "YouTube", icon: "yt" }
];

function SocialIcon({ kind }: { kind: string }) {
  if (kind === "ig") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "in") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 10v6M8 8.1v.1M12 16v-3.2c0-1.3.8-2 1.9-2 1.1 0 1.8.7 1.8 2V16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <rect x="3" y="6" width="18" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 10l5 2-5 2v-4Z" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-bodiqo-electric/15 bg-white py-14 sm:py-16">
      <div className="section-shell grid gap-12 md:grid-cols-[1.1fr_1fr_0.9fr]">
        <div>
          <Image
            src="/brand/bodiqo-wordmark-black.png"
            alt="BODIQO black wordmark logo"
            width={188}
            height={32}
            className="-ml-5 h-6 w-auto"
          />
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-bodiqo-charcoal/68">Stronger systems. Better outcomes.</p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bodiqo-charcoal/68">Navigation</h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-bodiqo-charcoal/78">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-bodiqo-charcoal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bodiqo-charcoal/68">Get In Touch</h2>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-bodiqo-charcoal/78">
              <p>+91 89287 67448</p>
              <p>info@bodiqo.com</p>
              <p>Breach Candy, Warden Road, Mumbai 400026</p>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-bodiqo-charcoal/68">Stay Connected</h2>
            <div className="mt-4 flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex items-center justify-center rounded-full border border-bodiqo-electric/20 p-2 text-bodiqo-charcoal/76 transition hover:border-bodiqo-electric/40 hover:text-bodiqo-electric"
                >
                  <SocialIcon kind={social.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
