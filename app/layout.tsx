// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import "./globals.css";
import { cn } from "@/lib/utils";

import { siteConfig } from "@/lib/seo/site-config";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  organizationJsonLd,
  websiteJsonLd,
  softwareAppJsonLd,
} from "@/lib/seo/json-ld";

// ==========================================
// 1. FONTS OPTIMIZATION
// ==========================================
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

// ==========================================
// 2. ROOT METADATA (Global defaults — pages override)
// ==========================================
export const metadata: Metadata = {
  ...buildMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
  }),
  // Title template applied to all child pages
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  // Icons + PWA manifest
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  // Verification (add your actual codes when ready)
  verification: {
    // google: "your-google-search-console-code",
    // yandex: "your-yandex-code",
    // other: { "msvalidate.01": "your-bing-code" },
  },
};

// ==========================================
// 3. VIEWPORT (theme color, mobile scaling)
// ==========================================
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
};

// ==========================================
// 4. ROOT LAYOUT
// ==========================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(fontHeading.variable, "font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <head>
        {/* Global structured data — Organization + WebSite + App */}
        <JsonLd
          data={[organizationJsonLd(), websiteJsonLd(), softwareAppJsonLd()]}
        />

        {/* Performance: preconnect to fonts + analytics */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>

      <body
        className="antialiased min-h-screen bg-background text-foreground selection:bg-primary/20"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster richColors position="top-right" closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}