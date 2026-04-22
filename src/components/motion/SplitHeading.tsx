"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitHeadingProps {
  as?: "h1" | "h2" | "h3";
  text: string;
  className?: string;
  delay?: number;
  triggerStart?: string;
  /** When true, animate immediately instead of on scroll */
  immediate?: boolean;
}

export function SplitHeading({
  as: Tag = "h2",
  text,
  className = "",
  delay = 0,
  triggerStart = "top 88%",
  immediate = false,
}: SplitHeadingProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const words = ref.current.querySelectorAll<HTMLSpanElement>(".sh-word");
    const ctx = gsap.context(() => {
      const anim = gsap.fromTo(
        words,
        { y: "115%", opacity: 0, rotateZ: 1.5 },
        {
          y: "0%",
          opacity: 1,
          rotateZ: 0,
          stagger: 0.055,
          duration: 0.9,
          ease: "power4.out",
          delay,
          ...(immediate
            ? {}
            : {
                scrollTrigger: {
                  trigger: ref.current,
                  start: triggerStart,
                  once: true,
                },
              }),
        },
      );
      if (immediate) return anim;
    }, ref);

    return () => ctx.revert();
  }, [delay, triggerStart, immediate]);

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden" style={{ verticalAlign: "bottom" }}>
          <span className="sh-word inline-block">{word}</span>
          {i < text.split(" ").length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
