"use client";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { RippleButton } from "@/components/motion/RippleButton";
import { TiltCard } from "@/components/motion/TiltCard";
import { ShieldCheck } from "lucide-react";

export function PartnerSection() {
  return (
    <section className="section-pad bg-[var(--cream-100,#f5f0e8)]">
      <div className="container-luri">
        <div className="grid gap-10 items-center md:grid-cols-2">
          <Reveal direction="left">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-6"
                style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                Strategic Partner
              </div>
              <h2
                className="text-3xl font-bold text-[var(--ink)] md:text-5xl mb-5 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Project CURE Partnership
              </h2>
              <p className="text-[var(--ink-600,#374151)] leading-relaxed mb-6">
                The world&apos;s largest distributor of donated medical supplies. Our collaborative channel provides medical supplies,
                technical expertise, and resource mobilisation to rural Ghana.
              </p>
              <RippleButton href="/partners" variant="secondary" size="md">
                View partner framework
              </RippleButton>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.15}>
            <TiltCard>
              <div className="rounded-3xl border border-[var(--primary)]/10 bg-white p-12 flex flex-col items-center gap-6 text-center shadow-xl shadow-black/5">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-lg">
                  <ShieldCheck className="h-12 w-12" />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-[var(--ink)] mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Medical Equity Channel
                  </h3>
                  <p className="text-sm text-[var(--ink-400,#6b7280)] max-w-xs mx-auto">
                    Access to global health expertise, training materials, and donated equipment.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--primary)] bg-[var(--primary-light)] px-5 py-2.5 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
                  Operational MoU Active
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
