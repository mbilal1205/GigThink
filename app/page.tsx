// app/(marketing)/page.tsx
import type { Metadata } from "next";
import HeroSection from "@/components/Home/HomeHero";
import TheProblemSection from "@/components/Home/TheProblemSection";
import TrustedBy from "@/components/Home/TrustedBy";
import HowItWorks from "@/components/Home/HowItWorks";
import FeaturesGrid from "@/components/Home/FeaturesGrid";
import AIProposalDemo from "@/components/Home/AIProposalDemo";
import ComparisonMatrix from "@/components/Home/ComparisonMatrix";
import ClientDiscoveryDemo from "@/components/Home/ClientDiscoveryDemo";
import FAQ from "@/components/Home/Faq";
import FinalCTA from "@/components/Home/FinalCta";
import GigThinkChat from "@/components/GigThinkChat";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";

// ==========================================
// 1. HOMEPAGE METADATA
// ==========================================
export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description:
    "GigThink turns skills into income. Win more clients with AI-powered proposals, client CRM, contracts, invoices, and opportunity discovery — all in one platform.",
  path: "/",
  keywords: [
    "AI freelancer tool",
    "win freelance clients",
    "AI proposal generator",
    "freelancer business OS",
    "client acquisition AI",
    "Upwork proposal tool",
  ],
});

// ==========================================
// 2. FAQ DATA — EXACT MATCH with components/Home/Faq.tsx
// ⚠️ Agar FAQ component ka content change karo, ye bhi update karo
// ==========================================
const homeFaqs = [
  {
    q: "How does GigThink's AI generate proposals that actually win clients?",
    a: "GigThink analyzes the client's job posting, extracts key pain points, and matches them with your past portfolio and skills. It then crafts a hyper-personalized, persuasive proposal using proven psychological frameworks—all in under 3 seconds.",
  },
  {
    q: "Can I use GigThink for Upwork, Fiverr, and direct cold outreach?",
    a: "Yes, absolutely! GigThink is built with multi-platform flexibility. You can generate tailored proposals for Upwork job posts, custom project briefs, LinkedIn outreach, and direct email pitches to high-paying clients.",
  },
  {
    q: "Will clients be able to tell that an AI wrote my proposal?",
    a: "Not at all. Our custom AI models are trained on thousands of winning human-written proposals. It avoids robotic corporate jargon and outputs natural, engaging, and professional text that sounds authentically like you.",
  },
  {
    q: "How does the AI Lead Scraper find local businesses or clients?",
    a: "Our Lead Scraper scans active digital marketplaces and local business listings based on your target niche and location filters, surfacing high-intent clients who are actively looking for the services you offer.",
  },
  {
    q: "Is there a free trial available to test out the platform?",
    a: "Yes! You can sign up for free and test out our core proposal generation and lead-finding tools without entering any credit card details. Upgrade only when you're ready to scale your freelancing business.",
  },
  {
    q: "How do I cancel or change my subscription plan?",
    a: "You have 100% control over your account. You can upgrade, downgrade, or cancel your subscription anytime directly from your dashboard settings with a single click—no questions asked.",
  },
];

// ==========================================
// 3. PAGE
// ==========================================
export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Home", url: "/" }]),
          faqJsonLd(homeFaqs),
        ]}
      />

      <HeroSection />
      <TrustedBy />
      <AIProposalDemo />
      <FeaturesGrid />
      <ClientDiscoveryDemo />
      <ComparisonMatrix />
      <HowItWorks />
      <TheProblemSection />
      <FAQ />
      <FinalCTA />
      <GigThinkChat />
    </>
  );
}