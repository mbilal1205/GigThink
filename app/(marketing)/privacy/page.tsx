// app/(marketing)/privacy/page.tsx
import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { privacyData } from "@/data/legal/privacy";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read how GigThink collects, uses, stores, and protects your personal information. GDPR and CCPA-compliant privacy practices.",
  path: "/privacy",
  keywords: ["GigThink privacy", "data protection", "GDPR"],
});

export default function PrivacyPage() {
  return <LegalPageLayout {...privacyData} />;
}