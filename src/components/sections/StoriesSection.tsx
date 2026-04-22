"use client";
import Image from "next/image";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { CircularGallery } from "@/components/ui/circular-gallery";
import { stories } from "@/lib/content/siteContent";

// Gallery items for the OGL curved gallery
const galleryItems = stories.map((s) => ({ image: s.image, text: s.name }));

// All community images for the infinite strip
const stripImages = [
  "/images/story-abiba.png",
  "/images/luri/agribusiness.png",
  "/images/story-rahimatu.png",
  "/images/luri/operations.png",
  "/images/story-mubarak.png",
  "/images/luri/verified.png",
  "/images/pillar-agribusiness.png",
  "/images/pillar-healthcare.png",
  "/images/pillar-stem.png",
];

const programmeBadgeColor: Record<string, string> = {
  Agribusiness: "rgba(182,144,0,0.25)",
  Healthcare: "rgba(0,80,53,0.25)",
  "STEM Scholarship": "rgba(182,144,0,0.18)",
};

export function StoriesSection() {
  const doubled = [...stripImages, ...stripImages];

  return (
    <section className="overflow-hidden" style={{ backgroundColor: "#020d08" }}>

      {/* ── Header ── */}
      <div className="container-luri pt-20 pb-0">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
          <div>
            <Reveal>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/60 text-[0.62rem] font-bold uppercase tracking-widest mb-6"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.10)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                Community Voices
              </div>
            </Reveal>
            <SplitHeading
              as="h2"
              text="Real people. Real outcomes."
              className="text-4xl md:text-6xl font-extrabold text-white max-w-2xl"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="text-white/45 text-base leading-relaxed max-w-xs md:text-right pb-1">
              First-hand accounts from beneficiaries across the Upper West Region — in their own words.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ── Curved gallery (OGL / WebGL) ── */}
      <div className="w-full h-[480px] sm:h-[560px]">
        <CircularGallery
          items={galleryItems}
          bend={3}
          borderRadius={0.08}
          scrollSpeed={2}
          scrollEase={0.025}
        />
      </div>

      {/* ── Quote cards ── */}
      <div className="container-luri py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stories.map((story, i) => (
            <Reveal key={story.name} delay={i * 0.1}>
              <div
                className="rounded-2xl p-6 flex flex-col gap-5 h-full"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Quote mark */}
                <span className="text-4xl leading-none font-serif" style={{ color: "var(--accent)", opacity: 0.5 }}>
                  &ldquo;
                </span>
                <p className="text-white/70 text-sm leading-relaxed flex-1 -mt-4">
                  {story.quote}
                </p>
                <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 relative">
                    <Image src={story.image} alt={story.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold leading-snug">{story.name}</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span
                        className="text-[0.55rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: programmeBadgeColor[story.programme] ?? "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
                      >
                        {story.programme}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>



    </section>
  );
}
