// app/(marketing)/cookies/page.tsx
import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { cookiesData } from "@/data/legal/cookies";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "Learn about the cookies used by GigThink, why we use them, and how you can manage your cookie preferences.",
  path: "/cookies",
  keywords: ["GigThink cookies", "cookie policy", "cookie preferences"],
});

export default function CookiePolicyPage() {
  return <LegalPageLayout {...cookiesData} />;
}