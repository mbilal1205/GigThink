// app/(marketing)/about/page.tsx
import type { Metadata } from "next";
import AboutHero from "@/components/About/aboutHero";
import GigThinkCoreValues from "@/components/About/GigThinkCoreValues";
import GigThinkMission from "@/components/About/GigThinkMission";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "About — Building the Income OS for Skilled People",
  description:
    "GigThink is on a mission to turn skills into income. Learn about our vision, our core values, and the team building the operating system for freelancers and agencies.",
  path: "/about",
  keywords: ["about GigThink", "CodEarn Tech", "freelancer income OS"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
        ]}
      />
      <AboutHero />
      <GigThinkMission />
      <GigThinkCoreValues />
    </>
  );
}