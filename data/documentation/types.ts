// data/documentation/types.ts

export interface DocContentBlock {
  type: "paragraph" | "heading" | "list" | "callout" | "code" | "image" | "steps";
  // For heading
  level?: 2 | 3 | 4;
  text?: string;
  // For list
  ordered?: boolean;
  items?: string[];
  // For callout
  variant?: "info" | "warning" | "success";
  // For code
  code?: string;
  // For image
  src?: string;
  alt?: string;
  caption?: string;
  // For steps
  steps?: { title: string; description: string }[];
}

export interface DocArticle {
  slug: string;
  title: string;
  description: string; // short excerpt
  category: string; // category slug
  order: number; // for sorting within category
  content: DocContentBlock[];
  seo: {
    title: string;
    description: string;
  };
  updatedAt?: string;
}

export interface DocCategory {
  slug: string;
  name: string;
  description?: string;
  icon?: string; // optional, could be lucide icon name but we'll handle separately
}