// app/(marketing)/security/page.tsx
import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { securityData } from "@/data/legal/security";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Security — How We Protect Your Data",
  description:
    "Learn how GigThink approaches security, encryption, and data protection to keep your client acquisition data safe.",
  path: "/security",
  keywords: ["GigThink security", "data security", "encryption"],
});

export default function SecurityPage() {
  return <LegalPageLayout {...securityData} />;
}