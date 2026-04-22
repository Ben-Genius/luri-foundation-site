"use client";
import { useEffect, useRef } from "react";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const accountabilityStats = [
  { val: "100%", label: "Skills-based delivery" },
  { val: "Annual", label: "Independent evaluation" },
  { val: "Public", label: "Impact reports" },
];

export function ImpactSection() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(statsRef.current?.querySelectorAll(".stat-chip") ?? [], {
        opacity: 0,
        x: 30,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 82%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="section-pad bg-white">
      <div className="container-luri">

        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-10 mb-12 sm:mb-16">

          {/* Left */}
          <div className="lg:max-w-2xl">
            <Reveal>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                Impact &amp; Accountability
              </div>
            </Reveal>

            <SplitHeading
              as="h2"
              text="Proof over promises."
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--primary)] tracking-tight leading-tight mb-4 sm:mb-5"
            />

            <Reveal delay={0.2}>
              <p className="text-[var(--ink-600)] text-sm sm:text-base font-medium leading-relaxed max-w-[440px]">
                Every programme is co-designed with communities, delivered without cash transfers, and independently verified. We measure outputs, outcomes, and long-term change — then publish the results.
              </p>
            </Reveal>
          </div>

          {/* Right: trust stats */}
          <div ref={statsRef}>
            <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 flex-wrap">
              {accountabilityStats.map((s) => (
                <div
                  key={s.label}
                  className="stat-chip flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl border"
                  style={{ backgroundColor: "rgba(0,80,53,0.04)", borderColor: "rgba(0,80,53,0.1)" }}
                >
                  <span className="text-lg sm:text-xl font-black text-[var(--primary)] leading-none tracking-tight whitespace-nowrap">
                    {s.val}
                  </span>
                  <span className="text-[0.58rem] sm:text-[0.62rem] font-semibold text-[var(--ink-600)] uppercase tracking-widest">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Image grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            <Reveal direction="up" delay={0.1}>
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src="/images/luri/upper-west.png"
                  alt="Upper West Region, Ghana"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col items-center justify-between text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-[var(--primary)] rounded-t-full mb-4 sm:mb-6" />
                    <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">Upper West <br /> Region, Ghana</h3>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-[180px]">
                    One of Ghana's most underserved areas — where every programme is designed, tested, and delivered on the ground.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image
                  src="/images/luri/operations.png"
                  alt="LURI Field Operations"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                  <div className="bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                    <span className="text-[var(--primary)] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                      Kulfuo Field Operations
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 lg:mt-12">
            <Reveal direction="up" delay={0.2}>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden group">
                <Image
                  src="/images/luri/agribusiness.png"
                  alt="Climate-Smart Agribusiness"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col items-center justify-between text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-[var(--accent)] rounded-t-full mb-4 sm:mb-6" />
                    <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">Climate-Smart <br /> Agribusiness</h3>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-[200px]">
                    Training smallholder farmers in value-addition and market linkages.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.5}>
              <div className="bg-[var(--primary)] rounded-xl p-8 sm:p-10 flex flex-col items-center text-center text-white">
                <div className="w-6 h-6 bg-[var(--accent)] rounded-t-full mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 uppercase tracking-tight">Zero Cash Transfers</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-xs">
                  All support is delivered as skills, tools, and scholarships. Every GHS is traced to a direct community outcome, verified by independent annual evaluations.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            <Reveal direction="up" delay={0.3}>
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src="/images/hero-luri.png"
                  alt="Women, Youth & Farmers"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col items-center justify-between text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-[var(--coral)] rounded-t-full mb-4 sm:mb-6" />
                    <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">Women, Youth <br /> & Farmers</h3>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-[180px]">
                    60% of all beneficiaries are women. Programmes close gender and economic gaps simultaneously.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.6}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image
                  src="/images/luri/verified.png"
                  alt="Verified Impact"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                  <div className="bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                    <span className="text-[var(--primary)] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
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
