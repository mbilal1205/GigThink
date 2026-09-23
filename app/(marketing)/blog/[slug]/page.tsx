// app/(marketing)/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts, getAllPosts } from "@/data/blog-content";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";

import ArticleContent from "@/components/blog-sections/ArticleContent";
import TableOfContents from "@/components/blog-sections/TableOfContents";
import RelatedArticles from "@/components/blog-sections/RelatedArticles";
import BlogCTA from "@/components/blog-sections/BlogCTA";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar } from "lucide-react";

type Params = { params: Promise<{ slug: string }> };

// ==========================================
// 1. STATIC PARAMS — pre-render all posts at build time
// ==========================================
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// ==========================================
// 2. DYNAMIC METADATA — per post
// ==========================================
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    // SEO fields use karo, fallback to base fields
    title: post.seo?.title ?? post.title,
    description: post.seo?.description ?? post.excerpt,
    path: `/blog/${slug}`,
    canonicalOverride: post.seo?.canonical, // optional — CMS override
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
    authors: [post.author.name], // author is object { name, avatar? }
    image: post.featuredImage ?? "/opengraph-image.png",
    keywords: post.tags,
  });
}

// ==========================================
// 3. PAGE — with structured data
// ==========================================
export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post).filter(Boolean);

  // Build absolute image URL for JSON-LD (must be absolute for valid schema)
  const absoluteImageUrl = post.featuredImage
    ? post.featuredImage.startsWith("http")
      ? post.featuredImage
      : `${siteConfig.url}${post.featuredImage}`
    : `${siteConfig.url}/opengraph-image.png`;

  const postUrl = `${siteConfig.url}/blog/${slug}`;

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Structured data — Article + Breadcrumb for Google Rich Snippets */}
      <JsonLd
        data={[
          articleJsonLd({
            title: post.title,
            description: post.excerpt,
            url: postUrl,
            image: absoluteImageUrl,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt ?? post.publishedAt,
            authorName: post.author.name,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${slug}` },
          ]),
        ]}
      />

      <article className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Visual breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-muted-foreground mb-6"
          >
            <a href="/blog" className="hover:text-primary transition-colors">
              Blog
            </a>
            <span className="mx-2 text-muted-foreground/50">/</span>
            <span className="text-foreground/70">{post.category}</span>
          </nav>

          {/* Category badge */}
          <div className="mb-6">
            <Badge
              variant="outline"
              className="text-primary border-primary/30 bg-primary/5"
            >
              {post.category}
            </Badge>
          </div>

          {/* H1 — Google's primary title signal */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-headings leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt — meta description reinforcement */}
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author + Date + Reading time */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border/50">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              {post.author.name}
            </span>

            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              {/* <time> tag = semantic signal for crawlers + screen readers */}
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </span>

            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              {post.readingTime} min read
            </span>
          </div>

          {/* Table of Contents — content is ArticleBlock[] */}
          <TableOfContents content={post.content} />

          {/* Article body */}
          <div className="mt-10">
            <ArticleContent content={post.content} />
          </div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                #{tag}
              </Badge>
            ))}
          </div>

          {/* Related posts */}
          <RelatedArticles posts={related} />
        </div>
      </article>

      <BlogCTA />
    </main>
  );
}