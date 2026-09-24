// lib/seo/site-config.ts

export const siteConfig = {
  // Brand Configuration
  name: "GigThink",
  shortName: "GigThink",
  legalName: "CodEarn",
  brandLine: "GigThink by CodEarn",
  tagline: "Win More Clients. Close More Deals.",
  description:
    "GigThink is the income operating system for skilled people. Turn your skills into income with AI-powered proposals, client CRM, contracts, invoices, and opportunity discovery.",

  // Platform URLs
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gigthink.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://gigthink.com",

  // Locale & Discovery
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
  
  // Ownership & Identity
  authors: [{ name: "CodEarn Tech", url: "https://codearn.com" }],
  creator: "CodEarn Tech",
  publisher: "CodEarn Tech",

  // Social Connections
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  
  // Communication
  contact: {
    email: "hello@gigthink.com",
    support: "support@gigthink.com",
  },

  // Webmaster Verification
  verification: {
    google: "_6B9t8pjp5mrok5gIYnPSFKUxTmO_A0xDA4ZEA6sWy0",
  },
} as const;

/** App subdomain redirect helpers */
export const appRoutes = {
  login: `${siteConfig.appUrl}https://app.gigthink.comhttps://app.gigthink.com/auth/login`,
  signup: `${siteConfig.appUrl}/signup`,
  dashboard: `${siteConfig.appUrl}/dashboard`,
  forgotPassword: `${siteConfig.appUrl}/forgot-password`,
  billing: `${siteConfig.appUrl}/billing`,
} as const;




// "google-site-verification=_6B9t8pjp5mrok5gIYnPSFKUxTmO_A0xDA4ZEA6sWy0"