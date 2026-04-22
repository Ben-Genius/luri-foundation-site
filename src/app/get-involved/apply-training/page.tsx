import { Sprout, Stethoscope, TrendingUp, CheckCircle2 } from "lucide-react";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { SimpleForm } from "@/components/sections/SimpleForm";

export const metadata = {
  title: "Apply for Training — LURI Foundation",
  description:
    "Submit your interest and programme selection for healthcare or agribusiness training tracks in the Upper West Region, Ghana.",
};

const tracks = [
  {
    icon: Stethoscope,
    title: "Healthcare Track",
    body: "Community Health Volunteer certification, WASH education, first aid, and maternal health training for women and youth aged 15–35.",
    color: "#0a5c60",
    bg: "rgba(10,92,96,0.06)",
    receive: ["Medical & hygiene kits", "PPE & reference manuals", "CHV certification", "Income pathway"],
  },
  {
    icon: Sprout,
    title: "Agribusiness Track",
    body: "Climate-smart farming, post-harvest value addition, cooperative formation, and buyer network linkages for smallholder farmers and rural youth.",
    color: "#b69000",
    bg: "rgba(182,144,0,0.06)",
    receive: ["Seed packs & fertiliser", "Tools & equipment", "Enterprise training", "Market access"],
  },
  {
    icon: TrendingUp,
    title: "Business Module",
    body: "All tracks include foundational modules on financial literacy, record keeping, and market navigation — building skills that outlast any single programme.",
    color: "#0a5c60",
    bg: "rgba(10,92,96,0.04)",
    receive: ["Financial literacy", "Record keeping", "Market navigation", "Cooperative membership"],
  },
];

export default function ApplyTrainingPage() {
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
                  style={{ backgroundColor: "rgba(0,80,53,0.08)", borderColor: "rgba(0,80,53,0.25)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  Training Application
                </div>
              </Reveal>
              <SplitHeading
                as="h1"
                text="Learn to lead."
                highlightWords={["lead."]}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight"
              />
            </div>
            <Reveal direction="right" delay={0.15}>
              <p className="text-white/45 text-sm sm:text-base leading-relaxed max-w-xs md:text-right">
                Free skill-building programmes for smallholder farmers, healthcare workers, and youth in Upper West Region.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ MAIN SPLIT ══ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[95%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

            {/* Left — programme tracks */}
            <div className="flex-1">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight mb-10">
                  Skill acquisition. <span className="text-[var(--primary)] italic">Economic power.</span>
                </h2>
              </Reveal>

              <div className="flex flex-col gap-5">
                {tracks.map((track, i) => {
                  const Icon = track.icon;
                  return (
                    <Reveal key={track.title} delay={i * 0.09}>
                      <div className="rounded-2xl p-6" style={{ backgroundColor: track.bg, border: `1px solid ${track.color}18` }}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${track.color}15`, color: track.color }}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <h4 className="font-bold text-[var(--ink)]">{track.title}</h4>
                        </div>
                        <p className="text-sm text-[var(--ink-600)] leading-relaxed mb-4">{track.body}</p>
                        <div className="grid grid-cols-2 gap-1.5">
                          {track.receive.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs text-[var(--ink-600)]">
                              <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" style={{ color: track.color }} />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={0.3}>
                <div className="mt-8 rounded-2xl p-5" style={{ backgroundColor: "rgba(0,80,53,0.05)", border: "1px solid rgba(0,80,53,0.10)" }}>
                  <p className="text-sm text-[var(--ink-600)] leading-relaxed">
                    <span className="font-bold text-[var(--primary)]">Training is free.</span> All inputs are provided.
                    You leave with skills, a certificate, and connections to buyers and employers. No fees, no barriers.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right — form */}
            <div className="w-full lg:w-[500px] lg:sticky lg:top-28">
              <Reveal direction="left" delay={0.15}>
                <div className="mb-[-1.5rem] mx-5 relative z-10 rounded-2xl px-7 py-5 shadow-xl" style={{ backgroundColor: "var(--primary)" }}>
                  <p className="text-[0.58rem] uppercase font-bold tracking-widest text-white/50 mb-0.5">Training Application</p>
                  <p className="text-lg font-bold text-white">Apply for a track</p>
                </div>
                <SimpleForm formType="apply-training" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
