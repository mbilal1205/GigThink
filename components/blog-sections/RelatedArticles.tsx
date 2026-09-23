import { BlogPost } from "@/data/blog-content/types";
import BlogCard from "./BlogCard";

export default function RelatedArticles({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-heading font-bold text-headings mb-6">
        Related Articles
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}