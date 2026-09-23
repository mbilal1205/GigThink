// data/compare-content/apollo.ts

import { CompetitorData } from "./types";

const gigThinkPricing = "Free trial available (pricing details coming soon)";

export const apolloData: CompetitorData = {
  slug: "apollo",

  name: "Apollo.io",

  shortName: "Apollo",

  tagline: "B2B database & sales engagement platform",

  description:
    "Apollo.io is a B2B sales intelligence and sales engagement platform that combines business and contact data with prospecting, account research, outreach, sequencing, and sales engagement capabilities. GigThink takes a broader client-acquisition approach by connecting opportunity discovery, lead generation, AI-powered data processing, proposal creation, CRM, email automation, and automated follow-ups into a centralized workflow.",

  category: "B2B Sales Intelligence",

  features: [
    {
      label: "Core Focus",
      gigthink:
        "AI-powered client acquisition covering opportunity discovery, lead generation, AI processing, proposals, CRM, outreach, and follow-ups",
      competitor:
        "B2B sales intelligence and sales engagement focused on finding prospects, researching companies/contacts, and executing outbound sales workflows",
    },

    {
      label: "Opportunity Discovery",
      gigthink:
        "Centralizes opportunities from multiple supported sources through the Opportunity Engine",
      competitor:
        "Discovers prospects and accounts primarily through Apollo's B2B database and prospecting capabilities",
    },

    {
      label: "Lead Generation",
      gigthink:
        "Lead Generation and Lead Scraper capabilities support discovering potential prospects from supported sources",
      competitor:
        "Provides B2B prospecting through company and contact data available within its sales intelligence platform",
    },

    {
      label: "Data Processing",
      gigthink:
        "AI Parser can transform available unstructured opportunity or lead information into structured data",
      competitor:
        "Provides structured company and contact information through its B2B sales intelligence database",
    },

    {
      label: "Proposal Studio",
      gigthink:
        "AI-assisted Proposal Studio helps users create proposals based on opportunity context",
      competitor:
        "Proposal generation is not the primary focus of Apollo's sales engagement platform",
    },

    {
      label: "AI Personalization",
      gigthink:
        "AI can use available opportunity and lead context to support personalized acquisition workflows",
      competitor:
        "Provides sales intelligence and engagement capabilities that can support personalized prospect outreach",
    },

    {
      label: "Email Automation",
      gigthink:
        "Email Automation supports automated outreach workflows connected to leads and CRM activity",
      competitor:
        "Provides email sequencing and sales engagement workflows for outbound prospecting",
    },

    {
      label: "CRM",
      gigthink:
        "Built-in Client CRM designed to manage prospects, clients, and acquisition activity",
      competitor:
        "Apollo provides sales workflow and CRM-related capabilities and can also integrate with external CRM systems",
    },

    {
      label: "Follow-ups",
      gigthink:
        "Auto Follow-ups are designed to automate follow-up workflows after initial outreach",
      competitor:
        "Automated sales sequences can schedule and manage follow-up touches across supported outreach channels",
    },

    {
      label: "Proposal Workflow",
      gigthink:
        "Discovery and lead information can flow directly into AI-assisted proposal creation",
      competitor:
        "Primarily focuses on prospecting and sales engagement rather than proposal management",
    },

    {
      label: "Multi-Source Opportunity Discovery",
      gigthink:
        "Designed to bring opportunities from multiple supported sources into one centralized workflow",
      competitor:
        "Primarily provides prospect discovery through Apollo's own B2B data and sales intelligence ecosystem",
    },

    {
      label: "Client Acquisition Workflow",
      gigthink:
        "Discovery → AI Processing → Personalization → Proposal/Outreach → CRM → Follow-up",
      competitor:
        "Prospect Search → Account/Contact Research → Outreach → Sequences → Sales Follow-up",
    },

    {
      label: "Data Centralization",
      gigthink:
        "Lead and opportunity information can be centralized within the GigThink database and connected to downstream workflows",
      competitor:
        "Company and contact information is centralized within Apollo's sales intelligence environment",
    },

    {
      label: "Pricing",
      gigthink: gigThinkPricing,
      competitor:
        "Apollo offers free and paid plans; pricing and included limits can vary by plan and current commercial terms",
    },
  ],

  pricing: {
    gigthink: gigThinkPricing,

    competitor:
      "Apollo offers free and paid plans with different feature, usage, and contact-data limits. Current pricing should be verified against Apollo's official pricing because plans and limits can change.",
  },

  detailedComparison: [
    {
      title: "Source of Leads & Opportunities",

      gigthink: [
        "GigThink is designed to centralize opportunities and leads from multiple supported sources.",
        "The Opportunity Engine can collect opportunity information from different sources.",
        "Lead Generation and Lead Scraper can contribute lead information to the wider GigThink ecosystem.",
        "The objective is to give users one place to discover and manage opportunities instead of relying on a single data source.",
      ],

      competitor: [
        "Apollo provides prospect and company discovery through its B2B sales intelligence database.",
        "Users can search for companies and contacts using available targeting and filtering capabilities.",
        "Apollo's model is primarily centered around B2B prospecting and sales intelligence rather than aggregating freelance opportunities from multiple marketplaces.",
      ],
    },

    {
      title: "Data & AI Processing",

      gigthink: [
        "GigThink's AI Parser is designed to process available raw or unstructured opportunity and lead information.",
        "AI processing can transform source information into structured data that can be used by other GigThink workflows.",
        "The processed information can support personalization, proposal generation, CRM management, and outreach.",
        "This makes AI processing part of the overall client-acquisition pipeline.",
      ],

      competitor: [
        "Apollo's core strength is structured B2B company and contact intelligence.",
        "Users can search and research prospects using information available through the Apollo platform.",
        "Apollo is primarily a sales intelligence and engagement system rather than an AI parser for aggregating arbitrary external opportunity listings.",
      ],
    },

    {
      title: "Opportunity Discovery",

      gigthink: [
        "GigThink's Opportunity Engine is designed to collect opportunities from multiple supported sources.",
        "Users can work with opportunities inside a centralized GigThink environment.",
        "AI processing can help transform collected opportunity information into a more usable format.",
        "The workflow is designed around finding actual acquisition opportunities and moving them toward action.",
      ],

      competitor: [
        "Apollo is primarily designed for B2B prospect and account discovery.",
        "Users search for companies and contacts based on sales-related criteria.",
        "Apollo is particularly suited to users who already know the type of company, persona, or market they want to target.",
      ],
    },

    {
      title: "Lead Generation",

      gigthink: [
        "GigThink provides Lead Generation capabilities as part of its broader acquisition ecosystem.",
        "Lead Scraper can contribute lead information from supported sources.",
        "Generated leads can be connected with AI processing, CRM, outreach, and follow-up workflows.",
        "Lead generation is therefore one stage of a larger acquisition pipeline.",
      ],

      competitor: [
        "Apollo is strongly focused on B2B lead and prospect discovery.",
        "Its database and search capabilities are designed to help sales teams identify relevant companies and contacts.",
        "Apollo's strength is particularly relevant when users need structured B2B prospect information and sales targeting capabilities.",
      ],
    },

    {
      title: "Proposal Creation",

      gigthink: [
        "Proposal Studio is a dedicated part of the GigThink product ecosystem.",
        "AI assistance can help users create proposals based on available opportunity information.",
        "The proposal workflow can begin directly from an opportunity or lead rather than requiring users to manually move information into another tool.",
        "This connects opportunity discovery with the next stage of client acquisition.",
      ],

      competitor: [
        "Apollo's core workflow is focused on prospecting and sales engagement.",
        "Proposal creation is not the central purpose of the platform.",
        "Users who need dedicated proposal-generation workflows may require another tool or process alongside their sales engagement stack.",
      ],
    },

    {
      title: "Email Automation",

      gigthink: [
        "Email Automation is designed to connect outbound communication with GigThink's lead and client workflows.",
        "Users can move from lead discovery into outreach without separating the data from the acquisition workflow.",
        "Automated communication can work together with Auto Follow-ups and Client CRM.",
        "The overall objective is to reduce repetitive manual outreach tasks.",
      ],

      competitor: [
        "Apollo provides sales engagement capabilities including email sequencing.",
        "Users can build structured outbound sequences for prospect communication.",
        "Apollo is particularly strong when email outreach is directly connected to B2B prospecting and sales engagement.",
      ],
    },

    {
      title: "CRM & Relationship Management",

      gigthink: [
        "GigThink includes Client CRM as part of its client-acquisition workflow.",
        "Lead and opportunity information can be connected to client records.",
        "CRM activity can work together with proposals, outreach, and follow-ups.",
        "The goal is to maintain continuity from first discovery through ongoing client relationship management.",
      ],

      competitor: [
        "Apollo provides sales-oriented workflow and CRM capabilities within its platform.",
        "It can also work with external CRM systems depending on the user's setup and integrations.",
        "Apollo's CRM-related workflow is strongly connected to sales prospecting and outbound engagement.",
      ],
    },

    {
      title: "Follow-ups & Sales Engagement",

      gigthink: [
        "Auto Follow-ups are designed to automate follow-up activity after initial outreach.",
        "Follow-up workflows can be connected to lead and client records.",
        "Email Automation and CRM can work together to maintain a consistent acquisition workflow.",
        "The focus is on keeping the prospect journey active after the initial contact.",
      ],

      competitor: [
        "Apollo provides sales sequences designed to automate repeated prospect touches.",
        "Sequences can help sales teams manage structured outbound campaigns.",
        "Apollo is therefore a strong option for teams whose primary requirement is automated B2B sales engagement.",
      ],
    },

    {
      title: "Multi-Source Client Acquisition",

      gigthink: [
        "GigThink is designed to work across multiple supported opportunity and lead sources.",
        "Users can combine opportunity discovery, lead generation, AI processing, proposals, CRM, and outreach.",
        "The platform is intended to reduce the fragmentation between finding an opportunity and managing the resulting client relationship.",
        "This makes GigThink broader than a standalone B2B contact database.",
      ],

      competitor: [
        "Apollo is primarily centered around B2B company and contact intelligence.",
        "Its workflows are especially suited to outbound sales teams targeting defined business audiences.",
        "Users may need additional systems when their acquisition process requires specialized proposal generation or opportunity aggregation outside the Apollo ecosystem.",
      ],
    },

    {
      title: "Overall Acquisition Workflow",

      gigthink: [
        "GigThink connects discovery, lead generation, AI processing, proposals, CRM, email automation, and follow-ups.",
        "The system is designed to support the acquisition process from the initial opportunity or lead through continued relationship management.",
        "Users can work with both opportunities and prospects inside the same broader ecosystem.",
        "The platform's value comes from connecting multiple acquisition stages rather than focusing on only one stage.",
      ],

      competitor: [
        "Apollo connects B2B prospect discovery with sales intelligence and sales engagement.",
        "Users can search for prospects, research accounts, create outreach sequences, and manage sales activities.",
        "Its strongest positioning is around B2B prospecting and outbound sales engagement rather than a complete proposal-to-client workflow.",
      ],
    },
  ],

  verdict: {
    gigthinkBetter:
      "GigThink is a stronger fit if you want a broader client-acquisition system that combines opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and automated follow-ups in one connected workflow.",

    competitorBetter:
      "Apollo is a stronger fit if your primary requirement is B2B sales intelligence, structured company and contact discovery, prospect research, and sales engagement sequences.",

    final:
      "GigThink and Apollo overlap in lead generation and outreach, but their primary approaches are different. Apollo is built around B2B sales intelligence, prospect data, account research, and sales engagement. GigThink is designed around a broader client-acquisition workflow that can connect multiple opportunity and lead sources with AI processing, personalized proposals, CRM, email automation, and follow-ups. Users focused primarily on finding B2B contacts and running outbound sales sequences may prefer Apollo, while freelancers, agencies, and service providers looking for a more connected acquisition workflow can benefit from GigThink's broader approach.",
  },

  faqs: [
  {
    question: "Is GigThink a replacement for Apollo?",
    answer:
      "GigThink and Apollo do not have completely identical focuses. Apollo is primarily built for B2B sales intelligence, contact discovery, prospect research, and sales engagement. GigThink focuses on a broader client-acquisition workflow, which includes opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups. Therefore, it is not accurate to call GigThink a direct Apollo clone.",
  },
  {
    question: "What is the biggest difference between GigThink and Apollo?",
    answer:
      "Apollo's major strength is B2B company and contact data with prospecting and sales engagement. GigThink's focus is connecting the broader acquisition workflow from opportunity and lead discovery to AI processing, proposal creation, CRM, and follow-up.",
  },
  {
    question: "Does GigThink have a B2B database like Apollo?",
    answer:
      "GigThink's primary focus is not to replicate Apollo's proprietary B2B database. GigThink focuses on centralizing opportunities and leads from multiple supported sources, processing them through AI, and using those data points in the acquisition workflow. Therefore, database size should not be directly equated with Apollo's.",
  },
  {
    question: "Does GigThink generate leads like Apollo?",
    answer:
      "Yes, GigThink has Lead Generation and Lead Scraper capabilities that are part of the workflow for discovering potential prospects from supported sources. The difference is that GigThink connects lead generation with proposal, CRM, outreach, and follow-up workflows.",
  },
  {
    question: "Is email automation in GigThink like Apollo's?",
    answer:
      "GigThink has Email Automation and Auto Follow-ups capabilities designed to automate outreach and follow-up within the acquisition workflow. Apollo's strong focus is B2B sales engagement and email sequencing. Both platforms provide automation, but the overall product scope is different.",
  },
  {
    question: "Does GigThink also have proposal generation?",
    answer:
      "Yes. GigThink's Proposal Studio is designed to create opportunity-specific proposals with AI assistance. This capability is part of GigThink's broader acquisition workflow, where data can be kept connected from discovery to proposal creation.",
  },
  {
    question: "Does Apollo have a feature like Proposal Studio?",
    answer:
      "Apollo's primary focus is not proposal creation. Apollo is known for sales intelligence, prospecting, and sales engagement workflows. For dedicated proposal creation, users may need additional tooling.",
  },
  {
    question: "Does GigThink have a CRM?",
    answer:
      "Yes. GigThink includes a Client CRM designed to manage prospects and clients within the acquisition workflow. The CRM can be connected with lead discovery, proposal creation, email outreach, and follow-ups.",
  },
  {
    question: "For freelancers and agencies, which is better, GigThink or Apollo?",
    answer:
      "If the primary requirement is B2B company/contact discovery and outbound sales sequences, Apollo could be a strong option. If a freelancer or agency wants to discover opportunities and leads from multiple sources and manage AI processing, proposals, CRM, email outreach, and follow-ups in a connected workflow, then GigThink's broader approach may be more relevant.",
  },
  {
    question: "Which type of user should choose Apollo and which should choose GigThink?",
    answer:
      "Apollo is particularly suitable for users who focus on B2B prospecting, company/contact intelligence, and structured outbound sales engagement. GigThink is designed for users who want to connect opportunity discovery and lead generation with AI processing, personalized proposals, CRM, email automation, and automated follow-ups in a centralized client-acquisition workflow.",
  },
]
};
