"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LayeredSectionProps {
  children: ReactNode[];
}

export function GSAPLayeredSections({ children }: LayeredSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".layered-panel");
    if (panels.length === 0) return;

    const ctx = gsap.context(() => {
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {children.map((child, i) => (
        <section key={i} className="layered-panel min-h-screen w-full overflow-hidden bg-white">
          {child}
        </section>
      ))}
    </div>
  );
}
