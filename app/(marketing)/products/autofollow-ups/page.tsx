// app/(marketing)/products/autofollow-ups/page.tsx
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
import { autoFollowUpsContent } from "@/data/product-content/AutoFollow-ups";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Auto Follow-Ups — Never Lose a Client to Silence",
  description:
    "Automated follow-up sequences that keep you top-of-mind. GigThink sends the right message at the right time — so you close more deals without manual chasing.",
  path: "/products/autofollow-ups",
  keywords: [
    "follow up automation",
    "client follow-ups",
    "AI follow-up emails",
    "sales automation for freelancers",
    "automated follow-up sequences",
  ],
});

export default function AutoFollowUpsPage() {
  const faqs = autoFollowUpsContent?.faq
    ? Object.values(autoFollowUpsContent.faq as Record<string, any>).map((f: any) => ({
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
            { name: "Auto Follow-Ups", url: "/products/autofollow-ups" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "GigThink Auto Follow-Ups",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "Automated follow-up sequences that keep freelancers top-of-mind and close more deals.",
            url: `${siteConfig.url}/products/autofollow-ups`,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "9.90",
            },
          },
          ...(faqs.length > 0 ? [faqJsonLd(faqs)] : []),
        ]}
      />

      <HeroSection data={autoFollowUpsContent.hero} />
      <ProblemSolution data={autoFollowUpsContent.problemSolution} />
      <HowItWorks data={autoFollowUpsContent.howItWorks} />
      <ProductShowcase data={autoFollowUpsContent.showcase} />
      <FeaturesGrid data={autoFollowUpsContent.features} />
      <UseCase data={autoFollowUpsContent.useCase} />
      <WhyGigThink data={autoFollowUpsContent.whyGigThink} />
      <Ecosystem data={autoFollowUpsContent.ecosystem} />
      <Benefits data={autoFollowUpsContent.benefits} />
      <FAQSection data={autoFollowUpsContent.faq} />
      <FinalCTA data={autoFollowUpsContent.finalCta} />
    </>
  );
}