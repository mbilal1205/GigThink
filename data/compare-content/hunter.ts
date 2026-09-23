
import { CompetitorData } from "./types";

const gigThinkPricing = "Free trial available (pricing details coming soon)";

export const hunterData: CompetitorData = {
  slug: "hunter",

  name: "Hunter.io",

  shortName: "Hunter",

  tagline: "Email finding, verification & outreach platform",

  description:
    "Hunter is a platform focused on finding professional email addresses, discovering contacts associated with domains, verifying email addresses, and supporting targeted outreach. Its core strength is helping users identify and validate professional contact information. GigThink takes a broader client-acquisition approach by combining opportunity discovery, lead generation, AI-powered data processing, proposal creation, Client CRM, email automation, and automated follow-ups into a centralized workflow.",

  category: "Email Finder & Outreach",

  features: [
    {
      label: "Core Focus",
      gigthink:
        "AI-powered end-to-end client acquisition covering opportunity discovery, lead generation, AI processing, proposals, CRM, outreach, and follow-ups",
      competitor:
        "Professional email discovery, email verification, contact research, and outbound email workflows",
    },

    {
      label: "Opportunity Discovery",
      gigthink:
        "Centralizes opportunities from multiple supported sources through the Opportunity Engine",
      competitor:
        "Primarily focuses on discovering professional contacts and email addresses rather than aggregating freelance or business opportunities",
    },

    {
      label: "Lead Generation",
      gigthink:
        "Lead Generation and Lead Scraper capabilities support discovering potential prospects from supported sources",
      competitor:
        "Supports contact discovery through domain-based searches, email finding, and prospect research capabilities",
    },

    {
      label: "Email Discovery",
      gigthink:
        "Email information may be available as part of collected lead and opportunity data where supported",
      competitor:
        "Dedicated email discovery capabilities designed to find professional email addresses",
    },

    {
      label: "Email Verification",
      gigthink:
        "Focuses on acquisition workflow management rather than functioning primarily as a dedicated email verification service",
      competitor:
        "Provides dedicated email verification capabilities to assess the deliverability and validity of email addresses",
    },

    {
      label: "AI Processing",
      gigthink:
        "AI Parser can structure available opportunity and lead information for downstream acquisition workflows",
      competitor:
        "Provides contact discovery and email intelligence features rather than positioning itself primarily as an end-to-end AI acquisition workflow",
    },

    {
      label: "Proposal Studio",
      gigthink:
        "AI-assisted Proposal Studio helps users create proposals based on opportunity-specific context",
      competitor:
        "Proposal creation is not a primary product capability",
    },

    {
      label: "CRM",
      gigthink:
        "Built-in Client CRM designed to organize prospects, clients, and acquisition activity",
      competitor:
        "Primarily focused on contact discovery, verification, and outreach rather than serving as a full client-acquisition CRM",
    },

    {
      label: "Email Automation",
      gigthink:
        "Email Automation connects outreach with leads, prospects, CRM records, and follow-up workflows",
      competitor:
        "Provides email outreach capabilities alongside contact discovery and verification",
    },

    {
      label: "Follow-ups",
      gigthink:
        "Auto Follow-ups are designed to automate prospect follow-up after initial outreach",
      competitor:
        "Supports automated outreach workflows, with capabilities depending on the current Hunter product and plan",
    },

    {
      label: "Client Acquisition Workflow",
      gigthink:
        "Discovery → AI Processing → Personalization → Proposal/Outreach → CRM → Follow-up",
      competitor:
        "Contact Discovery → Email Verification → Prospecting → Outreach",
    },

    {
      label: "Data Centralization",
      gigthink:
        "Relevant opportunity and lead information can be centralized within the GigThink database",
      competitor:
        "Contact and email intelligence is organized around prospect discovery and outreach workflows",
    },

    {
      label: "Multi-Source Acquisition",
      gigthink:
        "Designed to bring opportunities and leads from multiple supported sources into one acquisition workflow",
      competitor:
        "Primarily focuses on contact and email discovery using its available data sources and search functionality",
    },

    {
      label: "Proposal Workflow",
      gigthink:
        "Connects discovered opportunities directly with AI-assisted proposal creation",
      competitor:
        "Does not primarily provide a dedicated proposal-generation workflow",
    },

    {
      label: "Pricing",
      gigthink: gigThinkPricing,
      competitor:
        "Hunter offers free and paid plans with usage limits and plan-specific capabilities; pricing and allowances can change over time",
    },
  ],

  pricing: {
    gigthink: gigThinkPricing,

    competitor:
      "Hunter offers free and paid plans with usage-based limits for email finding, verification, and related functionality. Current pricing, credits, and feature availability may change and should be verified directly with Hunter.",
  },

  detailedComparison: [
    {
      title: "Core Product Focus",

      gigthink: [
        "GigThink is designed as a broader client-acquisition platform.",
        "Its workflow connects opportunity discovery, lead generation, AI processing, proposals, CRM, email outreach, and follow-ups.",
        "Email data can be one component of a larger lead record rather than the entire acquisition workflow.",
        "The platform is designed to help users move from discovering an opportunity to managing the resulting client relationship.",
      ],

      competitor: [
        "Hunter specializes in professional email discovery and verification.",
        "Its core functionality helps users identify contact information associated with businesses and domains.",
        "Hunter also supports prospecting and outreach-related workflows.",
        "Its strongest value proposition is centered around obtaining and validating professional contact information.",
      ],
    },

    {
      title: "Email Discovery",

      gigthink: [
        "GigThink can work with available email information associated with collected leads and opportunities where supported.",
        "Email data can be used as part of broader outreach workflows.",
        "The email address is treated as one element of a larger prospect record.",
        "Users can connect lead information with CRM, email automation, and follow-up workflows.",
      ],

      competitor: [
        "Hunter provides dedicated email-finding functionality.",
        "Users can search for professional email addresses associated with domains and known contacts.",
        "The platform is specifically optimized around finding professional contact information.",
        "This makes Hunter particularly relevant when email discovery is the primary requirement.",
      ],
    },

    {
      title: "Email Verification",

      gigthink: [
        "GigThink's primary focus is client acquisition rather than dedicated email verification infrastructure.",
        "Available lead information can be used within the acquisition workflow.",
        "Users who require specialized email verification may use dedicated verification functionality or an external service depending on their workflow.",
      ],

      competitor: [
        "Hunter provides dedicated email verification capabilities.",
        "Verification helps users assess whether an email address is likely to be deliverable.",
        "This can be useful for reducing invalid addresses before outreach.",
        "Email verification is one of Hunter's core areas of functionality.",
      ],
    },

    {
      title: "Lead Generation",

      gigthink: [
        "GigThink includes Lead Generation and Lead Scraper capabilities.",
        "Users can discover potential prospects from supported sources.",
        "Collected lead information can be processed by AI and connected to CRM and outreach workflows.",
        "The objective is to provide a broader acquisition pipeline rather than only a list of email addresses.",
      ],

      competitor: [
        "Hunter supports prospect discovery through contact and domain-based search functionality.",
        "Its lead-generation value is closely connected to finding professional contact information.",
        "Users can identify relevant contacts and use discovered information for outreach.",
        "Hunter is particularly useful when contact data is the starting point of the acquisition process.",
      ],
    },

    {
      title: "AI & Data Processing",

      gigthink: [
        "GigThink's AI Parser is designed to process raw opportunity and lead information.",
        "Available information can be transformed into structured data for downstream workflows.",
        "AI processing can support personalization and proposal creation.",
        "The AI layer is connected to the complete client-acquisition lifecycle.",
      ],

      competitor: [
        "Hunter's primary strength is contact and email intelligence.",
        "The platform focuses on discovering, verifying, and using professional contact information.",
        "Its core workflow is more specialized around email and prospect data than GigThink's broader acquisition pipeline.",
      ],
    },

    {
      title: "Proposal Creation",

      gigthink: [
        "GigThink includes Proposal Studio with AI assistance.",
        "Users can create proposals using available opportunity-specific context.",
        "Proposal creation is connected to opportunity discovery and lead management.",
        "This makes proposals part of the same workflow as discovery, CRM, outreach, and follow-ups.",
      ],

      competitor: [
        "Hunter does not primarily function as a proposal-generation platform.",
        "Its workflow is centered on discovering and validating contact information and supporting outreach.",
        "Users requiring dedicated proposal creation would generally need a separate proposal solution.",
      ],
    },

    {
      title: "CRM & Client Management",

      gigthink: [
        "GigThink includes Client CRM as a native part of its acquisition ecosystem.",
        "Prospects and clients can be organized alongside opportunity and lead information.",
        "CRM records can connect with proposals, email communication, and follow-ups.",
        "This allows the acquisition process to continue beyond finding a contact.",
      ],

      competitor: [
        "Hunter primarily focuses on contact discovery, verification, and outreach-related functionality.",
        "It is not positioned as a complete client relationship management system.",
        "Teams that require broader pipeline and relationship management may connect Hunter with a CRM or use another CRM alongside it.",
      ],
    },

    {
      title: "Email Outreach",

      gigthink: [
        "GigThink includes Email Automation as part of its broader acquisition workflow.",
        "Email communication can be connected with lead records and CRM activity.",
        "Users can combine outreach with automated follow-ups.",
        "The objective is to manage outreach as one part of the complete acquisition process.",
      ],

      competitor: [
        "Hunter supports email outreach capabilities alongside its contact discovery tools.",
        "Users can leverage discovered contact information for targeted prospecting.",
        "This creates a workflow from finding professional email addresses to contacting prospects.",
        "The platform is particularly useful when email discovery and outreach are central requirements.",
      ],
    },

    {
      title: "Follow-up Automation",

      gigthink: [
        "Auto Follow-ups are designed to automate communication after initial outreach.",
        "Follow-up workflows can be connected with CRM records and email automation.",
        "This helps users maintain consistent communication without manually managing every follow-up.",
        "Follow-ups remain connected to the broader acquisition lifecycle.",
      ],

      competitor: [
        "Hunter provides outreach capabilities that can support structured email campaigns.",
        "The available automation and campaign functionality depends on the current product and plan.",
        "Hunter's workflow is primarily centered around prospecting and email outreach rather than a complete client-management pipeline.",
      ],
    },

    {
      title: "End-to-End Client Acquisition",

      gigthink: [
        "GigThink connects opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups.",
        "Users can move from discovering a potential opportunity to managing the resulting client relationship.",
        "Email information can be used as one part of the broader lead record.",
        "The platform is designed to reduce fragmentation across acquisition activities.",
      ],

      competitor: [
        "Hunter provides a focused workflow around finding professional emails, verifying contact information, researching prospects, and supporting outreach.",
        "Its specialized functionality can be valuable when accurate professional contact information is the primary requirement.",
        "Users may combine Hunter with CRM, proposal, and other acquisition tools when they need a broader workflow.",
      ],
    },
  ],

  verdict: {
    gigthinkBetter:
      "GigThink is a stronger fit if you need a complete client-acquisition workflow that goes beyond finding email addresses and includes opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and automated follow-ups.",

    competitorBetter:
      "Hunter is a stronger fit if your primary requirement is finding and verifying professional email addresses, researching contacts, and supporting targeted email prospecting.",

    final:
      "GigThink and Hunter solve different parts of the client-acquisition process. Hunter specializes in professional email discovery, verification, prospect research, and outreach, making it a strong choice when contact information is the primary requirement. GigThink takes a broader approach by connecting opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups. For users who primarily need accurate professional email discovery and verification, Hunter can be the better specialized tool. For freelancers, agencies, and service providers who want a connected end-to-end client-acquisition workflow, GigThink provides broader functionality.",
  },

  faqs: [
    {
      question: "Is GigThink a replacement for Hunter?",

      answer:
        "GigThink can cover a broader portion of the client-acquisition workflow, but it is not positioned as a direct replacement for every specialized Hunter capability. Hunter specializes in professional email discovery and verification, while GigThink focuses on the complete acquisition process from opportunity and lead discovery through proposals, CRM, outreach, and follow-ups.",
    },

    {
      question: "What is the biggest difference between GigThink and Hunter?",

      answer:
        "The biggest difference is scope. Hunter is primarily an email discovery, verification, and prospecting platform. GigThink is designed as an end-to-end client-acquisition platform that connects opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups.",
    },

    {
      question: "Does GigThink find email addresses like Hunter?",

      answer:
        "GigThink can work with email information associated with collected leads and opportunities where supported, but email discovery and verification are not its primary product focus. Hunter is specifically designed around professional email finding and verification, making it the more specialized option for those tasks.",
    },

    {
      question: "Does GigThink verify email addresses?",

      answer:
        "GigThink's primary focus is broader client acquisition rather than dedicated email verification. If your workflow requires specialized email verification at scale, Hunter or another dedicated verification service may be more appropriate.",
    },

    {
      question: "Can GigThink generate leads without Hunter?",

      answer:
        "Yes. GigThink includes Lead Generation and Lead Scraper capabilities designed to discover potential prospects from supported sources. The resulting lead information can then move into AI processing, CRM, proposals, email outreach, and follow-up workflows.",
    },

    {
      question: "Does GigThink have a CRM while Hunter does not focus on CRM?",

      answer:
        "Yes. GigThink includes Client CRM as part of its broader acquisition ecosystem. Hunter is primarily focused on contact discovery, email verification, prospect research, and outreach-related workflows rather than functioning as a complete client relationship management platform.",
    },

    {
      question: "Can GigThink create proposals?",

      answer:
        "Yes. GigThink includes Proposal Studio with AI assistance. It is designed to help users create proposals using available opportunity-specific context, making proposal generation a connected part of the acquisition workflow.",
    },

    {
      question: "Can I use Hunter with GigThink?",

      answer:
        "Potentially, depending on the integrations and workflow capabilities available in your GigThink implementation. The two products can be conceptually complementary: Hunter specializes in contact and email intelligence, while GigThink focuses on managing the broader acquisition workflow.",
    },

    {
      question: "Which platform is better for email prospecting?",

      answer:
        "Hunter is generally the stronger specialized choice when professional email discovery and verification are the primary requirements. GigThink is better suited when email outreach is only one part of a larger workflow that also includes lead generation, opportunity discovery, proposals, CRM, and automated follow-ups.",
    },

    {
      question: "Which is better for freelancers and agencies: GigThink or Hunter?",

      answer:
        "The right choice depends on the primary workflow. Hunter is useful when finding and verifying professional email addresses is the main challenge. GigThink is designed for freelancers, agencies, and service providers who want a broader system for discovering opportunities and leads, creating proposals, managing client relationships, automating outreach, and maintaining follow-ups.",
    },
  ],
};
