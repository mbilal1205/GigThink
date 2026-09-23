import { DocArticle } from "../types";

export const doc: DocArticle = {
  slug: "ai-parser-what-is-ai-parser",
  title: "What is AI Parser?",
  description: "Learn how AI Parser transforms raw opportunity data into structured, usable information.",
  category: "ai-parser",
  order: 1,
  seo: {
    title: "AI Parser | GigThink Documentation",
    description: "Understand how GigThink's AI Parser extracts key details from opportunities and leads.",
  },
  content: [
    { type: "paragraph", text: "AI Parser is an intelligent data processing engine that takes unstructured opportunity information and converts it into structured fields, making it easier to review and act on." },
    { type: "heading", level: 2, text: "Why AI Parser Matters" },
    { type: "paragraph", text: "Opportunities often come in various formats—job posts, emails, PDFs, or web pages—with inconsistent structure. AI Parser automatically extracts important details such as project scope, requirements, budget, and contact information." },
    { type: "heading", level: 2, text: "How It Works" },
    { type: "steps", steps: [
      { title: "Input", description: "Raw opportunity data is fed into the AI Parser." },
      { title: "Processing", description: "The AI analyzes the content and identifies key entities and fields." },
      { title: "Output", description: "Structured data is stored in your GigThink database, ready for review." },
    ]},
    { type: "callout", variant: "info", text: "AI Parser helps you save time by eliminating manual data extraction and reducing errors." },
  ],
};