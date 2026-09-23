// data/compare-content/types.ts

export interface ComparisonFeature {
  label: string;
  gigthink: string;
  competitor: string;
}

export interface DetailedSection {
  title: string;
  gigthink: string[];
  competitor: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CompetitorData {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  category: string;
  features: ComparisonFeature[];
  pricing: {
    gigthink: string;
    competitor: string;
  };
  detailedComparison: DetailedSection[];
  verdict: {
    gigthinkBetter: string;
    competitorBetter: string;
    final: string;
  };
  faqs: FAQ[];
}