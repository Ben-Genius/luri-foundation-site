"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { RippleButton } from "@/components/motion/RippleButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollThemeSection } from "@/components/motion/ScrollThemeSection";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────

const programmes = [
  {
    num: "01",
    label: "Healthcare & Sanitation Training",
    slug: "healthcare",
    tagline: "A health knowledge gap is both a human rights issue and an economic one.",
    summary:
      "Community Health Volunteer certification, WASH education, first aid, and maternal health awareness — for women, girls, and youth aged 15–35.",
    receive: ["Medical kits & PPE", "Hygiene kits", "Reference manuals", "CHV certification"],
    outcome: "Income-earning health practitioners",
    image: "/images/pillar-healthcare.jpg",
    accent: "#0a5c60",
    accentRgb: "10,92,96",
  },
  {
    num: "02",
    label: "Agribusiness & Rural Economic Diversification",
    slug: "agribusiness",
    tagline: "Turning subsistence farmers into resilient rural agri-entrepreneurs.",
    summary:
      "Climate-smart farming, post-harvest handling, value addition, cooperative formation, and buyer network linkages for smallholder farmers and rural youth.",
    receive: ["Seed packs & fertiliser", "Tools & irrigation", "Enterprise training", "Market access"],
    outcome: "Agri-entrepreneur + cooperative member",
    image: "/images/pillar-agribusiness.jpg",
    accent: "#b69000",
    accentRgb: "182,144,0",
  },
  {
    num: "03",
    label: "STEM Education",
    slug: "stem",
    tagline: "Financial constraints should never extinguish scientific potential.",
    summary:
      "Scholarships, mentorship, career counselling, internship facilitation, and innovation exposure for academically promising students from low-income households.",
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

const principles = [
  {
    symbol: "◈",
    title: "No direct cash transfers",
    body: "All support goes into tools, materials, training, and scholarships — fully traceable, zero leakage.",
  },
  {
    symbol: "◎",
    title: "Community-owned delivery",
    body: "Programmes are co-designed with Community Advisory Committees and evaluated annually by independent bodies.",
  },
  {
    symbol: "◇",
    title: "Employer-linked pathways",
    body: "STEM graduates connect to mentors and networks. Agri-graduates link to buyer cooperatives and input suppliers.",
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────

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
      <div ref={lineRef} className="absolute top-[15px] left-0 right-0 h-px hidden sm:block" style={{ backgroundColor: "#e5e5e7" }} />
      <div ref={vLineRef} className="absolute top-0 bottom-0 left-[14px] w-px sm:hidden" style={{ backgroundColor: "#e5e5e7" }} />
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-6">
        {steps.map((step) => (
          <div key={step.num} className="relative pl-10 sm:pl-0">
            <div className="absolute sm:static left-0 top-0 flex-shrink-0 sm:mb-7">
              <div className="step-dot w-[30px] h-[30px] rounded-full border-2 border-[var(--primary)] bg-white flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
              </div>
            </div>
            <div className="step-body pb-2 pt-0.5 sm:pt-0">
              <span className="block text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-2 text-[var(--primary)]">{step.num}</span>
              <h3 className="text-base font-bold text-[var(--ink)] mb-1.5 leading-snug tracking-tight">{step.title}</h3>
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

      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative bg-white pt-28 sm:pt-36 lg:pt-52 pb-16 sm:pb-24 lg:pb-44 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(0,80,53,0.055) 0%, transparent 72%)",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.6rem] font-bold uppercase tracking-[0.22em] mb-6 sm:mb-10"
              style={{
                color: "var(--primary)",
                background: "rgba(0,80,53,0.07)",
                border: "1px solid rgba(0,80,53,0.12)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              Our Programmes
            </span>
          </Reveal>

          <SplitHeading
            as="h1"
            text="Three pillars. One integrated model."
            highlightWords={["Three", "One"]}
            highlightClass="text-[var(--primary)]"
            className="text-[clamp(3rem,9vw,7.5rem)] font-extrabold tracking-[-0.04em] leading-[0.91] text-[var(--ink)] mb-8"
            immediate
          />

          <Reveal delay={0.35}>
            <p className="text-[var(--ink-600)] text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto mb-10 sm:mb-14">
              Healthcare, agribusiness, and STEM are interconnected pathways —
              not silos — to community resilience in Northern Ghana.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="flex flex-col items-center gap-2 text-[var(--ink-400)]">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em]">Explore</span>
              <ArrowDown size={16} className="animate-bounce" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 2. PROGRAMME ROWS ════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ borderTop: "1px solid #e5e5e7" }}>
        <div className="max-w-[80%] mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-4 py-8 sm:py-12">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[var(--ink-400)] whitespace-nowrap">
                Three pillars
              </span>
              <div className="flex-1 h-px bg-[#e5e5e7]" />
            </div>
          </Reveal>

          {programmes.map((p, i) => {
            const reverse = i % 2 !== 0;
            return (
              <div key={p.slug} style={{ borderTop: "1px solid #e5e5e7" }}>
                <Reveal delay={0.05}>
                  <div
                    className={`py-12 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center`}
                  >
                    {/* Image */}
                    <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm ${reverse ? "lg:order-last" : ""}`}>
                      <Image
                        src={p.image}
                        alt={p.label}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-5">
                      {/* Number row */}
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[0.6rem] font-black uppercase tracking-[0.22em]"
                          style={{ color: p.accent }}
                        >
                          {p.num}
                        </span>
                        <div
                          className="h-px w-8 opacity-30"
                          style={{ backgroundColor: p.accent }}
                        />
                        <span className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[var(--ink-400)]">
                          Programme
                        </span>
                      </div>

                      {/* Heading */}
                      <h2
                        className="font-extrabold tracking-[-0.035em] leading-[1.05] text-[var(--ink)]"
                        style={{ fontSize: "clamp(1.6rem,3.5vw,2.5rem)" }}
                      >
                        {p.label}
                      </h2>

                      {/* Tagline */}
                      <p
                        className="text-sm sm:text-base italic text-[var(--ink-600)] leading-relaxed border-l-[2px] pl-4"
                        style={{ borderColor: p.accent }}
                      >
                        &ldquo;{p.tagline}&rdquo;
                      </p>

                      {/* Summary */}
                      <p className="text-sm text-[var(--ink-600)] leading-relaxed">
                        {p.summary}
                      </p>

                      {/* What participants receive */}
                      <div>
                        <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[var(--ink-400)] mb-3">
                          What participants receive
                        </p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {p.receive.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs text-[var(--ink-600)]">
                              <span
                                className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: p.accent }}
                              />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer row */}
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-5" style={{ borderTop: "1px solid #e5e5e7" }}>
                        <span
                          className="text-[0.58rem] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full"
                          style={{
                            color: p.accent,
                            background: `rgba(${p.accentRgb},0.08)`,
                            border: `1px solid rgba(${p.accentRgb},0.2)`,
                          }}
                        >
                          <span
                            className="inline-block h-1.5 w-1.5 rounded-full mr-1.5 animate-pulse"
                            style={{ backgroundColor: p.accent }}
                          />
                          {p.outcome}
                        </span>
                        <Link
                          href={`/programmes/${p.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-60"
                          style={{ color: p.accent }}
                        >
                          Full details
                          <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
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
          <div className="max-w-[80%] mx-auto">
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
                  highlightWords={["Non-cash.", "Community-owned.", "Employer-linked"]}
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
                <RippleButton href="/get-involved/apply-scholarship" textColor="white" variant="ghost" size="md">
                  Apply for scholarship
                </RippleButton>
              </div>
            </Reveal>
          </div>
        </section>
      </ScrollThemeSection>
      <div className="h-4"></div>
    </>
  );
}
