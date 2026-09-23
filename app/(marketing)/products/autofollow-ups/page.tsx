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
import { autoFollowUpsContent } from "@/data/product-content/AutoFollow-ups";

export default function AIParserPage() {
  return (
    <>
      <HeroSection data={autoFollowUpsContent.hero} />
      <ProblemSolution data={autoFollowUpsContent.problemSolution} />
      <HowItWorks data={autoFollowUpsContent.howItWorks} />
      <ProductShowcase data={autoFollowUpsContent.showcase} />
      <FeaturesGrid data={autoFollowUpsContent.features} />
      <UseCase data={autoFollowUpsContent.useCase} />
      <WhyGigThink data={autoFollowUpsContent.whyGigThink} />
      <Ecosystem data={autoFollowUpsContent.ecosystem} />
      <Benefits data={autoFollowUpsContent.benefits} />
      <FAQSection data={autoFollowUpsContent.faq} />
      <FinalCTA data={autoFollowUpsContent.finalCta} />
    </>
  );
}