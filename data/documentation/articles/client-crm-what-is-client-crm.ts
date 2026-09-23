import { DocArticle } from "../types";

export const doc: DocArticle = {
  slug: "client-crm-what-is-client-crm",
  title: "What is Client CRM?",
  description: "Understand how to manage your prospects and clients with GigThink's CRM.",
  category: "client-crm",
  order: 1,
  seo: {
    title: "Client CRM | GigThink Documentation",
    description: "Manage your client relationships and pipeline in one place.",
  },
  content: [
    { type: "paragraph", text: "Client CRM is a central repository for all your prospects and clients. It tracks communication history, pipeline stages, and important details, helping you stay organized." },
    { type: "heading", level: 2, text: "Core CRM Features" },
    { type: "list", ordered: false, items: [
      "Contact management",
      "Pipeline stage tracking",
      "Communication history",
      "Task and follow-up integration",
    ]},
    { type: "heading", level: 2, text: "How to Add a Client" },
    { type: "steps", steps: [
      { title: "Go to CRM", description: "Navigate to the Client CRM section." },
      { title: "Click 'Add Client'", description: "Enter the client's name, company, and contact details." },
      { title: "Set Pipeline Stage", description: "Choose the current stage (e.g., Lead, Qualified, Proposal Sent)." },
      { title: "Save", description: "The client will appear in your CRM list." },
    ]},
  ],
};