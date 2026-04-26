
import { ArrowDown } from "lucide-react";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { CountUp } from "@/components/motion/CountUp";
import { SimpleForm } from "@/components/sections/SimpleForm";

export const metadata = {
  title: "Donate — LURI Foundation",
  description:
    "Support our mission in Northern Ghana. Choose one-time or monthly support tiers tied to concrete community outcomes.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { to: 150, suffix: "+", label: "Individuals Trained", sub: "Year-one target" },
  { to: 60, suffix: "%", label: "Female Beneficiaries", sub: "Of all participants" },
  { to: 15, suffix: "+", label: "Businesses Launched", sub: "By programme graduates" },
];

const tiers = [
  {
    amount: "GHS 200",
    headline: "A hygiene kit.",
    body: "One complete package of sanitation essentials — soap, sanitiser, and reusable supplies — delivered directly to a household in rural Northern Ghana.",
    tag: "Essential",
    featured: false,
  },
  {
    amount: "GHS 500",
    headline: "A starter farm pack.",
    body: "Seeds, basic tools, and fertiliser inputs that give one smallholder farmer everything needed to begin a sustainable growing season and feed their family.",
    tag: "Most given",
    featured: true,
  },
  {
    amount: "GHS 2,000",
    headline: "One STEM scholarship.",
    body: "Full tuition support for one student from a low-income household to pursue science, technology, engineering, or mathematics at secondary or tertiary level.",
    tag: "High impact",
    featured: false,
  },
];

const trustPoints = [
  { label: "100% Traceable", body: "Every GHS tracked to a named, verified outcome." },
  { label: "Zero Cash Policy", body: "Donations become kits, tools, and scholarships — never cash." },
  { label: "Quarterly Dashboards", body: "Full impact reporting, published and publicly accessible." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DonatePage() {
  return (
    <main>

      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative bg-white pt-40 sm:pt-52 pb-32 sm:pb-44 overflow-hidden">
        {/* Barely-there radial wash behind the text */}
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.6rem] font-bold uppercase tracking-[0.22em] mb-10"
              style={{
                color: "var(--primary)",
                background: "rgba(0,80,53,0.07)",
                border: "1px solid rgba(0,80,53,0.12)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              Support the mission
            </span>
          </Reveal>

          <SplitHeading
            as="h1"
            text="Give once. Change many."
            highlightWords={["Change"]}
            highlightClass="text-[var(--primary)]"
            className="text-[clamp(3.25rem,9vw,7.5rem)] font-extrabold tracking-[-0.04em] leading-[0.91] text-[var(--ink)] mb-8"
            immediate
          />

          <Reveal delay={0.35}>
            <p className="text-[var(--ink-600)] text-lg sm:text-xl leading-relaxed max-w-lg mx-auto mb-14">
              Professional training, medical supply chains, and agribusiness kits —
              delivered directly to underserved communities in Northern Ghana.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="flex flex-col items-center gap-2 text-[var(--ink-400)]">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em]">Scroll</span>
              <ArrowDown size={16} className="animate-bounce" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 2. STATS STRIPE ═══════════════════════════════════════════════════ */}
      <section
        style={{
          background: "#f5f5f7",
          borderTop: "1px solid #e5e5e7",
          borderBottom: "1px solid #e5e5e7",
        }}
        className="py-20 sm:py-24"
      >
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <p className="text-center text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[var(--ink-400)] mb-14">
              Published targets · Independent verification
            </p>
          </Reveal>

          <div className="grid grid-cols-3 divide-x divide-[#e5e5e7]">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-2 px-4 sm:px-8">
                  <span className="font-extrabold tracking-[-0.04em] leading-none text-[var(--ink)]"
                    style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
                    <CountUp to={s.to} suffix={s.suffix} duration={2} />
                  </span>
                  <span className="text-[0.78rem] sm:text-sm font-semibold text-[var(--ink)] text-center leading-snug">
                    {s.label}
                  </span>
                  <span className="text-[0.62rem] text-[var(--ink-400)] uppercase tracking-widest font-bold text-center hidden sm:block">
                    {s.sub}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3 + 4. TIERS + FORM ══════════════════════════════════════════════ */}
      <section
        className="py-16 sm:py-24"
        style={{ background: "#f5f5f7", borderTop: "1px solid #e5e5e7" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* ── Tiers: compact stacked cards ── */}
            <div className="w-full lg:w-[260px] flex-shrink-0">
              <Reveal>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[var(--ink-400)] mb-5">
                  Your gift becomes
                </p>
              </Reveal>
              <div className="flex flex-row lg:flex-col gap-3">
                {tiers.map((tier, i) => (
                  <Reveal key={tier.amount} delay={i * 0.08}>
                    <div
                      className="flex-1 lg:flex-none flex flex-col gap-1.5 p-4 rounded-xl"
                      style={
                        tier.featured
                          ? { background: "rgba(0,80,53,0.06)", border: "1px solid rgba(0,80,53,0.18)" }
                          : { background: "#fff", border: "1px solid #e5e5e7" }
                      }
                    >
                      <span
                        className="font-extrabold tracking-[-0.035em] leading-none text-sm sm:text-base"
                        style={{ color: tier.featured ? "var(--primary)" : "var(--ink)" }}
                      >
                        {tier.amount}
                      </span>
                      <span className="text-[0.65rem] text-[var(--ink-600)] leading-snug">
                        {tier.headline}
                      </span>
                      <span
                        className="self-start text-[0.5rem] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full mt-0.5"
                        style={
                          tier.featured
                            ? { background: "var(--primary)", color: "#fff" }
                            : { background: "#e5e5e7", color: "#6e6e73" }
                        }
                      >
                        {tier.tag}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* ── Form: dominant ── */}
            <div className="flex-1 min-w-0">
              <Reveal delay={0.05}>
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.04em] text-[var(--ink)] mb-2">
                    Initiate your gift.
                  </h2>
                  <p className="text-sm text-[var(--ink-600)]">
                    100% of non-administrative funds go directly to the field.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <SimpleForm formType="donate" />
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-6 text-[0.65rem] text-[var(--ink-400)]">
                  Secure payment · Verified international gateways
                </p>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 5. TRUST ROW ═══════════════════════════════════════════════════════ */}
      <section
        className="bg-white py-20 sm:py-24"
        style={{ borderTop: "1px solid #e5e5e7", borderBottom: "1px solid #e5e5e7" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e5e7]">
            {trustPoints.map((t, i) => (
              <Reveal key={t.label} delay={i * 0.1}>
                <div className="flex flex-col gap-2 px-0 sm:px-10 py-8 sm:py-0 first:pl-0 last:pr-0">
                  <span className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-[var(--primary)]">
                    {t.label}
                  </span>
                  <p className="text-sm text-[var(--ink-600)] leading-relaxed">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
