"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RippleButton } from "@/components/motion/RippleButton";
import { GSAPParallax } from "@/components/motion/GSAPParallax";
import gsap from "gsap";

const ease = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <section className="relative flex h-[90vh] min-h-[580px] sm:min-h-[640px] md:min-h-[700px] max-w-[105rem] mt-0 mb-8 sm:mb-12 md:mb-16 lg:my-24 mx-auto flex-col items-center justify-center overflow-hidden bg-[var(--primary)] px-4 sm:px-8 md:px-20 rounded-none sm:rounded-3xl md:rounded-[3rem]">

      {/* ── Organic Blob Image Masks ── */}
      <div className="absolute inset-0 pointer-events-none select-none">

        {/* Top Left Blob */}
        <GSAPParallax speed={1.4} className="absolute -top-6 sm:-top-12 -left-6 sm:-left-12 h-[150px] w-[150px] sm:h-[240px] sm:w-[240px] md:h-[320px] md:w-[320px] lg:h-[350px] lg:w-[350px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -100 }}
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
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, ease, delay: 0.1 }}
            className="h-full w-full overflow-hidden rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]"
          >
            <img src="/images/nav/impact.jpg" alt="" className="h-full w-full object-cover opacity-80" />
          </motion.div>
        </GSAPParallax>

        {/* Bottom Left Blob */}
        <GSAPParallax speed={1.25} className="hidden sm:block absolute -bottom-8 sm:-bottom-12 md:-bottom-16 -left-8 sm:-left-12 md:-left-16 h-[180px] w-[180px] sm:h-[240px] sm:w-[240px] md:h-[300px] md:w-[300px] lg:h-[320px] lg:w-[320px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50, y: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 1.6, ease, delay: 0.2 }}
            className="h-full w-full overflow-hidden rounded-[70%_30%_50%_50%_/_30%_30%_70%_70%]"
          >
            <img src="/images/pillar-agribusiness.png" alt="" className="h-full w-full object-cover opacity-80" />
          </motion.div>
        </GSAPParallax>

        {/* Bottom Right Blob */}
        <GSAPParallax speed={0.8} className="absolute -bottom-8 sm:-bottom-16 md:-bottom-20 right-0 h-[180px] w-[180px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
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
      <div className="container-luri relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="max-w-4xl w-full"
        >
          <h1 className="text-[clamp(2rem,7vw,5.5rem)] lg:text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-white mb-6 sm:mb-8">
            Empowering <span className="text-[var(--accent)]"> communities </span>through <br className="hidden sm:block" />
            <span className="italic">sustainable livelihood</span>  <span className="text-[var(--accent)]">initiatives.</span>
          </h1>

          <p
            ref={descRef}
            className="mx-auto max-w-xl text-sm sm:text-base md:text-xl text-white/70 leading-relaxed font-medium mb-8 sm:mb-12"
          >
            LURI Foundation equips underserved regions in Ghana with the skills, scholarships,
            and resources needed to build self-sustaining lives.
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-6">
            <RippleButton
              href="/get-involved/donate"
              variant="primary"
              textColor="white"
              size="lg"
              className="rounded-lg text-white px-7 sm:px-10 shadow-xl shadow-black/10 w-full sm:w-auto"
            >
              Create a free profile
            </RippleButton>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-white text-[0.58rem] font-semibold uppercase tracking-widest">Scroll</span>
        <div className="w-px h-6 sm:h-8 bg-white/50 scroll-dot" />
      </div>
    </section>
  );
}
