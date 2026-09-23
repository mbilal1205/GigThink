import { notFound } from "next/navigation";
import { getDocBySlug, getAdjacentDocs, getAllDocs } from "@/data/documentation";
import DocsArticleContent from "@/components/docs-sections/DocsArticleContent";
import DocsTableOfContents from "@/components/docs-sections/DocsTableOfContents";
import DocsArticleNav from "@/components/docs-sections/DocsArticleNav";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map(doc => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) return {};
  return {
    title: doc.seo.title,
    description: doc.seo.description,
  };
}

export default async function DocArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) notFound();

  const { prev, next } = getAdjacentDocs(slug);

  return (
    <div>
      <div className="mb-6">
        <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
          {doc.category}
        </Badge>
      </div>
      <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-headings mb-4">
        {doc.title}
      </h1>
      <p className="text-lg text-muted-foreground mb-8">{doc.description}</p>

      <DocsTableOfContents content={doc.content} />

      <div className="mt-8">
        <DocsArticleContent content={doc.content} />
      </div>

      <DocsArticleNav prev={prev} next={next} />
    </div>
  );
}