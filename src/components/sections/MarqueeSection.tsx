"use client";
import { MarqueeStrip } from "@/components/motion/MarqueeStrip";

const partners = [
  { name: "Project C.U.R.E", style: "rounded-full" },
  { name: "Upper West Health Directorate", style: "rounded-xl rounded-tr-none" },
  { name: "Kulfuo Advisory Committee", style: "rounded-2xl" },
  { name: "Ministry of Education", style: "rounded-full" },
  { name: "Ghana Health Service", style: "rounded-xl" },
  { name: "Regional Farmers Coop", style: "rounded-2xl rounded-bl-none" },
  { name: "STEM Education Authority", style: "rounded-full" },
];


export function MarqueeSection() {
  return (
    <section className="bg-[#faf9f6] py-12 border-y border-stone-200/50">
      <div className="container-luri mb-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 text-center">
          Trusted by
        </p>
      </div>
      
      <MarqueeStrip
        items={partners.map((partner, i) => (
          <div
            key={i}
            className={`
              bg-[#ede6d8]/40 px-10 py-6 min-w-[240px] flex items-center justify-center
              border border-stone-200/20 shadow-sm
              ${partner.style}
            `}
          >
            <span className="text-stone-600 font-medium tracking-tight opacity-80 text-lg">
              {partner.name}
            </span>
          </div>
        ))}
        itemClassName="px-3"
      />
    </section>
  );
}

