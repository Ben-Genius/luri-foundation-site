"use client";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";

export function ModelSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-luri">
        <Reveal>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-6"
            style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
            Our Methodology
          </div>
        </Reveal>
        <SplitHeading
          as="h2"
          text="Assess. Design. Deliver. Measure. Scale."
          className="mb-5 text-4xl font-extrabold text-[var(--ink)] md:text-6xl"
        />
        <Reveal delay={0.1}>
          <p className="text-[var(--ink-600)] text-base font-medium leading-relaxed max-w-[520px] mb-16">
            A five-stage cycle that ensures every initiative is community-grounded, rigorously measured, and built to continue without us.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-5">
          {[
            { step: "01", title: "Assess", desc: "Community needs, stakeholder mapping, asset inventory." },
            { step: "02", title: "Design", desc: "Co-design of training curricula, selection of trainers." },
            { step: "03", title: "Deliver", desc: "Skills training, scholarship disbursement, input provision." },
            { step: "04", title: "Measure", desc: "Outcome tracking, community feedback, impact reporting." },
            { step: "05", title: "Scale", desc: "Replicate successful models in new communities." },
          ].map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <div className="relative h-full flex flex-col p-6 rounded-2xl bg-[var(--primary-light)]/50 border border-[var(--primary)]/5">
                <span className="ed-num mb-4">{step.step}</span>
                <h3 className="ed-title text-lg mb-2 text-[var(--primary)]">{step.title}</h3>
                <p className="text-xs text-[var(--ink-600)] leading-relaxed">{step.desc}</p>
                {i < 4 && (
                  <div className="absolute top-1/2 -right-2 hidden lg:block text-[var(--primary)]/20 text-xl font-bold">→</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
