"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiltCard } from "./TiltCard";

gsap.registerPlugin(ScrollTrigger);

interface CardData {
  label: string;
  description?: string;
  icon?: React.ReactNode;
  color?: string;
}

interface ScrollCardsProps {
  cards: string[] | CardData[];
  columns?: 2 | 3 | 4;
}

function isCardData(c: string | CardData): c is CardData {
  return typeof c === "object";
}

export function ScrollCards({ cards, columns = 3 }: ScrollCardsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sc-card",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 82%", once: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const colClass = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" }[columns];

  return (
    <div ref={ref} className={`grid gap-5 ${colClass}`}>
      {cards.map((card, i) => {
        const label = isCardData(card) ? card.label : card;
        const description = isCardData(card) ? card.description : undefined;
        const icon = isCardData(card) ? card.icon : undefined;
        const color = isCardData(card) ? card.color : undefined;

        return (
          <TiltCard key={i} className="sc-card">
            <div
              className="rounded-2xl border border-[var(--primary)]/10 bg-white p-6 h-full"
              style={color ? { borderTopColor: color, borderTopWidth: "3px" } : undefined}
            >
              {icon && <div className="mb-4 text-[var(--primary)]">{icon}</div>}
              <p className="font-semibold text-base leading-snug">{label}</p>
              {description && <p className="mt-2 text-sm text-[var(--ink-400,#6b7280)] leading-relaxed">{description}</p>}
            </div>
          </TiltCard>
        );
      })}
    </div>
  );
}
