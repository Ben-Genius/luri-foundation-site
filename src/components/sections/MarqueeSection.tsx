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
    <section className="bg-[#faf9f6] py-16 border-y border-stone-200/50">
      <div className="container-luri text-center mb-12">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-stone-500 text-[0.62rem] font-bold uppercase tracking-widest mb-5"
          style={{ backgroundColor: "rgba(0,0,0,0.03)", borderColor: "rgba(0,0,0,0.08)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-stone-400 animate-pulse" />
          Partners &amp; Affiliates
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-stone-700 tracking-tight mb-3">
          Trusted by leading institutions
        </h2>
        <p className="text-stone-500 text-sm font-medium max-w-md mx-auto leading-relaxed">
          We work alongside government bodies, health directorates, and civil society organisations united around northern Ghana's development.
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

