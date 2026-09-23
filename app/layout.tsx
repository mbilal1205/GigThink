import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "sonner"; // 👈 Sonner Toaster import kiya
import "./globals.css"
import { cn } from "@/lib/utils";

// ==========================================
// 1. FONTS OPTIMIZATION (Inter & Space Grotesk)
// ==========================================
const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

// ==========================================
// 2. GLOBAL SEO METADATA (Google & Socials Ready)
// ==========================================
export const metadata: Metadata = {
  title: {
    default: "CodEarn GigThink — Win More Clients with AI Copilot",
    template: "%s | CodEarn GigThink",
  },
  description:
    "Win More Clients with AI, Not Just Better Proposals. GigThink is the ultimate AI copilot for freelancers and agencies to extract client pain points and build technical roadmaps.",
  keywords: [
    "GigThink",
    "CodEarn",
    "AI Proposal Generator",
    "Freelancer AI Copilot",
    "Upwork proposal tool",
    "Fiverr gig manager",
    "B2B Client Acquisition AI",
    "Technical roadmap builder",
  ],
  authors: [{ name: "CodEarn Tech", url: "https://codearn.com" }],
  metadataBase: new URL("https://gigthink.codearn.com"),
  alternates: {
    canonical: "/",
  },
  // OpenGraph (Facebook, LinkedIn, Discord Optimization)
  openGraph: {
    title: "CodEarn GigThink — Win More Clients with AI Copilot",
    description: "Win More Clients with AI. Not Just Better Proposals.",
    url: "https://gigthink.codearn.com",
    siteName: "CodEarn GigThink",
    locale: "en_US",
    type: "website",
  },
  // Twitter / X SEO Card Optimization
  twitter: {
    card: "summary_large_image",
    title: "CodEarn GigThink — Freelancer AI Copilot",
    description: "Extract client pain points and build winning strategies in seconds.",
  },
}

// ==========================================
// 3. MAIN ROOT LAYOUT
// ==========================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(fontHeading.variable, "font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen bg-background text-foreground selection:bg-primary/20"
      
      suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Main Top Header Navigation */}

          {/* Is main tag mein bottom padding lazmi di hai taaki mobile view mein 
              content bottom navbar/tabbar ke peeche na chhupe */}
          <main className="pb-20 md:pb-0 min-h-[calc(100vh-4rem)]">
            <TooltipProvider>{children}</TooltipProvider>
          </main>

          {/* Global Footer */}
          
          {/* ── SONNER TOASTER INTEGRATION ── */}
          <Toaster richColors position="top-right" closeButton /> 
        </ThemeProvider>
      </body>
    </html>
  )
}
