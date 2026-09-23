// data/solution-content/types.ts

export interface HeroContent {
  badge?: string;
  title: string;
  highlightedTitle?: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary?: string;
}

export interface ProblemContent {
  title: string;
  description: string;
  points: string[];
}

export interface SolutionOverviewContent {
  title: string;
  description: string;
  points: string[];
}

export interface WorkflowStep {
  title: string;
  description: string;
}

export interface WorkflowContent {
  title: string;
  steps: WorkflowStep[];
}

export interface FeatureSection {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  bulletPoints: string[];
}

export interface BeforeAfterContent {
  title: string;
  before: string[];
  after: string[];
}

export interface UseCase {
  title: string;
  description: string;
}

export interface UseCasesContent {
  title: string;
  cases: UseCase[];
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface BenefitsContent {
  title: string;
  items: BenefitItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  title: string;
  faqs: FAQItem[];
}

export interface FinalCTAContent {
  title: string;
  subtitle: string;
  ctaText: string;
}

export interface SolutionPageData {
  slug: string;
  hero: HeroContent;
  problem: ProblemContent;
  solution: SolutionOverviewContent;
  workflow: WorkflowContent;
  featureSections: FeatureSection[];
  beforeAfter: BeforeAfterContent;
  useCases: UseCasesContent;
  benefits: BenefitsContent;
  faqs: FAQContent;
  finalCta: FinalCTAContent;
}