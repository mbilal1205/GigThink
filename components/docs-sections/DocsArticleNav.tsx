import Link from "next/link";
import { DocArticle } from "@/data/documentation/types";

export default function DocsArticleNav({ prev, next }: { prev?: DocArticle; next?: DocArticle }) {
  if (!prev && !next) return null;
  return (
    <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-border/50">
      {prev ? (
        <Link href={`/docs/${prev.slug}`} className="group">
          <div className="text-sm text-muted-foreground">← Previous</div>
          <div className="font-medium text-foreground group-hover:text-primary">{prev.title}</div>
        </Link>
      ) : <div />}
      {next ? (
        <Link href={`/docs/${next.slug}`} className="text-right group">
          <div className="text-sm text-muted-foreground">Next →</div>
          <div className="font-medium text-foreground group-hover:text-primary">{next.title}</div>
        </Link>
      ) : <div />}
    </div>
  );
}