import { CompetitorData } from "./types";

const gigThinkPricing = "Free trial available (pricing details coming soon)";

export const pipedriveData: CompetitorData = {
  slug: "pipedrive",

  name: "Pipedrive",

  shortName: "Pipedrive",

  tagline: "Sales CRM and pipeline management platform",

  description:
    "Pipedrive is a sales-focused CRM platform built around pipeline management, deal tracking, sales activities, and customer relationship management. It helps sales teams organize prospects, manage deals through customizable stages, automate selected sales activities, and track performance. GigThink takes a broader client-acquisition approach by combining opportunity discovery, lead generation, AI-powered data processing, proposal creation, Client CRM, email automation, and automated follow-ups into one acquisition-focused workflow.",

  category: "Sales CRM & Pipeline Management",

  features: [
    {
      label: "Core Focus",
      gigthink:
        "AI-powered client acquisition covering opportunity discovery, lead generation, AI processing, proposals, CRM, outreach, and follow-ups",
      competitor:
        "Sales CRM focused on pipeline management, deal tracking, sales activities, and customer relationships",
    },

    {
      label: "Opportunity Discovery",
      gigthink:
        "Built-in Opportunity Engine designed to centralize opportunities from multiple supported sources",
      competitor:
        "Primarily manages opportunities and deals that are added through Pipedrive's CRM and lead-generation integrations",
    },

    {
      label: "Lead Generation",
      gigthink:
        "Lead Generation and Lead Scraper capabilities support discovering prospects from supported sources",
      competitor:
        "Lead capture and prospecting are supported through Pipedrive features, integrations, and additional products depending on the selected setup",
    },

    {
      label: "AI Processing",
      gigthink:
        "AI Parser structures available opportunity and lead information for downstream acquisition workflows",
      competitor:
        "Provides AI-assisted functionality across selected sales and CRM workflows",
    },

    {
      label: "Proposal Studio",
      gigthink:
        "AI-assisted Proposal Studio helps create proposals using available opportunity-specific context",
      competitor:
        "No dedicated proposal-generation workflow as a core CRM feature",
    },

    {
      label: "CRM",
      gigthink:
        "Built-in Client CRM designed around prospects, opportunities, clients, and acquisition activity",
      competitor:
        "Full-featured sales CRM with customizable pipelines, deals, contacts, organizations, activities, and sales management",
    },

    {
      label: "Email Automation",
      gigthink:
        "Email Automation supports outreach and follow-ups connected to leads and CRM workflows",
      competitor:
        "Email functionality and automation are available through Pipedrive's sales and marketing capabilities, depending on plan and setup",
    },

    {
      label: "Follow-ups",
      gigthink:
        "Auto Follow-ups are integrated into the client-acquisition workflow",
      competitor:
        "Sales activities, reminders, workflow automation, and follow-up tasks can be managed within the CRM",
    },

    {
      label: "Pipeline Management",
      gigthink:
        "Client acquisition pipeline connects opportunities with proposals, CRM, outreach, and follow-ups",
      competitor:
        "Advanced visual sales pipelines with customizable stages and deal management",
    },

    {
      label: "Proposal Workflow",
      gigthink:
        "Proposal Studio connects opportunity information with AI-assisted proposal creation",
      competitor:
        "Proposal creation is not the primary focus of the CRM and may require external tools or integrations",
    },

    {
      label: "Multi-Source Acquisition",
      gigthink:
        "Designed to bring opportunities and leads from multiple supported sources into one acquisition workflow",
      competitor:
        "Supports integrations and lead-capture methods but primarily operates as a centralized CRM for sales activities",
    },

    {
      label: "Client Management",
      gigthink:
        "Client CRM connects prospect information with acquisition activity and communication",
      competitor:
        "Detailed contact, organization, deal, activity, and relationship management",
    },

    {
      label: "Acquisition Workflow",
      gigthink:
        "Discovery → AI Processing → Personalization → Proposal/Outreach → CRM → Follow-up",
      competitor:
        "Lead/Contact → Deal → Sales Pipeline → Activities → Follow-up → Close",
    },

    {
      label: "Automation",
      gigthink:
        "Automates lead processing, email outreach, follow-ups, and acquisition activities",
      competitor:
        "Workflow automation supports sales processes, activity management, deal updates, and repetitive CRM tasks",
    },

    {
      label: "Primary Strength",
      gigthink:
        "Connecting lead discovery and acquisition activities into one focused workflow",
      competitor:
        "Structured sales pipeline management and CRM customization",
    },

    {
      label: "Pricing",
      gigthink: gigThinkPricing,
      competitor:
        "Pipedrive offers multiple paid CRM plans with pricing varying by plan, billing cycle, region, and available features",
    },
  ],

  pricing: {
    gigthink: gigThinkPricing,

    competitor:
      "Pipedrive uses tiered subscription pricing for its CRM products. Current pricing varies by plan, billing cycle, region, and available features and should be verified directly with Pipedrive.",
  },

  detailedComparison: [
    {
      title: "Core Product Focus",

      gigthink: [
        "GigThink is designed around client acquisition rather than only CRM management.",
        "It connects opportunity discovery, lead generation, AI processing, proposals, CRM, email outreach, and follow-ups.",
        "The platform is designed to help users move from finding an opportunity to managing the resulting client relationship.",
        "The goal is to reduce fragmentation between lead sourcing and sales execution.",
      ],

      competitor: [
        "Pipedrive is primarily a sales CRM and pipeline-management platform.",
        "Its core workflow revolves around contacts, organizations, deals, activities, sales stages, and pipeline management.",
        "It provides extensive tools for organizing and tracking sales processes.",
        "Its strength is giving sales teams structured visibility into their existing sales pipeline.",
      ],
    },

    {
      title: "Lead Sourcing",

      gigthink: [
        "GigThink includes Lead Generation and Lead Scraper capabilities for supported sources.",
        "The Opportunity Engine is designed to centralize opportunities from multiple supported sources.",
        "Collected information can be processed through AI and connected to CRM workflows.",
        "Lead sourcing is directly connected to downstream acquisition activities.",
      ],

      competitor: [
        "Pipedrive is primarily designed to manage and organize leads after they enter the CRM.",
        "Lead capture can be supported through Pipedrive's own capabilities and integrations.",
        "Users can connect external lead-generation sources to their Pipedrive account.",
        "This makes Pipedrive highly effective as a destination for sales leads, while GigThink places more emphasis on discovery and acquisition before CRM management.",
      ],
    },

    {
      title: "Opportunity Discovery",

      gigthink: [
        "GigThink's Opportunity Engine is designed to centralize opportunities from multiple supported sources.",
        "AI Parser can structure raw opportunity information.",
        "Users can move discovered opportunities into proposals, CRM, outreach, and follow-up workflows.",
        "Opportunity discovery is treated as an integrated part of the acquisition lifecycle.",
      ],

      competitor: [
        "Pipedrive provides tools for organizing leads and deals once they enter the CRM.",
        "Its pipeline system allows users to track opportunities through customizable stages.",
        "External lead sources can be connected through integrations.",
        "Its primary strength is managing and progressing opportunities rather than acting as a multi-source opportunity aggregation engine.",
      ],
    },

    {
      title: "CRM Capabilities",

      gigthink: [
        "GigThink includes Client CRM as a native component of its client-acquisition workflow.",
        "The CRM is connected with lead discovery, opportunities, proposals, email automation, and follow-ups.",
        "The focus is on maintaining acquisition context throughout the client journey.",
        "Users can manage client-related information alongside acquisition activities.",
      ],

      competitor: [
        "Pipedrive provides a mature sales CRM designed specifically for managing sales pipelines.",
        "Users can manage contacts, organizations, deals, activities, and sales stages.",
        "Pipelines can be customized around different sales processes.",
        "Pipedrive is particularly strong for teams that need detailed sales pipeline visibility and CRM customization.",
      ],
    },

    {
      title: "Pipeline Management",

      gigthink: [
        "GigThink connects acquisition stages with opportunities, proposals, outreach, CRM records, and follow-ups.",
        "The workflow is designed around acquiring new clients rather than managing only existing sales pipelines.",
        "Users can keep acquisition activities connected as prospects progress toward becoming clients.",
      ],

      competitor: [
        "Pipedrive is highly focused on visual sales pipeline management.",
        "Deals can be moved through customizable stages.",
        "Sales teams can track activities and deal progress within the pipeline.",
        "This makes Pipedrive particularly strong for teams that already have established lead sources and need sophisticated pipeline management.",
      ],
    },

    {
      title: "Proposal Creation",

      gigthink: [
        "GigThink includes Proposal Studio with AI assistance.",
        "Proposals can be created using available opportunity-specific context.",
        "Proposal creation is connected with the opportunity and lead workflow.",
        "This reduces the need to move prospect information manually between separate acquisition and proposal tools.",
      ],

      competitor: [
        "Pipedrive is primarily a CRM and sales pipeline platform.",
        "Proposal creation is not its central product capability.",
        "Users can connect external proposal and document tools where required.",
        "This creates a distinction between GigThink's acquisition workflow and Pipedrive's CRM-centered approach.",
      ],
    },

    {
      title: "Email Automation",

      gigthink: [
        "GigThink includes Email Automation for outreach and follow-up workflows.",
        "Email communication can be connected with lead and CRM information.",
        "Automated follow-ups can help maintain consistent prospect communication.",
        "Email is integrated into the broader acquisition process.",
      ],

      competitor: [
        "Pipedrive supports email functionality and sales automation within its CRM ecosystem.",
        "Email activity can be associated with contacts, deals, and sales activities.",
        "Additional automation and marketing capabilities can depend on the selected Pipedrive products and plan.",
        "Pipedrive is primarily designed to connect communication with sales pipeline management.",
      ],
    },

    {
      title: "Follow-up Automation",

      gigthink: [
        "Auto Follow-ups are integrated into the client-acquisition workflow.",
        "Follow-ups can be connected with email automation and CRM activity.",
        "The system is designed to reduce repetitive manual follow-up work.",
        "Follow-up activity remains connected to the opportunity and prospect context.",
      ],

      competitor: [
        "Pipedrive provides activity management, reminders, and workflow automation for sales teams.",
        "Users can automate selected repetitive sales processes.",
        "Follow-up activities can be associated with deals and contacts.",
        "Its approach is centered on managing sales processes within the CRM pipeline.",
      ],
    },

    {
      title: "AI & Personalization",

      gigthink: [
        "GigThink uses AI to process available lead and opportunity information.",
        "AI Parser helps structure raw information for acquisition workflows.",
        "Proposal Studio provides AI-assisted proposal creation.",
        "AI capabilities are connected to multiple stages of the client-acquisition process.",
      ],

      competitor: [
        "Pipedrive provides AI-assisted capabilities across selected CRM and sales workflows.",
        "Its AI functionality is primarily connected to sales productivity and CRM activities.",
        "The broader platform remains centered on pipeline and customer relationship management.",
      ],
    },

    {
      title: "Automation Philosophy",

      gigthink: [
        "GigThink focuses automation around acquiring new clients.",
        "Automation can begin with lead or opportunity processing and continue through outreach and follow-ups.",
        "The workflow is designed to reduce repetitive acquisition tasks.",
        "Multiple acquisition activities are connected within the same platform.",
      ],

      competitor: [
        "Pipedrive focuses automation around sales pipeline and CRM processes.",
        "Workflows can automate selected repetitive sales activities.",
        "Automation is especially useful when a team already has a structured sales process.",
        "External tools may still be required for specialized lead discovery or proposal generation.",
      ],
    },

    {
      title: "End-to-End Client Acquisition",

      gigthink: [
        "GigThink connects discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups.",
        "The workflow can begin before a prospect is contacted.",
        "Users can manage acquisition activities from discovery through client management.",
        "The platform is designed specifically around reducing friction in client acquisition.",
      ],

      competitor: [
        "Pipedrive provides strong sales CRM and pipeline management after leads enter the sales process.",
        "It helps teams organize contacts, deals, activities, and sales stages.",
        "External tools can be integrated for lead generation and other specialized acquisition tasks.",
        "Its strength is managing a structured sales pipeline rather than providing every acquisition function natively.",
      ],
    },

    {
      title: "Best-Fit User",

      gigthink: [
        "Freelancers who actively need to discover new client opportunities.",
        "Agencies that want lead generation and CRM connected in one platform.",
        "Service providers who need proposals, outreach, and automated follow-ups.",
        "Users who want a broader client-acquisition workflow instead of managing only an existing sales pipeline.",
      ],

      competitor: [
        "Sales teams that already have reliable lead sources.",
        "Businesses that need detailed sales pipeline management.",
        "Teams that require customizable CRM stages, activities, and deal tracking.",
        "Organizations that want a dedicated sales CRM with extensive pipeline-management capabilities.",
      ],
    },
  ],

  verdict: {
    gigthinkBetter:
      "GigThink is a stronger fit if you want a client-acquisition platform that combines opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups in one workflow.",

    competitorBetter:
      "Pipedrive is a stronger fit if you already have reliable lead sources and need a mature, customizable CRM focused heavily on sales pipelines, deals, activities, and sales-team management.",

    final:
      "GigThink and Pipedrive overlap in CRM functionality but are designed around different priorities. Pipedrive is a dedicated sales CRM with strong pipeline management, deal tracking, activity management, and CRM customization. GigThink takes a broader acquisition-first approach by connecting opportunity discovery, lead generation, AI processing, proposal creation, Client CRM, email automation, and automated follow-ups. If your primary need is managing an established sales pipeline, Pipedrive may be the stronger specialized CRM. If you want to discover opportunities and manage more of the acquisition process before and after the CRM stage, GigThink provides a broader client-acquisition workflow.",
  },

  faqs: [
    {
      question: "Is GigThink a replacement for Pipedrive?",

      answer:
        "GigThink can be an alternative for businesses that want client acquisition and CRM functionality in the same workflow, but it should not be positioned as a one-to-one replacement for every Pipedrive CRM capability. Pipedrive specializes in sales pipeline management and CRM customization, while GigThink focuses more broadly on opportunity discovery, lead generation, proposals, CRM, outreach, and follow-ups.",
    },

    {
      question: "What is the biggest difference between GigThink and Pipedrive?",

      answer:
        "The biggest difference is their primary focus. Pipedrive is a sales CRM built around managing leads, deals, activities, and sales pipelines. GigThink is designed around client acquisition, connecting opportunity discovery and lead generation with AI processing, proposals, CRM, email automation, and follow-ups.",
    },

    {
      question: "Does GigThink include a CRM like Pipedrive?",

      answer:
        "Yes. GigThink includes Client CRM as part of its client-acquisition platform. However, Pipedrive is a dedicated CRM with a deeper focus on customizable sales pipelines, deals, activities, and sales-management workflows. GigThink's CRM is designed specifically to work alongside its lead-generation, opportunity, proposal, and automation capabilities.",
    },

    {
      question: "Can GigThink generate leads while Pipedrive manages leads?",

      answer:
        "GigThink includes Lead Generation and Lead Scraper capabilities for supported sources, as well as an Opportunity Engine for centralizing supported opportunities. Pipedrive can manage and organize leads within its CRM and can connect with external lead-generation sources through integrations. The key difference is that GigThink places more emphasis on acquisition and discovery before the CRM stage.",
    },

    {
      question: "Does GigThink have proposal generation?",

      answer:
        "Yes. GigThink includes Proposal Studio with AI assistance. It is designed to help users create proposals using available opportunity-specific context. Pipedrive is primarily a CRM and sales pipeline platform, so proposal creation is not its central workflow.",
    },

    {
      question: "Can GigThink automate follow-ups?",

      answer:
        "Yes. GigThink includes Auto Follow-ups and Email Automation as part of its client-acquisition workflow. These capabilities are designed to help users maintain consistent prospect communication while keeping activity connected to lead and CRM information.",
    },

    {
      question: "Which platform is better for sales pipeline management?",

      answer:
        "Pipedrive is the more specialized choice for sales pipeline management. Its core product is built around visual pipelines, deal stages, sales activities, CRM records, and sales-process management. GigThink's pipeline and CRM functionality is more closely connected to the broader client-acquisition process.",
    },

    {
      question: "Can GigThink and Pipedrive be used together?",

      answer:
        "They can potentially complement each other depending on available integrations and the user's workflow. GigThink can serve as an acquisition-focused layer for opportunity discovery, lead generation, proposals, and outreach, while Pipedrive can serve as a dedicated sales CRM. Any specific integration should be confirmed against the current capabilities of both platforms.",
    },

    {
      question: "Which is better for freelancers and agencies?",

      answer:
        "GigThink is designed specifically around the needs of freelancers, agencies, and service providers that need to actively discover opportunities, generate leads, create proposals, manage clients, and automate follow-ups. Pipedrive can be a strong choice when the primary requirement is structured sales pipeline and CRM management.",
    },

    {
      question: "Should I choose GigThink or Pipedrive?",

      answer:
        "Choose GigThink if your main challenge is acquiring new clients and you want discovery, lead generation, AI processing, proposals, CRM, outreach, and follow-ups connected in one workflow. Choose Pipedrive if your main requirement is managing an established sales process with customizable pipelines, deals, activities, and CRM functionality.",
    },
  ],
};
