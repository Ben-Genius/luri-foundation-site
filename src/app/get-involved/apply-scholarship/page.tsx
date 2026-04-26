
import { ArrowDown } from "lucide-react";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { SimpleForm } from "@/components/sections/SimpleForm";

export const metadata = {
  title: "Apply for Scholarship — LURI Foundation",
  description:
    "Apply for STEM scholarship support with academic and household information. Supporting the next generation of leaders in Northern Ghana.",
};

const benefits = [
  {
    title: "Tuition Support",
    body: "Full coverage of fees for accredited STEM programmes at secondary and tertiary level.",
  },
  {
    title: "Learning Materials",
    body: "Textbooks, equipment, and lab supplies for your specific field of study.",
  },
  {
    title: "Mentorship",
    body: "Paired with industry professionals for career guidance throughout your studies.",
  },
  {
    title: "Internship Pathways",
    body: "Facilitated connections to employers and organisations in your chosen field.",
  },
];

export default function ApplyScholarshipPage() {
  return (
    <main>

      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative bg-white pt-28 sm:pt-36 lg:pt-52 pb-20 sm:pb-32 lg:pb-44 overflow-hidden">
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
              STEM Scholarship
            </span>
          </Reveal>

          <SplitHeading
            as="h1"
            text="Elevate your future."
            highlightWords={["future."]}
            highlightClass="text-[var(--primary)]"
            className="text-[clamp(3rem,9vw,7.5rem)] font-extrabold tracking-[-0.04em] leading-[0.91] text-[var(--ink)] mb-8"
            immediate
          />

          <Reveal delay={0.35}>
            <p className="text-[var(--ink-600)] text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10 sm:mb-14">
              Scholarships for academically promising students from low-income households
              in the Upper West Region. We support secondary and tertiary STEM pathways.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="flex flex-col items-center gap-2 text-[var(--ink-400)]">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em]">Apply</span>
              <ArrowDown size={16} className="animate-bounce" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 2. BENEFITS + FORM ═══════════════════════════════════════════════ */}
      <section
        className="py-16 sm:py-24"
        style={{ background: "#f5f5f7", borderTop: "1px solid #e5e5e7" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* ── Left: compact benefit list ── */}
            <div className="w-full lg:w-[260px] flex-shrink-0">
              <Reveal>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[var(--ink-400)] mb-5">
                  What scholars receive
                </p>
              </Reveal>
              <div className="flex flex-col divide-y divide-[#e5e5e7]">
                {benefits.map((b, i) => (
                  <Reveal key={b.title} delay={i * 0.08}>
                    <div className="py-4 first:pt-0 last:pb-0">
                      <p className="text-sm font-semibold text-[var(--ink)] mb-1 tracking-tight">
                        {b.title}
                      </p>
                      <p className="text-[0.72rem] text-[var(--ink-600)] leading-relaxed">
                        {b.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* ── Right: dominant form ── */}
            <div className="flex-1 min-w-0">
              <Reveal delay={0.05}>
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.04em] text-[var(--ink)] mb-2">
                    Apply for scholarship.
                  </h2>
                  <p className="text-sm text-[var(--ink-600)]">
                    Applications reviewed on a rolling basis. We aim to respond within 10 business days.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <SimpleForm formType="apply-scholarship" />
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-6 text-[0.65rem] text-[var(--ink-400)]">
                  All information is kept strictly confidential and used only for selection purposes.
                </p>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 3. TRUST ROW ═════════════════════════════════════════════════════ */}
      <section
        className="bg-white py-14 sm:py-20"
        style={{ borderTop: "1px solid #e5e5e7", borderBottom: "1px solid #e5e5e7" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e5e7]">
            {[
              { label: "Need-Based",       body: "Priority given to students from the lowest-income households." },
              { label: "Merit-Considered", body: "Academic performance reviewed alongside household circumstances." },
              { label: "Fully Supported",  body: "Recipients receive tuition, materials, mentorship, and pathways." },
            ].map((t, i) => (
              <Reveal key={t.label} delay={i * 0.1}>
                <div className="flex flex-col gap-2 px-0 sm:px-8 py-8 sm:py-0 first:pl-0 last:pr-0">
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
