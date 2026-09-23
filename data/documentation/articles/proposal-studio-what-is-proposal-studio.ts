import { DocArticle } from "../types";

export const doc: DocArticle = {
  slug: "proposal-studio-what-is-proposal-studio",
  title: "What is Proposal Studio?",
  description: "Learn how Proposal Studio helps you create tailored proposals faster.",
  category: "proposal-studio",
  order: 1,
  seo: {
    title: "Proposal Studio | GigThink Documentation",
    description: "Create professional, personalized proposals with GigThink's Proposal Studio.",
  },
  content: [
    { type: "paragraph", text: "Proposal Studio is a built-in tool that assists you in creating professional, opportunity-specific proposals. It leverages the data you've collected and AI to generate a strong starting point." },
    { type: "heading", level: 2, text: "Key Features" },
    { type: "list", ordered: false, items: [
      "AI-assisted proposal drafting",
      "Personalization based on opportunity data",
      "Professional structure and formatting",
      "Export and send options",
    ]},
    { type: "heading", level: 2, text: "How to Create a Proposal" },
    { type: "steps", steps: [
      { title: "Select an Opportunity", description: "Choose the opportunity or lead you want to propose to." },
      { title: "Review Extracted Data", description: "Check the AI-parsed information for accuracy." },
      { title: "Generate Draft", description: "Use Proposal Studio to create an initial draft." },
      { title: "Customize", description: "Edit the proposal to add your unique value and details." },
      { title: "Send", description: "Send the proposal directly to the client." },
    ]},
  ],
};