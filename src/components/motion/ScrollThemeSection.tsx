"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollThemeSectionProps {
  children: ReactNode;
  theme: string;
  defaultBg?: string;
}

export function ScrollThemeSection({
  children,
  theme,
  defaultBg = "#ffffff",
}: ScrollThemeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const setBodyBg = (color: string) => {
      document.body.style.backgroundColor = color;
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => setBodyBg(theme),
        onEnterBack: () => setBodyBg(theme),
        onLeave: () => setBodyBg(defaultBg),
        onLeaveBack: () => setBodyBg(defaultBg),
      });
    }, ref);

    return () => {
      ctx.revert();
      setBodyBg(defaultBg);
    };
  }, [theme, defaultBg]);

  return <div ref={ref}>{children}</div>;
}
