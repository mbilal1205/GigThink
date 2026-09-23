import Link from "next/link";
import { BlogPost } from "@/data/blog-content/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, User } from "lucide-react";

export default function FeaturedArticle({ post }: { post: BlogPost }) {
  if (!post) return null;

  return (
    <section className="mb-12">
      <div className="bg-card border border-border/60 rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Text Side */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                Featured
              </span>
              <Badge variant="outline" className="text-primary border-primary/30">
                {post.category}
              </Badge>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-headings mb-3 leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-black">
                {post.title}
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4 line-clamp-4 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4 text-primary" /> {post.author.name}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-primary" /> {post.readingTime} min read
              </span>
              <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            </div>
            <Button 
  variant="default" 
  className="bg-neutral-900 text-white font-semibold w-fit hover:bg-neutral-800 transition-colors duration-0 group"
>
  <Link href={`/blog/${post.slug}`} className="flex items-center">
    Read Article 
    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
  </Link>
</Button>

          </div>
          {/* Image Side */}
          <div className="relative min-h-[250px] md:min-h-full">
            {post.featuredImage ? (
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center select-none"
                style={{ backgroundImage: `url(${post.featuredImage})` }}
                draggable={false}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                <span className="text-4xl font-bold text-primary/20">GigThink</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}