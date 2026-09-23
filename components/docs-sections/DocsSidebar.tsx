"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DocCategory, DocArticle } from "@/data/documentation/types";
import { getCategories, getAllDocs } from "@/data/documentation";

export default function DocsSidebar() {
  const pathname = usePathname();
  const categories = getCategories();
  const allDocs = getAllDocs();

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="lg:sticky lg:top-24 space-y-4">
        <div className="font-semibold text-headings">Documentation</div>
        <nav className="space-y-1">
          {categories.map(category => {
            const docsInCat = allDocs.filter(doc => doc.category === category.slug);
            if (docsInCat.length === 0) return null;
            return (
              <div key={category.slug}>
                <div className="text-sm font-medium text-muted-foreground mt-4 mb-1">
                  {category.name}
                </div>
                {docsInCat.map(doc => (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                      pathname === `/docs/${doc.slug}`
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground/70 hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {doc.title}
                  </Link>
                ))}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}