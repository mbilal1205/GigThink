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

export const metadata = {
  title: "GigThink for Agencies | Scale Client Acquisition",
  description:
    "Centralize your agency's client acquisition pipeline with GigThink. Discover opportunities, manage leads, automate outreach, and track everything in one platform.",
};

export default function AgenciesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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