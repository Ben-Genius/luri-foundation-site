"use client";

import Image from "next/image";
import { MarqueeStrip } from "@/components/motion/MarqueeStrip";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";

const partners = [
  { name: "Project C.U.R.E",              logo: "/images/partners/project-cure-logo.jpg" },
  { name: "Upper West Health Directorate", logo: "/images/partners/upper-west-health-logo.png" },
  { name: "Kulfuo Advisory Committee",     logo: "/images/partners/kulfuo-advisory-logo.png" },
  { name: "Ministry of Education",         logo: "/images/partners/ministry-of-education-logo.png" },
  { name: "Ghana Health Service",          logo: "/images/partners/ghana-health-service-logo.png" },
  { name: "Regional Farmers Coop",         logo: "/images/partners/regional-farmers-coop-logo.png" },
  { name: "STEM Education Authority",      logo: "/images/partners/stem-education-logo.png" },
];

export function MarqueeSection() {
  return (
    <section className="bg-white py-10 sm:py-14 overflow-hidden" style={{ borderTop: "1px solid #e5e5e7", borderBottom: "1px solid #e5e5e7" }}>
      <Reveal>
        <p className="text-center text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[var(--ink-400)] mb-8">
          Partners &amp; Affiliates
        </p>
      </Reveal>

      <MarqueeStrip
        speed="slow"
        items={partners.map((partner, i) => (
          <div
            key={i}
            className="relative h-10 w-32 sm:w-36 opacity-40 hover:opacity-90 transition-opacity duration-300"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-contain grayscale"
            />
          </div>
        ))}
        itemClassName="px-5 sm:px-8"
      />
    </section>
  );
}
