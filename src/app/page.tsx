import { HomeHero } from "../components/sections/HomeHero";
import { MarqueeSection } from "../components/sections/MarqueeSection";
import { PillarsSection } from "../components/sections/PillarsSection";
import { ImpactSection } from "../components/sections/ImpactSection";
import { ValuesSection } from "../components/sections/ValuesSection";
import { ModelSection } from "../components/sections/ModelSection";
import { PartnerSection } from "../components/sections/PartnerSection";
import { StoriesSection } from "../components/sections/StoriesSection";
import { NewsletterSection } from "../components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <div className="px-3">
      <HomeHero />
      {/* <MarqueeSection /> */}
      <PillarsSection />
      <PartnerSection />

      <ImpactSection />
      {/* <ValuesSection /> */}
      {/* <ModelSection /> */}
      {/* <StoriesSection /> */}
      <NewsletterSection />
    </div>
  );
}
