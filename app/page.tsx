import React from "react";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import ServicesSection from "@/components/home/ServicesSection";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyPicnic from "@/components/home/WhyPicnic";
import ProcessSection from "@/components/home/ProcessSection";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <WhatWeBuild />
      <FeaturedProjects />
      <WhyPicnic />
      <ProcessSection />
      <CtaSection />
    </div>
  );
}
