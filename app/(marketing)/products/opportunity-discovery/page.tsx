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
import { opportunityDiscoveryContent } from "@/data/product-content/opportunityDiscovery";

export default function AIParserPage() {
  return (
    <>
      <HeroSection data={opportunityDiscoveryContent.hero} />
      <ProblemSolution data={opportunityDiscoveryContent.problemSolution} />
      <HowItWorks data={opportunityDiscoveryContent.howItWorks} />
      <ProductShowcase data={opportunityDiscoveryContent.showcase} />
      <FeaturesGrid data={opportunityDiscoveryContent.features} />
      <UseCase data={opportunityDiscoveryContent.useCase} />
      <WhyGigThink data={opportunityDiscoveryContent.whyGigThink} />
      <Ecosystem data={opportunityDiscoveryContent.ecosystem} />
      <Benefits data={opportunityDiscoveryContent.benefits} />
      <FAQSection data={opportunityDiscoveryContent.faq} />
      <FinalCTA data={opportunityDiscoveryContent.finalCta} />
    </>
  );
}