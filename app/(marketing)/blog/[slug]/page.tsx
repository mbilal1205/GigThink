import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts, getAllPosts } from "@/data/blog-content";
import ArticleContent from "@/components/blog-sections/ArticleContent";
import TableOfContents from "@/components/blog-sections/TableOfContents";
import RelatedArticles from "@/components/blog-sections/RelatedArticles";
import BlogCTA from "@/components/blog-sections/BlogCTA";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar } from "lucide-react";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seo.title,
    description: post.seo.description,
    canonical: post.seo.canonical,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // 🟢 Fixed: Filtered out any undefined or null posts from the array
  const related = getRelatedPosts(post).filter(Boolean);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6">
            <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
            <span className="mx-2 text-muted-foreground/50">/</span>
            <span className="text-foreground/70">{post.category}</span>
          </nav>

          {/* Category Badge */}
          <div className="mb-6">
            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
              {post.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-headings leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author & Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border/50">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              {post.author.name}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              {post.readingTime} min read
            </span>
          </div>

          {/* Table of Contents */}
          <TableOfContents content={post.content} />

          {/* Article Content */}
          <div className="mt-10">
            <ArticleContent content={post.content} />
          </div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-muted-foreground hover:text-primary transition-colors">
                #{tag}
              </Badge>
            ))}
          </div>

          {/* Related Articles */}
          <RelatedArticles posts={related} />
        </div>
      </article>

      <BlogCTA />
    </main>
  );
}
