"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RippleButton } from "@/components/motion/RippleButton";
import { GSAPParallax } from "@/components/motion/GSAPParallax";
import { SplitHeading } from "@/components/motion/SplitHeading";
import gsap from "gsap";

const ease = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(badgeRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });
      gsap.from(descRef.current, {
        opacity: 0,
        y: 24,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.85,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex h-[88vh] min-h-[580px] sm:min-h-[640px] md:min-h-[700px] max-w-[105rem] mt-0 mb-8 sm:mb-12 md:mb-16 lg:mb-24 mx-auto flex-col items-center justify-center overflow-hidden bg-[var(--primary)] px-4 sm:px-8 md:px-20 rounded-none sm:rounded-3xl md:rounded-[3rem]">

      {/* ── Organic Blob Image Masks ── */}
      <div className="absolute inset-0 pointer-events-none select-none">

        {/* Top Left Blob */}
        <GSAPParallax speed={1.4} className="absolute -top-6 sm:-top-12 -left-6 sm:-left-12 h-[150px] w-[150px] sm:h-[240px] sm:w-[240px] md:h-[320px] md:w-[320px] lg:h-[350px] lg:w-[350px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -80 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease }}
            className="h-full w-full overflow-hidden rounded-[40%_60%_30%_70%_/_60%_30%_70%_40%]"
          >
            <img src="/images/pillar-healthcare.png" alt="" className="h-full w-full object-cover opacity-80" />
          </motion.div>
        </GSAPParallax>

        {/* Top Right Blob */}
        <GSAPParallax speed={0.7} className="absolute top-4 sm:top-10 -right-8 sm:-right-16 md:-right-20 h-[160px] w-[160px] sm:h-[280px] sm:w-[280px] md:h-[360px] md:w-[360px] lg:h-[400px] lg:w-[400px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 80 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, ease, delay: 0.1 }}
            className="h-full w-full overflow-hidden rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]"
          >
            <img src="/images/nav/impact.jpg" alt="" className="h-full w-full object-cover opacity-80" />
          </motion.div>
        </GSAPParallax>

        {/* Left Mid Blob — hidden on small mobile */}
        <GSAPParallax speed={1.25} className="hidden sm:block absolute top-1/2 -left-12 sm:-left-16 md:-left-20 -translate-y-1/2 h-[180px] w-[180px] sm:h-[240px] sm:w-[240px] md:h-[300px] md:w-[300px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.6, ease, delay: 0.2 }}
            className="h-full w-full overflow-hidden rounded-[70%_30%_50%_50%_/_30%_30%_70%_70%]"
          >
            <img src="/images/pillar-agribusiness.png" alt="" className="h-full w-full object-cover opacity-80" />
          </motion.div>
        </GSAPParallax>

        {/* Bottom Right Blob */}
        <GSAPParallax speed={0.8} className="absolute -bottom-8 sm:-bottom-16 md:-bottom-20 right-0 h-[180px] w-[180px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.8, ease, delay: 0.3 }}
            className="h-full w-full overflow-hidden rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]"
          >
            <img src="/images/pillar-stem.png" alt="" className="h-full w-full object-cover opacity-85" />
          </motion.div>
        </GSAPParallax>

        {/* Accent glow blobs */}
        <GSAPParallax speed={1.5} className="absolute top-1/4 right-[8%] sm:right-[10%] h-20 sm:h-32 w-20 sm:w-32 bg-[var(--accent)] opacity-25 sm:opacity-30 rounded-full blur-3xl" />
        <GSAPParallax speed={0.5} className="absolute bottom-1/4 left-[8%] sm:left-[10%] h-28 sm:h-48 w-28 sm:w-48 bg-emerald-400 opacity-10 rounded-full blur-3xl" />
      </div>

      {/* ── Center Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl w-full mx-auto">

        {/* Eyebrow badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 text-white/70 text-[0.58rem] sm:text-[0.62rem] font-bold uppercase tracking-widest mb-6 sm:mb-8"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          Upper West Region, Ghana
        </div>

        <SplitHeading
          as="h1"
          text="Empowering communities through sustainable livelihood initiatives."
          className="text-[clamp(1.9rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-white mb-6 sm:mb-8"
          immediate
          delay={0.2}
        />

        <p
          ref={descRef}
          className="mx-auto max-w-xl text-sm sm:text-base md:text-xl text-white/70 leading-relaxed font-medium mb-8 sm:mb-12"
        >
          LURI Foundation equips underserved regions in Ghana with the skills, scholarships,
          and resources needed to build self-sustaining lives.
        </p>

        <div ref={ctaRef} className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 w-full">
          <RippleButton
            href="/get-involved/donate"
            variant="primary"
            textColor="white"
            size="lg"
            className="rounded-lg text-white px-7 sm:px-10 shadow-xl shadow-black/10 w-full xs:w-auto"
          >
            Support the mission
          </RippleButton>
          <RippleButton
            href="/programmes"
            variant="ghost"
            textColor="white"
            size="lg"
            className="rounded-lg px-7 sm:px-10 w-full xs:w-auto"
          >
            Our programmes →
          </RippleButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-white text-[0.58rem] font-semibold uppercase tracking-widest">Scroll</span>
        <div className="w-px h-6 sm:h-8 bg-white/50 scroll-dot" />
      </div>
    </section>
  );
}
