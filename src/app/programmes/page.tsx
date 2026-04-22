"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Leaf, GraduationCap, ArrowUpRight } from "lucide-react";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { RippleButton } from "@/components/motion/RippleButton";
import { ScrollThemeSection } from "@/components/motion/ScrollThemeSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────

const programmes = [
  {
    num: "01",
    icon: Heart,
    label: "Healthcare & Sanitation Training",
    slug: "healthcare",
    tagline: "A health knowledge gap is both a human rights issue and an economic one.",
    summary:
      "Community Health Volunteer certification, WASH education, first aid, and maternal health awareness — for women, girls, and youth aged 15–35.",
    participants: "Women & youth aged 15–35",
    receive: ["Medical kits & PPE", "Hygiene kits", "Reference manuals", "CHV certification"],
    outcome: "Income-earning health practitioners",
    image: "/images/pillar-healthcare.png",
    accent: "#0a5c60",
    accentRgb: "10,92,96",
  },
  {
    num: "02",
    icon: Leaf,
    label: "Agribusiness & Rural Economic Diversification",
    slug: "agribusiness",
    tagline: "Turning subsistence farmers into resilient rural agri-entrepreneurs.",
    summary:
      "Climate-smart farming, post-harvest handling, value addition, cooperative formation, and buyer network linkages for smallholder farmers and rural youth.",
    participants: "Smallholder farmers & rural youth",
    receive: ["Seed packs & fertiliser", "Tools & irrigation", "Enterprise training", "Market access"],
    outcome: "Agri-entrepreneur + cooperative member",
    image: "/images/pillar-agribusiness.png",
    accent: "#b69000",
    accentRgb: "182,144,0",
  },
  {
    num: "03",
    icon: GraduationCap,
    label: "STEM Education Scholarships",
    slug: "stem",
    tagline: "Financial constraints should never extinguish scientific potential.",
    summary:
      "Scholarships, mentorship, career counselling, internship facilitation, and innovation exposure for academically promising students from low-income households.",
    participants: "High-potential students from low-income households",
    receive: ["Tuition support", "Mentorship access", "Career counselling", "Internship pathways"],
    outcome: "20 scholarships yr 1 → 100 by yr 3",
    image: "/images/pillar-stem.png",
    accent: "#e85a4a",
    accentRgb: "232,90,74",
  },
];

const steps = [
  { num: "01", title: "Assess", desc: "Community needs analysis, stakeholder mapping, and baseline asset inventory." },
  { num: "02", title: "Design", desc: "Co-creation of training curricula and selection of community-embedded trainers." },
  { num: "03", title: "Deliver", desc: "Skills training, scholarship disbursement, and agricultural input provision." },
  { num: "04", title: "Measure", desc: "Real-time outcome tracking, community feedback loops, and impact reporting." },
  { num: "05", title: "Scale", desc: "Replicating validated models across new communities and geographies." },
];

// ─── Components ───────────────────────────────────────────────────────────────

