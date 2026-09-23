export interface HeroContent {
  badge: string;
  headline: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface ProblemSolutionContent {
  title: string;
  problems: string[];
  solutions: string[];
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

export interface HowItWorksContent {
  steps: HowItWorksStep[];
}

export interface ShowcaseContent {
  title: string;
  description: string;
  // We'll use a placeholder visual, no image needed if we build a mockup
}

export interface FeatureItem {
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export interface FeaturesContent {
  title: string;
  items: FeatureItem[];
}

export interface UseCaseContent {
  title: string;
  description: string;
  flow: string[];
}

export interface WhyGigThinkContent {
  title: string;
  comparison: {
    traditional: string;
    gigthink: string;
  }[];
}

export interface EcosystemContent {
  title: string;
  modules: string[];
}

export interface BenefitsContent {
  title: string;
  items: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  items: FAQItem[];
}

export interface FinalCTAContent {
  headline: string;
  subtext: string;
  buttonText: string;
}

export interface ProductContent {
  slug: string;
  productName: string;
  hero: HeroContent;
  problemSolution: ProblemSolutionContent;
  howItWorks: HowItWorksContent;
  showcase: ShowcaseContent;
  features: FeaturesContent;
  useCase: UseCaseContent;
  whyGigThink: WhyGigThinkContent;
  ecosystem: EcosystemContent;
  benefits: BenefitsContent;
  faq: FAQContent;
  finalCta: FinalCTAContent;
}