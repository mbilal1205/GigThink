// app/(marketing)/products/lead-generation/page.tsx
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
import { leadGenerationContent } from "@/data/product-content/leadGenerationContent";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Lead Generation — Find Clients Before You Bid",
  description:
    "Discover high-fit freelance opportunities automatically. GigThink scans job boards, analyzes fit, and surfaces the leads most likely to convert.",
  path: "/products/lead-generation",
  keywords: [
    "freelance lead generation",
    "find freelance clients",
    "job board aggregator",
    "opportunity discovery",
    "client leads for freelancers",
  ],
});

export default function LeadGenerationPage() {
  const faqs = leadGenerationContent?.faq
    ? Object.values(leadGenerationContent.faq as Record<string, any>).map((f: any) => ({
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
            { name: "Lead Generation", url: "/products/lead-generation" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "GigThink Lead Generation",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "AI lead generation that surfaces high-fit freelance opportunities automatically.",
            url: `${siteConfig.url}/products/lead-generation`,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "9.90",
            },
          },
          ...(faqs.length > 0 ? [faqJsonLd(faqs)] : []),
        ]}
      />

      <HeroSection data={leadGenerationContent.hero} />
      <ProblemSolution data={leadGenerationContent.problemSolution} />
      <HowItWorks data={leadGenerationContent.howItWorks} />
      <ProductShowcase data={leadGenerationContent.showcase} />
      <FeaturesGrid data={leadGenerationContent.features} />
      <UseCase data={leadGenerationContent.useCase} />
      <WhyGigThink data={leadGenerationContent.whyGigThink} />
      <Ecosystem data={leadGenerationContent.ecosystem} />
      <Benefits data={leadGenerationContent.benefits} />
      <FAQSection data={leadGenerationContent.faq} />
      <FinalCTA data={leadGenerationContent.finalCta} />
    </>
  );
}