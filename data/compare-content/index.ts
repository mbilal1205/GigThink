// data/compare-content/index.ts

import { upworkData } from "./upwork";
import { fiverrData } from "./fiverr";
import { freelancerData } from "./freelancer";
import { linkedinData } from "./linkedin";
import { apolloData } from "./apollo";
import { hubspotData } from "./hubspot";
import { hunterData } from "./hunter";
import { instantlyData } from "./instantly";
import { clayData } from "./clay";
import { pipedriveData } from "./pipedrive";
import { CompetitorData } from "./types";

export const allCompetitors: CompetitorData[] = [
  upworkData,
  fiverrData,
  freelancerData,
  linkedinData,
  apolloData,
  hubspotData,
  hunterData,
  instantlyData,
  clayData,
  pipedriveData,
];

export function getCompetitorData(slug: string): CompetitorData | undefined {
  return allCompetitors.find((c) => c.slug === slug);
}