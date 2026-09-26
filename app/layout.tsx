// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
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
import DevelopmentBanner from "@/components/Global/DevelopmentBanner";

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
  // Google Search Console verification code added
  verification: {
    google: "_6B9t8pjp5mrok5gIYnPSFKUxTmO_A0xDA4ZEA6sWy0",
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
        {/* Google tag (gtag.js) using Next.js Script component */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PEE1J17J0T"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PEE1J17J0T');
            `,
          }}
        />

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
         <DevelopmentBanner/>
      </body>
    </html>
  );
}