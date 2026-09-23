import { aiParserContent } from "@/data/product-content/ai-parser";
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

export default function AIParserPage() {
  return (
    <>
      <HeroSection data={aiParserContent.hero} />
      <ProblemSolution data={aiParserContent.problemSolution} />
      <HowItWorks data={aiParserContent.howItWorks} />
      <ProductShowcase data={aiParserContent.showcase} />
      <FeaturesGrid data={aiParserContent.features} />
      <UseCase data={aiParserContent.useCase} />
      <WhyGigThink data={aiParserContent.whyGigThink} />
      <Ecosystem data={aiParserContent.ecosystem} />
      <Benefits data={aiParserContent.benefits} />
      <FAQSection data={aiParserContent.faq} />
      <FinalCTA data={aiParserContent.finalCta} />
    </>
  );
}