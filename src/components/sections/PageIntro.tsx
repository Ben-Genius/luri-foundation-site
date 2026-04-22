"use client";

import { motion } from "framer-motion";

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  image?: string;
}

export function PageIntro({ eyebrow, title, description, centered = false, light = false, image }: PageIntroProps) {
  const align = centered ? "text-center items-center" : "";

  return (
    <section
      className={`relative overflow-hidden section-pad ${light ? "bg-[var(--primary-dark)] text-white" : "bg-[var(--cream-100,#f5f0e8)]"}`}
    >
      {image && (
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <img src={image} alt="" className="h-full w-full object-cover" />
          <div className={`absolute inset-0 ${light ? "bg-gradient-to-tr from-[var(--primary-dark)] to-transparent" : "bg-gradient-to-tr from-[var(--cream-100)] to-transparent"}`} />
        </div>
      )}
      
      <div className={`container-luri relative z-10 flex flex-col ${align} max-w-4xl ${centered ? "mx-auto" : ""}`}>
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`pill mb-5 self-start ${
              centered ? "self-center" : ""
            } ${light ? "bg-white/10 text-white/70 border border-white/20" : "bg-[var(--primary-light)] text-[var(--primary)]"}`}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-4xl font-extrabold md:text-6xl ${light ? "text-white" : "text-[var(--ink)]"}`}
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-5 max-w-2xl text-lg leading-relaxed ${light ? "text-white/65" : "text-[var(--ink-600,#374151)]"}`}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
