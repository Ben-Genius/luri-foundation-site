"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, GraduationCap, ChevronRight } from "lucide-react";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { ScrollThemeSection } from "@/components/motion/ScrollThemeSection";
import { gsap } from "gsap";
import { motion } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────

const pillarsDisplay = [
  {
    id: "healthcare",
    icon: <Heart className="h-5 w-5" />,
    label: "Healthcare & Sanitation",
    number: "01",
    tagline: "A health knowledge gap is both a human rights issue and an economic one.",
    shortDesc:
      "Building a skilled cadre of community health workers who earn income while strengthening resilience.",
    fullDesc:
      "We provide structured, certification-linked training in community healthcare and sanitation — equipping individuals to become income-earning health practitioners.",
    bullets: [
      "Basic & preventive healthcare for households",
      "CHV certification pathways",
      "WASH education & sanitation infrastructure",
      "First aid, emergency response & maternal health",
    ],
    href: "/programmes/healthcare",
    image: "/images/pillar-healthcare.png",
    color: "#005035",
  },
  {
    id: "agribusiness",
    icon: <Leaf className="h-5 w-5" />,
    label: "Agribusiness",
    number: "02",
    tagline: "Turning subsistence farmers into resilient rural agri-entrepreneurs.",
    shortDesc:
      "Agriculture is the backbone of Upper West Region. We equip farmers to add value, access markets and build lasting enterprises.",
    fullDesc:
      "We deliver training that transforms subsistence farmers and rural youth into agri-entrepreneurs — equipped with tools to access markets and build lasting enterprises.",
    bullets: [
      "Modern & climate-smart farming techniques",
      "Post-harvest handling & value addition",
      "Cooperative formation & enterprise management",
      "Links to buyer networks & credit facilitation",
    ],
    href: "/programmes/agribusiness",
    image: "/images/pillar-agribusiness.png",
    color: "#7a5200",
  },
  {
    id: "stem",
    icon: <GraduationCap className="h-5 w-5" />,
    label: "STEM Scholarships",
    number: "03",
    tagline: "Financial constraints should never extinguish scientific potential.",
    shortDesc:
      "Investing in academically promising students from low-income households to secure Ghana's long-term development trajectory.",
    fullDesc:
      "STEM scholarships are awarded to academically promising students from low-income households, ensuring financial barriers do not extinguish scientific potential.",
    bullets: [
      "Scholarships for secondary & tertiary STEM",
      "Mentorship from industry professionals",
      "Career counselling & internship facilitation",
      "Science & technology exposure programmes",
    ],
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

// ─── LayeredText Intro ─────────────────────────────────────────────────────────

function LayeredTextIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | undefined>(undefined);
  const centerIndex = Math.floor(introLines.length / 2);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const paragraphs = container.querySelectorAll("p");
    const isMobile = window.innerWidth < 768;
    const lh = isMobile ? 40 : 60;

    timelineRef.current = gsap.timeline({ paused: true });
    timelineRef.current.to(paragraphs, {
      y: -lh,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.08,
    });

    const play = () => timelineRef.current?.play();
    const rev = () => timelineRef.current?.reverse();

    container.addEventListener("mouseenter", play);
    container.addEventListener("mouseleave", rev);

    // Start showing the bottom words
    timelineRef.current.play();

    return () => {
      container.removeEventListener("mouseenter", play);
      container.removeEventListener("mouseleave", rev);
      timelineRef.current?.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="font-black uppercase text-[var(--primary)] antialiased cursor-pointer overflow-hidden"
      style={{ fontSize: "clamp(1.9rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
    >
      <ul className="list-none p-0 m-0 flex flex-col items-start lg:items-end">
        {introLines.map((line, i) => {
          const isEven = i % 2 === 0;
          return (
            <li
              key={i}
              className="overflow-hidden relative h-[40px] md:h-[60px]"
              style={{
                transform: `translateX(${(i - centerIndex) * 35}px) skew(${isEven ? "60deg,-30deg" : "0deg,-30deg"}) scaleY(${isEven ? "0.66667" : "1.33333"})`,
              }}
            >
              <p className="px-4 align-top whitespace-nowrap m-0 h-[40px] md:h-[60px] leading-[36px] md:leading-[56px]">
                {line.top}
              </p>
              <p className="px-4 align-top whitespace-nowrap m-0 h-[40px] md:h-[60px] leading-[36px] md:leading-[56px]">
                {line.bottom}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ─── Pillar Card ───────────────────────────────────────────────────────────────

function PillarCard({ p, index }: { p: (typeof pillarsDisplay)[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isHoverDeviceRef = useRef(false);

  useEffect(() => {
    isHoverDeviceRef.current = window.matchMedia("(hover: hover)").matches;
  }, []);

  const flip = (to: boolean) => setIsFlipped(to);
  const toggle = () => setIsFlipped((v) => !v);

  return (
    <Reveal direction="up" delay={index * 0.12} distance={40}>
      <div
        className="group relative w-full cursor-pointer select-none"
        style={{ perspective: "1300px", height: "660px" }}
        onMouseEnter={() => isHoverDeviceRef.current && flip(true)}
        onMouseLeave={() => isHoverDeviceRef.current && flip(false)}
        onClick={() => !isHoverDeviceRef.current && toggle()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggle()}
        aria-label={`Learn about ${p.label}`}
      >
        <motion.div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* ── Front ── */}
          <div
            className="absolute inset-0 rounded-[2rem] overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={p.image}
              alt={p.label}
              className="h-full w-full object-cover"
              style={{
                transform: isFlipped ? "scale(1.0)" : "scale(1.05)",
                transition: "transform 0.78s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
            {/* Gradient layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/5" />

            {/* Ghost number */}
            <div
              className="absolute top-5 left-6 font-black leading-none pointer-events-none select-none"
              style={{ fontSize: "clamp(5rem,10vw,9rem)", color: "rgba(255,255,255,0.055)", letterSpacing: "-0.05em" }}
            >
              {p.number}
            </div>

            {/* Front content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-sm bg-white/10">
                <span className="text-white">{p.icon}</span>
                <span className="text-white text-[0.62rem] font-bold uppercase tracking-[0.1em]">
                  {p.label}
                </span>
              </div>
              <p className="text-white/85 text-sm md:text-[0.92rem] font-medium leading-relaxed">
                {p.shortDesc}
              </p>
              {/* Desktop hint — fades in on hover */}
              <p className="hidden md:flex items-center gap-1.5 text-[var(--accent)] text-[0.62rem] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Hover to explore <ArrowRight className="h-3 w-3" />
              </p>
              {/* Mobile hint — always visible */}
              <p className="flex md:hidden items-center gap-1.5 text-[var(--accent)] text-[0.62rem] font-bold uppercase tracking-widest">
                Tap to explore <ArrowRight className="h-3 w-3" />
              </p>
            </div>
          </div>

          {/* ── Back ── */}
          <div
            className="absolute inset-0 rounded-[2rem] overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              backgroundColor: p.color,
            }}
          >
            {/* Watermark number */}
            <div
              className="absolute -bottom-6 -right-2 font-black leading-none pointer-events-none select-none"
              style={{ fontSize: "clamp(9rem,20vw,16rem)", color: "rgba(255,255,255,0.04)", letterSpacing: "-0.05em" }}
            >
              {p.number}
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
              <div>
                {/* Icon */}
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-white/10 text-white mb-5">
                  {p.icon}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight leading-tight">
                  {p.label}
                </h3>

                <p className="text-white/55 text-xs italic mb-5 leading-snug">
                  &ldquo;{p.tagline}&rdquo;
                </p>

                <p className="text-white/85 text-sm md:text-[0.88rem] leading-relaxed font-medium mb-5">
                  {p.fullDesc}
                </p>

                <ul className="space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-white/75 text-sm">
                      <ChevronRight className="h-3.5 w-3.5 mt-0.5 text-white/35 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={p.href}
                onClick={(e) => e.stopPropagation()}
                className="group/btn inline-flex items-center gap-3 self-start bg-white text-[var(--primary)] pl-1.5 pr-6 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:bg-[var(--accent)] hover:text-white mt-6"
              >
                <span className="h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors group-hover/btn:bg-white/20" style={{ backgroundColor: "rgba(0,80,53,0.08)" }}>
                  <ArrowRight className="h-4 w-4" />
                </span>
                Read More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────

export function PillarsSection() {
  return (
    <ScrollThemeSection theme="#f0ebe0">
      <div className="py-12 md:py-24 px-4 md:px-6 lg:px-8">
        {/* Outer rounded container */}
        <div
          className="mx-auto max-w-[1380px] rounded-[2rem] md:rounded-[3rem] border"
          style={{ backgroundColor: "#f5f0e8", borderColor: "rgba(0,80,53,0.07)" }}
        >
          <div className="px-6 md:px-14 lg:px-20 pt-14 md:pt-20 pb-14 md:pb-20">

            {/* ── Two-column header ── */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:gap-16 mb-16 md:mb-20">
              {/* Left: badge + text */}
              <div className="lg:w-5/12 mb-10 lg:mb-0">
                <Reveal>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-6"
                    style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                    Strategic Framework
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] tracking-tight leading-tight mb-4">
                    Three pillars.<br />
                    One mission.
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="text-[var(--ink-600)] text-base font-medium leading-relaxed max-w-[340px]">
                    Each programme area addresses a specific barrier to economic participation
                    faced by individuals in rural and peri-urban Ghana.
                  </p>
                </Reveal>

                {/* Stat chips */}
                <Reveal delay={0.3}>
                  <div className="flex flex-wrap gap-3 mt-8">
                    {[
                      { val: "600+", label: "Trained by Year 3" },
                      { val: "100", label: "STEM Scholarships" },
                      { val: "60%", label: "Female Beneficiaries" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="flex flex-col px-4 py-3 rounded-2xl border"
                        style={{ backgroundColor: "rgba(0,80,53,0.04)", borderColor: "rgba(0,80,53,0.1)" }}
                      >
                        <span className="text-xl font-black text-[var(--primary)] leading-none tracking-tight">
                          {s.val}
                        </span>
                        <span className="text-[0.62rem] font-semibold text-[var(--ink-600)] uppercase tracking-widest mt-1">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* Right: LayeredText */}
              <div className="lg:w-7/12">
                <LayeredTextIntro />
              </div>
            </div>

            {/* ── Pillar Cards ── */}
            <div className="grid gap-5 md:gap-6 md:grid-cols-3">
              {pillarsDisplay.map((p, i) => (
                <PillarCard key={p.id} p={p} index={i} />
              ))}
            </div>

            {/* ── Footer CTA ── */}
            <Reveal delay={0.2}>
              <div
                className="mt-14 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t"
                style={{ borderColor: "rgba(0,80,53,0.10)" }}
              >
                <p className="text-[var(--ink-600)] text-sm font-medium max-w-xs text-center sm:text-left leading-relaxed">
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
