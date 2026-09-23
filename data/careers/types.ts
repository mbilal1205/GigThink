// data/careers/types.ts

export interface JobPosition {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string; // short card description
  aboutRole: string[]; // paragraphs
  whatYoullDo: string[];
  whatWereLookingFor: string[];
  niceToHave: string[];
  applyEmail: string; // email or link
}

export interface CareersPageContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  whyBuild: {
    title: string;
    subtitle: string;
    points: { title: string; description: string }[];
  };
  whatBuilding: {
    title: string;
    subtitle: string;
    workflowSteps: string[];
  };
  howWeHire: {
    title: string;
    steps: { title: string; description: string }[];
  };
  lifeAt: {
    title: string;
    subtitle: string;
    points: { title: string; description: string }[];
  };
  generalApplication: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}