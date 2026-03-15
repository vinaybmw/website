"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/impact", label: "Impact" },
  { href: "/individuals", label: "For Individuals" },
  { href: "/institutes", label: "For Institutes" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-bodiqo-electric/15 bg-white/90 shadow-sm backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-3 pt-3 md:pt-0" aria-label="Main navigation">
        <Link href="/" className="inline-flex items-center" aria-label="BODIQO home">
          <Image
            src="/brand/bodiqo-wordmark-black.png"
            alt="BODIQO black wordmark logo"
            width={182}
            height={30}
            priority
            className="-ml-5 h-[1.75rem] w-auto sm:h-[2.15rem]"
          />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-bodiqo-charcoal/82 transition hover:text-bodiqo-charcoal">
              {link.label}
            </Link>
          ))}
        </div>
        <button
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-10 items-center justify-center rounded-xl border border-bodiqo-electric/30 bg-white/95 text-bodiqo-charcoal shadow-sm md:hidden"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-4 bg-current" />
            <span className="block h-0.5 w-4 bg-current" />
            <span className="block h-0.5 w-4 bg-current" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-bodiqo-charcoal/55 md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="ml-auto flex h-screen min-h-screen w-[86vw] max-w-[340px] flex-col border-l border-bodiqo-electric/20 bg-white px-5 pb-6 pt-5 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between border-b border-bodiqo-electric/16 pb-4">
                <Image
                  src="/brand/bodiqo-wordmark-black.png"
                  alt="BODIQO black wordmark logo"
                  width={140}
                  height={24}
                  className="-ml-5 h-5 w-auto"
                />
                <button
                  aria-label="Close navigation menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex size-9 items-center justify-center rounded-md border border-bodiqo-electric/25 bg-white text-bodiqo-charcoal/80"
                >
                  <span className="text-lg leading-none">x</span>
                </button>
              </div>
              <div className="space-y-2 rounded-2xl bg-white">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl bg-white px-4 py-3 text-sm font-semibold text-bodiqo-charcoal/86 transition hover:bg-bodiqo-light/40"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex-1 bg-white" />
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
