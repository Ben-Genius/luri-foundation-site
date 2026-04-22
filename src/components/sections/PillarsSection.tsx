"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, GraduationCap } from "lucide-react";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { ScrollThemeSection } from "@/components/motion/ScrollThemeSection";
import { gsap } from "gsap";
import { motion } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const pillarsDisplay = [
  {
    id: "healthcare",
    icon: <Heart className="h-5 w-5" />,
    label: "Healthcare & Sanitation",
    number: "01",
    shortDesc: "Building community health resilience through certification and education.",
    fullDesc:
      "LURI Foundation provides structured, certification-linked training in community healthcare and sanitation. We focus on basic preventive practices, CHV certification pathways, WASH (Water, Sanitation, and Hygiene) education, and maternal health awareness.",
    href: "/programmes/healthcare",
    image: "/images/pillar-healthcare.png",
    color: "#005035",
  },
  {
    id: "agribusiness",
    icon: <Leaf className="h-5 w-5" />,
    label: "Agribusiness",
    number: "02",
    shortDesc: "Transforming subsistence farmers into resilient rural agri-entrepreneurs.",
    fullDesc:
      "We deliver training in modern climate-smart farming, post-harvest handling, and value addition. Our model supports cooperative formation, business planning, and links farmers directly to buyer networks and credit facilitation.",
    href: "/programmes/agribusiness",
    image: "/images/pillar-agribusiness.png",
    color: "#7a5200",
  },
  {
    id: "stem",
    icon: <GraduationCap className="h-5 w-5" />,
    label: "STEM Scholarships",
    number: "03",
    shortDesc: "Investing in talent to secure Ghana's long-term development trajectory.",
    fullDesc:
      "We award scholarships to academically promising students from low-income households for secondary and tertiary STEM education. We provide mentorship, career counselling, and exposure to science, technology, and innovation programmes.",
    href: "/programmes/stem",
    image: "/images/pillar-stem.png",
    color: "#6b1d1d",
  },
];

const introLines = [
  { top: " ", bottom: "HEALTHCARE" },
  { top: "HEALTHCARE", bottom: "AGRIBUSINESS" },
  { top: "AGRIBUSINESS", bottom: "STEM" },
  { top: "STEM", bottom: "EDUCATION" },
  { top: "EDUCATION", bottom: "OUTCOMES" },
  { top: "OUTCOMES", bottom: " " },
];

// ─── LayeredText Intro ────────────────────────────────────────────────────────

function LayeredTextIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | undefined>(undefined);

  const centerIndex = Math.floor(introLines.length / 2);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const paragraphs = container.querySelectorAll("p");
    const isMobile = window.innerWidth < 768;

    timelineRef.current = gsap.timeline({ paused: true });
    timelineRef.current.to(paragraphs, {
      y: isMobile ? -38 : -60,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.08,
    });

    const play = () => timelineRef.current?.play();
    const reverse = () => timelineRef.current?.reverse();

    container.addEventListener("mouseenter", play);
    container.addEventListener("mouseleave", reverse);

    // Start in the "bottom" word state
    timelineRef.current.play();

    return () => {
      container.removeEventListener("mouseenter", play);
      container.removeEventListener("mouseleave", reverse);
      timelineRef.current?.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto font-black uppercase text-[var(--primary)] antialiased cursor-pointer overflow-hidden py-4 tracking-[-0.04em]"
      style={{ fontSize: "clamp(1.75rem, 5.5vw, 5rem)" }}
    >
      <ul className="list-none p-0 m-0 flex flex-col items-center">
        {introLines.map((line, i) => {
          const isEven = i % 2 === 0;
          return (
            <li
              key={i}
              className="overflow-hidden relative h-[38px] md:h-[60px]"
              style={{
                transform: `translateX(${(i - centerIndex) * 40}px) skew(${isEven ? "60deg,-30deg" : "0deg,-30deg"}) scaleY(${isEven ? "0.66667" : "1.33333"})`,
              }}
            >
              <p className="leading-[38px] md:leading-[60px] px-4 align-top whitespace-nowrap m-0 h-[38px] md:h-[60px]">
                {line.top}
              </p>
              <p className="leading-[38px] md:leading-[60px] px-4 align-top whitespace-nowrap m-0 h-[38px] md:h-[60px]">
                {line.bottom}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ─── Pillar Card ──────────────────────────────────────────────────────────────

function PillarCard({ p, index }: { p: (typeof pillarsDisplay)[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isHoverRef = useRef(false);

  useEffect(() => {
    isHoverRef.current = window.matchMedia("(hover: hover)").matches;
  }, []);

  const handleMouseEnter = () => {
    if (isHoverRef.current) setIsFlipped(true);
  };
  const handleMouseLeave = () => {
    if (isHoverRef.current) setIsFlipped(false);
  };
  const handleClick = () => {
    if (!isHoverRef.current) setIsFlipped((v) => !v);
  };

  return (
    <Reveal direction="up" delay={index * 0.12} distance={40}>
      <div
        className="group relative w-full cursor-pointer select-none outline-none"
        style={{ perspective: "1200px", height: "640px" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsFlipped((v) => !v)}
        aria-label={`Learn about ${p.label}`}
      >
        <motion.div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* ── Front face ── */}
          <div
            className="absolute inset-0 rounded-[2rem] overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={p.image}
              alt={p.label}
              className="h-full w-full object-cover transition-transform duration-700 ease-out"
              style={{ transform: isFlipped ? "scale(1)" : "scale(1.02)" }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Ghost number */}
            <div
              className="absolute top-5 left-7 font-black leading-none select-none"
              style={{
                fontSize: "clamp(4rem,8vw,7rem)",
                color: "rgba(255,255,255,0.08)",
                letterSpacing: "-0.05em",
              }}
            >
              {p.number}
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 border border-white/20 backdrop-blur-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
              >
                <span className="text-white">{p.icon}</span>
                <span className="text-white text-xs font-bold uppercase tracking-widest">
                  {p.label}
                </span>
              </div>
              <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed">
                {p.shortDesc}
              </p>

              {/* Desktop hint */}
              <p className="hidden md:flex mt-4 items-center gap-1.5 text-[var(--accent)] text-xs font-bold uppercase tracking-widest transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                Hover to explore <ArrowRight className="h-3 w-3" />
              </p>

              {/* Mobile/tablet hint */}
              <p className="flex md:hidden mt-4 items-center gap-1.5 text-[var(--accent)] text-xs font-bold uppercase tracking-widest">
                Tap to explore <ArrowRight className="h-3 w-3" />
              </p>
            </div>
          </div>

          {/* ── Back face ── */}
          <div
            className="absolute inset-0 rounded-[2rem] flex flex-col justify-between p-8 md:p-10"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              backgroundColor: p.color,
            }}
          >
            {/* Watermark number */}
            <div
              className="absolute bottom-4 right-6 font-black leading-none select-none pointer-events-none"
              style={{
                fontSize: "clamp(6rem,14vw,11rem)",
                color: "rgba(255,255,255,0.05)",
                letterSpacing: "-0.05em",
              }}
            >
              {p.number}
            </div>

            <div className="relative z-10">
              {/* Icon pill */}
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white/10 mb-6 text-white">
                {p.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight leading-tight">
                {p.label}
              </h3>
              <p className="text-white/85 text-base md:text-[1.05rem] leading-relaxed font-medium">
                {p.fullDesc}
              </p>
            </div>

            <Link
              href={p.href}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 group/btn inline-flex items-center gap-3 self-start bg-white text-[var(--primary)] pl-1.5 pr-6 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:bg-[var(--accent)] hover:text-white"
            >
              <span className="h-9 w-9 rounded-full bg-[var(--primary)]/8 flex items-center justify-center group-hover/btn:bg-white/20 transition-colors flex-shrink-0">
                <ArrowRight className="h-4 w-4" />
              </span>
              Read More
            </Link>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function PillarsSection() {
  return (
    <ScrollThemeSection theme="#f0ebe0">
      <div className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
        {/* Spaced outer card */}
        <div
          className="mx-auto max-w-[1340px] rounded-[2rem] md:rounded-[3rem] border overflow-hidden"
          style={{ backgroundColor: "#f5f0e8", borderColor: "rgba(0,80,53,0.08)" }}
        >
          <div className="px-6 md:px-14 lg:px-20 pt-16 md:pt-20 pb-16 md:pb-20">
            {/* ── Section header ── */}
            <div className="mb-14 text-center">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-xs font-bold uppercase tracking-widest mb-6"
                  style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  Strategic Framework
                </div>
              </Reveal>

              <LayeredTextIntro />

              <Reveal delay={0.4}>
                <p className="mx-auto max-w-lg text-base md:text-lg text-[var(--ink-600)] font-medium leading-relaxed mt-4">
                  Three integrated programme areas designed to address specific barriers
                  to economic participation in rural Ghana.
                </p>
              </Reveal>
            </div>

            {/* ── Cards grid ── */}
            <div className="grid gap-5 md:gap-6 lg:gap-7 md:grid-cols-3">
              {pillarsDisplay.map((p, i) => (
                <PillarCard key={p.id} p={p} index={i} />
              ))}
            </div>

            {/* ── Footer CTA ── */}
            <Reveal delay={0.2}>
              <div className="mt-14 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t"
                style={{ borderColor: "rgba(0,80,53,0.1)" }}>
                <p className="text-[var(--ink-600)] text-sm md:text-base font-medium max-w-sm text-center sm:text-left leading-relaxed">
                  Explore all our programmes and discover how you can get involved.
                </p>
                <Link
                  href="/programmes"
                  className="group inline-flex items-center gap-3 bg-[var(--primary)] text-white pl-2 pr-7 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[var(--primary-dark)] transition-colors flex-shrink-0"
                >
                  <span className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  All Programmes
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </ScrollThemeSection>
  );
}
