import Image from "next/image";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { RippleButton } from "@/components/motion/RippleButton";
import { ScrollThemeSection } from "@/components/motion/ScrollThemeSection";
import { OrgChart } from "@/components/sections/OrgChart";

// ─── Data ─────────────────────────────────────────────────────────────────────

const achievements = [
  { label: "Individuals Trained", value: "150+", sub: "Year-one target" },
  { label: "STEM Scholarships", value: "20", sub: "Low-income households" },
  { label: "Businesses Launched", value: "15+", sub: "By programme graduates" },
  { label: "Female Beneficiaries", value: "60%", sub: "Of all participants" },
];

const values = [
  {
    num: "01",
    title: "People First",
    desc: "Every decision centres on the dignity, voice, and wellbeing of the communities we serve. Beneficiaries are partners, not recipients.",
    style: { backgroundColor: "rgba(255,255,255,0.10)" },
    hover: "hover:rotate-1",
    colSpan: "lg:col-span-2",
    minH: "min-h-[180px] sm:min-h-[220px]",
  },
  {
    num: "02",
    title: "Integrity",
    desc: "Full transparency in governance, finance, and reporting. Every GHS traced to a direct outcome.",
    style: { backgroundColor: "rgba(182,144,0,0.20)" },
    hover: "hover:-rotate-2",
    colSpan: "lg:col-span-1",
    minH: "min-h-[180px] sm:min-h-[220px]",
  },
  {
    num: "03",
    title: "Partnership",
    desc: "Formal MoUs, community advisory committees, and peer accountability at every level.",
    style: { backgroundColor: "rgba(255,255,255,0.05)" },
    hover: "hover:rotate-2",
    colSpan: "lg:col-span-1",
    minH: "min-h-[160px] sm:min-h-[200px]",
  },
  {
    num: "04",
    title: "Sustainability",
    desc: "We build systems that outlast project cycles and create generational change.",
    style: { backgroundColor: "rgba(255,255,255,0.08)" },
    hover: "hover:-rotate-1",
    colSpan: "lg:col-span-1",
    minH: "min-h-[160px] sm:min-h-[200px]",
  },
  {
    num: "05",
    title: "Equity",
    desc: "We prioritise the most marginalised — women, youth, and rural dwellers — closing gender and economic gaps simultaneously.",
    style: { backgroundColor: "rgba(182,144,0,0.15)" },
    hover: "hover:rotate-1",
    colSpan: "lg:col-span-1",
    minH: "min-h-[160px] sm:min-h-[200px]",
  },
  {
    num: "06",
    title: "Excellence",
    desc: "High-quality training, rigorous outcomes measurement, and continuous learning across all programmes.",
    style: { backgroundColor: "rgba(255,255,255,0.06)" },
    hover: "hover:-rotate-1",
    colSpan: "lg:col-span-3",
    minH: "min-h-[120px] sm:min-h-[150px]",
  },
];

