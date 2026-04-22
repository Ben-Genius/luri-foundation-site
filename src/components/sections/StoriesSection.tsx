"use client";
import { HorizontalScroll } from "@/components/motion/HorizontalScroll";
import { ImagePanel } from "@/components/sections/ImagePanel";
import { stories } from "@/lib/content/siteContent";

export function StoriesSection() {
  return (
    <HorizontalScroll
      title="Real people. Real outcomes."
      subtitle="Community Voices"
      description="First-hand accounts from beneficiaries across the Upper West Region — in their own words, on their own terms."
    >
      {stories.map((story) => (
        <div key={story.name} className="w-[85vw] md:w-[450px] flex-shrink-0">
          <ImagePanel
            src={story.image}
            title={story.name}
            body={story.quote}
            programme={story.programme}
            location={story.location}
            variant="story"
          />
        </div>
      ))}
    </HorizontalScroll>
  );
}
