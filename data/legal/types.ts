// data/legal/types.ts

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  listItems?: string[];
}

export interface LegalPageData {
  title: string;
  updatedDate: string;
  intro?: string;
  sections: LegalSection[];
}