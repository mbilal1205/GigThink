// app/(marketing)/docs/layout.tsx
import type { Metadata } from "next";
import DocsSidebar from "@/components/docs-sections/DocsSidebar";
import {
  DocsThemeProvider,
  DocsThemeToggle,
} from "@/components/docs-sections/DocsThemeProvider";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Documentation",
  description:
    "Step-by-step guides, references, and tutorials to help you get the most out of GigThink.",
  path: "/docs",
  keywords: ["GigThink docs", "GigThink help", "product guides"],
});

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocsThemeProvider>
      <main className="min-h-screen bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-heading font-bold text-headings">
              Documentation
            </h1>
            <DocsThemeToggle />
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <DocsSidebar />
            <div className="flex-1 min-w-0">{children}</div>
          </div>
        </div>
      </main>
    </DocsThemeProvider>
  );
}