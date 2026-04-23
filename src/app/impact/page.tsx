import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { CountUp } from "@/components/motion/CountUp";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { RippleButton } from "@/components/motion/RippleButton";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { kpis } from "@/lib/content/siteContent";
import { FileText } from "lucide-react";

const melSteps = [
  { num: "01", label: "Plan", body: "Define indicators and data-collection methods before each programme cycle." },
  { num: "02", label: "Monitor", body: "Ongoing participant tracking with field officers in Kulfuo." },
  { num: "03", label: "Evaluate", body: "Annual independent evaluation against published KPI targets." },
  { num: "04", label: "Learn", body: "Findings shared openly — what worked, what didn't, and why." },
  { num: "05", label: "Adapt", body: "Programme design updated for the next cycle based on evidence." },
];

const reports = [
  {
    year: "2024",
    title: "Annual Report — Year 1",
    description: "Full programme outcomes, financial statements, and KPI performance against published targets.",
    status: "Coming soon",
  },
];

export const metadata = {
  title: "Impact — LURI Foundation",
  description:
    "KPIs, community stories, and annual reports from LURI Foundation's programmes in Upper West Region, Ghana.",
};

export default function ImpactPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pt-28 sm:pt-36 pb-16 bg-white">
        <div className="max-w-[80%] mx-auto">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
              style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              Impact & Results
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <SplitHeading
              as="h1"
              text="Published KPIs. Independent evaluation. Zero spin."
              highlightWords={["KPIs.", "Zero spin."]}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--ink)] leading-tight tracking-tight"
            />
            <Reveal direction="right" delay={0.15}>
              <p className="text-[var(--ink-600)] text-base leading-relaxed md:max-w-sm md:ml-auto">
                Impact at LURI is not a narrative — it&apos;s a number. We commit to targets before
                programmes launch, measure independently, and publish everything.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. KPI NUMBERS — dark card with accent stats
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#faf9f6]">
        <div className="max-w-[80%] mx-auto">
          <Reveal>
            <div
              className="rounded-lg p-10 md:p-16 relative overflow-hidden"
              style={{ backgroundColor: "var(--primary-dark)" }}
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div>
                  <p className="text-[0.62rem] font-bold uppercase tracking-widest text-white/35 mb-3">
                    Year 1 targets
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Our committed outcomes.
                  </h2>
                </div>
                <p className="text-white/45 text-sm leading-relaxed max-w-xs md:text-right">
                  All outcomes are independently verified and publicly reported. Year 3 targets are
                  set before programmes begin.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
                {kpis.map((kpi, i) => (
                  <div
                    key={kpi.label}
                    className="flex flex-col gap-1 md:border-l md:border-white/10 md:pl-8 [&:nth-child(3n+1)]:border-l-0 [&:nth-child(3n+1)]:pl-0"
                  >
                    <span
                      className="text-4xl sm:text-5xl font-extrabold leading-none tracking-tight"
                      style={{ color: "var(--accent)" }}
                    >
                      <CountUp
                        to={parseInt(kpi.y1.replace(/[^0-9]/g, "")) || 0}
                        suffix={kpi.y1.includes("%") ? "%" : kpi.suffix ?? ""}
                      />
                    </span>
                    <p className="text-sm font-semibold text-white mt-1">{kpi.label}</p>
                    <p className="text-[0.65rem] text-white/40 uppercase tracking-wider">
                      Year 3 target: {kpi.y3}
                    </p>
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
          3. KPI TABLE — full indicator breakdown
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="max-w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-5"
                  style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  Full indicator set
                </div>
              </Reveal>
              <SplitHeading
                as="h2"
                text="Year 1 vs Year 3 targets."
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--ink)] tracking-tight"
              />
            </div>
            <Reveal delay={0.1}>
              <p className="text-[var(--ink-600)] text-sm leading-relaxed max-w-xs md:text-right">
                Targets are published at programme launch. Results are reported annually by an
                independent evaluator.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="overflow-x-auto rounded-xl border border-[var(--primary)]/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--primary)] text-white">
                    <th className="text-left px-6 py-4 font-semibold">Indicator</th>
                    <th className="text-center px-6 py-4 font-semibold">Year 1</th>
                    <th className="text-center px-6 py-4 font-semibold">Year 3</th>
                  </tr>
                </thead>
                <tbody>
                  {kpis.map((kpi, i) => (
                    <tr
                      key={kpi.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-[#faf9f6]"}
                    >
                      <td className="px-6 py-4 text-[var(--ink-600,#374151)]">{kpi.label}</td>
                      <td className="px-6 py-4 text-center font-bold text-[var(--primary)]">{kpi.y1}</td>
                      <td className="px-6 py-4 text-center font-semibold text-[var(--ink)]/40">{kpi.y3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. COMMUNITY STORIES
      ══════════════════════════════════════════════════════════════════════ */}
      <StoriesSection />

      {/* ══════════════════════════════════════════════════════════════════════
          5. MEL CYCLE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-pad overflow-hidden" style={{ backgroundColor: "#020d08" }}>
        <div className="max-w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/60 text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.10)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  How we measure
                </div>
              </Reveal>
              <SplitHeading
                as="h2"
                text="A rigorous learning cycle — not a checkbox."
                highlightWords={["learning cycle"]}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl"
              />
            </div>
            <Reveal delay={0.1}>
              <p className="text-white/45 text-sm leading-relaxed max-w-xs md:text-right">
                Every programme goes through five stages — from pre-launch planning to post-cycle
                adaptation.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {melSteps.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.08}>
                <div
                  className="flex flex-col rounded-xl p-6 h-full"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span className="text-[0.65rem] font-bold tracking-[0.12em] uppercase text-white/30 mb-4">
                    {step.num}
                  </span>
                  <p className="font-bold text-white text-base mb-2"
                    style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-white/50 leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <p className="mt-10 pt-8 border-t border-white/8 text-white/40 text-sm">
              Annual independent evaluation is conducted by an external evaluator. All findings are
              published in the Annual Report alongside the following year&apos;s programme adjustments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. ANNUAL REPORTS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-[#faf9f6]">
        <div className="max-w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-5"
                  style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  Annual Reports
                </div>
              </Reveal>
              <SplitHeading
                as="h2"
                text="Every finding. Publicly available."
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--ink)] tracking-tight"
              />
            </div>
            <Reveal delay={0.1}>
              <p className="text-[var(--ink-600)] text-sm leading-relaxed max-w-xs md:text-right">
                Reports include programme outcomes, financial statements, and adjustments for the
                following year.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reports.map((report) => (
              <Reveal key={report.year}>
                <div
                  className="rounded-xl p-6 sm:p-8 flex flex-col gap-5 h-full"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid rgba(0,80,53,0.10)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl flex-shrink-0"
                      style={{ backgroundColor: "rgba(0,80,53,0.08)" }}
                    >
                      <FileText className="h-5 w-5 text-[var(--primary)]" />
                    </div>
                    <span
                      className="text-[0.58rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(182,144,0,0.12)",
                        color: "var(--accent)",
                      }}
                    >
                      {report.status}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--primary)]/50 mb-1">
                      {report.year}
                    </p>
                    <h3 className="font-bold text-[var(--ink)] text-base mb-2 leading-snug">
                      {report.title}
                    </h3>
                    <p className="text-sm text-[var(--ink-600)] leading-relaxed">
                      {report.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Accountability card */}
            <Reveal delay={0.12}>
              <div
                className="rounded-xl p-6 sm:p-8 flex flex-col justify-between gap-6 h-full"
                style={{
                  backgroundColor: "var(--primary)",
                }}
              >
                <div>
                  <p className="text-[0.62rem] font-bold uppercase tracking-widest text-white/40 mb-3">
                    Our commitment
                  </p>
                  <p className="font-bold text-white text-base leading-snug">
                    Every intervention is non-cash.<br />
                    Every outcome is measured.<br />
                    Every report is published.
                  </p>
                </div>
                <RippleButton href="/about" variant="ghost" textColor="white" size="sm" className="w-fit border border-white/20">
                  Our governance →
                </RippleButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
