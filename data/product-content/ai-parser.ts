import type { ProductContent } from "@/types/product";

export const aiParserContent: ProductContent = {
  slug: "ai-parser",
  productName: "AI Parser",
  hero: {
    badge: "AI-Powered Lead Analysis",
    headline: "Turn Raw Job Posts into Actionable Insights",
    description:
      "AI Parser instantly reads any job post, extracts requirements, detects client intent, and scores the opportunity so you can respond with precision—without the manual effort.",
    primaryCta: "Start Free",
    secondaryCta: "See How It Works",
  },
  problemSolution: {
    title: "Stop Wasting Time Decoding Job Posts",
    problems: [
      "Manually reading lengthy job descriptions",
      "Missing critical requirements buried in text",
      "Guessing whether a client is serious or just browsing",
      "Spending hours evaluating opportunities that go nowhere",
    ],
    solutions: [
      "AI reads and summarizes every job post in seconds",
      "Automatically extracts skills, budget, timeline, and more",
      "Identifies client intent and urgency",
      "Scores each opportunity so you focus only on high-value leads",
    ],
  },
  howItWorks: {
    steps: [
      {
        title: "Import a Lead",
        description:
          "Paste a job link or upload a document. GigThink AI Parser instantly captures the full text.",
      },
      {
        title: "AI Analysis",
        description:
          "Our AI engine processes the job post, understanding context, requirements, and nuances.",
      },
      {
        title: "Get Structured Insights",
        description:
          "Receive a clear summary: required skills, experience level, budget, timeline, client's tone, and more.",
      },
      {
        title: "Act on the Opportunity",
        description:
          "Use the insights to write a targeted proposal, adjust your pitch, or move to the next lead with confidence.",
      },
    ],
  },
  showcase: {
    title: "See AI Parser in Action",
    description:
      "Watch how a 500-word job post becomes a structured, actionable brief in seconds.",
  },
  features: {
    title: "Everything You Need to Understand Any Lead",
    items: [
      {
        icon: "ScanSearch",
        title: "Smart Extraction",
        description:
          "Automatically pulls out key details like technologies, deliverables, and client preferences from any job post.",
      },
      {
        icon: "BrainCircuit",
        title: "Intent Detection",
        description:
          "Detects whether the client is ready to hire, exploring, or just window shopping, so you know where to invest time.",
      },
      {
        icon: "Gauge",
        title: "Opportunity Scoring",
        description:
          "Each lead gets a match score based on your skills, budget fit, and historical win rates.",
      },
      {
        icon: "FileText",
        title: "Requirement Summaries",
        description:
          "Condensed, bullet-point overview of exactly what the client needs—no more re-reading long posts.",
      },
      {
        icon: "Clock",
        title: "Time-to-Value",
        description:
          "Reduces lead qualification from 15–20 minutes to under 30 seconds.",
      },
      {
        icon: "ShieldCheck",
        title: "Data Security",
        description:
          "All parsing happens in a secure environment; your data is never shared or used for training.",
      },
    ],
  },
  useCase: {
    title: "From 500 Words to a Winning Strategy in Seconds",
    description:
      "Imagine you find a job post on Upwork. Instead of reading through paragraphs of text, you paste the link into GigThink. AI Parser instantly summarizes the project, lists required skills, highlights the client's tone, and scores the fit—so you can craft a proposal that hits the mark.",
    flow: ["Job Post", "AI Analysis", "Structured Insights", "Targeted Proposal"],
  },
  whyGigThink: {
    title: "Why Use GigThink AI Parser?",
    comparison: [
      {
        traditional: "Manual reading and note-taking",
        gigthink: "AI-powered extraction and summary",
      },
      {
        traditional: "Missing hidden requirements",
        gigthink: "Comprehensive requirement detection",
      },
      {
        traditional: "No clarity on client seriousness",
        gigthink: "Intent detection and urgency signals",
      },
      {
        traditional: "Time wasted on low-fit leads",
        gigthink: "Opportunity scoring to prioritize",
      },
      {
        traditional: "Inconsistent proposal quality",
        gigthink: "Consistent, data-driven proposal insights",
      },
    ],
  },
  ecosystem: {
    title: "Part of the GigThink Workflow",
    modules: [
      "Lead Scraper",
      "AI Parser",
      "Proposal Studio",
      "Client CRM",
      "Auto Follow-ups",
    ],
  },
  benefits: {
    title: "Why You'll Love It",
    items: [
      "Save 15+ minutes per lead",
      "Never miss a key requirement",
      "Focus only on high-potential opportunities",
      "Improve proposal relevance and win rate",
      "Work faster without burnout",
    ],
  },
  faq: {
    items: [
      {
        question: "What exactly does AI Parser do?",
        answer:
          "AI Parser reads job posts and extracts structured information: required skills, budget, timeline, client tone, and more. It turns unstructured text into actionable insights you can use immediately.",
      },
      {
        question: "How accurate is the AI parsing?",
        answer:
          "Our AI is trained on thousands of real job posts and is continually improved. While no AI is perfect, it significantly reduces manual work and increases accuracy over time.",
      },
      {
        question: "Does it work with any job platform?",
        answer:
          "Yes, you can paste any job link or text (Upwork, Freelancer, LinkedIn, etc.) and AI Parser will process it. For platforms with public pages, it can fetch content automatically.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Absolutely. We use industry-standard encryption and never share or sell your data. Parsing is done in a private environment, and you can delete your data anytime.",
      },
      {
        question: "Can I use AI Parser with other GigThink features?",
        answer:
          "Yes, AI Parser integrates seamlessly with Lead Scraper, Proposal Studio, and CRM. Insights flow directly into proposal generation and follow-up automation.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "Yes, you can start with a free account and parse a limited number of leads each month. No credit card required.",
      },
    ],
  },
  finalCta: {
    headline: "Ready to Stop Wasting Time Reading Job Posts?",
    subtext: "Let AI Parser do the heavy lifting so you can focus on winning clients.",
    buttonText: "Start Winning Free",
  },
};