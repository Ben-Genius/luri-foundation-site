"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, GraduationCap, ChevronRight } from "lucide-react";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { ScrollThemeSection } from "@/components/motion/ScrollThemeSection";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { RippleButton } from "../motion/RippleButton";

// ─── Data ─────────────────────────────────────────────────────────────────────

const pillarsDisplay = [
  {
    id: "healthcare",
    icon: <Heart className="h-5 w-5" />,
    label: "Healthcare & Sanitation",
    number: "01",
    tagline: "A health knowledge gap is both a human rights issue and an economic one.",
    shortDesc:
      "Building a skilled cadre of community health workers who earn income while strengthening community resilience.",
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
    label: "Agribusiness & Rural Economic Diversification",
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
    label: "STEM EDUCATION",
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
  { top: " ", bottom: "HEALTHCARE" },
  { top: "HEALTHCARE", bottom: "AGRIBUSINESS" },
  { top: "AGRIBUSINESS", bottom: "STEM" },
  { top: "STEM", bottom: "EDUCATION" },
  { top: "EDUCATION", bottom: "OUTCOMES" },
  { top: "OUTCOMES", bottom: " " },
];

// ─── LayeredText Intro ─────────────────────────────────────────────────────────

function LayeredTextIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | undefined>(undefined);
  const [isMounted, setIsMounted] = useState(false);
  const centerIndex = Math.floor(introLines.length / 2);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current) return;
    const container = containerRef.current;
    const paragraphs = container.querySelectorAll("p");
    const listItems = container.querySelectorAll("li");

    const getLH = () => (window.innerWidth >= 768 ? 60 : 35);
    let lh = getLH();

    const createTimeline = () => {
      if (timelineRef.current) timelineRef.current.kill();
      lh = getLH();

      timelineRef.current = gsap.timeline({ paused: true });
      timelineRef.current.to(paragraphs, {
        y: -lh,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.08
      });
    };

    createTimeline();

    // Entrance animation
    gsap.fromTo(listItems,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, stagger: 0.06, duration: 1.2, ease: "power4.out" }
    );

    const handleMouseEnter = () => timelineRef.current?.play();
    const handleMouseLeave = () => timelineRef.current?.reverse();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => createTimeline();
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      timelineRef.current?.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="font-black uppercase text-[var(--primary)] antialiased cursor-pointer overflow-hidden px-2 md:py-16 -mt-32"
      style={{
        fontSize: "clamp(3rem, 5.5vw, 4rem)",
        letterSpacing: "-0.00001em",
        lineHeight: 1,
      }}
    >
      <ul className="list-none p-0 m-0 flex flex-col items-start lg:items-end w-full">
        {introLines.map((line, i) => {
          const isEven = i % 2 === 0;
          // Use a fixed value for SSR to avoid ReferenceError: window is not defined
          const winWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
          const translateX = (i - centerIndex) * (winWidth >= 768 ? 35 : 20);

          return (
            <li
              key={i}
              className="overflow-hidden relative"
              style={{
                height: "clamp(35px, 5.5vw, 60px)",
                transform: `translateX(${translateX}px) skew(${isEven ? "60deg,-30deg" : "0deg,-30deg"}) scaleY(${isEven ? "0.66667" : "1.33333"})`,
                transformOrigin: "center center",
              }}
            >
              <p
                className="px-24 align-top whitespace-nowrap m-0 transition-colors duration-300"
                style={{
                  height: "clamp(35px, 5.5vw, 60px)",
                  lineHeight: "clamp(30px, 5.2vw, 55px)",
                }}
              >
                {line.top}
              </p>
              <p
                className="px-24 align-top whitespace-nowrap m-0 text-[var(--accent)]"
                style={{
                  height: "clamp(35px, 5.5vw, 60px)",
                  lineHeight: "clamp(30px, 5.2vw, 55px)",
                }}
              >
                {line.bottom}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ─── Pillar List + Image Panel ─────────────────────────────────────────────────

function PillarsInteractive() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const isHoverRef = useRef(false);

  useEffect(() => {
    isHoverRef.current = window.matchMedia("(hover: hover)").matches;
  }, []);

  const active = pillarsDisplay[activeIndex];

  const selectPillar = (i: number) => {
    if (i !== activeIndex) {
      setIsFlipped(false);
      setActiveIndex(i);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-14">

      {/* ── LEFT: Pillar list ── */}
      <div className="md:w-[54%] lg:w-[50%] flex flex-col justify-center">
        {pillarsDisplay.map((p, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={p.id}
              className="group w-full text-left cursor-pointer"
              onMouseEnter={() => isHoverRef.current && selectPillar(i)}
              onClick={() => {
                if (!isHoverRef.current) {
                  if (i === activeIndex) {
                    setIsFlipped((v) => !v);
                  } else {
                    selectPillar(i);
                  }
                }
              }}
            >
              <div
                className="flex items-center gap-4 md:gap-5 py-5 md:py-6 border-b transition-colors duration-300"
                style={{ borderColor: isActive ? "rgba(0,80,53,0.18)" : "rgba(0,80,53,0.06)" }}
              >
                {/* Number */}
                <span
                  className="text-[0.62rem] font-bold uppercase tracking-widest w-6 flex-shrink-0 transition-colors duration-400"
                  style={{ color: isActive ? "var(--primary)" : "rgba(0,0,0,0.25)" }}
                >
                  {p.number}
                </span>

                {/* Label + desc */}
                <div className="flex-1 min-w-0">
                  <span
                    className="block font-black uppercase leading-none transition-all duration-400"
                    style={{
                      fontSize: "clamp(1.55rem, 3.2vw, 2.8rem)",
                      letterSpacing: "-0.03em",
                      color: isActive ? "var(--primary)" : "rgba(0,0,0,0.22)",
                    }}
                  >
                    {p.label}
                  </span>

                  {/* Expandable short desc */}
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: isActive ? "80px" : "0px", marginTop: isActive ? "8px" : "0px", opacity: isActive ? 1 : 0 }}
                  >
                    <p className="text-[var(--ink-600)] text-sm font-medium leading-relaxed">
                      {p.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight
                  className="h-4 w-4 flex-shrink-0 transition-all duration-300"
                  style={{ color: isActive ? "var(--primary)" : "transparent" }}
                />
              </div>
            </button>
          );
        })}

        {/* Mobile-only: show info below list when flipped */}
        <div
          className="md:hidden overflow-hidden transition-all duration-500 mt-4"
          style={{ maxHeight: isFlipped ? "400px" : "0px", opacity: isFlipped ? 1 : 0 }}
        >
          <div
            className="rounded-[1.5rem] p-6 space-y-4"
            style={{ backgroundColor: active.color }}
          >
            <p className="text-white/55 text-xs italic leading-snug">&ldquo;{active.tagline}&rdquo;</p>
            <p className="text-white/90 text-sm font-medium leading-relaxed">{active.fullDesc}</p>
            <ul className="space-y-2">
              {active.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-white/75 text-sm">
                  <ChevronRight className="h-3.5 w-3.5 mt-0.5 text-white/35 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link
              href={active.href}
              className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[var(--accent)] hover:text-white transition-colors"
            >
              Read More <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Image flip panel ── */}
      <div
        className="hidden md:block md:w-[46%] lg:w-[50%] md:h-[500px] lg:h-[580px] cursor-pointer"
        style={{ perspective: "1300px" }}
        onMouseEnter={() => isHoverRef.current && setIsFlipped(true)}
        onMouseLeave={() => isHoverRef.current && setIsFlipped(false)}
        onClick={() => !isHoverRef.current && setIsFlipped((v) => !v)}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${active.label}`}
        onKeyDown={(e) => e.key === "Enter" && setIsFlipped((v) => !v)}
      >
        <motion.div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* ── Front: image ── */}
          <div
            className="absolute inset-0 rounded-lg overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* All 3 images in DOM, cross-fade via opacity */}
            {pillarsDisplay.map((p, i) => (
              <img
                key={p.id}
                src={p.image}
                alt={p.label}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                style={{ opacity: i === activeIndex ? 1 : 0 }}
              />
            ))}

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

            {/* Bottom-right hint */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-2 rounded-full border border-white/25 backdrop-blur-sm bg-white/10 text-white text-[0.62rem] font-bold uppercase tracking-widest transition-opacity duration-300 opacity-70 hover:opacity-100">
              Hover for details <ArrowRight className="h-3 w-3" />
            </div>

            {/* Active pillar label bottom-left */}
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-[0.62rem] font-bold uppercase tracking-widest text-white/50 block mb-1">
                {active.number}
              </span>
              <span className="text-xl font-black uppercase tracking-tight leading-none">
                {active.label}
              </span>
            </div>
          </div>

          {/* ── Back: description ── */}
          <div
            className="absolute inset-0 rounded-[2rem] overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              backgroundColor: active.color,
            }}
          >
            {/* ── Bubble Design Background ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-[10%] -left-[10%] w-64 h-64 rounded-full bg-white opacity-[0.15] blur-3xl" />
              <div className="absolute top-[20%] -right-[15%] w-80 h-80 rounded-full bg-black opacity-[0.2] blur-[100px]" />
              <div className="absolute bottom-[10%] left-[5%] w-40 h-40 rounded-full bg-white opacity-[0.12] blur-2xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(circle at 20% 30%, white 0%, transparent 10%), radial-gradient(circle at 80% 70%, white 0%, transparent 15%)",
                  filter: "blur(40px)"
                }}
              />
              {/* Distinct small bubbles */}
              <div className="absolute top-[15%] left-[20%] w-3 h-3 rounded-full bg-white/20 blur-[1px]" />
              <div className="absolute top-[45%] right-[15%] w-5 h-5 rounded-full bg-white/10 blur-[2px]" />
              <div className="absolute bottom-[25%] left-[40%] w-4 h-4 rounded-full bg-white/15 blur-[1px]" />
            </div>
            {/* Watermark number */}
            <div
              className="absolute -bottom-8 -right-4 font-black leading-none pointer-events-none select-none"
              style={{ fontSize: "clamp(10rem,22vw,18rem)", color: "rgba(255,255,255,0.04)", letterSpacing: "-0.05em" }}
            >
              {active.number}
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between p-10 lg:p-12">
              <div>
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-white/10 text-white mb-5">
                  {active.icon}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight leading-tight">
                  {active.label}
                </h3>
                <p className="text-white/50 text-sm italic mb-6 leading-snug">
                  &ldquo;{active.tagline}&rdquo;
                </p>
                <p className="text-white/85 text-base leading-relaxed font-medium mb-7">
                  {active.fullDesc}
                </p>
                <ul className="space-y-2.5">
                  {active.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-white/75 text-sm">
                      <ChevronRight className="h-3.5 w-3.5 mt-0.5 text-white/35 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={active.href}
                onClick={(e) => e.stopPropagation()}
                className="group/btn inline-flex items-center gap-3 self-start bg-white text-[var(--primary)] pl-1.5 pr-6 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:bg-[var(--accent)] hover:text-white mt-6"
              >
                <span
                  className="h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors group-hover/btn:bg-white/20"
                  style={{ backgroundColor: "rgba(0,80,53,0.08)" }}
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
                Read More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────

export function PillarsSection() {
  return (
    <ScrollThemeSection theme="#fffff">
      <div className="py-12 md:py-24 px-4 md:px-6 lg:px-8">
        {/* Outer rounded container */}
        {/* ── Two-column header ── */}
        <div className="flex flex-col max-w-[90rem] mx-auto lg:flex-row lg:items-end lg:gap-16  py-12 md:py-24 px-4 md:px-6 lg:px-8">
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
                Three pillars.<br />One mission.
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
        <div
          className="mx-auto max-w-[100rem] rounded-lg md:rounded-xl border"
          style={{ backgroundColor: "#f5f0e8", borderColor: "rgba(0,80,53,0.07)" }}
        >
          <div className="px-6 md:px-14 lg:px-20 pt-14 md:pt-20 pb-14 md:pb-20">



            {/* ── Interactive pillars ── */}
            <Reveal direction="up" delay={0.1} distance={30}>
              <PillarsInteractive />
            </Reveal>

            {/* ── Footer CTA ── */}
            <Reveal delay={0.2}>
              <div
                className="mt-14 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t"
                style={{ borderColor: "rgba(0,80,53,0.10)" }}
              >
                <p className="text-[var(--ink-600)] text-sm font-medium max-w-xs text-center sm:text-left leading-relaxed">
                  Explore all our programmes and discover how you can get involved.
                </p>
                <RippleButton
                  href="/programmes"
                  textColor="white"
                  className="group inline-flex items-center gap-3 bg-[var(--primary)] text-white pl-2 pr-7 py-2 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-[var(--primary-dark)] transition-colors flex-shrink-0"
                >
                  <span className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </span>
                  All Programmes
                </RippleButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </ScrollThemeSection>
  );
}
