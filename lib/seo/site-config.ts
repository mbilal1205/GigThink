// lib/seo/site-config.ts
export const siteConfig = {
  // Brand
  name: "GigThink",              // 👈 YE ZAROORI HAI — 15+ errors yahan se thay
  shortName: "GigThink",         // 👈 Ye bhi rakhna (manifest ke liye)
  legalName: "CodEarn",
  brandLine: "GigThink by CodEarn",
  tagline: "Win More Clients. Close More Deals.",
  description:
    "GigThink is the income operating system for skilled people. Turn your skills into income with AI-powered proposals, client CRM, contracts, invoices, and opportunity discovery.",

  // URLs
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gigthink.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.gigthink.com",

  // Locale + Social
  locale: "en_US",
  twitter: "@codearn",
  keywords: [
    "GigThink",
    "CodEarn",
    "AI Proposal Generator",
    "Freelancer AI Copilot",
    "Upwork proposal tool",
    "Fiverr gig manager",
    "B2B Client Acquisition AI",
    "Technical roadmap builder",
    "freelance client CRM",
    "freelance contract generator",
    "win freelance clients",
    "AI sales coach for freelancers",
  ],
  authors: [{ name: "CodEarn Tech", url: "https://codearn.com" }],
  creator: "CodEarn Tech",
  publisher: "CodEarn Tech",

  social: {
    twitter: "https://twitter.com/codearn",
    linkedin: "https://www.linkedin.com/company/codearn",
    github: "https://github.com/codearn",
  },
  contact: {
    email: "hello@gigthink.com",
    support: "support@gigthink.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** App subdomain redirect helpers */
export const appRoutes = {
  login: `${siteConfig.appUrl}/login`,
  signup: `${siteConfig.appUrl}/signup`,
  dashboard: `${siteConfig.appUrl}/dashboard`,
  forgotPassword: `${siteConfig.appUrl}/forgot-password`,
  billing: `${siteConfig.appUrl}/billing`,
} as const;