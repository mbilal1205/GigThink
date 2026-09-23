
import { CompetitorData } from "./types";

const gigThinkPricing = "Free trial available (pricing details coming soon)";

export const hubspotData: CompetitorData = {
  slug: "hubspot",

  name: "HubSpot",

  shortName: "HubSpot",

  tagline: "CRM, marketing, sales & service platform",

  description:
    "HubSpot is a comprehensive customer platform that combines CRM, marketing, sales, customer service, content, operations, and reporting capabilities. It is designed to support businesses across multiple stages of the customer lifecycle, from attracting and converting prospects to managing customer relationships and measuring business performance. GigThink takes a more acquisition-focused approach, combining opportunity discovery, lead generation, AI-powered data processing, proposal creation, CRM, email automation, and automated follow-ups into a workflow designed specifically around acquiring and managing new clients.",

  category: "CRM & Marketing Automation",

  features: [
    {
      label: "Core Focus",
      gigthink:
        "AI-powered client acquisition covering opportunity discovery, lead generation, AI processing, proposals, CRM, outreach, and follow-ups",
      competitor:
        "Comprehensive CRM and customer platform covering marketing, sales, service, content, operations, and customer management",
    },

    {
      label: "Opportunity Discovery",
      gigthink:
        "Built-in Opportunity Engine designed to centralize opportunities from multiple supported sources",
      competitor:
        "Primarily manages contacts, companies, leads, deals, and inbound demand within the HubSpot ecosystem rather than functioning as a dedicated multi-source opportunity aggregation engine",
    },

    {
      label: "Lead Generation",
      gigthink:
        "Lead Generation and Lead Scraper capabilities support discovering potential prospects from supported sources",
      competitor:
        "Provides lead capture, forms, marketing campaigns, website tools, and sales prospecting capabilities depending on the HubSpot products and plan being used",
    },

    {
      label: "AI Processing",
      gigthink:
        "AI Parser can structure available opportunity and lead information for downstream acquisition workflows",
      competitor:
        "HubSpot provides AI-powered capabilities across areas such as content, CRM assistance, sales, and customer workflows depending on product availability and plan",
    },

    {
      label: "Proposal Studio",
      gigthink:
        "AI-assisted Proposal Studio helps create proposals based on opportunity-specific context",
      competitor:
        "Proposal and quote workflows can be supported through HubSpot's sales tools and integrations, but dedicated AI proposal generation is not the primary core focus",
    },

    {
      label: "CRM",
      gigthink:
        "Built-in Client CRM designed specifically around prospects, opportunities, and client acquisition",
      competitor:
        "Comprehensive CRM designed to manage contacts, companies, deals, activities, customer interactions, and broader business processes",
    },

    {
      label: "Email Automation",
      gigthink:
        "Email Automation connects outreach with leads, prospects, CRM records, and follow-up workflows",
      competitor:
        "Advanced marketing and sales email automation is available through relevant HubSpot products and plans",
    },

    {
      label: "Follow-ups",
      gigthink:
        "Auto Follow-ups are designed to automate prospect follow-up after initial outreach",
      competitor:
        "Sales sequences, workflows, tasks, and automation can support follow-up activities depending on the HubSpot product and subscription",
    },

    {
      label: "Marketing Automation",
      gigthink:
        "Focused primarily on client acquisition rather than operating as a complete marketing automation suite",
      competitor:
        "Provides extensive marketing automation capabilities through its Marketing Hub and broader customer platform",
    },

    {
      label: "Sales Pipeline",
      gigthink:
        "Client CRM provides acquisition-focused pipeline management",
      competitor:
        "Advanced sales pipelines, deal management, forecasting, reporting, and sales automation capabilities",
    },

    {
      label: "Multi-Source Acquisition",
      gigthink:
        "Designed to bring opportunities and leads from multiple supported sources into one acquisition workflow",
      competitor:
        "Can centralize customer and prospect information from HubSpot tools, integrations, inbound channels, and connected systems",
    },

    {
      label: "Client Acquisition Workflow",
      gigthink:
        "Discovery → AI Processing → Personalization → Proposal/Outreach → CRM → Follow-up",
      competitor:
        "Attract → Capture → Qualify → Sell → Serve → Analyze",
    },

    {
      label: "Ease of Use",
      gigthink:
        "Focused product experience designed around client acquisition workflows for freelancers, agencies, and service providers",
      competitor:
        "Broad platform with extensive functionality that can require more configuration, setup, and training as usage grows",
    },

    {
      label: "Scalability",
      gigthink:
        "Designed to support individual professionals, freelancers, agencies, and growing service businesses",
      competitor:
        "Highly scalable platform designed to support organizations ranging from small businesses to larger teams and enterprises",
    },

    {
      label: "Pricing",
      gigthink: gigThinkPricing,
      competitor:
        "HubSpot provides free CRM capabilities and paid products across multiple Hubs and subscription tiers; pricing varies by product, seats, features, and usage",
    },
  ],

  pricing: {
    gigthink: gigThinkPricing,

    competitor:
      "HubSpot offers free CRM functionality alongside paid products across Marketing, Sales, Service, Content, Operations, and other areas. Pricing varies based on the selected products, subscription tier, seats, and usage, so current pricing should be verified directly with HubSpot.",
  },

  detailedComparison: [
    {
      title: "Platform Focus",

      gigthink: [
        "GigThink is designed around client acquisition rather than serving as a broad business operating platform.",
        "Its workflow connects opportunity discovery, lead generation, AI processing, proposals, CRM, outreach, and follow-ups.",
        "The product is focused on helping freelancers, agencies, and service providers move prospects through the acquisition process.",
        "The goal is to keep acquisition activities connected within one focused workflow.",
      ],

      competitor: [
        "HubSpot is a broad customer platform covering CRM, marketing, sales, customer service, content, operations, and reporting.",
        "Its ecosystem can support many different business processes beyond client acquisition.",
        "This breadth makes HubSpot suitable for businesses that need a centralized customer platform across multiple departments.",
        "The broader feature set can also introduce additional configuration and operational complexity.",
      ],
    },

    {
      title: "Opportunity Discovery",

      gigthink: [
        "GigThink includes an Opportunity Engine designed to centralize opportunities from multiple supported sources.",
        "Users can manage discovered opportunities within the same acquisition environment.",
        "AI Parser can process raw opportunity information into structured data.",
        "The opportunity can then move into proposal, outreach, CRM, and follow-up workflows.",
      ],

      competitor: [
        "HubSpot primarily focuses on managing contacts, companies, leads, deals, and customer interactions.",
        "It provides tools for capturing inbound leads through forms, websites, campaigns, and connected channels.",
        "Its CRM is highly effective for organizing prospects after they enter the system.",
        "Dedicated external opportunity aggregation is not the central purpose of HubSpot's CRM.",
      ],
    },

    {
      title: "Lead Generation",

      gigthink: [
        "GigThink provides Lead Generation and Lead Scraper capabilities.",
        "The platform is designed to help users discover potential prospects from supported sources.",
        "Lead information can be processed and connected to CRM and outreach workflows.",
        "This makes lead discovery part of the same environment as subsequent acquisition activities.",
      ],

      competitor: [
        "HubSpot provides multiple ways to capture and manage leads.",
        "Depending on the products and plans used, businesses can use forms, landing pages, marketing campaigns, sales tools, and other channels for lead generation.",
        "HubSpot is particularly strong when lead generation is closely connected to inbound marketing and CRM management.",
        "Users may use integrations and additional tools when they need specialized external prospect discovery.",
      ],
    },

    {
      title: "AI & Data Processing",

      gigthink: [
        "GigThink's AI Parser is designed to process raw opportunity and lead information.",
        "Available information can be structured for use throughout the acquisition workflow.",
        "AI processing can support personalization and proposal creation.",
        "The AI layer is directly connected to opportunity and client acquisition activities.",
      ],

      competitor: [
        "HubSpot provides AI capabilities across several areas of its platform.",
        "AI can assist with content, CRM-related tasks, sales activities, and other workflows depending on product availability.",
        "Its AI capabilities operate within a much broader customer platform.",
        "The specific AI features available can depend on the HubSpot product and subscription being used.",
      ],
    },

    {
      title: "Proposal Creation",

      gigthink: [
        "Proposal Studio provides a dedicated proposal-generation workflow.",
        "AI assistance can use opportunity-specific information to support personalized proposals.",
        "Users can move from an identified opportunity directly into proposal creation.",
        "Proposal creation is treated as a core part of the acquisition process.",
      ],

      competitor: [
        "HubSpot provides sales tools that can support quotes, deals, and sales documentation.",
        "Proposal-related workflows can also be extended through integrations and connected applications.",
        "However, dedicated proposal generation is not the central product category of HubSpot.",
        "Businesses with specialized proposal requirements may use additional tools alongside HubSpot.",
      ],
    },

    {
      title: "CRM & Client Management",

      gigthink: [
        "GigThink includes Client CRM as part of its acquisition workflow.",
        "The CRM is designed around prospects, opportunities, clients, and acquisition activity.",
        "CRM records can connect with proposals, email outreach, and follow-ups.",
        "The focus is on keeping client acquisition activities connected and easy to manage.",
      ],

      competitor: [
        "HubSpot provides a mature and comprehensive CRM platform.",
        "Businesses can manage contacts, companies, deals, activities, customer interactions, and other relationship data.",
        "The CRM can support multiple teams and departments across the customer lifecycle.",
        "HubSpot is stronger when an organization needs a broad CRM foundation beyond acquisition alone.",
      ],
    },

    {
      title: "Email Automation",

      gigthink: [
        "GigThink includes Email Automation as part of its acquisition workflow.",
        "Email activity can be connected to leads, opportunities, CRM records, and follow-ups.",
        "The objective is to reduce repetitive manual outreach.",
        "Email automation works as part of the broader client-acquisition pipeline.",
      ],

      competitor: [
        "HubSpot provides email automation capabilities across its marketing and sales products.",
        "Users can create automated campaigns, sequences, and workflows depending on their subscription.",
        "HubSpot can connect email activity with CRM records and broader customer journeys.",
        "Its email automation capabilities are more extensive when used as part of the wider HubSpot ecosystem.",
      ],
    },

    {
      title: "Follow-up Automation",

      gigthink: [
        "Auto Follow-ups are designed specifically to help maintain prospect communication.",
        "Follow-up workflows can be connected with email automation and CRM data.",
        "This helps users continue engagement after an initial message or proposal.",
        "The feature is designed to simplify repetitive client-acquisition tasks.",
      ],

      competitor: [
        "HubSpot can support follow-up through sales sequences, workflows, tasks, and automation features.",
        "These capabilities can be connected with CRM records and sales pipelines.",
        "The available automation depends on the HubSpot products and subscription level.",
        "HubSpot provides broader workflow customization for organizations with complex sales processes.",
      ],
    },

    {
      title: "Workflow Complexity",

      gigthink: [
        "GigThink focuses its workflow around client acquisition.",
        "The primary journey is designed to remain straightforward: discover, process, personalize, contact, manage, and follow up.",
        "The focused product scope can reduce the need to configure unrelated business modules.",
        "This makes the platform particularly relevant for users whose primary objective is acquiring clients.",
      ],

      competitor: [
        "HubSpot provides a very broad collection of CRM, marketing, sales, service, content, and operations features.",
        "The platform can be highly configurable and powerful.",
        "Businesses may need additional setup, configuration, integrations, and training as their implementation becomes more advanced.",
        "The broader functionality is valuable for organizations that need more than client acquisition.",
      ],
    },

    {
      title: "Marketing & Inbound Growth",

      gigthink: [
        "GigThink primarily focuses on proactive client acquisition.",
        "Its core workflow emphasizes discovering opportunities and leads and converting them into prospects and clients.",
        "It is not positioned as a complete inbound marketing platform.",
        "Users primarily looking for acquisition automation can work within a more focused environment.",
      ],

      competitor: [
        "HubSpot has extensive inbound marketing capabilities.",
        "Depending on the selected products, businesses can manage campaigns, content, forms, landing pages, email marketing, analytics, and other marketing activities.",
        "This makes HubSpot particularly strong for organizations building comprehensive inbound marketing programs.",
        "Its marketing ecosystem goes significantly beyond lead acquisition alone.",
      ],
    },

    {
      title: "Scalability & Business Size",

      gigthink: [
        "GigThink is designed around the needs of freelancers, agencies, and service providers.",
        "The workflow emphasizes practical client acquisition rather than broad departmental operations.",
        "Its focused feature set can be useful for smaller teams that want acquisition functionality without deploying a large customer platform.",
      ],

      competitor: [
        "HubSpot is designed to support organizations of different sizes and increasingly complex operational requirements.",
        "Its platform can expand across marketing, sales, service, content, and operations.",
        "This makes HubSpot a strong choice when multiple teams need to work from a shared customer platform.",
      ],
    },

    {
      title: "End-to-End Client Acquisition",

      gigthink: [
        "GigThink connects opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups.",
        "Users can move from discovering an opportunity to managing the resulting client relationship.",
        "The workflow is designed specifically around acquiring new clients.",
        "The platform aims to reduce the number of separate tools required for the acquisition process.",
      ],

      competitor: [
        "HubSpot supports a broad customer lifecycle from marketing and lead capture through sales, service, and reporting.",
        "Its CRM provides a strong central foundation for managing customer relationships.",
        "Businesses can extend the platform with additional Hubs, integrations, and automation.",
        "Its broader scope makes it suitable for organizations that need a complete customer platform rather than an acquisition-focused system alone.",
      ],
    },
  ],

  verdict: {
    gigthinkBetter:
      "GigThink is a stronger fit if your primary goal is client acquisition and you want opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups connected in one focused workflow.",

    competitorBetter:
      "HubSpot is a stronger fit if you need a comprehensive customer platform with advanced CRM, inbound marketing, sales automation, customer service, content, operations, analytics, and extensive integrations.",

    final:
      "GigThink and HubSpot address different levels of the customer-acquisition stack. HubSpot is a broad customer platform built to support CRM, marketing, sales, service, content, operations, and analytics across an organization. GigThink takes a more focused approach to client acquisition by connecting opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and automated follow-ups. HubSpot can be the better choice for businesses that need a mature, highly configurable customer platform across multiple departments. GigThink is better suited to freelancers, agencies, and service providers who want a focused acquisition workflow without needing the broader complexity of a full customer platform.",
  },

  faqs: [
    {
      question: "Is GigThink a replacement for HubSpot?",

      answer:
        "GigThink can serve as an alternative for users whose primary requirement is client acquisition rather than a complete customer platform. HubSpot covers a much broader range of functions, including CRM, marketing, sales, service, content, and operations. GigThink focuses specifically on connecting opportunity discovery, lead generation, AI processing, proposals, CRM, outreach, and follow-ups.",
    },

    {
      question: "What is the biggest difference between GigThink and HubSpot?",

      answer:
        "The biggest difference is product scope. HubSpot is a broad customer platform designed to support multiple departments and stages of the customer lifecycle. GigThink is more focused on client acquisition, bringing opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups into one acquisition-oriented workflow.",
    },

    {
      question: "Does GigThink have a CRM like HubSpot?",

      answer:
        "Yes. GigThink includes Client CRM, but the scope is more focused on client acquisition and relationship management. HubSpot provides a much broader CRM system designed to support contacts, companies, deals, activities, customer interactions, and processes across multiple business functions.",
    },

    {
      question: "Can GigThink generate leads like HubSpot?",

      answer:
        "GigThink includes Lead Generation and Lead Scraper capabilities for discovering prospects from supported sources. HubSpot provides lead capture and generation capabilities through tools such as forms, marketing campaigns, websites, and sales workflows. The two platforms approach lead generation from different directions.",
    },

    {
      question: "Does GigThink have opportunity discovery?",

      answer:
        "Yes. GigThink includes an Opportunity Engine designed to centralize opportunities from multiple supported sources. This is a key part of its acquisition workflow and allows users to move from opportunity discovery into AI processing, proposals, CRM, outreach, and follow-ups.",
    },

    {
      question: "Can GigThink create proposals?",

      answer:
        "Yes. GigThink includes Proposal Studio with AI assistance. It is designed to use available opportunity context to help users create more relevant proposals as part of the client-acquisition workflow.",
    },

    {
      question: "Does HubSpot provide proposal functionality?",

      answer:
        "HubSpot provides sales tools that can support quotes, deals, and related sales documentation, and additional proposal functionality can be available through integrations. However, proposal generation is not the central focus of HubSpot in the same way that Proposal Studio is part of GigThink's acquisition workflow.",
    },

    {
      question: "Which platform is easier for client acquisition?",

      answer:
        "GigThink is designed around a more focused client-acquisition workflow, while HubSpot provides a much broader set of CRM, marketing, sales, service, and operations capabilities. If you only need acquisition-focused functionality, GigThink may provide a more focused experience. If you need a highly configurable customer platform across multiple departments, HubSpot offers significantly broader functionality.",
    },

    {
      question: "Does GigThink automate email follow-ups?",

      answer:
        "Yes. GigThink includes Email Automation and Auto Follow-ups as part of its client-acquisition workflow. These features are designed to help users maintain consistent communication with prospects after initial outreach or proposal activity.",
    },

    {
      question: "Which is better for freelancers and agencies: GigThink or HubSpot?",

      answer:
        "The right choice depends on the business requirements. HubSpot is a strong option for organizations that need comprehensive CRM, marketing, sales, service, reporting, and automation capabilities. GigThink is designed for freelancers, agencies, and service providers who primarily want to discover opportunities and leads, create personalized proposals, manage prospects, automate outreach, and follow up through a focused client-acquisition system.",
    },
  ],
};
