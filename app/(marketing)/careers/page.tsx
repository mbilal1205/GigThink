// app/(marketing)/careers/page.tsx

import CareersHero from "@/components/careers-sections/CareersHero";
import WhyBuildSection from "@/components/careers-sections/WhyBuildSection";
import WhatBuildingSection from "@/components/careers-sections/WhatBuildingSection";
import OpenPositionsSection from "@/components/careers-sections/OpenPositionsSection";
import HowWeHireSection from "@/components/careers-sections/HowWeHireSection";
import LifeAtGigThinkSection from "@/components/careers-sections/LifeAtGigThinkSection";
import GeneralApplicationCTA from "@/components/careers-sections/GeneralApplicationCTA";
import { careersPageContent } from "@/data/careers/careersContent";
import { positions } from "@/data/careers/positions";

export const metadata = {
  title: "Careers at GigThink | Build the Future of Client Acquisition",
  description:
    "Join GigThink's early-stage team and help build intelligent tools for freelancers, agencies, and modern teams to acquire clients more effectively.",
};

export default function CareersPage() {
  const content = careersPageContent;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <CareersHero {...content.hero} />
      <WhyBuildSection {...content.whyBuild} />
      <WhatBuildingSection {...content.whatBuilding} />
      <OpenPositionsSection positions={positions} />
      <HowWeHireSection {...content.howWeHire} />
      <LifeAtGigThinkSection {...content.lifeAt} />
      <GeneralApplicationCTA {...content.generalApplication} />
    </main>
  );
}