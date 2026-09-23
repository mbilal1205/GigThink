// app/(marketing)/docs/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import DocsSearch from "@/components/docs-sections/DocsSearch";
import {
  getAllDocs,
  searchDocs,
  getCategories,
  getDocsByCategory,
} from "@/data/documentation";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";

type SearchParams = Promise<{ q?: string }>;

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: SearchParams;
}): Promise<Metadata> {
  const params = searchParams ? await searchParams : {};
  const hasQuery = Boolean(params.q);

  return buildMetadata({
    title: hasQuery
      ? `Docs Search: "${params.q}"`
      : "Documentation — Product Help & Guides",
    description:
      "Learn how to use GigThink with step-by-step documentation, guides, and product references.",
    path: "/docs",
    noIndex: hasQuery, // search views not indexed
    keywords: ["GigThink docs", "GigThink help", "product guides"],
  });
}

export default async function DocsHomePage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const params = searchParams ? await searchParams : {};
  const query = params.q?.toLowerCase();

  const allDocs = getAllDocs();
  const categories = getCategories();

  let displayedDocs = allDocs;
  if (query) {
    displayedDocs = searchDocs(query);
  }

  const grouped = categories
    .map((cat) => ({
      category: cat,
      docs: displayedDocs.filter((doc) => doc.category === cat.slug),
    }))
    .filter((group) => group.docs.length > 0);

  return (
    <div>
      {!query && (
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Docs", url: "/docs" },
            ]),
          ]}
        />
      )}

      <div className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-headings mb-4">
          Documentation
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Everything you need to understand, configure, and get the most out of
          GigThink.
        </p>
        <DocsSearch />
      </div>

      {query ? (
        <div className="mb-8 text-center text-muted-foreground">
          Search results for &quot;{query}&quot;
        </div>
      ) : (
        <div className="mb-8">
          <h2 className="text-2xl font-heading font-semibold text-headings mb-4">
            Popular Topics
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.slice(0, 6).map((cat) => (
              <Link
                key={cat.slug}
                href={`/docs?category=${cat.slug}`}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="font-medium text-headings mb-1">{cat.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-8">
        {grouped.map((group) => (
          <div key={group.category.slug}>
            <h2 className="text-xl font-heading font-semibold text-headings mb-3">
              {group.category.name}
            </h2>
            <div className="grid gap-3">
              {group.docs.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className="block bg-card border border-border/60 rounded-lg p-4 hover:border-primary/40 transition-colors"
                >
                  <div className="font-medium text-foreground">{doc.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {doc.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}