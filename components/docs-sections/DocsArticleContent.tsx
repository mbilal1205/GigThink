import React from "react";
import { DocContentBlock } from "@/data/documentation/types";

export default function DocsArticleContent({ content }: { content: DocContentBlock[] }) {
  return (
    <div className="space-y-6">
      {content.map((block, idx) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={idx} className="text-base sm:text-lg leading-relaxed text-foreground/80">
                {block.text}
              </p>
            );
          case "heading": {
            const level = block.level || 2;
            const id = (block.text || "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
            const base = "font-heading font-bold text-headings tracking-tight scroll-mt-24";
            if (level === 2)
              return <h2 key={idx} id={id} className={`${base} text-2xl sm:text-3xl mt-10 mb-4`}>{block.text}</h2>;
            if (level === 3)
              return <h3 key={idx} id={id} className={`${base} text-xl sm:text-2xl mt-8 mb-3`}>{block.text}</h3>;
            return <h4 key={idx} id={id} className={`${base} text-lg sm:text-xl mt-6 mb-2`}>{block.text}</h4>;
          }
          case "list":
            return block.ordered ? (
              <ol key={idx} className="list-decimal list-inside space-y-2 marker:text-primary marker:font-semibold">
                {block.items?.map((item, i) => (
                  <li key={i} className="text-base sm:text-lg leading-relaxed text-foreground/80">{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={idx} className="list-disc list-inside space-y-2 marker:text-primary">
                {block.items?.map((item, i) => (
                  <li key={i} className="text-base sm:text-lg leading-relaxed text-foreground/80">{item}</li>
                ))}
              </ul>
            );
          case "callout":
            const variantClasses =
              block.variant === "warning"
                ? "border-amber-500 bg-amber-500/10"
                : block.variant === "success"
                ? "border-emerald-500 bg-emerald-500/10"
                : "border-primary bg-primary/5";
            return (
              <div key={idx} className={`border-l-4 ${variantClasses} rounded-r-xl px-6 py-4 my-8`}>
                <p className="text-base sm:text-lg leading-relaxed text-foreground/80">{block.text}</p>
              </div>
            );
          case "code":
            return (
              <pre key={idx} className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                <code>{block.code}</code>
              </pre>
            );
          case "image":
            return (
              <figure key={idx} className="my-8">
                <img src={block.src} alt={block.alt || ""} className="w-full rounded-xl border border-border/50 shadow-sm" />
                {block.caption && <figcaption className="mt-2 text-sm text-muted-foreground text-center">{block.caption}</figcaption>}
              </figure>
            );
          case "steps":
            return (
              <ol key={idx} className="space-y-4 my-6">
                {block.steps?.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-headings">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}