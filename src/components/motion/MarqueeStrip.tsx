"use client";
import React from "react";

interface MarqueeStripProps {
  items: React.ReactNode[];
  speed?: number;
  className?: string;
  itemClassName?: string;
}

export function MarqueeStrip({
  items,
  className = "",
  itemClassName = "",
}: MarqueeStripProps) {
  const repeated = [...items, ...items, ...items, ...items]; // More repeats for smoother loop

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <div key={i} className={`inline-flex items-center px-4 ${itemClassName}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

