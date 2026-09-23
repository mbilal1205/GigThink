// app/(marketing)/compare/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getCompetitorData } from "@/data/compare-content";
import CompareHero from "@/components/compare-sections/CompareHero";
import QuickComparisonTable from "@/components/compare-sections/QuickComparisonTable";
import DetailedComparison from "@/components/compare-sections/DetailedComparison";
import VerdictSection from "@/components/compare-sections/VerdictSection";
import FAQSection from "@/components/compare-sections/FAQSection";
import CTASection from "@/components/compare-sections/CTASection";

// ✅ generateMetadata: params ab Promise hai, isliye await karo
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getCompetitorData(slug);
  if (!data) return {};
  return {
    title: `GigThink vs ${data.name} | Compare Features, Pricing & Workflow`,
    description: `Detailed comparison between GigThink and ${data.name}. See which platform is better for client acquisition, automation, CRM, and pricing.`,
  };
}

// ✅ Page component: params Promise hai, isliye async + await
export default async function CompareDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getCompetitorData(slug);
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <CompareHero data={data} />
      <QuickComparisonTable data={data} />
      <DetailedComparison data={data} />
      <VerdictSection data={data} />
      <FAQSection data={data} />
      <CTASection />
    </main>
  );
}