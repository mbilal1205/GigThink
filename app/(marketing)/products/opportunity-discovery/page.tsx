// app/(marketing)/products/opportunity-discovery/page.tsx
import type { Metadata } from "next";
import { HeroSection } from "@/components/product-sections/HeroSection";
import { ProblemSolution } from "@/components/product-sections/ProblemSolution";
import { HowItWorks } from "@/components/product-sections/HowItWorks";
import { ProductShowcase } from "@/components/product-sections/ProductShowcase";
import { FeaturesGrid } from "@/components/product-sections/FeaturesGrid";
import { UseCase } from "@/components/product-sections/UseCase";
import { WhyGigThink } from "@/components/product-sections/WhyGigThink";
import { Ecosystem } from "@/components/product-sections/Ecosystem";
import { Benefits } from "@/components/product-sections/Benefits";
import { FAQSection } from "@/components/product-sections/FAQSection";
import { FinalCTA } from "@/components/product-sections/FinalCTA";
import { opportunityDiscoveryContent } from "@/data/product-content/opportunityDiscovery";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Opportunity Discovery — Find High-Fit Clients Daily",
  description:
    "AI that finds freelance opportunities matching your skills, rates, and preferences. Stop searching — start closing.",
  path: "/products/opportunity-discovery",
  keywords: [
    "freelance opportunities",
    "job discovery AI",
    "find clients",
    "opportunity matching",
    "AI job matching",
  ],
});

export default function OpportunityDiscoveryPage() {
  const faqs = opportunityDiscoveryContent?.faq
    ? Object.values(opportunityDiscoveryContent.faq as Record<string, any>).map((f: any) => ({
        q: f?.question ?? f?.q ?? "",
        a: f?.answer ?? f?.a ?? "",
      }))
    : [];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Products", url: "/products" },
            {
              name: "Opportunity Discovery",
              url: "/products/opportunity-discovery",
            },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "GigThink Opportunity Discovery",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "AI opportunity discovery that matches freelancers with high-fit clients.",
            url: `${siteConfig.url}/products/opportunity-discovery`,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "9.90",
            },
          },
          ...(faqs.length > 0 ? [faqJsonLd(faqs)] : []),
        ]}
      />

      <HeroSection data={opportunityDiscoveryContent.hero} />
      <ProblemSolution data={opportunityDiscoveryContent.problemSolution} />
      <HowItWorks data={opportunityDiscoveryContent.howItWorks} />
      <ProductShowcase data={opportunityDiscoveryContent.showcase} />
      <FeaturesGrid data={opportunityDiscoveryContent.features} />
      <UseCase data={opportunityDiscoveryContent.useCase} />
      <WhyGigThink data={opportunityDiscoveryContent.whyGigThink} />
      <Ecosystem data={opportunityDiscoveryContent.ecosystem} />
      <Benefits data={opportunityDiscoveryContent.benefits} />
      <FAQSection data={opportunityDiscoveryContent.faq} />
      <FinalCTA data={opportunityDiscoveryContent.finalCta} />
    </>
  );
}