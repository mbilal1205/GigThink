// app/(marketing)/compare/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCompetitorData, allCompetitors } from "@/data/compare-content";
import CompareHero from "@/components/compare-sections/CompareHero";
import QuickComparisonTable from "@/components/compare-sections/QuickComparisonTable";
import DetailedComparison from "@/components/compare-sections/DetailedComparison";
import VerdictSection from "@/components/compare-sections/VerdictSection";
import FAQSection from "@/components/compare-sections/FAQSection";
import CTASection from "@/components/compare-sections/CTASection";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allCompetitors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const data = getCompetitorData(slug);
  if (!data) return {};

  return buildMetadata({
    title: `GigThink vs ${data.name} — Features, Pricing & Workflow`,
    description: `Detailed comparison between GigThink and ${data.name}. See which platform is better for client acquisition, automation, CRM, and pricing.`,
    path: `/compare/${slug}`,
    keywords: [
      `GigThink vs ${data.name}`,
      `${data.name} alternative`,
      `${data.name} comparison`,
      "best freelance tool",
    ],
  });
}

export default async function CompareDetailPage({ params }: Params) {
  const { slug } = await params;
  const data = getCompetitorData(slug);
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Compare", url: "/compare" },
            { name: `GigThink vs ${data.name}`, url: `/compare/${slug}` },
          ]),
        ]}
      />

      <CompareHero data={data} />
      <QuickComparisonTable data={data} />
      <DetailedComparison data={data} />
      <VerdictSection data={data} />
      <FAQSection data={data} />
      <CTASection />
    </main>
  );
}