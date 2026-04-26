"use client";

import React from "react";

interface MarqueeStripProps {
  items: React.ReactNode[];
  speed?: "normal" | "slow" | "fast";
  className?: string;
  itemClassName?: string;
  pauseOnHover?: boolean;
}

export function MarqueeStrip({
  items,
  speed = "normal",
  className = "",
  itemClassName = "",
  pauseOnHover = true,
}: MarqueeStripProps) {
  // Map speed prop to animation duration
  const durationMap = {
    normal: "40s",
    slow: "60s",
    fast: "20s",
  };
  const animationDuration = durationMap[speed];

  return (
    <>
      <style>{`
        @keyframes marquee-infinite {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      
      <div
        className={`w-full overflow-hidden ${className}`}
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div 
          className={`flex w-max items-center gap-4 py-4 pr-4 transition-all duration-300 ease-in-out ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`} 
          style={{
            animation: `marquee-infinite ${animationDuration} linear infinite`,
          }}
        >
          {/* Render logos twice to create a seamless loop */}
          {[...items, ...items].map((item, index) => (
            <div key={index} className={`shrink-0 flex items-center justify-center ${itemClassName}`}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
