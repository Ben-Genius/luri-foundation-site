"use client";
import { MarqueeStrip } from "@/components/motion/MarqueeStrip";

const marqueeItems = [
  "Healthcare & Sanitation",
  "Agribusiness Training",
  "STEM Scholarships",
  "Upper West Region",
  "Community-First Governance",
  "Measurable Impact",
  "Kulfuo, Ghana",
];

export function MarqueeSection() {
  return (
    <div className="border-y border-[var(--primary)]/10 bg-[var(--cream-200,#ede6d8)] py-4">
      <MarqueeStrip
        items={marqueeItems}
        itemClassName="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/60"
      />
    </div>
  );
}
