"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollThemeContainerProps {
  children: ReactNode;
  theme: string; // CSS color string or class
}

export function ScrollThemeSection({ children, theme }: ScrollThemeContainerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => gsap.to("body", { backgroundColor: theme, duration: 0.6 }),
        onEnterBack: () => gsap.to("body", { backgroundColor: theme, duration: 0.6 }),
      });
    }, ref);

    return () => ctx.revert();
  }, [theme]);

  return <section ref={ref}>{children}</section>;
}
