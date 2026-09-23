// data/solution-content/agencies.ts

import { SolutionPageData } from "./types";

export const agenciesData: SolutionPageData = {
  slug: "agencies",
  hero: {
    badge: "For Agencies",
    title: "Scale Client Acquisition",
    highlightedTitle: "Without Scaling Chaos.",
    subtitle:
      "GigThink gives your team one connected platform to discover opportunities, manage leads, create proposals, automate outreach, and track the entire acquisition pipeline — from first touch to signed client.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "See How It Works",
  },
  problem: {
    title: "Agency Client Acquisition Breaks at Scale",
    description:
      "When your agency grows, the manual client acquisition process becomes a bottleneck. Leads are scattered across tools, team members duplicate work, proposals take too long, and follow-ups slip through the cracks.",
    points: [
      "Multiple team members using different tools and processes",
      "Leads and opportunities scattered across spreadsheets, emails, and CRMs",
      "No visibility into team pipeline or acquisition performance",
      "Proposal creation inconsistent and slow",
      "Follow-ups are manual and often forgotten",
      "Hard to scale outbound without automation",
    ],
  },
  solution: {
    title: "How GigThink Fits Into Your Agency",
    description:
      "GigThink centralizes client acquisition for teams. It replaces fragmented workflows with a single platform where your team can discover, qualify, propose, and follow up on opportunities together.",
    points: [
      "Centralized lead and opportunity database for the whole team",
      "Shared CRM pipeline with clear stages and ownership",
      "AI-assisted proposals maintain quality and speed",
      "Automated email sequences and follow-ups reduce manual workload",
      "Multi-source opportunity discovery keeps pipeline full",
      "Consistent process from lead to client, no matter who's working it",
    ],
  },
  workflow: {
    title: "Your Agency Acquisition Pipeline",
    steps: [
      {
        title: "Discover",
        description:
          "Multi-source opportunity discovery brings leads and projects into one shared pipeline.",
      },
      {
        title: "Enrich",
        description:
          "Lead Generation and AI Parser structure and enrich lead data for team-wide use.",
      },
      {
        title: "Qualify",
        description:
          "AI helps prioritize opportunities based on fit, budget, and intent.",
      },
      {
        title: "Propose",
        description:
          "Proposal Studio creates on-brand, personalized proposals in minutes.",
      },
      {
        title: "Manage",
        description:
          "Client CRM gives every team member visibility into prospect status and history.",
      },
      {
        title: "Outreach",
        description:
          "Email Automation sends consistent, personalized outreach at scale.",
      },
      {
        title: "Follow Up",
        description:
          "Automated follow-ups ensure no lead is forgotten, even with dozens of prospects.",
      },
      {
        title: "Convert",
        description:
          "A systematic process increases conversion and builds a predictable client pipeline.",
      },
    ],
  },
  featureSections: [
    {
      id: "opportunity-discovery",
      title: "Multi-Source Opportunity Discovery",
      subtitle: "Keep the pipeline full for your team",
      description:
        "Your team no longer needs to hunt for opportunities manually. GigThink pulls relevant opportunities from multiple sources and makes them visible to everyone.",
      bulletPoints: [
        "Centralized feed of opportunities from supported sources",
        "Team members can see and claim opportunities",
        "Reduces duplicate effort and missed leads",
        "Fuel for consistent outbound motion",
      ],
    },
    {
      id: "lead-generation",
      title: "Multi-Source Lead Generation",
      subtitle: "Build a scalable lead engine",
      description:
        "Lead Generation and Lead Scraper find prospects beyond job boards. Your team can build a rich database of potential clients and feed them into your acquisition workflow.",
      bulletPoints: [
        "Discover leads from multiple channels",
        "Centralized lead database for the whole team",
        "Enrichment through AI Parser",
        "Ready for outreach and follow-up",
      ],
    },
    {
      id: "ai-processing",
      title: "AI Lead & Opportunity Processing",
      subtitle: "Turn raw data into team-ready intelligence",
      description:
        "AI Parser transforms unstructured lead data into clean, structured records. Your team spends less time on data entry and more time on client conversations.",
      bulletPoints: [
        "Structured data from messy sources",
        "Consistent fields for CRM and outreach",
        "Faster lead qualification",
        "Less manual copy-paste and errors",
      ],
    },
    {
      id: "proposal-studio",
      title: "Personalized Proposals at Scale",
      subtitle: "Maintain quality while increasing volume",
      description:
        "Proposal Studio uses opportunity context to generate personalized proposals quickly. Your team can send more proposals without sacrificing quality or brand consistency.",
      bulletPoints: [
        "AI-assisted proposal drafting",
        "Opportunity-specific content",
        "Consistent branding and structure",
        "Reduce time per proposal from hours to minutes",
      ],
    },
    {
      id: "client-crm",
      title: "Centralized Client CRM",
      subtitle: "One pipeline for the entire team",
      description:
        "Client CRM gives your agency a shared view of every prospect, client, and pipeline stage. Everyone knows what's happening and what to do next.",
      bulletPoints: [
        "Shared prospect and client database",
        "Clear pipeline stages and ownership",
        "Full communication history per contact",
        "Team collaboration without tool switching",
      ],
    },
    {
      id: "email-automation",
      title: "Automated Email Outreach",
      subtitle: "Consistent communication at scale",
      description:
        "Email Automation lets your team send personalized outreach sequences without manual effort. Combine with lead data for better response rates.",
      bulletPoints: [
        "Automated outreach sequences",
        "Personalization using lead and opportunity data",
        "Save hours of manual email sending",
        "Track engagement from the CRM",
      ],
    },
    {
      id: "auto-followups",
      title: "Automated Follow-ups",
      subtitle: "Never let a lead slip through",
      description:
        "Auto Follow-ups ensure every prospect receives timely touchpoints. Your team can handle more leads without forgetting critical follow-ups.",
      bulletPoints: [
        "Automated follow-up cadences",
        "Reduce cold leads with consistent contact",
        "Customizable timing and triggers",
        "Works with Email Automation for full sequences",
      ],
    },
    {
      id: "team-workflow",
      title: "Team Workflow Alignment",
      subtitle: "From lead to client, everyone on the same page",
      description:
        "GigThink connects discovery, proposal, CRM, outreach, and follow-up into one workflow. Your team works in the same system, eliminating confusion and data silos.",
      bulletPoints: [
        "Single source of truth for acquisition",
        "Clear handoffs between team members",
        "Consistent process across the agency",
        "Better reporting and pipeline visibility",
      ],
    },
  ],
  beforeAfter: {
    title: "Before GigThink vs With GigThink",
    before: [
      "Leads scattered across spreadsheets and inboxes",
      "Team members using different tools and processes",
      "Proposals take hours and look inconsistent",
      "Follow-ups are manual and often missed",
      "No clear picture of agency pipeline",
      "Hard to scale outbound without extra hires",
    ],
    after: [
      "All leads and opportunities in one centralized database",
      "Shared CRM pipeline with team visibility",
      "AI-generated proposals in minutes, on-brand",
      "Automated follow-ups keep every lead warm",
      "Real-time pipeline metrics and stage tracking",
      "Scale outreach without proportional team growth",
    ],
  },
  useCases: {
    title: "Agency Use Cases",
    cases: [
      {
        title: "Outbound lead generation",
        description:
          "Build lists of potential clients and run automated outreach sequences to fill your pipeline.",
      },
      {
        title: "Responding to RFPs and job posts",
        description:
          "Quickly discover and analyze opportunities, then generate tailored proposals fast.",
      },
      {
        title: "Managing a high volume of prospects",
        description:
          "Client CRM keeps hundreds of leads organized, with clear stages and team assignments.",
      },
      {
        title: "Improving proposal win rate",
        description:
          "Proposal Studio's personalization and speed allow your team to submit more high-quality proposals.",
      },
      {
        title: "Automating follow-up cadences",
        description:
          "Auto Follow-ups ensure every lead receives multiple touchpoints without manual tracking.",
      },
    ],
  },
  benefits: {
    title: "Scaling Client Acquisition with GigThink",
    items: [
      {
        title: "More pipeline, less chaos",
        description:
          "Centralized discovery and CRM keep your team organized and focused on high-value activities.",
      },
      {
        title: "Faster proposal turnaround",
        description:
          "Proposal Studio reduces time per proposal, allowing your team to respond to more opportunities.",
      },
      {
        title: "Consistent communication",
        description:
          "Automated outreach and follow-ups ensure every lead gets the same professional treatment.",
      },
      {
        title: "Predictable growth",
        description:
          "A systematic acquisition process turns client acquisition from guesswork into a repeatable engine.",
      },
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "Can multiple team members use GigThink together?",
        answer:
          "Yes, GigThink is designed to support team collaboration with a shared CRM, pipeline, and opportunity database. Team members can work on the same leads and opportunities.",
      },
      {
        question: "Does GigThink integrate with other agency tools?",
        answer:
          "Currently, GigThink focuses on providing a complete in-house workflow. Integration capabilities will be expanded in the future, but the core features replace many separate tools.",
      },
      {
        question: "How does AI help agencies specifically?",
        answer:
          "AI processes raw lead data, personalizes opportunities, and assists with proposal creation — allowing your team to handle more volume without sacrificing quality.",
      },
      {
        question: "Can we use GigThink for outbound email campaigns?",
        answer:
          "Yes, Email Automation supports outbound outreach sequences. Combined with lead generation and CRM, it provides a complete outbound acquisition system.",
      },
      {
        question: "Is there a team/agency plan?",
        answer:
          "GigThink will offer pricing plans suitable for teams and agencies. Please contact us for details as pricing is still being finalized.",
      },
    ],
  },
  finalCta: {
    title: "Ready to Scale Your Agency's Client Acquisition?",
    subtitle:
      "See how GigThink can transform your team's workflow and fill your pipeline consistently.",
    ctaText: "Book a Demo",
  },
};