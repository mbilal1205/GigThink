// app/(marketing)/products/email-automation/page.tsx
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
import { emailAutomationContent } from "@/data/product-content/EmailAutomation";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Email Automation — Cold Outreach That Converts",
  description:
    "Send personalized, AI-written outreach emails at scale. GigThink handles sequencing, follow-ups, and response tracking for you.",
  path: "/products/email-automation",
  keywords: [
    "freelance email automation",
    "cold outreach",
    "AI email writer",
    "client outreach automation",
    "sales email sequences",
  ],
});

export default function EmailAutomationPage() {
  const faqs = emailAutomationContent?.faq
    ? Object.values(emailAutomationContent.faq as Record<string, any>).map((f: any) => ({
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
            { name: "Email Automation", url: "/products/email-automation" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "GigThink Email Automation",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "AI-powered email automation for freelancers and agencies to scale cold outreach.",
            url: `${siteConfig.url}/products/email-automation`,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "9.90",
            },
          },
          ...(faqs.length > 0 ? [faqJsonLd(faqs)] : []),
        ]}
      />

      <HeroSection data={emailAutomationContent.hero} />
      <ProblemSolution data={emailAutomationContent.problemSolution} />
      <HowItWorks data={emailAutomationContent.howItWorks} />
      <ProductShowcase data={emailAutomationContent.showcase} />
      <FeaturesGrid data={emailAutomationContent.features} />
      <UseCase data={emailAutomationContent.useCase} />
      <WhyGigThink data={emailAutomationContent.whyGigThink} />
      <Ecosystem data={emailAutomationContent.ecosystem} />
      <Benefits data={emailAutomationContent.benefits} />
      <FAQSection data={emailAutomationContent.faq} />
      <FinalCTA data={emailAutomationContent.finalCta} />
    </>
  );
}