const govPrinciples = [
  {
    title: "Transparency",
    body: "All financial and programmatic reports are publicly available and independently verified.",
    icon: "◈",
  },
  {
    title: "Community Representation",
    body: "The Community Advisory Committee has formal representation in all programme decisions.",
    icon: "◎",
  },
  {
    title: "Partnership Management",
    body: "Formal MoUs govern external relationships with clear roles and accountability structures.",
    icon: "◇",
  },
  {
    title: "Conflict of Interest",
    body: "Board members disclose any interests and recuse themselves from conflicted decisions.",
    icon: "◉",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export const metadata = {
  title: "About Us — LURI Foundation",
  description:
    "Our story, values, governance, and the team driving sustainable change in Upper West Region, Ghana.",
};

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO — image grid (About3 style, homepage polish)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pt-28 sm:pt-36 pb-16 bg-white">
        <div className="max-w-[90%] mx-auto">

          {/* Header */}
          <div className="mb-10 sm:mb-14 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                  style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  About LURI Foundation
                </div>
              </Reveal>
              <SplitHeading
                as="h1"
                text="Built from the field. Accountable to the community."
                highlightWords={["field.", "community."]}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--ink)] leading-tight tracking-tight"
              />
            </div>
            <Reveal direction="right" delay={0.15}>
              <p className="text-[var(--ink-600)] text-base leading-relaxed md:max-w-sm md:ml-auto">
                From Accra HQ to Kulfuo operations, every decision at LURI Foundation is grounded in
                community-first values, rigorous governance, and a clear theory of change.
              </p>
            </Reveal>
          </div>

          {/* Image grid */}
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
            <Reveal direction="up" delay={0.05} className="lg:col-span-2">
              <div className="relative h-[340px] sm:h-[460px] lg:h-[540px] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/hero-luri.png"
                  alt="LURI Foundation community programme"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-wider">
                      Kulfuo, Upper West Region
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Breakout card */}
              <Reveal direction="up" delay={0.12}>
                <div
                  className="rounded-2xl p-7 flex flex-col gap-5 h-fit"
                  style={{
                    backgroundColor: "rgba(0,80,53,0.05)",
                    border: "1px solid rgba(0,80,53,0.12)",
                  }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="LURI Foundation"
                    width={120}
                    height={40}
                    className="h-9 w-auto object-contain"
                  />
                  <div>
                    <p className="font-bold text-[var(--ink)] mb-1.5 leading-snug">
                      Three pillars. One ecosystem.
                    </p>
                    <p className="text-sm text-[var(--ink-600)] leading-relaxed">
                      Healthcare · Agribusiness · STEM Education — interconnected to build lasting
                      community resilience.
                    </p>
                  </div>
                  <RippleButton href="/programmes" variant="secondary" textColor="white" size="sm" className="w-fit">
                    Our programmes →
                  </RippleButton>
                </div>
              </Reveal>

              {/* Secondary image */}
              <Reveal direction="up" delay={0.18} className="grow min-h-[180px]">
                <div className="relative h-full min-h-[200px] rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/luri/operations.png"
                    alt="LURI field operations"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                      <span className="text-[var(--primary)] text-[0.58rem] font-bold uppercase tracking-wider">
                        Field Operations
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. ACHIEVEMENT NUMBERS — dark card with real stats
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#faf9f6]">
        <div className="max-w-[90%] mx-auto">
          <Reveal>
            <div
              className="rounded-2xl p-10 md:p-16 relative overflow-hidden"
              style={{ backgroundColor: "var(--primary-dark)" }}
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div>
                  <p className="text-[0.62rem] font-bold uppercase tracking-widest text-white/35 mb-3">
                    Impact at a glance
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Year-one programme outcomes.
                  </h2>
                </div>
                <p className="text-white/45 text-sm leading-relaxed max-w-xs md:text-right">
                  All interventions are non-cash. Every outcome is independently verified and
                  publicly reported.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                {achievements.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 text-center md:text-left md:border-l md:border-white/10 md:pl-8 first:border-l-0 first:pl-0"
                  >
                    <span
                      className="text-4xl sm:text-5xl font-extrabold leading-none tracking-tight"
                      style={{ color: "var(--accent)" }}
                    >
                      {item.value}
                    </span>
                    <p className="text-sm font-semibold text-white mt-1">{item.label}</p>
                    <p className="text-[0.65rem] text-white/40 uppercase tracking-wider">{item.sub}</p>
                  </div>
                ))}
              </div>

              {/* Decorative grid overlay */}
              <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-70 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. VISION & MISSION — dark editorial split
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-pad" style={{ backgroundColor: "#020d08" }}>
        <div className="max-w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 sm:mb-14">
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/60 text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.10)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  What we believe
                </div>
              </Reveal>
              <SplitHeading
                as="h2"
                text="A clear vision. A purposeful mission."
                highlightWords={["vision.", "mission."]}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            <Reveal direction="left" delay={0.1}>
              <div
                className="rounded-2xl p-8 sm:p-10 flex flex-col gap-6 h-full"
                style={{
                  backgroundColor: "rgba(0,80,53,0.25)",
                  border: "1px solid rgba(0,80,53,0.35)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-t-full bg-[var(--primary)]" />
                  <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[var(--primary)] opacity-80">
                    Vision
                  </span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white leading-snug italic">
                  &ldquo;Empowering Communities through Sustainable Livelihood Initiatives.&rdquo;
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  A Ghana — and ultimately an Africa — where every individual, regardless of
                  geography or socioeconomic background, has access to the skills, education, and
                  resources needed to build a dignified and self-sustaining life.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div
                className="rounded-2xl p-8 sm:p-10 flex flex-col gap-6 h-full"
                style={{
                  backgroundColor: "rgba(182,144,0,0.12)",
                  border: "1px solid rgba(182,144,0,0.25)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-t-full bg-[var(--accent)]" />
                  <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[var(--accent)] opacity-80">
                    Mission
                  </span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Equipping underserved regions with practical skills, scholarships, and inputs.
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  To enable economic independence, improve health outcomes, and support meaningful
                  contribution to local and national development across Ghana.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. CORE VALUES — bento grid (mirrors ValuesSection)
      ══════════════════════════════════════════════════════════════════════ */}
      <ScrollThemeSection theme="#005035">
        <section
          className="section-pad text-white overflow-hidden relative"
          style={{ backgroundColor: "#005035" }}
        >
          <div className="max-w-[90%] mx-auto">
            <Reveal>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/70 text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  borderColor: "rgba(255,255,255,0.15)",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                Our Foundation
              </div>
            </Reveal>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 sm:gap-6 mb-10 sm:mb-14">
              <SplitHeading
                as="h2"
                highlightWords={["drive", "decision"]}
                text="Values that drive every decision."
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-2xl"
              />
              <Reveal delay={0.1}>
                <p className="text-white/60 text-sm sm:text-base font-medium leading-relaxed max-w-sm md:text-right">
                  Six principles that govern how we design programmes, steward resources, and show up
                  for the communities that trust us.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.06} className={v.colSpan}>
                  <div
                    className={[
                      v.minH,
                      v.hover,
                      "h-full rounded-xl border border-white/10 p-5 sm:p-7 flex flex-col justify-between",
                      "transition-all duration-200 ease-in-out cursor-default",
                      "hover:border-white/25 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]",
                    ].join(" ")}
                    style={v.style}
                  >
                    <span className="text-[0.65rem] font-bold tracking-[0.12em] uppercase text-white/30">
                      {v.num}
                    </span>
                    <div>
                      <h3 className="ed-title text-lg sm:text-xl md:text-2xl mb-1.5 sm:mb-2 text-white">
                        {v.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/50 leading-relaxed max-w-xs">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollThemeSection>

      {/* ══════════════════════════════════════════════════════════════════════
          5. FOUNDING STORY — image masonry + editorial prose
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="max-w-[90%] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                  style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  Our Story
                </div>
              </Reveal>
              <SplitHeading
                as="h2"
                text="From a community gap to a structured programme."
                highlightWords={["gap", "programme."]}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--ink)] max-w-2xl tracking-tight"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Prose left */}
            <div className="lg:col-span-2 flex flex-col justify-center gap-5">
              <Reveal>
                <p className="text-[var(--ink-600)] text-base leading-relaxed">
                  LURI Foundation was founded to address a persistent gap in the Upper West Region:
                  a wealth of human potential constrained by lack of access to practical skills,
                  agricultural inputs, and educational pathways.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[var(--ink-600)] text-base leading-relaxed">
                  Operating from Accra with programme delivery in Kulfuo, LURI is structured around
                  three interconnected pillars — healthcare, agribusiness, and STEM education — as
                  parts of one community development ecosystem.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div
                  className="rounded-xl p-5 sm:p-6"
                  style={{ backgroundColor: "rgba(0,80,53,0.06)", border: "1px solid rgba(0,80,53,0.12)" }}
                >
                  <p className="font-bold text-[var(--primary)] text-base leading-snug">
                    Every intervention is non-cash.<br />
                    Every outcome is measured.<br />
                    Every report is published.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <RippleButton href="/impact" variant="secondary" textColor="white" size="md" className="w-fit">
                  See our impact data →
                </RippleButton>
              </Reveal>
            </div>

            {/* Image masonry right */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-4 sm:gap-5">
              <Reveal direction="up" delay={0.1} className="col-span-2">
                <div className="relative h-[200px] sm:h-[260px] rounded-xl overflow-hidden group">
                  <Image
                    src="/images/luri/agribusiness.png"
                    alt="Agribusiness training in Kulfuo"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <span className="text-[var(--primary)] text-[0.58rem] font-bold uppercase tracking-wider">
                        Agribusiness Training
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.15}>
                <div className="relative h-[180px] sm:h-[220px] rounded-xl overflow-hidden group">
                  <Image
                    src="/images/luri/upper-west.png"
                    alt="Upper West Region"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <span className="text-[var(--primary)] text-[0.58rem] font-bold uppercase tracking-wider">
                        Upper West Region
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <div
                  className="h-[180px] sm:h-[220px] rounded-xl flex flex-col items-center justify-center text-center p-6"
                  style={{ backgroundColor: "var(--primary)", color: "white" }}
                >
                  <div className="w-6 h-6 rounded-t-full bg-[var(--accent)] mb-4" />
                  <p className="font-bold text-base uppercase tracking-tight">Zero Cash Transfers</p>
                  <p className="text-white/60 text-xs mt-2 leading-relaxed">
                    All support is delivered as skills, tools, and scholarships
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. GOVERNANCE — dark section, org chart + principles
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-pad overflow-hidden" style={{ backgroundColor: "#020d08" }}>
        <div className="max-w-[95%] mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/60 text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.10)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  Structure & Accountability
                </div>
              </Reveal>
              <SplitHeading
                as="h2"
                text="Transparent governance. Community accountability."
                highlightWords={["Transparent", "accountability."]}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl"
              />
            </div>
            <Reveal delay={0.1}>
              <p className="text-white/45 text-sm leading-relaxed max-w-xs md:text-right">
                Structured from board to field — every role is defined, every decision is traceable.
              </p>
            </Reveal>
          </div>

          {/* Org chart */}
          <Reveal delay={0.1}>
            <OrgChart />
          </Reveal>

          {/* Governance principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12">
            {govPrinciples.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="h-full">
                <div
                  className="rounded-2xl p-6 sm:p-7 flex gap-5 h-full"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span
                    className="text-2xl leading-none flex-shrink-0 mt-0.5"
                    style={{ color: "var(--accent)" }}
                  >
                    {p.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-white mb-1.5 tracking-tight">{p.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal delay={0.3}>
            <div
              className="rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
              style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div>
                <p className="font-bold text-white text-lg mb-1">
                  All reports are publicly available.
                </p>
                <p className="text-white/40 text-sm">
                  We are built to be accountable — to our donors, partners, and communities.
                </p>
              </div>
              <RippleButton href="/impact" variant="secondary" textColor="white" size="md" className="flex-shrink-0">
                View our impact data
              </RippleButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
