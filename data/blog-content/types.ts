// data/blog-content/types.ts

export interface BlogPost {
  slug: string; 
  title: string;
  excerpt: string;
  content: ArticleBlock[];
  featuredImage: string;
  category: string; // category slug
  tags: string[];
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string; // ISO date
  updatedAt?: string;
  readingTime: number; // minutes
  seo: {
    title: string;
    description: string;
    canonical?: string;
  };
  featured?: boolean;
}

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "callout"; text: string; variant?: "info" | "warning" | "success" }
  | { type: "image"; src: string; alt: string; caption?: string };

export interface Category {
  slug: string;
  name: string;
  description?: string;
}