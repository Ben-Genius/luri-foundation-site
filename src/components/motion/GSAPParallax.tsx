"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GSAPParallaxProps {
  children?: ReactNode;
  speed?: number; // 1 is standard, 0 is pinned, >1 is faster, <1 is slower
  className?: string;
  direction?: "vertical" | "horizontal";
}

export function GSAPParallax({
  children,
  speed = 1,
  className = "",
  direction = "vertical",
}: GSAPParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const movementMultiplier = (speed - 1) * 100;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        [direction === "vertical" ? "y" : "x"]: `${movementMultiplier}%`,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [speed, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
