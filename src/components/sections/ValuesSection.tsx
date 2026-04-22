"use client";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { ScrollThemeSection } from "@/components/motion/ScrollThemeSection";

export function ValuesSection() {
  return (
    <ScrollThemeSection theme="#0a5c60">
      <section className="section-pad bg-transparent text-white overflow-hidden relative">
        <div className="container-luri">
          <Reveal>
            <div className="section-label text-white/30">
              <span className="ed-label">Our foundation</span>
            </div>
          </Reveal>
          <SplitHeading
            as="h2"
            text="Values that drive every decision."
            className="mb-14 text-4xl font-extrabold text-white md:text-6xl"
          />

          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "People First", desc: "Every decision centres on the dignity, voice, and wellbeing of the communities we serve." },
              { title: "Integrity", desc: "We operate with transparency, accountability, and ethical stewardship in all activities." },
              { title: "Partnership", desc: "We believe in collaborative impact — working alongside local leaders and government." },
              { title: "Sustainability", desc: "We build systems that outlast project cycles and create generational change." },
              { title: "Equity", desc: "We prioritise the most marginalised — women, youth, and rural dwellers." },
              { title: "Excellence", desc: "We are committed to high-quality training, rigorous outcomes, and continuous learning." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="border-l border-white/10 pl-6">
                  <h3 className="ed-title text-xl mb-3 text-[var(--accent)]">{v.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed max-w-xs">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </ScrollThemeSection>
  );
}