function ProgrammeCard({
  p,
  reverse,
}: {
  p: (typeof programmes)[0];
  reverse: boolean;
}) {
  const Icon = p.icon;
  return (
    <div className={`grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl ${reverse ? "lg:grid-flow-col-dense" : ""}`}>
      {/* Image */}
      <div className={`relative h-[280px] lg:h-full min-h-[360px] overflow-hidden group ${reverse ? "lg:col-start-2" : ""}`}>
        <Image
          src={p.image}
          alt={p.label}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Large number overlay */}
        <div
          className="absolute top-4 right-5 text-[6rem] font-extrabold leading-none opacity-20 select-none"
          style={{ color: p.accent, fontFamily: "var(--font-display)" }}
        >
          {p.num}
        </div>

        <div className="absolute bottom-5 left-5">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[0.6rem] font-bold uppercase tracking-widest"
            style={{ backgroundColor: `rgba(${p.accentRgb},0.25)`, border: `1px solid rgba(${p.accentRgb},0.4)`, color: "#fff" }}
          >
            <Icon className="h-3 w-3" />
            Pillar {p.num}
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col justify-between p-8 sm:p-10 lg:p-12 ${reverse ? "lg:col-start-1" : ""}`}
        style={{ backgroundColor: "#0a0f0d" }}
      >
        <div>
          <p className="text-[0.62rem] font-bold uppercase tracking-widest mb-4" style={{ color: p.accent }}>
            {p.num} — Programme
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug tracking-tight mb-4">
            {p.label}
          </h3>
          <p className="text-white/50 text-sm italic mb-6 leading-relaxed border-l-2 pl-4" style={{ borderColor: p.accent }}>
            &ldquo;{p.tagline}&rdquo;
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-8">{p.summary}</p>

          {/* Benefits */}
          <div className="mb-8">
            <p className="text-[0.58rem] font-bold uppercase tracking-widest text-white/30 mb-3">
              What participants receive
            </p>
            <div className="grid grid-cols-2 gap-2">
              {p.receive.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-white/55">
                  <span className="h-1 w-1 rounded-full flex-shrink-0" style={{ backgroundColor: p.accent }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Outcome chip */}
          <div
            className="inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-8"
            style={{ backgroundColor: `rgba(${p.accentRgb},0.15)`, border: `1px solid rgba(${p.accentRgb},0.25)`, color: p.accent }}
          >
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: p.accent }} />
            {p.outcome}
          </div>
        </div>

        <Link
          href={`/programmes/${p.slug}`}
          className="group/link inline-flex items-center gap-2 text-sm font-bold transition-all"
          style={{ color: p.accent }}
        >
          Full programme details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}

function Timeline() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const vLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = stepsRef.current;
    if (!container) return;
    const ctx = gsap.context(() => {
      const trigger = { trigger: container, start: "top 76%", once: true };
      gsap.from(lineRef.current, { scaleX: 0, transformOrigin: "left", duration: 1.5, ease: "power3.out", scrollTrigger: trigger });
      gsap.from(vLineRef.current, { scaleY: 0, transformOrigin: "top", duration: 1.5, ease: "power3.out", scrollTrigger: trigger });
      gsap.from(container.querySelectorAll(".step-dot"), { scale: 0, duration: 0.45, ease: "back.out(2.5)", stagger: 0.16, delay: 0.45, scrollTrigger: trigger });
      gsap.from(container.querySelectorAll(".step-body"), { opacity: 0, y: 14, duration: 0.65, ease: "power3.out", stagger: 0.13, delay: 0.6, scrollTrigger: trigger });
    }, stepsRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={stepsRef} className="relative">
      <div ref={lineRef} className="absolute top-[15px] left-0 right-0 h-px hidden sm:block" style={{ backgroundColor: "rgba(0,80,53,0.14)" }} />
      <div ref={vLineRef} className="absolute top-0 bottom-0 left-[14px] w-px sm:hidden" style={{ backgroundColor: "rgba(0,80,53,0.14)" }} />
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-5">
        {steps.map((step) => (
          <div key={step.num} className="relative pl-10 sm:pl-0">
            <div className="absolute sm:static left-0 top-0 flex-shrink-0 sm:mb-6">
              <div className="step-dot w-[30px] h-[30px] rounded-full border-2 border-[var(--primary)] bg-white flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
              </div>
            </div>
            <div className="step-body pb-2 pt-0.5 sm:pt-0">
              <span className="block text-[0.62rem] font-bold tracking-[0.12em] uppercase mb-2 text-[var(--primary)]">{step.num}</span>
              <h3 className="text-base sm:text-lg font-bold text-[var(--ink)] mb-1.5 leading-snug">{step.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--ink-600)]">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ProgrammesPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="pt-28 sm:pt-36 pb-16 overflow-hidden" style={{ backgroundColor: "#020d08" }}>
        <div className="max-w-[95%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/60 text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.10)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  Our Programmes
                </div>
              </Reveal>
              <SplitHeading
                as="h1"
                text="Three pillars. One integrated model."
                highlightWords={["Three", "One"]}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-3xl"
              />
            </div>
            <Reveal direction="right" delay={0.15}>
              <p className="text-white/45 text-sm sm:text-base leading-relaxed max-w-xs md:text-right">
                Healthcare, agribusiness, and STEM are interconnected pathways — not silos — to community resilience.
              </p>
            </Reveal>
          </div>

          {/* Three pillar image row */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 h-[200px] sm:h-[300px] lg:h-[380px]">
            {programmes.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.slug} direction="up" delay={i * 0.1}>
                  <div className="relative h-full rounded-xl overflow-hidden group cursor-pointer">
                    <Image src={p.image} alt={p.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                      <Icon className="h-5 w-5 mb-2 text-white/70" />
                      <p className="font-bold text-white text-xs sm:text-sm leading-snug">{p.label}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ PROGRAMME CARDS ══ */}
      <section className="py-0" style={{ backgroundColor: "#0a0f0d" }}>
        <div className="max-w-[95%] mx-auto py-4 sm:py-6 flex flex-col gap-4 sm:gap-5">
          {programmes.map((p, i) => (
            <Reveal key={p.slug} delay={0.05}>
              <ProgrammeCard p={p} reverse={i % 2 !== 0} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ OPERATING MODEL ══ */}
      <section className="section-pad bg-white">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-14 sm:mb-20">
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                  style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  Our Methodology
                </div>
              </Reveal>
              <SplitHeading
                as="h2"
                text="Five stages. One continuous cycle."
                highlightWords={["Five", "One"]}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--ink)] max-w-2xl"
              />
            </div>
            <Reveal delay={0.1}>
              <p className="text-[var(--ink-600)] text-sm sm:text-base font-medium leading-relaxed max-w-[300px] lg:text-right">
                Community-grounded, rigorously measured, and built to continue without us.
              </p>
            </Reveal>
          </div>
          <Timeline />
        </div>
      </section>

      {/* ══ PRINCIPLES ══ */}
      <ScrollThemeSection theme="#003624">
        <section className="section-pad text-white" style={{ backgroundColor: "#003624" }}>
          <div className="max-w-[95%] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <Reveal>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/60 text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                    Our Approach
                  </div>
                </Reveal>
                <SplitHeading
                  as="h2"
                  text="Non-cash. Community-owned. Employer-linked."
                  highlightWords={["Non-cash.", "Community-owned.", "Employer-linked."]}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-2xl"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-12">
              {[
                { title: "No direct cash transfers", body: "All support goes into tools, materials, training, and scholarships — fully traceable, zero leakage.", icon: "◈" },
                { title: "Community-owned delivery", body: "Programmes are co-designed with Community Advisory Committees and evaluated annually by independent bodies.", icon: "◎" },
                { title: "Employer-linked pathways", body: "STEM graduates connect to mentors and networks. Agri-graduates link to buyer cooperatives and input suppliers.", icon: "◇" },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.09}>
                  <div
                    className="rounded-2xl p-7 h-full flex flex-col gap-4"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span className="text-2xl" style={{ color: "var(--accent)" }}>{item.icon}</span>
                    <h3 className="font-bold text-white text-base tracking-tight">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed flex-1">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <RippleButton href="/get-involved/apply-training" variant="primary" size="md">
                  Apply for training
                </RippleButton>
                <RippleButton href="/get-involved/apply-scholarship" variant="ghost" size="md">
                  Apply for scholarship
                </RippleButton>
              </div>
            </Reveal>
          </div>
        </section>
      </ScrollThemeSection>
    </>
  );
}
