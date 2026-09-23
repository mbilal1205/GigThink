// app/(marketing)/solutions/agencies/page.tsx
import type { Metadata } from "next";
import { agenciesData } from "@/data/solution-content/agencies";
import SolutionHero from "@/components/solution-sections/SolutionHero";
import ProblemSection from "@/components/solution-sections/ProblemSection";
import SolutionOverview from "@/components/solution-sections/SolutionOverview";
import WorkflowSection from "@/components/solution-sections/WorkflowSection";
import FeatureHighlight from "@/components/solution-sections/FeatureHighlight";
import BeforeAfterSection from "@/components/solution-sections/BeforeAfterSection";
import UseCasesSection from "@/components/solution-sections/UseCasesSection";
import BenefitsSection from "@/components/solution-sections/BenefitsSection";
import FAQSection from "@/components/solution-sections/FAQSection";
import FinalCTASection from "@/components/solution-sections/FinalCTASection";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "For Agencies — Scale Client Acquisition",
  description:
    "Centralize your agency's client acquisition pipeline with GigThink. Discover opportunities, manage leads, automate outreach, and track everything in one platform.",
  path: "/solutions/agencies",
  keywords: [
    "agency tools",
    "agency client acquisition",
    "agency CRM",
    "scale agency",
  ],
});

export default function AgenciesPage() {
  const faqs = agenciesData.faqs
    ? Object.values(agenciesData.faqs).map((f: any) => ({
        q: f.question ?? f.q ?? "",
        a: f.answer ?? f.a ?? "",
      }))
    : [];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Solutions", url: "/solutions" },
            { name: "Agencies", url: "/solutions/agencies" },
          ]),
          ...(faqs.length > 0 ? [faqJsonLd(faqs)] : []),
        ]}
      />

      <SolutionHero hero={agenciesData.hero} />
      <ProblemSection problem={agenciesData.problem} />
      <SolutionOverview solution={agenciesData.solution} />
      <WorkflowSection workflow={agenciesData.workflow} />
      {agenciesData.featureSections.map((feature, idx) => (
        <FeatureHighlight key={feature.id} feature={feature} index={idx} />
      ))}
      <BeforeAfterSection beforeAfter={agenciesData.beforeAfter} />
      <UseCasesSection useCases={agenciesData.useCases} />
      <BenefitsSection benefits={agenciesData.benefits} />
      <FAQSection faqs={agenciesData.faqs} />
      <FinalCTASection finalCta={agenciesData.finalCta} />
    </main>
  );
}