// app/(marketing)/solutions/freelancers/page.tsx
import type { Metadata } from "next";
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
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "For Freelancers — Turn Skills into Income",
  description:
    "Stop searching for clients. GigThink helps freelancers find opportunities, craft AI proposals, and automate follow-ups in one connected workflow.",
  path: "/solutions/freelancers",
  keywords: [
    "freelancer tools",
    "AI for freelancers",
    "freelance client acquisition",
    "Upwork automation",
  ],
});

export default function FreelancersPage() {
  // Extract FAQs if available in content
  const faqs = freelancersData.faqs
    ? Object.values(freelancersData.faqs).map((f: any) => ({
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
            { name: "Freelancers", url: "/solutions/freelancers" },
          ]),
          ...(faqs.length > 0 ? [faqJsonLd(faqs)] : []),
        ]}
      />

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