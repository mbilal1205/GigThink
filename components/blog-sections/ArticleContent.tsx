import React from "react";
import { ArticleBlock } from "@/data/blog-content/types";

export default function ArticleContent({ content }: { content: ArticleBlock[] }) {
  return (
    <div className="space-y-6">
      {content.map((block, idx) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={idx}
                className="text-base sm:text-lg leading-relaxed text-foreground/80"
              >
                {block.text}
              </p>
            );

          case "heading": {
            const id = block.text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            const baseClasses =
              "font-heading font-bold text-headings tracking-tight scroll-mt-24";
            if (block.level === 2) {
              return (
                <h2
                  key={idx}
                  id={id}
                  className={`${baseClasses} text-2xl sm:text-3xl mt-12 mb-4`}
                >
                  {block.text}
                </h2>
              );
            } else if (block.level === 3) {
              return (
                <h3
                  key={idx}
                  id={id}
                  className={`${baseClasses} text-xl sm:text-2xl mt-8 mb-3`}
                >
                  {block.text}
                </h3>
              );
            } else {
              return (
                <h4
                  key={idx}
                  id={id}
                  className={`${baseClasses} text-lg sm:text-xl mt-6 mb-2`}
                >
                  {block.text}
                </h4>
              );
            }
          }

          case "list":
            const listClass = block.ordered
              ? "list-decimal list-inside space-y-2 marker:text-primary marker:font-semibold"
              : "list-disc list-inside space-y-2 marker:text-primary";
            return block.ordered ? (
              <ol key={idx} className={listClass}>
                {block.items.map((item, i) => (
                  <li key={i} className="text-base sm:text-lg leading-relaxed text-foreground/80 pl-1">
                    {item}
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={idx} className={listClass}>
                {block.items.map((item, i) => (
                  <li key={i} className="text-base sm:text-lg leading-relaxed text-foreground/80 pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "quote":
            return (
              <blockquote
                key={idx}
                className="border-l-4 border-primary bg-primary/5 rounded-r-xl px-6 py-4 my-8"
              >
                <p className="text-lg italic text-foreground/80">{block.text}</p>
                {block.author && (
                  <footer className="mt-2 text-sm font-medium text-foreground/60">
                    — {block.author}
                  </footer>
                )}
              </blockquote>
            );

          case "callout":
            const variantClasses =
              block.variant === "warning"
                ? "border-amber-500 bg-amber-500/10"
                : block.variant === "success"
                ? "border-emerald-500 bg-emerald-500/10"
                : "border-primary bg-primary/5";
            return (
              <div
                key={idx}
                className={`border-l-4 ${variantClasses} rounded-r-xl px-6 py-4 my-8`}
              >
                <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
                  {block.text}
                </p>
              </div>
            );

          case "image":
            return (
              <figure key={idx} className="my-8">
                <img
                  src={block.src}
                  alt={block.alt}
                  className="w-full rounded-xl border border-border/50 shadow-sm"
                />
                {block.caption && (
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}