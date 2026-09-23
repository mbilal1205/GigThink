// data/solution-content/freelancers.ts

import { SolutionPageData } from "./types";

export const freelancersData: SolutionPageData = {
  slug: "freelancers",
  hero: {
    badge: "For Freelancers",
    title: "Stop Searching for Clients.",
    highlightedTitle: "Start Building a Client Pipeline.",
    subtitle:
      "GigThink brings opportunity discovery, lead generation, AI personalization, proposals, CRM, and automated follow-ups into one connected workflow — so you can focus on delivering great work, not chasing clients.",
    ctaPrimary: "Start Your Free Trial",
    ctaSecondary: "See How It Works",
  },
  problem: {
    title: "The Freelancer's Client Acquisition Problem",
    description:
      "You spend hours jumping between job boards, marketplaces, LinkedIn, and email tools — manually collecting leads, writing proposals, and following up. It's exhausting, repetitive, and slows down your growth.",
    points: [
      "No single place to discover relevant opportunities from multiple sources",
      "Manual lead research and data entry eats your time",
      "Proposals are generic and don't convert well",
      "Follow-ups get forgotten, and leads go cold",
      "You're always busy but not consistently winning new clients",
    ],
  },
  solution: {
    title: "How GigThink Solves It",
    description:
      "GigThink centralizes your entire client-acquisition process. From finding opportunities to sending follow-ups — everything is connected, automated, and powered by AI.",
    points: [
      "Discover opportunities and leads from multiple sources in one place",
      "AI Parser turns raw listings into structured, actionable data",
      "Proposal Studio creates personalized, opportunity-specific proposals",
      "Client CRM keeps all prospects organized in one pipeline",
      "Email Automation and Auto Follow-ups work while you focus on client work",
    ],
  },
  workflow: {
    title: "Your Complete Client Acquisition Workflow",
    steps: [
      {
        title: "Discover",
        description:
          "Opportunity Discovery and Lead Generation find relevant projects and prospects across multiple sources.",
      },
      {
        title: "Understand",
        description:
          "AI Parser processes raw opportunity data into clean, structured information you can act on.",
      },
      {
        title: "Personalize",
        description:
          "AI analyzes each opportunity and helps you tailor your approach for better relevance.",
      },
      {
        title: "Propose",
        description:
          "Proposal Studio generates a personalized proposal draft, ready for your review and send.",
      },
      {
        title: "Manage",
        description:
          "Client CRM stores all prospect details, communication history, and pipeline stage.",
      },
      {
        title: "Outreach",
        description:
          "Email Automation sends personalized outreach messages at the right time.",
      },
      {
        title: "Follow Up",
        description:
          "Auto Follow-ups keep the conversation going without manual reminders.",
      },
      {
        title: "Win",
        description:
          "More consistent communication and better proposals lead to higher conversion and client wins.",
      },
    ],
  },
  featureSections: [
    {
      id: "opportunity-discovery",
      title: "Opportunity Discovery",
      subtitle: "Find relevant opportunities without the manual hunt",
      description:
        "GigThink's Opportunity Engine brings opportunities from multiple supported sources into your dashboard. You no longer need to check 10 websites every morning — GigThink does the searching for you.",
      bulletPoints: [
        "Centralized opportunity feed from multiple sources",
        "Relevant opportunities based on your focus area",
        "Save time by eliminating manual browsing",
        "AI processing makes opportunities easier to understand",
      ],
    },
    {
      id: "lead-generation",
      title: "Lead Generation",
      subtitle: "Discover potential clients beyond job boards",
      description:
        "Lead Generation and Lead Scraper help you find prospects who may need your services — even if they haven't posted a job. Build a list of potential clients and bring them into your GigThink CRM.",
      bulletPoints: [
        "Multi-source lead discovery",
        "Leads saved to your centralized database",
        "Move from lead to opportunity in one workflow",
        "No more copy-pasting from external tools",
      ],
    },
    {
      id: "ai-parser",
      title: "AI Parser",
      subtitle: "Turn raw opportunity data into structured intelligence",
      description:
        "Raw listings and lead data are messy. AI Parser extracts the important details — project scope, budget, requirements, and contact info — so you can quickly assess fit and respond faster.",
      bulletPoints: [
        "Structured data from unstructured sources",
        "Understand opportunities at a glance",
        "Reduce manual reading and analysis",
        "Feed structured data directly into proposals and outreach",
      ],
    },
    {
      id: "personalized-opportunities",
      title: "Personalized Opportunities",
      subtitle: "AI makes every opportunity feel tailored to you",
      description:
        "Not every opportunity is right for you. GigThink's AI layer processes opportunities in the context of your skills and goals, helping you focus on the ones most likely to convert.",
      bulletPoints: [
        "AI analysis for relevance and fit",
        "Prioritize opportunities with higher potential",
        "Save time by ignoring low-fit leads",
        "Increase conversion by applying where you're a strong match",
      ],
    },
    {
      id: "proposal-studio",
      title: "Proposal Studio",
      subtitle: "Create winning proposals in minutes, not hours",
      description:
        "Proposal Studio uses opportunity data and your input to generate a professional, personalized proposal draft. Review it, tweak it, and send it — no more starting from scratch every time.",
      bulletPoints: [
        "AI-assisted proposal generation",
        "Opportunity-specific, not generic templates",
        "Professional structure and tone",
        "Faster turnaround = more proposals sent",
      ],
    },
    {
      id: "client-crm",
      title: "Client CRM",
      subtitle: "Your entire client pipeline in one place",
      description:
        "Client CRM stores prospects, clients, communication history, and pipeline stage. It's built into GigThink, so you don't need a separate tool — leads flow naturally from discovery to CRM.",
      bulletPoints: [
        "Centralized prospect and client database",
        "Track stage from lead to client",
        "Communication history attached to each contact",
        "Connected to outreach and follow-up workflows",
      ],
    },
    {
      id: "email-automation",
      title: "Email Automation",
      subtitle: "Outreach that works while you work",
      description:
        "Email Automation sends personalized outreach emails as part of your workflow. Combine with lead data and AI personalization for messages that actually get responses.",
      bulletPoints: [
        "Automated outreach sequences",
        "Personalized using lead and opportunity data",
        "Save hours of manual email writing",
        "Track and manage communication from the CRM",
      ],
    },
    {
      id: "auto-followups",
      title: "Auto Follow-ups",
      subtitle: "Never miss a follow-up again",
      description:
        "Auto Follow-ups automatically send follow-up messages based on your configured workflow. Keep your name in front of prospects without remembering to do it manually.",
      bulletPoints: [
        "Automated follow-up scheduling",
        "Reduce cold leads through consistent touchpoints",
        "Customizable timing and conditions",
        "Works with Email Automation for full sequence",
      ],
    },
    {
      id: "one-workspace",
      title: "One Centralized Workspace",
      subtitle: "Everything connected, nothing lost",
      description:
        "All these capabilities live inside GigThink. You don't need to juggle Upwork, LinkedIn, a CRM, an email tool, and a proposal app. GigThink brings them together into one smooth workflow.",
      bulletPoints: [
        "No more tool switching",
        "Data flows from discovery to follow-up automatically",
        "Consistent process for every client",
        "Focus on delivering work, not managing tools",
      ],
    },
  ],
  beforeAfter: {
    title: "Before GigThink vs With GigThink",
    before: [
      "Check 10+ websites for new opportunities every day",
      "Manually copy lead info into spreadsheets",
      "Write proposals from scratch for every lead",
      "Forget follow-ups and lose potential clients",
      "No clear view of your acquisition pipeline",
    ],
    after: [
      "GigThink finds opportunities from multiple sources for you",
      "Leads are saved and structured automatically",
      "Proposal Studio drafts personalized proposals instantly",
      "Auto Follow-ups ensure no lead goes cold",
      "Client CRM gives a clear view of every prospect",
    ],
  },
  useCases: {
    title: "Freelancer Use Cases",
    cases: [
      {
        title: "Finding new clients",
        description:
          "Use Opportunity Discovery and Lead Generation to build a steady stream of relevant prospects.",
      },
      {
        title: "Responding to job posts faster",
        description:
          "AI Parser extracts key details, so you can send a tailored proposal before others even finish reading.",
      },
      {
        title: "Managing multiple prospects",
        description:
          "Client CRM keeps everyone organized — no more losing track of conversations.",
      },
      {
        title: "Winning more proposals",
        description:
          "Proposal Studio creates professional, personalized proposals that stand out.",
      },
      {
        title: "Automating outreach",
        description:
          "Email Automation and Auto Follow-ups keep you top-of-mind without constant effort.",
      },
    ],
  },
  benefits: {
    title: "Why GigThink for Freelancers",
    items: [
      {
        title: "Save hours every day",
        description:
          "Eliminate manual searching, copying, and follow-up reminders. Focus on billable work.",
      },
      {
        title: "More proposals, more wins",
        description:
          "Faster proposal creation and personalization means you can apply to more opportunities and increase your win rate.",
      },
      {
        title: "Never miss a lead",
        description:
          "Automated follow-ups and centralized CRM ensure every prospect gets attention.",
      },
      {
        title: "Build a repeatable system",
        description:
          "Stop relying on luck. GigThink gives you a consistent client acquisition process.",
      },
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "Is GigThink only for finding freelance jobs?",
        answer:
          "No, GigThink is a client acquisition platform. It helps you find opportunities and leads, create proposals, manage prospects, and automate outreach and follow-ups — all in one place.",
      },
      {
        question: "Do I need any other tools with GigThink?",
        answer:
          "GigThink replaces the need for multiple separate tools by combining discovery, CRM, proposals, and email automation. However, you may still need your email provider for sending.",
      },
      {
        question: "How does GigThink's AI help freelancers?",
        answer:
          "AI personalizes opportunities, structures raw data, and assists in proposal creation, making your workflow faster and more relevant to each client.",
      },
      {
        question: "Can I use GigThink for client work management?",
        answer:
          "GigThink's Client CRM helps manage prospects and clients through the acquisition pipeline, but it is not a full project management tool.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "Yes, GigThink offers a free trial so you can experience the workflow before committing.",
      },
    ],
  },
  finalCta: {
    title: "Ready to Build Your Client Pipeline?",
    subtitle:
      "Join GigThink today and transform how you find, pursue, and win clients.",
    ctaText: "Start Your Free Trial",
  },
};