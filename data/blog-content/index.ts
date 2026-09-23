// data/blog-content/index.ts

import { post as post1 } from "./posts/how-to-automate-client-follow-ups-without-losing-personalization";
import { post as post2 } from "./posts/lead-generation-strategies-for-freelancers";
import { post as post3 } from "./posts/agency-client-acquisition-system";
import { post as post4 } from "./posts/best-upwork-alternatives-for-freelancers";
import { post as post5 } from "./posts/ai-powered-proposal-writing-tips";
import { post as post6 } from "./posts/why-every-freelancer-needs-a-crm";

import { BlogPost, Category } from "./types";
import { categories } from "./categories";

const rawPosts = [post1, post2, post3, post4, post5, post6];

// Filter out any undefined posts (safety)
const posts: BlogPost[] = rawPosts.filter((p): p is BlogPost => Boolean(p));

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedPost(): BlogPost | undefined {
  return getAllPosts().find((post) => post.featured) || getAllPosts()[0];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === categorySlug);
}

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.slug !== currentPost.slug)
    .filter(
      (post) =>
        post.category === currentPost.category ||
        post.tags.some((tag) => currentPost.tags.includes(tag))
    )
    .slice(0, limit);
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function searchPosts(query: string): BlogPost[] {
  const lower = query.toLowerCase();
  return getAllPosts().filter(
    (post) =>
      post.title.toLowerCase().includes(lower) ||
      post.excerpt.toLowerCase().includes(lower) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lower)) ||
      post.category.toLowerCase().includes(lower)
  );
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet);
}