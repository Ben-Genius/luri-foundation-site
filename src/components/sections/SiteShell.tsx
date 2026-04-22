"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RippleButton } from "@/components/motion/RippleButton";

const ease = [0.16, 1, 0.3, 1] as const;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/programmes",
    label: "Programmes",
    sub: [
      { href: "/programmes/healthcare", label: "Healthcare & Sanitation" },
      { href: "/programmes/agribusiness", label: "Agribusiness" },
      { href: "/programmes/stem", label: "STEM Scholarships" },
    ],
  },
  { href: "/impact", label: "Impact" },
  { href: "/partners", label: "Partners" },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programmes", label: "Programmes" },
  { href: "/impact", label: "Impact" },
  { href: "/partners", label: "Partners" },
  { href: "/get-involved", label: "Get Involved" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="flex  min-h-screen flex-col">
      {/* ── Header ── */}
      <motion.header
        className="fixed inset-x-0 top-0 z-50 border-[var(--primary)]/5 bg-[var(--background)]/90 backdrop-blur-md"
        initial={false}
      >
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-[var(--primary)]" />
        <div className="container-luri flex h-16 items-center justify-between md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/images/logo.png" alt="LURI Logo" className="h-16 w-auto object-contain" />
          </Link>


          {/* Right side - Hamburger only */}
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="group flex h-10 w-10 flex-col items-center justify-center gap-1.5 transition-all"
            >
              <div className="relative h-4 w-6">
                <motion.span
                  animate={{
                    rotate: menuOpen ? 45 : 0,
                    y: menuOpen ? 7 : 0,
                  }}
                  className="absolute top-0 left-0 block h-[1.5px] w-full bg-[var(--primary)] rounded-full"
                />
                <motion.span
                  animate={{
                    opacity: menuOpen ? 0 : 1,
                    scaleX: menuOpen ? 0 : 1
                  }}
                  className="absolute top-1/2 left-0 block h-[1.5px] w-full bg-[var(--primary)] rounded-full -translate-y-1/2"
                />
                <motion.span
                  animate={{
                    rotate: menuOpen ? -45 : 0,
                    y: menuOpen ? -7 : 0,
                    width: menuOpen ? "100%" : "65%"
                  }}
                  className="absolute bottom-0 right-0 block h-[1.5px] bg-[var(--primary)] rounded-full"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Full Screen Mobile Menu Overlay (Raygan style) ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[var(--primary-light)] overflow-y-auto"
          >
            {/* Overlay Header */}
            <div className="container-luri flex h-16 items-center justify-between md:h-18">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
                <img src="/images/logo.png" alt="Logo" className="h-16 w-auto object-contain" />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--primary)]/10 text-[var(--primary)]"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>

            {/* Menu Links */}
            <div className="container-luri pt-12 pb-24">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease }}
                  >
                    <Link
                      href={link.href}
                      className="group flex flex-col items-start gap-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold text-[var(--primary)] leading-tight tracking-tight">
                        <span className="opacity-40">{i + 1}.</span> {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Buttons - Raygan style */}
              <div className="mt-20 flex flex-wrap gap-4 border-t border-[var(--primary)]/10 pt-12">
                <RippleButton href="/programmes" variant="primary" size="lg" className="rounded-full px-8 flex items-center gap-2">
                  What we do <span className="text-lg">→</span>
                </RippleButton>
                <RippleButton href="/get-involved/donate" variant="secondary" size="lg" className="rounded-full px-8 flex items-center gap-2">
                  Donate now <span className="text-lg">→</span>
                </RippleButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main ── */}
      <main className="flex-1">{children}</main>

      {/* ── Footer ── */}
      <footer className="border-t border-[var(--primary)]/10 bg-[var(--primary-dark)] text-white">
        {/* Top row */}
        <div className="container-luri py-14">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/logo.png" alt="LURI" className="h-8 w-8 brightness-0 invert" />
                <p
                  className="text-xl font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
                >
                  LURI Foundation
                </p>
              </div>
              <p className="mt-1 text-xs font-semibold tracking-widest uppercase text-white/40">
                People · Partnership · Purpose
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
                Empowering communities in Upper West Region, Ghana through healthcare, agribusiness, and STEM education.
              </p>
              <p className="mt-4 text-sm text-white/40">Accra HQ · Kulfuo operations</p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Navigate</h4>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/70 transition-colors hover:text-white link-underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Stay updated</h4>
              <p className="mb-4 text-sm text-white/60">
                Quarterly stories, KPIs, and field updates from Kulfuo.
              </p>
              <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-xl bg-white/10 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[var(--ink)] hover:bg-amber-300 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8">
          <div className="container-luri flex flex-col gap-2 py-5 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} LURI Foundation. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white/60 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
