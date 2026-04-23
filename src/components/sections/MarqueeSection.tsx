"use client";

import Image from "next/image";
import { PerspectiveMarquee } from "@/components/motion/PerspectiveMarquee";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";

const partners = [
  { name: "Project C.U.R.E", style: "rounded-full", logo: "/images/partners/project-cure-logo.jpg" },
  { name: "Upper West Health Directorate", style: "rounded-xl rounded-tr-none", logo: "/images/partners/upper-west-health-logo.png" },
  { name: "Kulfuo Advisory Committee", style: "rounded-2xl", logo: "/images/partners/kulfuo-advisory-logo.png" },
  { name: "Ministry of Education", style: "rounded-full", logo: "/images/partners/ministry-of-education-logo.png" },
  { name: "Ghana Health Service", style: "rounded-xl", logo: "/images/partners/ghana-health-service-logo.png" },
  { name: "Regional Farmers Coop", style: "rounded-2xl rounded-bl-none", logo: "/images/partners/regional-farmers-coop-logo.png" },
  { name: "STEM Education Authority", style: "rounded-full", logo: "/images/partners/stem-education-logo.png" },
];

export function MarqueeSection() {
  return (
    <section className="bg-[#faf9f6] py-10 sm:py-12 border-y border-stone-200/50">
      <div className="container-luri text-center mb-10 sm:mb-12">
        <Reveal>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-stone-500 text-[0.62rem] font-bold uppercase tracking-widest mb-4 sm:mb-5"
            style={{ backgroundColor: "rgba(0,0,0,0.03)", borderColor: "rgba(0,0,0,0.08)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-stone-400 animate-pulse" />
            Partners &amp; Affiliates
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-700 tracking-tight mb-3">
            Trusted by leading institutions
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-stone-500 text-sm font-medium max-w-md mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
            We work alongside government bodies, health directorates, and civil society organisations
            united around northern Ghana&apos;s development.
          </p>
        </Reveal>
      </div>

      <PerspectiveMarquee
        items={partners.map((partner, i) => (
          <div
            key={i}
            className={`
              bg-white w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center
              border border-stone-200/40 shadow-sm
              ${partner.style}
            `}
          >
            <div className="relative h-12 w-12 sm:h-16 sm:w-16">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
        fontSize={100}
        pixelsPerFrame={1}
        speed={1}
        fadeColor="#faf9f6"
      />
    </section>
  );
}
