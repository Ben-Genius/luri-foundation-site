"use client";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { CountUp } from "@/components/motion/CountUp";
import { RippleButton } from "@/components/motion/RippleButton";

export function ImpactSection() {
  return (
    <section className="section-pad bg-white border-y border-gray-100">
      <div className="container-luri">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/50 mb-3">Year 1 targets</p>
        </Reveal>
        <SplitHeading
          as="h2"
          text="Impact that's counted, published, and verified."
          className="mb-14 text-3xl font-extrabold text-[var(--ink)] md:text-5xl"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: 150, suffix: "+", label: "Individuals trained" },
            { value: 20, suffix: "", label: "STEM scholarships" },
            { value: 60, suffix: "%", label: "Female beneficiaries" },
            { value: 2, suffix: "", label: "Communities with health networks" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} direction="up">
              <div className="flex flex-col gap-1">
                <p
                  className="text-5xl font-bold text-[var(--primary)] md:text-6xl tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <CountUp to={stat.value} suffix={stat.suffix} duration={2.2} />
                </p>
                <p className="text-sm text-[var(--ink-600)] leading-snug">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 pt-10 border-t border-[var(--primary)]/10 flex flex-wrap gap-4 items-center justify-between">
            <p className="text-[var(--ink-400)] text-sm max-w-sm">
              Independently evaluated. All KPIs published annually. Zero cash transfers.
            </p>
            <RippleButton href="/impact" variant="secondary" size="md">
              View full impact data
            </RippleButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
