import { DocArticle } from "../types";

export const doc: DocArticle = {
  slug: "getting-started-introduction",
  title: "Introduction to GigThink",
  description: "Learn what GigThink is, what problems it solves, and how it can help you win more clients.",
  category: "getting-started",
  order: 1,
  seo: {
    title: "Introduction to GigThink | GigThink Documentation",
    description: "Understand GigThink's purpose and how it centralizes client acquisition workflows.",
  },
  content: [
    { type: "paragraph", text: "GigThink is an AI-powered client acquisition platform designed to centralize the entire workflow from discovering opportunities to managing client relationships." },
    { type: "paragraph", text: "Instead of jumping between multiple tools and websites, GigThink brings opportunity discovery, lead generation, AI parsing, proposal creation, CRM, email automation, and follow-ups into one connected system." },
    { type: "heading", level: 2, text: "What Problems Does GigThink Solve?" },
    { type: "list", ordered: false, items: [
      "Manual searching for opportunities across different platforms",
      "Disorganized lead data and scattered communications",
      "Time-consuming proposal writing",
      "Missed follow-ups and lost potential clients",
      "No centralized pipeline to track acquisition progress",
    ]},
    { type: "heading", level: 2, text: "The Core GigThink Workflow" },
    { type: "steps", steps: [
      { title: "Discover", description: "Find opportunities and leads from multiple sources." },
      { title: "Understand", description: "AI Parser extracts key information and structures raw data." },
      { title: "Qualify", description: "Determine which opportunities are relevant and high-potential." },
      { title: "Create", description: "Generate personalized proposals using Proposal Studio." },
      { title: "Manage", description: "Track all prospects and clients in the CRM." },
      { title: "Automate", description: "Set up email automation and auto follow-ups to stay consistent." },
      { title: "Convert", description: "Move opportunities through the pipeline to win clients." },
    ]},
    { type: "callout", variant: "info", text: "GigThink is designed for freelancers, agencies, and teams who want a systematic approach to client acquisition." },
    { type: "heading", level: 2, text: "Next Steps" },
    { type: "paragraph", text: "To get started, continue to the next article: Creating Your GigThink Account." },
  ],
};