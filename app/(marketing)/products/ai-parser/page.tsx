// app/(marketing)/products/ai-parser/page.tsx
import type { Metadata } from "next";
import { aiParserContent } from "@/data/product-content/ai-parser";
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
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";

export const metadata: Metadata = buildMetadata({
  title: "AI Job Post Parser — Extract Client Intent Instantly",
  description:
    "GigThink's AI parser analyzes raw job posts and extracts pain points, required skills, budget signals, and hidden red flags — so you bid smarter.",
  path: "/products/ai-parser",
  keywords: [
    "AI job parser",
    "job post analyzer",
    "Upwork job analysis",
    "freelance job parser",
    "client intent extraction",
  ],
});

export default function AIParserPage() {
  const faqs = aiParserContent?.faq
    ? Object.values(aiParserContent.faq as Record<string, any>).map((f: any) => ({
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
            { name: "AI Parser", url: "/products/ai-parser" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "GigThink AI Parser",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "AI-powered job post parser that extracts pain points, skills, and intent from raw freelance job posts.",
            url: `${siteConfig.url}/products/ai-parser`,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "9.90",
            },
          },
          ...(faqs.length > 0 ? [faqJsonLd(faqs)] : []),
        ]}
      />

      <HeroSection data={aiParserContent.hero} />
      <ProblemSolution data={aiParserContent.problemSolution} />
      <HowItWorks data={aiParserContent.howItWorks} />
      <ProductShowcase data={aiParserContent.showcase} />
      <FeaturesGrid data={aiParserContent.features} />
      <UseCase data={aiParserContent.useCase} />
      <WhyGigThink data={aiParserContent.whyGigThink} />
      <Ecosystem data={aiParserContent.ecosystem} />
      <Benefits data={aiParserContent.benefits} />
      <FAQSection data={aiParserContent.faq} />
      <FinalCTA data={aiParserContent.finalCta} />
    </>
  );
}