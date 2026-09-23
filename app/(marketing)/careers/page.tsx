// app/(marketing)/careers/page.tsx
import type { Metadata } from "next";
import CareersHero from "@/components/careers-sections/CareersHero";
import WhyBuildSection from "@/components/careers-sections/WhyBuildSection";
import WhatBuildingSection from "@/components/careers-sections/WhatBuildingSection";
import OpenPositionsSection from "@/components/careers-sections/OpenPositionsSection";
import HowWeHireSection from "@/components/careers-sections/HowWeHireSection";
import LifeAtGigThinkSection from "@/components/careers-sections/LifeAtGigThinkSection";
import GeneralApplicationCTA from "@/components/careers-sections/GeneralApplicationCTA";
import { careersPageContent } from "@/data/careers/careersContent";
import { positions } from "@/data/careers/positions";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Careers — Build the Income OS for Skilled People",
  description:
    "Join GigThink's team and help build intelligent tools for freelancers and agencies to win more clients. Remote-friendly, early-stage, high-impact.",
  path: "/careers",
  keywords: ["GigThink careers", "remote jobs", "startup hiring", "tech jobs"],
});

export default function CareersPage() {
  const content = careersPageContent;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Careers", url: "/careers" },
          ]),
          // Google Jobs schema — makes jobs appear in Google Jobs search
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Open Positions at GigThink",
            itemListElement: positions.map((pos, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${siteConfig.url}/careers/${pos.slug}`,
              name: pos.title,
            })),
          },
        ]}
      />

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