"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Assess",
    desc: "Community needs analysis, stakeholder mapping, and baseline asset inventory.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Co-creation of training curricula and selection of community-embedded trainers.",
  },
  {
    num: "03",
    title: "Deliver",
    desc: "Skills training, scholarship disbursement, and agricultural input provision.",
  },
  {
    num: "04",
    title: "Measure",
    desc: "Real-time outcome tracking, community feedback loops, and impact reporting.",
  },
  {
    num: "05",
    title: "Scale",
    desc: "Replicating validated models across new communities and geographies.",
  },
];

export function ModelSection() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const vLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = stepsRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const trigger = { trigger: container, start: "top 76%", once: true };

      /* Horizontal line (desktop) */
      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: trigger,
      });

      /* Vertical line (mobile) */
      gsap.from(vLineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: trigger,
      });

      gsap.from(container.querySelectorAll(".step-dot"), {
        scale: 0,
        duration: 0.45,
        ease: "back.out(2.5)",
        stagger: 0.16,
        delay: 0.45,
        scrollTrigger: trigger,
      });

      gsap.from(container.querySelectorAll(".step-body"), {
        opacity: 0,
        y: 14,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.13,
        delay: 0.6,
        scrollTrigger: trigger,
      });
    }, stepsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-pad bg-white">
      <div className="container-luri">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-14 sm:mb-20">
          <div>
            <Reveal>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                Our Methodology
              </div>
            </Reveal>
            <SplitHeading
              as="h2"
              text="Five stages. One continuous cycle."
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--ink)] max-w-2xl"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="text-[var(--ink-600)] text-sm sm:text-base font-medium leading-relaxed max-w-[300px] lg:text-right">
              Community-grounded, rigorously measured, and built to continue without us.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div ref={stepsRef} className="relative">

          {/* Horizontal connector line (desktop sm+) */}
          <div
            ref={lineRef}
            className="absolute top-[15px] left-0 right-0 h-px hidden sm:block"
            style={{ backgroundColor: "rgba(0,80,53,0.14)" }}
          />

          {/* Vertical connector line (mobile) */}
          <div
            ref={vLineRef}
            className="absolute top-0 bottom-0 left-[14px] w-px sm:hidden"
            style={{ backgroundColor: "rgba(0,80,53,0.14)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-5">
            {steps.map((step) => (
              <div key={step.num} className="relative pl-10 sm:pl-0">

                {/* Dot — absolute on mobile, static on desktop */}
                <div className="absolute sm:static left-0 top-0 flex-shrink-0 sm:mb-6">
                  <div className="step-dot w-[30px] h-[30px] rounded-full border-2 border-[var(--primary)] bg-white flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                  </div>
                </div>

                {/* Text */}
                <div className="step-body pb-2 pt-0.5 sm:pt-0">
                  <span
                    className="block text-[0.62rem] font-bold tracking-[0.12em] uppercase mb-2"
                    style={{ color: "var(--primary)" }}
                  >
                    {step.num}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--ink)] mb-1.5 sm:mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--ink-600)" }}>
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
