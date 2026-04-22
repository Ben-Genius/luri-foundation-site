"use client";

import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { RippleButton } from "@/components/motion/RippleButton";
import { ArrowRight, MessageSquare, SquareTerminal, CableCarIcon, TreeDeciduousIcon } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-lg bg-[var(--primary)] p-6 sm:p-10 md:p-16 lg:p-20">
          {/* Decorative blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -left-20 h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 rounded-full bg-white opacity-10 blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -right-20 h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 rounded-full bg-[var(--accent)] opacity-15 blur-3xl" />
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center relative z-10">
            {/* Left Content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Reveal direction="up" delay={0.05}>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/70 text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  Get Involved
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.1}>
                <div className="mb-5 sm:mb-8 flex -space-x-2 sm:-space-x-3 overflow-hidden justify-center lg:justify-start">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-2 border-[var(--primary)] bg-white overflow-hidden shadow-lg"
                    >
                      <img
                        src={`https://i.pravatar.cc/150?u=luri-cta-${i}`}
                        alt="Supporter"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-2 border-[var(--primary)] bg-white text-[9px] sm:text-[10px] md:text-[12px] font-bold text-[var(--primary)] shadow-lg">
                    +1k
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <h2 className="mb-4 sm:mb-6 text-[clamp(1.75rem,5vw,4rem)] font-bold leading-[1.1] text-white tracking-tight">
                  <span className="italic font-medium opacity-90">Your partnership</span> <br />
                  changes everything.
                </h2>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <p className="max-w-md text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-medium mb-2">
                  We invite you to co-author the next chapter of sustainable livelihoods in Ghana.
                  Join 1,000+ strategic partners making a measurable difference.
                </p>
              </Reveal>
            </div>

            {/* Right Card */}
            <Reveal direction="right" delay={0.2} distance={60} className="w-full">
              <div className="rounded-xl sm:rounded-2xl lg:rounded-md bg-white p-5 sm:p-8 md:p-10 lg:p-12 shadow-2xl shadow-black/10">
                <h3 className="mb-5 sm:mb-6 md:mb-8 text-lg sm:text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                  Partner with LURI
                </h3>

                <div className="space-y-5 sm:space-y-6 md:space-y-8 mb-7 sm:mb-8 md:mb-10">
                  <div className="flex gap-3 sm:gap-4 md:gap-5">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-sm sm:rounded-md bg-[var(--primary-light)] text-[var(--primary)] border border-[var(--primary)]/10 shadow-sm">
                      <SquareTerminal className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Direct Impact</h4>
                      <p className="text-[0.72rem] sm:text-xs md:text-sm text-gray-500 leading-relaxed">
                        100% of your contribution reaches the field through our three core pillars.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4 md:gap-5">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-sm sm:rounded-md bg-amber-50 text-[var(--accent)] border border-amber-100 shadow-sm">
                      <CableCarIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Transparency</h4>
                      <p className="text-[0.72rem] sm:text-xs md:text-sm text-gray-500 leading-relaxed">
                        Direct access to our quarterly KPI dashboards and verified annual impact reports.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4 md:gap-5">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-sm sm:rounded-md bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm">
                      <TreeDeciduousIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Sustainability</h4>
                      <p className="text-[0.72rem] sm:text-xs md:text-sm text-gray-500 leading-relaxed">
                        Trained community members reinvest their skills and income into the next cohort — your contribution compounds over time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-3">
                  <RippleButton
                    textColor="white"
                    href="/get-involved/donate"
                    className="flex-1 rounded-xl sm:rounded-xl lg:rounded-md py-3.5 sm:py-4 md:py-5 text-sm font-bold text-white shadow-xl shadow-[var(--primary)]/10 flex items-center justify-center gap-2"
                  >
                    Donate to the mission <ArrowRight className="h-4 w-4" />
                  </RippleButton>
                  <RippleButton
                    textColor="white"
                    href="https://wa.me/233551337074?text=Hi%2C%20I%27m%20interested%20in%20partnering%20with%20LURI"
                    className="flex-1 rounded-xl lg:rounded-md py-3.5 sm:py-4 md:py-5 text-sm font-bold text-white bg-[var(--primary)] shadow-xl shadow-[var(--primary)]/10 flex items-center justify-center gap-2"
                  >
                    Join our community <MessageSquare className="h-4 w-4" />
                  </RippleButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
