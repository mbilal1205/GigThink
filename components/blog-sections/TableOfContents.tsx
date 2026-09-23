"use client";

import { useEffect, useState } from "react";
import { ArticleBlock } from "@/data/blog-content/types";

export default function TableOfContents({ content }: { content: ArticleBlock[] }) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    const extracted = content
      .filter(block => block.type === "heading")
      .map(block => {
        if (block.type === "heading") {
          return {
            id: block.text.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            text: block.text,
            level: block.level,
          };
        }
        return null;
      })
      .filter(Boolean) as { id: string; text: string; level: number }[];
    setHeadings(extracted);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <nav className="bg-card border border-border/60 rounded-xl p-6 mb-10">
      <h3 className="font-heading font-semibold text-headings mb-4 text-lg">
        Table of Contents
      </h3>
      <ul className="space-y-2">
        {headings.map((heading, idx) => (
          <li key={idx} className={heading.level === 3 ? "ml-4" : ""}>
            <a
              href={`#${heading.id}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors leading-snug"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}