"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function HorizontalScroll({ children, title, subtitle }: HorizontalScrollProps) {
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
          {subtitle && <p className="ed-label mb-3">{subtitle}</p>}
          {title && <h2 className="ed-title text-4xl md:text-6xl">{title}</h2>}
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
