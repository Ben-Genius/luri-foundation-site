"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealScrubProps {
  text: string;
  className?: string;
}

export function TextRevealScrub({ text, className = "" }: TextRevealScrubProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Create a split text effect manually since we might not have GSAP SplitText (it's a club plugin)
      // We can use span elements for each word
      const words = text.split(" ");
      const html = words
        .map((word) => `<span class="reveal-word" style="opacity: 0.2; display: inline-block; margin-right: 0.3em;">${word}</span>`)
        .join("");
      
      if (textRef.current) {
        textRef.current.innerHTML = html;
      }

      gsap.to(".reveal-word", {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  return (
    <div ref={containerRef} className={`py-20 ${className}`}>
      <p ref={textRef} className="text-3xl md:text-5xl font-bold leading-tight" />
    </div>
  );
}
