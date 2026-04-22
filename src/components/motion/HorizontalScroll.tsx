"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
}

export function HorizontalScroll({ children, title, subtitle, description }: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    if (!section || !trigger) return;

    const ctx = gsap.context(() => {
      const totalWidth = section.scrollWidth;
      const amountToScroll = totalWidth - window.innerWidth;

      if (amountToScroll > 0) {
        gsap.to(section, {
          x: -amountToScroll,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${amountToScroll}`,
            invalidateOnRefresh: true,
          },
        });
      }
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden bg-[var(--cream-100,#f5f0e8)]">
      {(title || subtitle) && (
        <div className="container-luri pt-20 pb-10">
          {subtitle && (
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-6"
              style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              {subtitle}
            </div>
          )}
          {title && (
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--primary)] tracking-tight leading-tight mb-5">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-[var(--ink-600)] text-base font-medium leading-relaxed max-w-[480px]">
              {description}
            </p>
          )}
        </div>
      )}
      <div 
        ref={sectionRef} 
        className="flex gap-10 px-[max(2rem,calc((100vw-var(--container-max))/2))] pb-32 w-max"
      >
        {children}
      </div>
    </div>
  );
}
