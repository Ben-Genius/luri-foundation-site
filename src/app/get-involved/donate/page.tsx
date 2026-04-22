import { Heart, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { SimpleForm } from "@/components/sections/SimpleForm";

export const metadata = {
  title: "Donate — LURI Foundation",
  description:
    "Support our mission in Northern Ghana. Choose one-time or monthly support tiers tied to concrete community outcomes.",
};

const impacts = [
  {
    icon: Heart,
    title: "Direct Impact",
    body: "100% of non-admin donations go directly to field operations, scholarship funds, and training materials. Every GHS is traced.",
    color: "#0a5c60",
    bg: "rgba(10,92,96,0.08)",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Reporting",
    body: "We provide quarterly impact dashboards so you can see exactly how your donation is used — down to individual kits and scholarships.",
    color: "#b69000",
    bg: "rgba(182,144,0,0.08)",
  },
  {
    icon: Zap,
    title: "Sustainable Growth",
    body: "We build capacity, not dependency. Trained graduates re-invest skills and income into the next cohort — your contribution compounds.",
    color: "#0a5c60",
    bg: "rgba(10,92,96,0.08)",
  },
  {
    icon: TrendingUp,
    title: "Zero Cash Transfers",
    body: "All support is delivered as skills, tools, medical kits, and scholarships. No cash changes hands — full traceability guaranteed.",
    color: "#b69000",
    bg: "rgba(182,144,0,0.08)",
  },
];

const trustStats = [
  { val: "100%", label: "Skills-based delivery" },
  { val: "Annual", label: "Independent evaluation" },
  { val: "Public", label: "Impact reports" },
];

export default function DonatePage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="pt-28 sm:pt-36 pb-16 overflow-hidden" style={{ backgroundColor: "#020d08" }}>
        <div className="max-w-[95%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/60 text-[0.62rem] font-bold uppercase tracking-widest mb-5"
                  style={{ backgroundColor: "rgba(182,144,0,0.08)", borderColor: "rgba(182,144,0,0.25)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  Donate
                </div>
              </Reveal>
              <SplitHeading
                as="h1"
                text="Fuel the mission."
                highlightWords={["mission."]}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight"
              />
            </div>
            <Reveal direction="right" delay={0.15}>
              <p className="text-white/45 text-sm sm:text-base leading-relaxed max-w-xs md:text-right">
                Your contribution directly supports healthcare training, agribusiness development, and STEM scholarships in Upper West Region, Ghana.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="flex gap-3 mt-8">
              {trustStats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-base font-black text-[var(--accent)] leading-none">{s.val}</span>
                  <span className="text-[0.58rem] font-semibold text-white/40 uppercase tracking-widest hidden sm:block">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ MAIN SPLIT ══ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[95%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

            {/* Left — why give */}
            <div className="flex-1">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight mb-10">
                  Why your support <span className="text-[var(--primary)] italic">matters.</span>
                </h2>
              </Reveal>

              <div className="grid gap-5">
                {impacts.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={i * 0.08}>
                      <div className="flex gap-4 p-5 rounded-2xl" style={{ backgroundColor: item.bg, border: `1px solid ${item.color}20` }}>
                        <div
                          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                          style={{ backgroundColor: `${item.color}15`, color: item.color }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[var(--ink)] mb-1">{item.title}</h4>
                          <p className="text-sm text-[var(--ink-600)] leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={0.35}>
                <div
                  className="mt-8 rounded-2xl p-6"
                  style={{ backgroundColor: "rgba(0,80,53,0.05)", border: "1px solid rgba(0,80,53,0.10)" }}
                >
                  <p className="text-sm text-[var(--ink-600)] leading-relaxed">
                    <span className="font-bold text-[var(--primary)]">LURI Foundation</span> does not distribute cash.
                    All support funds tools, materials, training, and scholarships — every GHS is independently verified
                    and reported publicly.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right — form */}
            <div className="w-full lg:w-[500px] lg:sticky lg:top-28">
              <Reveal direction="left" delay={0.15}>
                <div className="mb-[-1.5rem] mx-5 relative z-10 rounded-2xl px-7 py-5 shadow-xl"
                  style={{ backgroundColor: "var(--primary)" }}>
                  <p className="text-[0.58rem] uppercase font-bold tracking-widest text-white/50 mb-0.5">Donation form</p>
                  <p className="text-lg font-bold text-white">Initiate your donation</p>
                </div>
                <SimpleForm formType="donate" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
