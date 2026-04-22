"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GSAPRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

export function GSAPReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 50,
  className = "",
  once = true,
}: GSAPRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const vars: gsap.TweenVars = {
      opacity: 0,
      ease: "power3.out",
      duration: duration,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: once ? "play none none none" : "play reverse play reverse",
      },
      delay: delay,
    };

    switch (direction) {
      case "up":
        vars.y = distance;
        break;
      case "down":
        vars.y = -distance;
        break;
      case "left":
        vars.x = distance;
        break;
      case "right":
        vars.x = -distance;
        break;
    }

    const ctx = gsap.context(() => {
      gsap.from(el, vars);
    }, ref);

    return () => ctx.revert();
  }, [direction, delay, duration, distance, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
