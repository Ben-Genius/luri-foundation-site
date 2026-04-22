"use client";

import { motion } from "framer-motion";
import { RippleButton } from "@/components/motion/RippleButton";
import { GSAPParallax } from "@/components/motion/GSAPParallax";

const ease = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  return (
    <section className="relative flex min-h-screen max-w-[105rem] mx-auto flex-col items-center justify-center overflow-hidden bg-[var(--primary)] my-20 px-40  rounded-4xl">
      {/* ── Organic Blobs / Image Masks — Image 3 style ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Top Left Blob */}
        <GSAPParallax speed={1.4} className="absolute -top-12 -left-12 h-[350px] w-[350px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease }}
            className="h-full w-full overflow-hidden rounded-[40%_60%_30%_70%_/_60%_30%_70%_40%]"
          >
            <img src="/images/pillar-healthcare.png" alt="" className="h-full w-full object-cover opacity-60" />
          </motion.div>
        </GSAPParallax>

        {/* Top Right Blob */}
        <GSAPParallax speed={0.7} className="absolute top-10 -right-20 h-[400px] w-[400px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, ease, delay: 0.1 }}
            className="h-full w-full bg-[#a7f3d0] opacity-40 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]"
          />
        </GSAPParallax>

        {/* Left Mid Blob */}
        <GSAPParallax speed={1.25} className="absolute top-1/2 -left-20 h-[300px] w-[300px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.6, ease, delay: 0.2 }}
            className="h-full w-full overflow-hidden rounded-[70%_30%_50%_50%_/_30%_30%_70%_70%]"
          >
            <img src="/images/pillar-agribusiness.png" alt="" className="h-full w-full object-cover opacity-50" />
          </motion.div>
        </GSAPParallax>

        {/* Bottom Right Blob */}
        <GSAPParallax speed={0.8} className="absolute -bottom-20 right-0 h-[450px] w-[450px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.8, ease, delay: 0.3 }}
            className="h-full w-full overflow-hidden rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]"
          >
            <img src="/images/pillar-stem.png" alt="" className="h-full w-full object-cover opacity-60" />
          </motion.div>
        </GSAPParallax>

        {/* Floating Accent Blobs */}
        <GSAPParallax speed={1.5} className="absolute top-1/4 right-[10%] h-32 w-32 bg-[var(--accent)] opacity-20 rounded-full blur-3xl" />
        <GSAPParallax speed={0.5} className="absolute bottom-1/4 left-[10%] h-48 w-48 bg-emerald-400 opacity-10 rounded-full blur-3xl" />
      </div>

      {/* ── Center Content ── */}
      <div className="container-luri relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="max-w-4xl"
        >
          <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-white mb-8">
            Empowering communities through <br />
            <span className="italic">sustainable livelihood</span> initiatives.
          </h1>

          <p className="mx-auto max-w-xl text-lg md:text-xl text-white/70 leading-relaxed font-medium mb-12">
            LURI Foundation equips underserved regions in Ghana with the skills, scholarships,
            and resources needed to build self-sustaining lives.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <RippleButton href="/get-involved/donate" variant="secondary" size="lg" className="rounded-full px-10 shadow-xl shadow-black/10">
              Create a free profile
            </RippleButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
