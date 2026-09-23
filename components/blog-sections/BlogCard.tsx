import Link from "next/link";
import { BlogPost } from "@/data/blog-content/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

export default function BlogCard({ post }: { post: BlogPost }) {
  if (!post) return null;

  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <Card className="h-full flex flex-col overflow-hidden border-border/60 bg-card">
        {/* Image as background div (protection without event handlers) */}
        <div className="h-36 border-b border-border/40">
          {post.featuredImage ? (
            <div
              className="w-full h-full bg-cover bg-center select-none"
              style={{ backgroundImage: `url(${post.featuredImage})` }}
              draggable={false}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent flex items-center justify-center">
              <svg
                className="w-16 h-16 text-primary/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          )}
        </div>

        <CardContent className="flex-grow p-5">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 text-xs font-medium">
              {post.category}
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readingTime} min
            </span>
          </div>
          <h3 className="text-lg font-heading font-semibold text-headings line-clamp-2 mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </CardContent>

        <CardFooter className="px-5 py-3 border-t border-border/50 text-xs text-muted-foreground flex items-center gap-1">
          <User className="h-3 w-3 text-primary" /> {post.author.name} ·{" "}
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </CardFooter>
      </Card>
    </Link>
  );
}