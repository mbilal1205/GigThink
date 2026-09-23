import { freelancersData } from "@/data/solution-content/freelancers";
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
  title: "GigThink for Freelancers | AI-Powered Client Acquisition",
  description:
    "Stop searching for clients. GigThink helps freelancers find opportunities, create proposals, and automate follow-ups in one connected workflow.",
};

export default function FreelancersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SolutionHero hero={freelancersData.hero} />
      <ProblemSection problem={freelancersData.problem} />
      <SolutionOverview solution={freelancersData.solution} />
      <WorkflowSection workflow={freelancersData.workflow} />
      {freelancersData.featureSections.map((feature, idx) => (
        <FeatureHighlight key={feature.id} feature={feature} index={idx} />
      ))}
      <BeforeAfterSection beforeAfter={freelancersData.beforeAfter} />
      <UseCasesSection useCases={freelancersData.useCases} />
      <BenefitsSection benefits={freelancersData.benefits} />
      <FAQSection faqs={freelancersData.faqs} />
      <FinalCTASection finalCta={freelancersData.finalCta} />
    </main>
  );
}