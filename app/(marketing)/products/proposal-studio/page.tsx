// app/(marketing)/products/proposal-studio/page.tsx
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
import { proposalStudioContent } from "@/data/product-content/proposalStudio";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";

export const metadata: Metadata = buildMetadata({
  title: "AI Proposal Studio — Win More Freelance Clients",
  description:
    "Paste a job post, get a client-winning proposal in seconds. AI analyzes pain points, suggests pricing, and writes in your tone — with a Win Probability Score.",
  path: "/products/proposal-studio",
  keywords: [
    "AI proposal generator",
    "Upwork proposal AI",
    "freelance proposal writer",
    "client winning proposal",
    "AI proposal tool",
    "proposal studio",
  ],
});

export default function ProposalStudioPage() {
  const faqs = proposalStudioContent?.faq
    ? Object.values(proposalStudioContent.faq as Record<string, any>).map((f: any) => ({
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
            { name: "Proposal Studio", url: "/products/proposal-studio" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "GigThink Proposal Studio",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "AI proposal generator that analyzes job posts and writes client-winning proposals with Win Probability Score.",
            url: `${siteConfig.url}/products/proposal-studio`,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "9.90",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "218",
            },
          },
          ...(faqs.length > 0 ? [faqJsonLd(faqs)] : []),
        ]}
      />

      <HeroSection data={proposalStudioContent.hero} />
      <ProblemSolution data={proposalStudioContent.problemSolution} />
      <HowItWorks data={proposalStudioContent.howItWorks} />
      <ProductShowcase data={proposalStudioContent.showcase} />
      <FeaturesGrid data={proposalStudioContent.features} />
      <UseCase data={proposalStudioContent.useCase} />
      <WhyGigThink data={proposalStudioContent.whyGigThink} />
      <Ecosystem data={proposalStudioContent.ecosystem} />
      <Benefits data={proposalStudioContent.benefits} />
      <FAQSection data={proposalStudioContent.faq} />
      <FinalCTA data={proposalStudioContent.finalCta} />
    </>
  );
}