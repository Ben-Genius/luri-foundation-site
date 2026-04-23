"use client";

import React, { useState, useEffect, useRef } from "react";

export interface PerspectiveMarqueeProps {
  items?: React.ReactNode[];
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  pixelsPerFrame?: number;
  rotateY?: number;
  rotateX?: number;
  perspective?: number;
  fadeColor?: string;
  background?: string;
  speed?: number;
  className?: string;
}

const FONT_FAMILY =
  "var(--font-display, var(--font-geist-sans)), -apple-system, BlinkMacSystemFont, sans-serif";

export function PerspectiveMarquee({
  items = [],
  fontSize = 84,
  color = "#fafafa",
  fontWeight = 700,
  pixelsPerFrame = 2,
  rotateY = -28,
  rotateX = 8,
  perspective = 1200,
  fadeColor = "#faf9f6", // Match site background
  background = "transparent",
  speed = 1,
  className,
}: PerspectiveMarqueeProps) {
  const [frame, setFrame] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const animate = (time: number) => {
      setFrame((prev) => prev + speed);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [speed]);

  const itemPadding = fontSize * 1.2;
  const approxItemWidth = items.length * (fontSize * 2 + itemPadding);

  // We loop the items
  const offset = -((frame * pixelsPerFrame) % approxItemWidth);
  const rendered = [...items, ...items, ...items, ...items];

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "300px",
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        perspective: `${perspective}px`,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            transform: `translateX(${offset}px)`,
            transformStyle: "preserve-3d",
          }}
        >
          {rendered.map((item, i) => {
            // Simplified center calculation for React components
            const itemWidth = approxItemWidth / items.length;
            const itemCenter = i * itemWidth + itemWidth / 2 + offset;
            
            // Normalize distance from viewport center
            const viewportCenter = containerRef.current?.offsetWidth ? containerRef.current.offsetWidth / 2 : 640;
            const norm = (itemCenter - viewportCenter) / viewportCenter;
            const distance = Math.min(1, Math.abs(norm));
            const blurPx = distance * 6;
            const opacity = 1 - distance * 0.4;

            return (
              <div
                key={i}
                style={{
                  display: "inline-block",
                  fontFamily: FONT_FAMILY,
                  paddingRight: itemPadding,
                  filter: `blur(${blurPx}px)`,
                  opacity,
                  transform: "translateZ(0)", // Force GPU acceleration
                  transition: "filter 0.1s linear, opacity 0.1s linear",
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>

      {/* Edge Fades */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(90deg, ${fadeColor} 0%, transparent 18%, transparent 82%, ${fadeColor} 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(180deg, ${fadeColor} 0%, transparent 10%, transparent 90%, ${fadeColor} 100%)`,
        }}
      />
    </div>
  );
}
