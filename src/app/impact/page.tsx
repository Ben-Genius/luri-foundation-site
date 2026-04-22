import { PageIntro } from "@/components/sections/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { RippleButton } from "@/components/motion/RippleButton";
import { ImagePanel } from "@/components/sections/ImagePanel";
import { kpis, stories } from "@/lib/content/siteContent";
import { FileText } from "lucide-react";

const melSteps = [
  { label: "Plan", body: "Define indicators and data-collection methods before each programme cycle." },
  { label: "Monitor", body: "Ongoing participant tracking with field officers in Kulfuo." },
  { label: "Evaluate", body: "Annual independent evaluation against published KPI targets." },
  { label: "Learn", body: "Findings shared openly — what worked, what didn't, and why." },
  { label: "Adapt", body: "Programme design updated for the next cycle based on evidence." },
];

export const metadata = {
  title: "Impact — LURI Foundation",
  description: "KPIs, community stories, and annual reports from LURI Foundation's programmes in Upper West Region, Ghana.",
};

export default function ImpactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Impact & results"
        title="Published KPIs. Independent evaluation. Zero spin."
        description="Impact at LURI is not a narrative — it's a number, independently verified, publicly available. We commit to targets before programmes launch, not after."
        image="/images/hero-luri.png"
      />

      {/* ── KPI Table ── */}
      <section className="section-pad bg-white">
        <div className="max-w-[98rem] mx-auto">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/50 mb-3">Year 1 vs Year 3</p>
          </Reveal>
          <SplitHeading
            as="h2"
            text="Our committed targets."
            className="mb-10 text-3xl font-extrabold text-[var(--ink)] md:text-5xl"
          />

          {/* Stat cards — Raygan editorial number treatment */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {kpis.map((kpi, i) => (
              <Reveal key={kpi.label} delay={i * 0.07}>
                <article className="ed-card h-full p-6 flex flex-col bg-[var(--cream-100,#f5f0e8)]">
                  {/* Large outline number — Raygan style */}
                  <p className="ed-label text-[var(--primary)] mb-3">{kpi.icon} &nbsp;{kpi.label}</p>
                  <p
                    className="syne text-[clamp(2.5rem,6vw,4rem)] text-[var(--primary)] leading-none mb-1"
                  >
                    <CountUp
                      to={parseInt(kpi.y1.replace(/[^0-9]/g, "")) || 0}
                      suffix={kpi.y1.includes("%") ? "%" : ""}
                    />
                  </p>
                  <p className="text-xs text-[var(--ink-400,#6b7280)] mb-4">Year 1 target</p>
                  <div className="ed-meta mt-auto text-[var(--primary)]/35">
                    <span className="ed-label">Year 3: {kpi.y3}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Full table */}
          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-[var(--primary)]/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--primary)] text-white">
                    <th className="text-left px-5 py-4 font-semibold">Indicator</th>
                    <th className="text-center px-5 py-4 font-semibold">Year 1</th>
                    <th className="text-center px-5 py-4 font-semibold">Year 3</th>
                  </tr>
                </thead>
                <tbody>
                  {kpis.map((kpi, i) => (
                    <tr key={kpi.label} className={i % 2 === 0 ? "bg-white" : "bg-[var(--cream-50,#faf7f2)]"}>
                      <td className="px-5 py-4 text-[var(--ink-600,#374151)]">{kpi.label}</td>
                      <td className="px-5 py-4 text-center font-bold text-[var(--primary)]">{kpi.y1}</td>
                      <td className="px-5 py-4 text-center font-semibold text-[var(--ink)]/50">{kpi.y3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Community Stories ── */}
      <section className="section-pad bg-[var(--cream-100,#f5f0e8)]">
        <div className="container-luri">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/50 mb-3">Community voices</p>
          </Reveal>
          <SplitHeading
            as="h2"
            text="Stories from the people we serve."
            className="mb-12 text-3xl font-extrabold text-[var(--ink)] md:text-5xl"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {stories.map((story, i) => (
              <Reveal key={story.name} delay={i * 0.1}>
                <ImagePanel
                  src={story.image}
                  title={story.name}
                  body={story.quote}
                  programme={story.programme}
                  location={story.location}
                  variant="story"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEL Cycle ── */}
      <section className="section-pad bg-[var(--primary-dark)] text-white">
        <div className="container-luri">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-3">How we measure</p>
          </Reveal>
          <SplitHeading
            as="h2"
            text="A rigorous learning cycle — not a checkbox."
            className="mb-12 text-3xl font-extrabold text-white md:text-5xl"
          />

          <div className="grid gap-5 sm:grid-cols-5">
            {melSteps.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.08}>
                <div className="flex flex-col rounded-2xl border border-white/12 bg-white/6 p-5 text-center h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--ink)] font-bold text-sm mx-auto mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p
                    className="font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-white/55 leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <p className="mt-10 pt-8 border-t border-white/8 text-white/45 text-sm">
              Annual independent evaluation is conducted by an external evaluator. All findings are published
              in the Annual Report alongside the following year&apos;s programme adjustments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Annual Reports ── */}
      <section className="section-pad bg-white">
        <div className="container-luri max-w-3xl">

        </div>
      </section>
    </>
  );
}
