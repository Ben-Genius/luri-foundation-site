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
    image: "/images/pillar-healthcare.jpg",
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
    image: "/images/pillar-agribusiness.jpg",
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
  const [winWidth, setWinWidth] = useState(1200);
  const centerIndex = Math.floor(introLines.length / 2);

  /* Track window width for responsive geometry */
  useEffect(() => {
    const update = () => setWinWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const lines = container.querySelectorAll<HTMLLIElement>("li");

    const createTimeline = () => {
      if (timelineRef.current) timelineRef.current.kill();
      timelineRef.current = gsap.timeline({ paused: true });
      lines.forEach((line, i) => {
        const pTags = line.querySelectorAll("p");
        timelineRef.current!.to(pTags, {
          yPercent: -100,
          duration: 1.1,
          ease: "expo.inOut",
        }, i * 0.04);
      });
    };

    createTimeline();

    gsap.fromTo(lines,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.07,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: container, start: "top 88%" },
      }
    );

    /* Hover only on pointer devices */
    const canHover = window.matchMedia("(hover: hover)").matches;
    if (canHover) {
      const onEnter = () => {
        timelineRef.current?.play();
        gsap.to(container, { scale: 1.015, duration: 0.6, ease: "power3.out" });
      };
      const onLeave = () => {
        timelineRef.current?.reverse();
        gsap.to(container, { scale: 1, duration: 0.8, ease: "power3.out" });
      };
      container.addEventListener("mouseenter", onEnter);
      container.addEventListener("mouseleave", onLeave);
      return () => {
        container.removeEventListener("mouseenter", onEnter);
        container.removeEventListener("mouseleave", onLeave);
        timelineRef.current?.kill();
      };
    }

    return () => timelineRef.current?.kill();
  }, [winWidth]); // re-init when layout changes

  /* ── Responsive geometry ── */
  const isMobile = winWidth < 640;
  const isTablet = winWidth >= 640 && winWidth < 1024;

  const lineHeight = isMobile
    ? "clamp(26px, 7.5vw, 42px)"
    : isTablet
      ? "clamp(30px, 5vw, 52px)"
      : "clamp(32px, 5.5vw, 60px)";

  const fontSize = isMobile
    ? "clamp(1.5rem, 7.5vw, 2.4rem)"
    : isTablet
      ? "clamp(1.8rem, 4.5vw, 3rem)"
      : "clamp(2rem, 5.5vw, 4rem)";

  const getTranslateX = (i: number) => {
    if (isMobile) return 0;
    if (isTablet) return (i - centerIndex) * 18;
    return (i - centerIndex) * 35;
  };

  const getTransform = (i: number, isEven: boolean) => {
    const tx = getTranslateX(i);
    if (isMobile) return `translateX(${tx}px)`;
    if (isTablet) return `translateX(${tx}px) skew(${isEven ? "30deg,-15deg" : "0deg,-15deg"}) scaleY(${isEven ? 0.8 : 1.2})`;
    return `translateX(${tx}px) skew(${isEven ? "60deg,-30deg" : "0deg,-30deg"}) scaleY(${isEven ? 0.66667 : 1.33333})`;
  };

  return (
    <div
      ref={containerRef}
      className="font-black uppercase text-[var(--primary)] antialiased overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 w-full"
      style={{ fontSize, letterSpacing: "-0.01em", lineHeight: 1 }}
    >
      <ul className="list-none p-0 m-0 flex flex-col w-full items-center">
        {introLines.map((line, i) => {
          const isEven = i % 2 === 0;
          return (
            <li
              key={i}
              className="overflow-hidden relative px-32" /* Increased px to prevent high-angle skew clipping */
              style={{
                height: lineHeight,
                transform: getTransform(i, isEven),
                transformOrigin: "center center",
                cursor: "default",
              }}
            >
              <p
                className="align-top whitespace-nowrap m-0 transition-colors duration-300 text-center"
                style={{ height: lineHeight, lineHeight }}
              >
                {line.top}
              </p>
              <p
                className="align-top whitespace-nowrap m-0 text-[var(--accent)] text-center"
                style={{ height: lineHeight, lineHeight }}
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
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-14 w-full">

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

                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: isActive ? "80px" : "0px", marginTop: isActive ? "8px" : "0px", opacity: isActive ? 1 : 0 }}
                  >
                    <p className="text-[var(--ink-600)] text-xs sm:text-sm font-medium leading-relaxed">
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

        {/* Mobile: show details below list */}
        <div
          className="md:hidden overflow-hidden transition-all duration-500 mt-4"
          style={{ maxHeight: isFlipped ? "400px" : "0px", opacity: isFlipped ? 1 : 0 }}
        >
          <div
            className="rounded-[1.25rem] sm:rounded-[1.5rem] p-5 sm:p-6 space-y-4"
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
            <RippleButton
              href={active.href}
              variant="secondary"
              textColor="white"
              className="mt-4"
            >
              Read More <ArrowRight className="h-3.5 w-3.5" />
            </RippleButton>
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
            {pillarsDisplay.map((p, i) => (
              <img
                key={p.id}
                src={p.image}
                alt={p.label}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                style={{ opacity: i === activeIndex ? 1 : 0 }}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-2 rounded-full border border-white/25 backdrop-blur-sm bg-white/10 text-white text-[0.62rem] font-bold uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity">
              Hover for details <ArrowRight className="h-3 w-3" />
            </div>

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
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-[10%] -left-[10%] w-64 h-64 rounded-full bg-white opacity-[0.15] blur-3xl" />
              <div className="absolute top-[20%] -right-[15%] w-80 h-80 rounded-full bg-black opacity-[0.2] blur-[100px]" />
              <div className="absolute bottom-[10%] left-[5%] w-40 h-40 rounded-full bg-white opacity-[0.12] blur-2xl" />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(circle at 20% 30%, white 0%, transparent 10%), radial-gradient(circle at 80% 70%, white 0%, transparent 15%)",
                  filter: "blur(40px)",
                }}
              />
              <div className="absolute top-[15%] left-[20%] w-3 h-3 rounded-full bg-white/20 blur-[1px]" />
              <div className="absolute top-[45%] right-[15%] w-5 h-5 rounded-full bg-white/10 blur-[2px]" />
              <div className="absolute bottom-[25%] left-[40%] w-4 h-4 rounded-full bg-white/15 blur-[1px]" />
            </div>

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

              <RippleButton
                href={active.href}
                variant="secondary"
                textColor="white"
                className="mt-6"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                Read More
              </RippleButton>
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
    <ScrollThemeSection theme="#ffffff">
      {/* ── Two-column header ── */}
      <div className="flex flex-col max-w-[90rem] mx-auto lg:flex-row lg:items-end lg:gap-16 py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary)] tracking-tight leading-tight mb-4">
              Three pillars.<br />One mission.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[var(--ink-600)] text-sm sm:text-base font-medium leading-relaxed max-w-[340px]">
              Each programme area addresses a specific barrier to economic participation
              faced by individuals in rural and peri-urban Ghana.
            </p>
          </Reveal>

          {/* Stat chips */}
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
              {[
                { val: "600+", label: "Trained by Year 3" },
                { val: "100", label: "STEM Scholarships" },
                { val: "60%", label: "Female Beneficiaries" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col px-3 sm:px-4 py-2 sm:py-3 rounded-2xl border"
                  style={{ backgroundColor: "rgba(0,80,53,0.04)", borderColor: "rgba(0,80,53,0.1)" }}
                >
                  <span className="text-lg sm:text-xl font-black text-[var(--primary)] leading-none tracking-tight">
                    {s.val}
                  </span>
                  <span className="text-[0.58rem] sm:text-[0.62rem] font-semibold text-[var(--ink-600)] uppercase tracking-widest mt-1">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: LayeredText */}
        <div className="lg:w-7/12 overflow-hidden">
          <LayeredTextIntro />
        </div>
      </div>

      {/* ── Interactive pillars container ── */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 pb-12 sm:pb-16 md:pb-24 max-w-[95%] mx-auto">
        <div
          className="rounded-xl sm:rounded-2xl md:rounded-xl border"
          style={{ backgroundColor: "#f5f0e8", borderColor: "rgba(0,80,53,0.07)" }}
        >
          <div className="px-4 sm:px-8 md:px-14 lg:px-20 pt-10 sm:pt-14 md:pt-20 pb-10 sm:pb-14 md:pb-20">

            <Reveal direction="up" delay={0.1} distance={30}>
              <PillarsInteractive />
            </Reveal>

            {/* Footer CTA */}
            <Reveal delay={0.2}>
              <div
                className="mt-10 sm:mt-14 pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 border-t"
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
