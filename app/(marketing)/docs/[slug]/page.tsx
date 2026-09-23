// app/(marketing)/docs/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getDocBySlug,
  getAdjacentDocs,
  getAllDocs,
} from "@/data/documentation";
import DocsArticleContent from "@/components/docs-sections/DocsArticleContent";
import DocsTableOfContents from "@/components/docs-sections/DocsTableOfContents";
import DocsArticleNav from "@/components/docs-sections/DocsArticleNav";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) return {};

  return buildMetadata({
    title: doc.seo.title,
    description: doc.seo.description,
    path: `/docs/${slug}`,
    type: "article",
  });
}

export default async function DocArticlePage({ params }: Params) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) notFound();

  const { prev, next } = getAdjacentDocs(slug);

  return (
    <div>
      <JsonLd
        data={[
          // TechArticle schema for documentation
          {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: doc.title,
            description: doc.description,
            url: `${siteConfig.url}/docs/${slug}`,
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}/logo.png`,
              },
            },
          },
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Docs", url: "/docs" },
            { name: doc.title, url: `/docs/${slug}` },
          ]),
        ]}
      />

      <div className="mb-6">
        <Badge
          variant="outline"
          className="text-primary border-primary/30 bg-primary/5"
        >
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