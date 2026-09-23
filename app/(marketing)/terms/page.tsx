// app/(marketing)/terms/page.tsx
import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { termsData } from "@/data/legal/terms";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms and conditions for using GigThink's client acquisition platform. Read our usage policies, subscription terms, and limitations.",
  path: "/terms",
  keywords: ["GigThink terms", "terms of service", "user agreement"],
});

export default function TermsPage() {
  return <LegalPageLayout {...termsData} />;
}