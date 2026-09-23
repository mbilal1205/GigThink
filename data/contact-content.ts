// data/contact-content.ts

import { MessageSquare, Headphones, Handshake, HelpCircle } from "lucide-react";

export const contactOptions = [
  {
    icon: Headphones,
    title: "Product Support",
    description: "Need help with GigThink? Get assistance with your account, features, or workflows.",
    link: "#contact-form",
    linkText: "Get Support",
  },
  {
    icon: MessageSquare,
    title: "Sales & Business",
    description: "Have questions about GigThink for your freelance business or agency?",
    link: "#contact-form",
    linkText: "Talk to Sales",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Interested in integrations, partnerships, or working together?",
    link: "#contact-form",
    linkText: "Explore Partnership",
  },
  {
    icon: HelpCircle,
    title: "General Inquiry",
    description: "Have a question that doesn't fit the categories above?",
    link: "#contact-form",
    linkText: "Send a Message",
  },
];

export const whatHappensNext = [
  {
    step: "01",
    title: "Tell Us What You Need",
    description: "Send us your question, challenge, or business inquiry.",
  },
  {
    step: "02",
    title: "Our Team Reviews It",
    description: "We'll review your message and understand the context.",
  },
  {
    step: "03",
    title: "We'll Get Back to You",
    description: "You'll receive a response with the appropriate next step.",
  },
];

export const faqs = [
  {
    question: "How can I contact GigThink?",
    answer:
      "Use the contact form above and select the category that best matches your inquiry. Our team will review your message and respond appropriately.",
  },
  {
    question: "How do I get product support?",
    answer:
      "Select 'Product Support' in the contact form and describe the issue you're experiencing. Our support team will assist you.",
  },
  {
    question: "Can I contact GigThink about partnerships?",
    answer:
      "Yes. Select 'Partnership' in the contact form and provide information about your proposed collaboration.",
  },
  {
    question: "Can agencies use GigThink?",
    answer:
      "GigThink is designed around workflows that can support freelancers, agencies, and client acquisition teams. Contact us to learn more.",
  },
  {
    question: "I have a feature suggestion. Where should I send it?",
    answer:
      "Select 'Feature Question' or 'General Inquiry' and describe the feature or improvement you'd like to see.",
  },
  {
    question: "Can I ask about GigThink before signing up?",
    answer:
      "Yes. Use the contact form for product, workflow, or business questions. We're happy to help.",
  },
];