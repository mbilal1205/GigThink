// app/sitemap.ts
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/site-config";
import { getAllPosts } from "@/data/blog-content";

const BASE = siteConfig.url;
const now = new Date();

type StaticRoute = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const STATIC_ROUTES: StaticRoute[] = [
  { path: "/", priority: 1.0, changeFrequency: "daily" },

  // Products
  { path: "/products/proposal-studio", priority: 0.95, changeFrequency: "weekly" },
  { path: "/products/ai-parser", priority: 0.85, changeFrequency: "weekly" },
  { path: "/products/client-crm", priority: 0.85, changeFrequency: "weekly" },
  { path: "/products/lead-generation", priority: 0.85, changeFrequency: "weekly" },
  { path: "/products/email-automation", priority: 0.85, changeFrequency: "weekly" },
  { path: "/products/autofollow-ups", priority: 0.85, changeFrequency: "weekly" },
  { path: "/products/opportunity-discovery", priority: 0.85, changeFrequency: "weekly" },

  // Solutions
  { path: "/solutions/freelancers", priority: 0.9, changeFrequency: "weekly" },
  { path: "/solutions/agencies", priority: 0.9, changeFrequency: "weekly" },

  // Marketing
  { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },

  // Content
  { path: "/blog", priority: 0.8, changeFrequency: "daily" },
  { path: "/docs", priority: 0.7, changeFrequency: "weekly" },
  { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
  { path: "/tools", priority: 0.7, changeFrequency: "weekly" },
  { path: "/compare", priority: 0.7, changeFrequency: "monthly" },

  // Legal / Trust
  { path: "/security", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Fix: Call getAllPosts() function properly here
  const posts = getAllPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}