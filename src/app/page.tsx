import Hero from "@/components/Hero";
import WhatWeBelieveSection from "@/components/WhatWeBelieveSection";
import LearningTracksSection from "@/components/LearningTracksSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import VisionSection from "@/components/VisionSection";
import PartnersSection from "@/components/PartnersSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeBelieveSection />
      <LearningTracksSection />
      <WhatWeDoSection />
      <VisionSection />
      <PartnersSection />
    </>
  );
}
