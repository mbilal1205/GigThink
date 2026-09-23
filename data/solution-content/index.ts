// data/solution-content/index.ts

import { freelancersData } from "./freelancers";
import { agenciesData } from "./agencies";
import { SolutionPageData } from "./types";

export const allSolutions: SolutionPageData[] = [freelancersData, agenciesData];

export function getSolutionData(slug: string): SolutionPageData | undefined {
  return allSolutions.find((s) => s.slug === slug);
}