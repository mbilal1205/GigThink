"use client";

import { useEffect, useState } from "react";
import { DocContentBlock } from "@/data/documentation/types";

export default function DocsTableOfContents({ content }: { content: DocContentBlock[] }) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    const extracted = content
      .filter(block => block.type === "heading")
      .map(block => ({
        id: (block.text || "").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        text: block.text || "",
        level: block.level || 2,
      }));
    setHeadings(extracted);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <nav className="bg-card border border-border/60 rounded-xl p-4 mb-8">
      <h3 className="font-semibold text-headings mb-3 text-sm">On This Page</h3>
      <ul className="space-y-1">
        {headings.map((heading, idx) => (
          <li key={idx} className={heading.level === 3 ? "ml-3" : ""}>
            <a
              href={`#${heading.id}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}