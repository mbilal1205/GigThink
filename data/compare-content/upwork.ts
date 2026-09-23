// data/compare-content/upwork.ts

import { CompetitorData } from "./types";

const gigThinkPricing = "Free trial available (pricing details coming soon)";

export const upworkData: CompetitorData = {
  slug: "upwork",

  name: "Upwork",

  shortName: "Upwork",

  tagline: "World's largest freelance marketplace",

  description:
    "Upwork is a global freelance marketplace where businesses post projects and freelancers discover opportunities, submit proposals, communicate with clients, and complete work through the platform. GigThink takes a broader client-acquisition approach by helping users discover opportunities from multiple sources and connect discovery with AI-powered personalization, proposal creation, CRM, email outreach, and automated follow-ups in one centralized workflow.",

  category: "Freelance Marketplace",

  features: [
    {
      label: "Core Focus",
      gigthink:
        "AI-powered client acquisition platform covering opportunity discovery, lead generation, personalization, proposals, CRM, outreach, and follow-ups",
      competitor:
        "Freelance marketplace focused on connecting clients and freelancers through posted projects and proposals",
    },

    {
      label: "Opportunity Discovery",
      gigthink:
        "Centralizes opportunities from multiple supported sources through the Opportunity Engine",
      competitor:
        "Opportunity discovery is primarily based on jobs and projects posted within the Upwork marketplace",
    },

    {
      label: "Opportunity Aggregation",
      gigthink:
        "Designed to bring opportunities from different sources into one centralized GigThink workflow",
      competitor:
        "Primarily operates as a single marketplace where clients publish projects directly on Upwork",
    },

    {
      label: "AI Processing",
      gigthink:
        "AI-powered processing and AI Parser can transform available opportunity information into structured and actionable data",
      competitor:
        "Provides marketplace functionality and platform workflows rather than GigThink's centralized AI acquisition workflow",
    },

    {
      label: "Proposal Creation",
      gigthink:
        "Proposal Studio with AI assistance helps users create opportunity-specific proposals",
      competitor:
        "Freelancers submit proposals directly to jobs posted on Upwork",
    },

    {
      label: "Proposal Personalization",
      gigthink:
        "AI can use available opportunity context to help create more relevant and personalized proposals",
      competitor:
        "Proposal writing and personalization are primarily handled by the freelancer, with Upwork providing the marketplace submission workflow",
    },

    {
      label: "CRM",
      gigthink:
        "Built-in Client CRM designed to organize prospects, clients, and acquisition activity",
      competitor:
        "Upwork provides client communication and project-management functionality within its marketplace, but it is not positioned as a standalone cross-source client CRM",
    },

    {
      label: "Lead Generation",
      gigthink:
        "Lead Generation and Lead Scraper capabilities support discovering potential prospects from supported sources",
      competitor:
        "Lead and project discovery is centered around opportunities available within the Upwork marketplace",
    },

    {
      label: "Follow-ups",
      gigthink:
        "Auto Follow-ups can support automated follow-up workflows after outreach",
      competitor:
        "Follow-up communication is primarily handled through Upwork's messaging and marketplace workflow",
    },

    {
      label: "Email Automation",
      gigthink:
        "Email Automation connects outreach with lead and client workflows",
      competitor:
        "Upwork's core marketplace workflow is centered around communication within its platform rather than GigThink-style cross-source email automation",
    },

    {
      label: "Multi-Source Workflow",
      gigthink:
        "Designed to connect multiple opportunity and lead sources into a single acquisition workflow",
      competitor:
        "Primarily focused on opportunities available through the Upwork marketplace",
    },

    {
      label: "Client Acquisition Workflow",
      gigthink:
        "Discovery → AI Processing → Personalization → Proposal/Outreach → CRM → Follow-up",
      competitor:
        "Job Discovery → Proposal → Client Communication → Contract → Project Completion",
    },

    {
      label: "Data Centralization",
      gigthink:
        "Relevant opportunity and lead information can be centralized within the GigThink database",
      competitor:
        "Marketplace activity and project information remain within the Upwork ecosystem",
    },

    {
      label: "Pricing",
      gigthink: gigThinkPricing,
      competitor:
        "Upwork uses marketplace-related fees and Connects for submitting proposals, with exact costs depending on the applicable account and contract structure",
    },
  ],

  pricing: {
    gigthink: gigThinkPricing,

    competitor:
      "Upwork uses a marketplace model with applicable freelancer service fees and Connects for submitting proposals. Exact fees and requirements can vary by account, contract, and current Upwork policies.",
  },

  detailedComparison: [
    {
      title: "Source of Opportunities",

      gigthink: [
        "GigThink is designed to centralize opportunities from multiple supported platforms and sources rather than limiting discovery to a single marketplace.",
        "The Opportunity Engine acts as a central layer for collecting opportunity information.",
        "Collected opportunity information can be stored in the GigThink database for further processing.",
        "AI Parser can process raw opportunity information and convert it into a more structured format.",
        "This approach allows users to work from a centralized opportunity workflow instead of repeatedly checking different sources.",
      ],

      competitor: [
        "Upwork is a dedicated freelance marketplace where clients publish projects and freelancers search for suitable jobs.",
        "Opportunity discovery is primarily tied to the Upwork marketplace.",
        "Freelancers generally need to use Upwork's own search, filters, recommendations, and marketplace workflow to find relevant projects.",
        "External opportunities are not the core focus of the Upwork marketplace.",
      ],
    },

    {
      title: "Opportunity Intelligence",

      gigthink: [
        "GigThink adds an AI processing layer to available opportunity information.",
        "The AI Parser can help transform unstructured opportunity information into structured data.",
        "The platform can use available opportunity context to support personalization and downstream workflows.",
        "The objective is to move beyond simply displaying a listing and help users take action on it.",
      ],

      competitor: [
        "Upwork provides marketplace search, job information, client information, and other marketplace signals to help freelancers evaluate projects.",
        "The freelancer remains responsible for reviewing the job and deciding whether and how to pursue it.",
        "Upwork's primary role is connecting clients and freelancers through its marketplace.",
      ],
    },

    {
      title: "Proposal Creation",

      gigthink: [
        "Proposal Studio is designed specifically around proposal creation.",
        "AI assistance can use the available opportunity context to help produce a more relevant proposal.",
        "Users can work from a centralized opportunity instead of manually transferring information between different tools.",
        "Proposal creation becomes part of the larger acquisition workflow rather than an isolated activity.",
      ],

      competitor: [
        "Freelancers submit proposals to jobs available on Upwork.",
        "The freelancer is responsible for creating the proposal and communicating their suitability for the project.",
        "The proposal process is directly connected to Upwork's marketplace bidding/application workflow.",
      ],
    },

    {
      title: "Client & Lead Management",

      gigthink: [
        "GigThink includes a Client CRM for organizing prospects and clients.",
        "Lead Generation and Lead Scraper can feed potential prospects into the wider GigThink ecosystem.",
        "Lead and client information can be connected with outreach and follow-up workflows.",
        "This creates a broader acquisition pipeline from first discovery through relationship management.",
      ],

      competitor: [
        "Upwork provides communication and project workflows between freelancers and clients.",
        "Client interactions are primarily associated with opportunities, contracts, and work conducted through the Upwork ecosystem.",
        "It is not primarily designed as a cross-source lead CRM for managing prospects discovered outside the marketplace.",
      ],
    },

    {
      title: "Workflow Automation",

      gigthink: [
        "GigThink connects discovery, AI processing, proposals, CRM, email outreach, and follow-ups.",
        "Auto Follow-ups can reduce the need to manually remember every follow-up action.",
        "Email Automation can support structured outreach workflows.",
        "AI personalization can help adapt communication to the specific opportunity or lead.",
        "The overall objective is to reduce repetitive manual work across the acquisition process.",
      ],

      competitor: [
        "Upwork provides a structured marketplace workflow for finding projects, submitting proposals, communicating, contracting, and completing work.",
        "Freelancers still manage many acquisition activities themselves, particularly proposal writing and relationship development.",
        "Its core strength is the marketplace ecosystem rather than being an all-in-one external client-acquisition automation platform.",
      ],
    },

    {
      title: "Multi-Channel Client Acquisition",

      gigthink: [
        "GigThink is designed for users who want to acquire clients beyond a single marketplace.",
        "Opportunities and leads from supported sources can be brought into a centralized workflow.",
        "Users can combine marketplace-style opportunity discovery with direct lead generation and outreach.",
        "CRM, email automation, and follow-ups can continue the workflow after discovery.",
      ],

      competitor: [
        "Upwork is primarily a marketplace connecting clients and freelancers within the Upwork ecosystem.",
        "The platform is optimized around transactions and communication that occur through its marketplace.",
        "Users seeking prospects outside Upwork generally need additional channels or tools.",
      ],
    },

    {
      title: "Data Centralization",

      gigthink: [
        "GigThink is designed around a centralized database for relevant lead and opportunity information.",
        "Search results can become persistent platform data rather than remaining temporary frontend results.",
        "Centralized data can support CRM, AI processing, proposal creation, outreach, and follow-up workflows.",
        "This creates a foundation for a connected acquisition system.",
      ],

      competitor: [
        "Upwork centralizes marketplace activity within its own platform.",
        "Jobs, proposals, messages, contracts, and related activity are connected to the Upwork account and marketplace.",
        "The ecosystem is primarily centered around Upwork-generated opportunities rather than aggregating external lead sources.",
      ],
    },

    {
      title: "Follow-up & Outreach",

      gigthink: [
        "Auto Follow-ups are designed to automate follow-up steps after initial outreach.",
        "Email Automation can be used as part of a broader communication workflow.",
        "CRM records can provide context for managing ongoing prospect relationships.",
        "The workflow is intended to continue after the initial proposal or outreach instead of ending at the point of contact.",
      ],

      competitor: [
        "Upwork users can communicate with clients through the platform's messaging and project workflows.",
        "Follow-up activity is generally managed within the marketplace communication process.",
        "External outreach automation is outside the core purpose of the marketplace.",
      ],
    },

    {
      title: "Overall Acquisition Workflow",

      gigthink: [
        "GigThink connects multiple stages of client acquisition into one system.",
        "Users can discover opportunities or leads.",
        "AI can process and personalize available information.",
        "Proposal Studio can support proposal creation.",
        "Email Automation can support outreach.",
        "Client CRM can organize prospect and client relationships.",
        "Auto Follow-ups can continue communication after initial outreach.",
      ],

      competitor: [
        "Upwork provides a complete marketplace workflow for discovering jobs and applying to projects.",
        "Users can communicate with clients and manage contracts through the platform.",
        "Its primary model is marketplace-based rather than a multi-source client acquisition operating system.",
      ],
    },
  ],

  verdict: {
    gigthinkBetter:
      "GigThink is a stronger fit if your goal is to build a broader client-acquisition workflow around multiple opportunity and lead sources, AI-assisted personalization, proposal creation, CRM management, email outreach, and automated follow-ups.",

    competitorBetter:
      "Upwork can be a stronger fit if you specifically want access to its established freelance marketplace, its existing pool of clients and projects, and its platform-based contracting and payment workflow.",

    final:
      "GigThink and Upwork serve different primary purposes. Upwork is a dedicated freelance marketplace built around connecting freelancers with clients through posted projects. GigThink is designed as a broader AI-powered acquisition platform that connects opportunity discovery, lead generation, AI processing, proposals, CRM, outreach, and follow-ups. For freelancers who want to expand beyond a single marketplace and manage a broader acquisition pipeline, GigThink provides the more centralized approach. For users who specifically want to work inside the Upwork marketplace and use its native project and contracting ecosystem, Upwork remains the more focused option.",
  },

  faqs: [
  {
    question: "Can GigThink replace Upwork?",
    answer:
      "GigThink and Upwork do not share the exact same primary purpose. Upwork is a freelance marketplace where clients post projects and freelancers submit proposals. GigThink focuses on a broader client acquisition workflow, which includes discovering opportunities and leads from multiple sources, AI processing, proposals, CRM, email outreach, and follow-ups. Therefore, it would not be accurate to call GigThink a direct clone or replacement for Upwork.",
  },
  {
    question: "Is there bidding on GigThink?",
    answer:
      "No. GigThink's core model is not to become a bidding marketplace. GigThink focuses on discovering opportunities and leads, processing and personalizing them, creating proposals/outreach, and managing the acquisition workflow.",
  },
  {
    question: "What is the biggest difference between GigThink and Upwork?",
    answer:
      "The most important difference is scope. Upwork is primarily a single freelance marketplace, while GigThink is designed as a broader client-acquisition platform. GigThink centralizes opportunities and leads from multiple supported sources and connects AI processing, proposals, CRM, email automation, and follow-ups into one workflow.",
  },
  {
    question: "Is GigThink only for freelancers?",
    answer:
      "GigThink's workflow can be particularly useful for freelancers and service providers, but the platform's broader focus is client acquisition. Workflows like lead generation, opportunity discovery, CRM, proposals, and outreach are relevant for users who want to actively acquire new clients or business opportunities.",
  },
  {
    question: "Can GigThink find opportunities outside Upwork?",
    answer:
      "GigThink's Opportunity Engine is designed to centralize opportunity information from multiple supported sources. Its purpose is to provide users with a single workflow to process and manage relevant opportunities from different sources. The exact available sources depend on implementation and integrations.",
  },
  {
    question: "Can GigThink automatically create proposals?",
    answer:
      "GigThink's Proposal Studio is designed to create opportunity-specific proposals with AI assistance. Using available opportunity information and relevant context, the proposal can be made more personalized. Users should review and approve the final proposal before sending.",
  },
  {
    question: "Does GigThink have a CRM?",
    answer:
      "Yes. GigThink includes a Client CRM designed to organize prospects and clients and manage the acquisition workflow. Its objective is to connect lead discovery, outreach, and follow-up with client relationship management.",
  },
  {
    question: "Can GigThink automatically perform follow-ups?",
    answer:
      "GigThink's Auto Follow-ups module is designed to automate follow-up workflows. Its purpose is to reduce manual follow-up workload after initial outreach and support consistent communication workflow with prospects.",
  },
  {
    question: "Does GigThink provide email outreach?",
    answer:
      "Yes. GigThink has an Email Automation capability designed to connect email outreach with the lead and client acquisition workflow. This allows the workflow from discovery to outreach and follow-up to be managed in one centralized system.",
  },
  {
    question: "Who should choose GigThink and who should choose Upwork?",
    answer:
      "If you specifically want to work with Upwork marketplace projects, clients, proposals, and platform-based contracting workflow, then Upwork is the relevant choice. If you want to discover opportunities and leads from multiple sources and manage AI processing, proposals, CRM, email outreach, and automated follow-ups in a connected client-acquisition workflow, then GigThink provides a more suitable approach.",
  },
]
};