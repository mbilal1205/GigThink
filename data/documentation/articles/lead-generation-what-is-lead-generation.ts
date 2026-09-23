import { DocArticle } from "../types";

export const doc: DocArticle = {
  slug: "lead-generation-what-is-lead-generation",
  title: "What is Lead Generation?",
  description: "Discover how GigThink helps you find and manage potential leads.",
  category: "lead-generation",
  order: 1,
  seo: {
    title: "Lead Generation | GigThink Documentation",
    description: "Learn how to generate leads using GigThink's lead generation capabilities.",
  },
  content: [
    { type: "paragraph", text: "Lead Generation in GigThink allows you to discover potential clients from multiple sources, bringing them into a centralized database for further action." },
    { type: "heading", level: 2, text: "Sources of Leads" },
    { type: "paragraph", text: "GigThink can collect leads from various supported sources, including public databases, company websites, and other channels. The exact sources depend on the current integrations." },
    { type: "heading", level: 2, text: "How to Generate Leads" },
    { type: "steps", steps: [
      { title: "Navigate to Lead Generation", description: "Open the Lead Generation module from the main menu." },
      { title: "Define Criteria", description: "Specify your target audience, industry, or other filters." },
      { title: "Run Search", description: "GigThink will retrieve matching leads and display them." },
      { title: "Save Leads", description: "Save relevant leads to your CRM or lead list for future use." },
    ]},
  ],
};