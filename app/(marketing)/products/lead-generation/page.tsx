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
import { leadGenerationContent } from "@/data/product-content/leadGenerationContent";

export default function AIParserPage() {
  return (
    <>
      <HeroSection data={leadGenerationContent.hero} />
      <ProblemSolution data={leadGenerationContent.problemSolution} />
      <HowItWorks data={leadGenerationContent.howItWorks} />
      <ProductShowcase data={leadGenerationContent.showcase} />
      <FeaturesGrid data={leadGenerationContent.features} />
      <UseCase data={leadGenerationContent.useCase} />
      <WhyGigThink data={leadGenerationContent.whyGigThink} />
      <Ecosystem data={leadGenerationContent.ecosystem} />
      <Benefits data={leadGenerationContent.benefits} />
      <FAQSection data={leadGenerationContent.faq} />
      <FinalCTA data={leadGenerationContent.finalCta} />
    </>
  );
}