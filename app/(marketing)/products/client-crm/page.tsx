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
import { clientCRMContent } from "@/data/product-content/ClientCRM";

export default function AIParserPage() {
  return (
    <>
      <HeroSection data={clientCRMContent.hero} />
      <ProblemSolution data={clientCRMContent.problemSolution} />
      <HowItWorks data={clientCRMContent.howItWorks} />
      <ProductShowcase data={clientCRMContent.showcase} />
      <FeaturesGrid data={clientCRMContent.features} />
      <UseCase data={clientCRMContent.useCase} />
      <WhyGigThink data={clientCRMContent.whyGigThink} />
      <Ecosystem data={clientCRMContent.ecosystem} />
      <Benefits data={clientCRMContent.benefits} />
      <FAQSection data={clientCRMContent.faq} />
      <FinalCTA data={clientCRMContent.finalCta} />
    </>
  );
}