"use client";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import Image from "next/image";

export function ImpactSection() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-[95%] mx-auto">
        <Reveal>
          <h2 className="display-heading text-center mb-16 max-w-4xl mx-auto">
            A modern framework for <br className="hidden md:block" /> measurable human impact
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Geographic context */}
            <Reveal direction="up" delay={0.1}>
              <div className="bg-[#ede6d8]/50 rounded-[2.5rem] p-8 aspect-square flex flex-col items-center justify-between text-center overflow-hidden">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-[var(--primary)] rounded-t-full mb-6" />
                  <h3 className="text-xl font-bold text-stone-800 uppercase tracking-tight">Upper West <br /> Region, Ghana</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed max-w-[180px]">
                  One of Ghana's most underserved areas — where every programme is designed, tested, and delivered on the ground.
                </p>
              </div>
            </Reveal>

            {/* Card 4: Kulfuo Field Operations */}
            <Reveal direction="up" delay={0.4}>
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden group">
                <Image
                  src="/images/luri/operations.png"
                  alt="LURI Field Operations"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="text-[var(--primary)] text-[10px] font-bold uppercase tracking-wider">
                      Kulfuo Field Operations
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 lg:mt-12">
            {/* Card 2: Climate-Smart Agribusiness */}
            <Reveal direction="up" delay={0.2}>
              <div className="bg-[#ede6d8]/50 rounded-[2.5rem] overflow-hidden flex flex-col items-center text-center">
                <div className="p-8 pb-0">
                  <div className="w-6 h-6 bg-[var(--accent)] rounded-t-full mb-6 mx-auto" />
                  <h3 className="text-xl font-bold text-stone-800 mb-2 uppercase tracking-tight">Climate-Smart <br /> Agribusiness</h3>
                </div>
                <div className="relative w-full aspect-[3/4] mt-4">
                  <Image
                    src="/images/luri/agribusiness.png"
                    alt="Upper West Region Farming"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            {/* Card 5: Zero Cash Transfers */}
            <Reveal direction="up" delay={0.5}>
              <div className="bg-[var(--primary)] rounded-[2.5rem] p-10 flex flex-col items-center text-center text-white">
                <div className="w-6 h-6 bg-[var(--accent)] rounded-t-full mb-6" />
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Zero Cash Transfers</h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                  All support is delivered as skills, tools, and scholarships. Every GHS is traced to a direct community outcome, verified by independent annual evaluations.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {/* Card 3: Who we serve */}
            <Reveal direction="up" delay={0.3}>
              <div className="bg-[#ede6d8]/50 rounded-[2.5rem] p-8 aspect-square flex flex-col items-center justify-between text-center overflow-hidden">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-[var(--coral)] rounded-t-full mb-6" />
                  <h3 className="text-xl font-bold text-stone-800 uppercase tracking-tight">Women, Youth <br /> & Farmers</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed max-w-[180px]">
                  60% of all beneficiaries are women. Programmes close gender and economic gaps simultaneously.
                </p>
              </div>
            </Reveal>

            {/* Card 6: Independently Verified */}
            <Reveal direction="up" delay={0.6}>
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden group">
                <Image
                  src="/images/luri/verified.png"
                  alt="Verified Impact"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="text-[var(--primary)] text-[10px] font-bold uppercase tracking-wider">
                      Independently Verified
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


