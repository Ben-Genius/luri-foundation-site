"use client";

import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { RippleButton } from "@/components/motion/RippleButton";
import { Heart, ShieldCheck, TrendingUp, ArrowRight, Instagram, MessageSquare } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-[var(--primary)] p-6 sm:p-10 md:p-16 lg:p-20">
          {/* Decorative background blobs */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute -top-20 -left-20 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-white blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-[var(--accent)] blur-3xl shadow-2xl" />
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center relative z-10">
            {/* Left Content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Reveal direction="up" delay={0.1}>
                <div className="mb-6 sm:mb-8 flex -space-x-3 overflow-hidden">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div 
                      key={i} 
                      className="inline-block h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-[var(--primary)] bg-white overflow-hidden shadow-lg"
                    >
                      <img 
                        src={`https://i.pravatar.cc/150?u=luri-cta-${i}`} 
                        alt="Supporter" 
                        className="h-full w-full object-cover" 
                      />
                    </div>
                  ))}
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-[var(--primary)] bg-white text-[10px] sm:text-[12px] font-bold text-[var(--primary)] shadow-lg">
                    +1k
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <h2 className="mb-4 sm:mb-6 text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] text-white tracking-tight">
                  <span className="italic font-medium opacity-90">Your partnership</span> <br />
                  changes everything.
                </h2>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <p className="max-w-md text-base sm:text-lg text-white/85 leading-relaxed font-medium mb-2">
                  We invite you to co-author the next chapter of sustainable livelihoods in Ghana. 
                  Join 1,000+ strategic partners making a measurable difference.
                </p>
              </Reveal>
            </div>

            {/* Right Card (CTA Card) */}
            <Reveal direction="right" delay={0.2} distance={80} className="w-full">
              <div className="rounded-[1.5rem] sm:rounded-[2.5rem] bg-white p-6 sm:p-8 md:p-12 shadow-2xl shadow-black/10">
                <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                  Partner with LURI
                </h3>

                <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
                  {/* List Item 1 */}
                  <div className="flex gap-4 sm:gap-5">
                    <div className="flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[var(--primary-light)] text-[var(--primary)] border border-[var(--primary)]/10 shadow-sm">
                      <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg">Direct Impact</h4>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        100% of your contribution reaches the field through our three core pillars.
                      </p>
                    </div>
                  </div>

                  {/* List Item 2 */}
                  <div className="flex gap-4 sm:gap-5">
                    <div className="flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-amber-50 text-[var(--accent)] border border-amber-100 shadow-sm">
                      <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg">Transparency</h4>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        Direct access to our quarterly KPI dashboards and verified annual impact reports.
                      </p>
                    </div>
                  </div>

                  {/* List Item 3 */}
                  <div className="flex gap-4 sm:gap-5">
                    <div className="flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm">
                      <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg">Sustainability</h4>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        We build systems that outlast project cycles and create genuine generational change.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <RippleButton 
                    href="/get-involved/donate"
                    className="flex-1 rounded-xl sm:rounded-2xl bg-[var(--primary)] py-4 sm:py-5 text-sm font-bold text-white flex items-center justify-center gap-2 hover:bg-[var(--primary-dark)] transition-all shadow-xl shadow-[var(--primary)]/10"
                  >
                    Donate to the mission <ArrowRight className="h-4 w-4" />
                  </RippleButton>
                  <RippleButton 
                    href="https://whatsapp.com"
                    className="flex-1 rounded-xl sm:rounded-2xl bg-white border-2 border-gray-100 py-4 sm:py-5 text-sm font-bold text-gray-900 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
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
