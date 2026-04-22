"use client";

interface MarqueeStripProps {
  items: string[];
  separator?: string;
  speed?: number;
  className?: string;
  itemClassName?: string;
}

export function MarqueeStrip({
  items,
  separator = "·",
  className = "",
  itemClassName = "",
}: MarqueeStripProps) {
  const repeated = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className={`inline-flex items-center gap-5 px-5 ${itemClassName}`}>
            <span>{item}</span>
            <span className="opacity-40">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
