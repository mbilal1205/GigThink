// data/documentation/index.ts

import { doc as gettingStartedIntro } from "./articles/getting-started-introduction";
import { doc as gettingStartedAccount } from "./articles/getting-started-creating-account";
import { doc as aiParserIntro } from "./articles/ai-parser-what-is-ai-parser";
import { doc as leadGenIntro } from "./articles/lead-generation-what-is-lead-generation";
import { doc as proposalStudioIntro } from "./articles/proposal-studio-what-is-proposal-studio";
import { doc as crmIntro } from "./articles/client-crm-what-is-client-crm";

import { DocArticle, DocCategory } from "./types";
import { docCategories } from "./categories";

const allDocs: DocArticle[] = [
  gettingStartedIntro,
  gettingStartedAccount,
  aiParserIntro,
  leadGenIntro,
  proposalStudioIntro,
  crmIntro,
];

export function getAllDocs(): DocArticle[] {
  return [...allDocs].sort((a, b) => a.order - b.order);
}

export function getDocBySlug(slug: string): DocArticle | undefined {
  return allDocs.find(doc => doc.slug === slug);
}

export function getDocsByCategory(categorySlug: string): DocArticle[] {
  return getAllDocs().filter(doc => doc.category === categorySlug);
}

export function getCategories(): DocCategory[] {
  return docCategories;
}

export function searchDocs(query: string): DocArticle[] {
  const lower = query.toLowerCase();
  return getAllDocs().filter(doc =>
    doc.title.toLowerCase().includes(lower) ||
    doc.description.toLowerCase().includes(lower) ||
    doc.content.some(block => block.text?.toLowerCase().includes(lower))
  );
}

export function getAdjacentDocs(slug: string): { prev?: DocArticle; next?: DocArticle } {
  const sorted = getAllDocs();
  const index = sorted.findIndex(doc => doc.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? sorted[index - 1] : undefined,
    next: index < sorted.length - 1 ? sorted[index + 1] : undefined,
  };
}