// app/(marketing)/tools/page.tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "Free Tools for Freelancers & Agencies",
  description:
    "Free calculators, generators, and utilities to help freelancers and agencies grow — proposal templates, pricing calculators, and more.",
  path: "/tools",
  keywords: [
    "freelance tools",
    "proposal templates",
    "pricing calculator",
    "free freelancer tools",
  ],
});

export default function ToolsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Tools", url: "/tools" },
          ]),
        ]}
      />
      <div>Tools page</div>
    </>
  );
}