// app/(marketing)/products/client-crm/page.tsx
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
import { clientCRMContent } from "@/data/product-content/ClientCRM";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Client CRM — Manage Every Lead & Client in One Place",
  description:
    "A lightweight CRM built for freelancers and agencies. Track leads, proposals, contracts, and client history — without the complexity of enterprise tools.",
  path: "/products/client-crm",
  keywords: [
    "freelance CRM",
    "client CRM",
    "agency CRM",
    "lightweight CRM for freelancers",
    "client management tool",
  ],
});

export default function ClientCRMPage() {
  const faqs = clientCRMContent?.faq
    ? Object.values(clientCRMContent.faq as Record<string, any>).map((f: any) => ({
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
            { name: "Client CRM", url: "/products/client-crm" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "GigThink Client CRM",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "Lightweight CRM for freelancers and agencies to manage leads, proposals, and clients.",
            url: `${siteConfig.url}/products/client-crm`,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "9.90",
            },
          },
          ...(faqs.length > 0 ? [faqJsonLd(faqs)] : []),
        ]}
      />

      <HeroSection data={clientCRMContent.hero} />
      <ProblemSolution data={clientCRMContent.problemSolution} />
      <HowItWorks data={clientCRMContent.howItWorks} />
      <ProductShowcase data={clientCRMContent.showcase} />
      <FeaturesGrid data={clientCRMContent.features} />
      <UseCase data={clientCRMContent.useCase} />
      <WhyGigThink data={clientCRMContent.whyGigThink} />
      <Ecosystem data={clientCRMContent.ecosystem} />
      <Benefits data={clientCRMContent.benefits} />
      <FAQSection data={clientCRMContent.faq} />
      <FinalCTA data={clientCRMContent.finalCta} />
    </>
  );
}