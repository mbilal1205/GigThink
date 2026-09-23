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
import { emailAutomationContent } from "@/data/product-content/EmailAutomation";

export default function AIParserPage() {
  return (
    <>
      <HeroSection data={emailAutomationContent.hero} />
      <ProblemSolution data={emailAutomationContent.problemSolution} />
      <HowItWorks data={emailAutomationContent.howItWorks} />
      <ProductShowcase data={emailAutomationContent.showcase} />
      <FeaturesGrid data={emailAutomationContent.features} />
      <UseCase data={emailAutomationContent.useCase} />
      <WhyGigThink data={emailAutomationContent.whyGigThink} />
      <Ecosystem data={emailAutomationContent.ecosystem} />
      <Benefits data={emailAutomationContent.benefits} />
      <FAQSection data={emailAutomationContent.faq} />
      <FinalCTA data={emailAutomationContent.finalCta} />
    </>
  );
}