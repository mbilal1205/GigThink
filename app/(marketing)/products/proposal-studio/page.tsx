import { HeroSection } from "@/components/product-sections/HeroSection";
import { ProblemSolution } from "@/components/product-sections/ProblemSolution";
import { HowItWorks } from "@/components/product-sections/HowItWorks";
import { ProductShowcase } from "@/components/product-sections/ProductShowcase";
import { FeaturesGrid } from "@/components/product-sections/FeaturesGrid";
import { UseCase } from "@/components/product-sections/UseCase";
import { WhyGigThink } from "@/components/product-sections/WhyGigThink";
import { Ecosystem } from "@/components/product-sections/Ecosystem";
import { Benefits } from "@/components/product-sections/Benefits";
import { FAQSection } from "@/components/product-sections/FAQSection";
import { FinalCTA } from "@/components/product-sections/FinalCTA";
import { proposalStudioContent } from "@/data/product-content/proposalStudio";

export default function AIParserPage() {
  return (
    <>
      <HeroSection data={proposalStudioContent.hero} />
      <ProblemSolution data={proposalStudioContent.problemSolution} />
      <HowItWorks data={proposalStudioContent.howItWorks} />
      <ProductShowcase data={proposalStudioContent.showcase} />
      <FeaturesGrid data={proposalStudioContent.features} />
      <UseCase data={proposalStudioContent.useCase} />
      <WhyGigThink data={proposalStudioContent.whyGigThink} />
      <Ecosystem data={proposalStudioContent.ecosystem} />
      <Benefits data={proposalStudioContent.benefits} />
      <FAQSection data={proposalStudioContent.faq} />
      <FinalCTA data={proposalStudioContent.finalCta} />
    </>
  );
}