// app/(marketing)/layout.tsx
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site-config";

// ==========================================
// Section-level metadata (child pages override karenge)
// ==========================================
export const metadata = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Accessibility: skip-to-content link for keyboard + screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <Navbar />

      <main
        id="main-content"
        className="flex-1 pb-20 md:pb-0"
        role="main"
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}