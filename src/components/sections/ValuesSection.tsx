"use client";
import { useEffect, useRef } from "react";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { ScrollThemeSection } from "@/components/motion/ScrollThemeSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SECTION_BG = "#005035";

const values = [
  {
    num: "01",
    title: "People First",
    desc: "Every decision centres on the dignity, voice, and wellbeing of the communities we serve.",
    style: { backgroundColor: "rgba(255,255,255,0.10)" },
    colSpan: "lg:col-span-2",
    minH: "min-h-[180px] sm:min-h-[220px]",
  },
  {
    num: "02",
    title: "Integrity",
    desc: "We operate with transparency, accountability, and ethical stewardship in all activities.",
    style: { backgroundColor: "rgba(182,144,0,0.20)" },
    colSpan: "lg:col-span-1",
    minH: "min-h-[180px] sm:min-h-[220px]",
  },
  {
    num: "03",
    title: "Partnership",
    desc: "We believe in collaborative impact — working alongside local leaders and government.",
    style: { backgroundColor: "rgba(255,255,255,0.05)" },
    colSpan: "lg:col-span-1",
    minH: "min-h-[160px] sm:min-h-[200px]",
  },
  {
    num: "04",
    title: "Sustainability",
    desc: "We build systems that outlast project cycles and create generational change.",
    style: { backgroundColor: "rgba(255,255,255,0.08)" },
    colSpan: "lg:col-span-1",
    minH: "min-h-[160px] sm:min-h-[200px]",
  },
  {
    num: "05",
    title: "Equity",
    desc: "We prioritise the most marginalised — women, youth, and rural dwellers.",
    style: { backgroundColor: "rgba(182,144,0,0.15)" },
    colSpan: "lg:col-span-1",
    minH: "min-h-[160px] sm:min-h-[200px]",
  },
  {
    num: "06",
    title: "Excellence",
    desc: "We are committed to high-quality training, rigorous outcomes, and continuous learning.",
    style: { backgroundColor: "rgba(255,255,255,0.06)" },
    colSpan: "lg:col-span-3",
    minH: "min-h-[120px] sm:min-h-[150px]",
  },
];

export function ValuesSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    cardsRef.current.forEach((card) => {
      if (!card) return;

      const onEnter = () => {
        gsap.to(card, {
          scale: 1.025,
          y: -4,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      const onLeave = () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((c) => c());
  }, []);

  return (
    <ScrollThemeSection theme={SECTION_BG}>
      <section
        className="section-pad text-white overflow-hidden relative"
        style={{ backgroundColor: SECTION_BG }}
      >
        <div className="container-luri">
          {/* Badge */}
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/70 text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                borderColor: "rgba(255,255,255,0.15)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              Our Foundation
            </div>
          </Reveal>

          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 sm:gap-6 mb-10 sm:mb-14">
            <SplitHeading
              as="h2"
              text="Values that drive every decision."
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-2xl"
            />
            <Reveal delay={0.1}>
              <p className="text-white/60 text-sm sm:text-base font-medium leading-relaxed max-w-sm md:text-right">
                Six principles that govern how we design programmes, steward resources, and show up
                for the communities that trust us.
              </p>
            </Reveal>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className={v.colSpan}>
                <div
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className={[
                    v.minH,
                    "h-full rounded-xl border border-white/10 p-5 sm:p-7 flex flex-col justify-between",
                    "transition-colors duration-200 ease-in-out cursor-default will-change-transform",
                    "hover:border-white/25 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]",
                  ].join(" ")}
                  style={v.style}
                >
                  <span className="text-[0.65rem] font-bold tracking-[0.12em] uppercase text-white/30">
                    {v.num}
                  </span>
                  <div>
                    <h3 className="ed-title text-lg sm:text-xl md:text-2xl mb-1.5 sm:mb-2 text-white">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed max-w-xs">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </ScrollThemeSection>
  );
}
