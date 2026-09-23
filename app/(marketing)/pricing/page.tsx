// app/(marketing)/pricing/page.tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import PricingClient from "../../../components/Pricing/PricingClient";

// ==========================================
// 1. SEO METADATA (Server-side — Google crawlable)
// ==========================================
export const metadata: Metadata = buildMetadata({
  title: "Pricing — Free, Pro & Agency Plans",
  description:
    "Simple, transparent pricing. Start free with 5 proposals per month. Upgrade to Pro for unlimited AI proposals, client CRM, contracts, and invoices.",
  path: "/pricing",
  keywords: [
    "freelancer software pricing",
    "AI proposal pricing",
    "freelance CRM cost",
    "Upwork tool pricing",
    "GigThink pricing",
  ],
});

// ==========================================
// 2. FAQ DATA — used for both JSON-LD + optional UI
// ==========================================
const pricingFaqs = [
  {
    q: "Can I use GigThink for free?",
    a: "Yes. The Free plan includes 5 proposals per month with basic templates and basic AI features. No credit card required.",
  },
  {
    q: "What is included in the Pro plan?",
    a: "Pro includes unlimited AI proposals, unlimited AI usage, client CRM, contracts, invoices, analytics, and premium templates.",
  },
  {
    q: "Do you offer an Agency plan?",
    a: "Yes. Agency plans include multiple team members, shared templates, a team workspace, team analytics, and central client management.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Absolutely. You can cancel anytime from your billing settings. No long-term contracts, no cancellation fees.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "We accept all major credit and debit cards, plus local payment methods via our secure payment processor.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. We offer a 7-day money-back guarantee on first-time Pro and Agency subscriptions. Contact support to request a refund.",
  },
];

// ==========================================
// 3. PAGE (Server Component — wraps client)
// ==========================================
export default function PricingPage() {
  return (
    <>
      {/* Structured data — FAQ rich snippet + breadcrumb */}
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Pricing", url: "/pricing" },
          ]),
          faqJsonLd(pricingFaqs),
        ]}
      />

      {/* Client-side interactive content */}
      <PricingClient />
    </>
  );
}