import Link from "next/link";
import { Category } from "@/data/blog-content/types";
import { Badge } from "@/components/ui/badge";

export default function CategoryPills({ categories, activeSlug }: { categories: Category[], activeSlug?: string }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {/* "All" Pill */}
      <Link href="/blog">
        <Badge
          variant="outline"
          className={`cursor-pointer px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ease-in-out border ${
            activeSlug === undefined
              ? "bg-zinc-900 text-zinc-50 border-zinc-900 shadow-sm hover:bg-zinc-800"
              : "bg-transparent text-zinc-400 border-zinc-800 hover:text-zinc-100 hover:bg-zinc-900/50"
          }`}
        >
          All
        </Badge>
      </Link>

      {/* Category Pills */}
      {categories.map((cat) => (
        <Link key={cat.slug} href={`/blog?category=${cat.slug}`}>
          <Badge
            variant="outline"
            className={`cursor-pointer px-4 py-1.5 text-sm font-medium  transition-all duration-200 ease-in-out  ${
              activeSlug === cat.slug
                ? "bg-zinc-900 text-zinc-50  shadow-sm hover:bg-zinc-800"
                : "bg-transparent text-zinc-400  hover:text-zinc-100 hover:bg-zinc-900/50"
            }`}
          >
            {cat.name}
          </Badge>
        </Link>
      ))}
    </div>
  );
}
