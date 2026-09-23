
import { CompetitorData } from "./types";

const gigThinkPricing = "Free trial available (pricing details coming soon)";

export const clayData: CompetitorData = {
  slug: "clay",

  name: "Clay",

  shortName: "Clay",

  tagline: "Data enrichment & outreach automation",

  description:
    "Clay is a data enrichment and go-to-market automation platform designed to help teams discover, enrich, research, qualify, and activate business prospects using data from multiple providers. Its strength lies in combining large-scale data enrichment with flexible workflows and personalized outbound campaigns. GigThink takes a broader client-acquisition approach by connecting opportunity discovery, lead generation, AI-powered data processing, proposal creation, CRM management, email automation, and automated follow-ups into a centralized workflow.",

  category: "Data Enrichment & Outreach",

  features: [
    {
      label: "Core Focus",
      gigthink:
        "AI-powered client acquisition covering opportunity discovery, lead generation, AI processing, proposals, CRM, outreach, and follow-ups",
      competitor:
        "Data enrichment, prospect research, audience building, and personalized go-to-market outreach automation",
    },

    {
      label: "Opportunity Discovery",
      gigthink:
        "Centralizes opportunities from multiple supported sources through the Opportunity Engine",
      competitor:
        "Primarily focused on discovering, researching, enriching, and activating prospects rather than aggregating freelance opportunities",
    },

    {
      label: "Lead Generation",
      gigthink:
        "Lead Generation and Lead Scraper capabilities support discovering potential prospects from supported sources",
      competitor:
        "Supports prospect discovery and enrichment using connected data sources and providers",
    },

    {
      label: "Data Processing",
      gigthink:
        "AI Parser can transform available unstructured opportunity and lead information into structured data",
      competitor:
        "Combines data from multiple providers to enrich and improve prospect records",
    },

    {
      label: "Data Enrichment",
      gigthink:
        "AI Parser focuses on structuring collected opportunity and lead information rather than operating primarily as a multi-provider enrichment marketplace",
      competitor:
        "Strong focus on enriching prospect and company records using multiple data providers",
    },

    {
      label: "Proposal Studio",
      gigthink:
        "AI-assisted Proposal Studio helps create proposals based on opportunity-specific context",
      competitor:
        "Proposal generation is not the primary focus of the platform",
    },

    {
      label: "AI Personalization",
      gigthink:
        "AI can use available opportunity and lead context to support personalized proposals and acquisition workflows",
      competitor:
        "Supports highly personalized prospect research and outbound messaging workflows",
    },

    {
      label: "Email Automation",
      gigthink:
        "Email Automation supports outreach workflows connected to leads, opportunities, CRM, and follow-ups",
      competitor:
        "Supports personalized outbound campaigns and automated outreach workflows",
    },

    {
      label: "CRM",
      gigthink:
        "Built-in Client CRM designed to manage prospects, clients, and acquisition activity",
      competitor:
        "Designed to work with CRM and sales systems rather than positioning itself primarily as a traditional standalone client CRM",
    },

    {
      label: "Follow-ups",
      gigthink:
        "Auto Follow-ups are designed to automate follow-up workflows after initial outreach",
      competitor:
        "Automated outbound workflows can support repeated prospect engagement and follow-up actions",
    },

    {
      label: "Proposal Workflow",
      gigthink:
        "Connects opportunity discovery directly with AI-assisted proposal creation",
      competitor:
        "Primarily focused on prospect research, enrichment, list building, and outbound activation",
    },

    {
      label: "Multi-Source Data",
      gigthink:
        "Designed to centralize opportunities and leads from multiple supported sources",
      competitor:
        "Uses multiple external data providers to enrich and improve prospect information",
    },

    {
      label: "Client Acquisition Workflow",
      gigthink:
        "Discovery → AI Processing → Personalization → Proposal/Outreach → CRM → Follow-up",
      competitor:
        "Prospect Discovery → Enrichment → Research → Personalization → Outreach → Sales Workflow",
    },

    {
      label: "Data Centralization",
      gigthink:
        "Relevant lead and opportunity information can be centralized within the GigThink database",
      competitor:
        "Prospect and company information can be enriched and organized within Clay workflows",
    },

    {
      label: "Pricing",
      gigthink: gigThinkPricing,
      competitor:
        "Clay offers free and paid plans with usage-based credits and plan-specific capabilities; current pricing and limits may change",
    },
  ],

  pricing: {
    gigthink: gigThinkPricing,

    competitor:
      "Clay uses a credit-based pricing model with free and paid options. Pricing, credits, and included capabilities can change over time, so current commercial terms should be verified directly with Clay.",
  },

  detailedComparison: [
    {
      title: "Data Discovery & Enrichment",

      gigthink: [
        "GigThink is designed to discover opportunities and leads from multiple supported sources.",
        "The Opportunity Engine can centralize opportunity information into the GigThink ecosystem.",
        "AI Parser can process collected information and convert unstructured data into a structured format.",
        "The primary objective is to make opportunity and lead information immediately useful for downstream acquisition workflows.",
        "GigThink is not primarily positioned as a marketplace that combines dozens of third-party enrichment providers.",
      ],

      competitor: [
        "Clay is strongly focused on data enrichment and prospect intelligence.",
        "It can connect data from multiple providers to improve company and contact records.",
        "Enrichment workflows can be combined to build more complete prospect profiles.",
        "This makes Clay particularly useful for teams that need extensive data enrichment before starting outbound campaigns.",
      ],
    },

    {
      title: "Lead Generation",

      gigthink: [
        "GigThink provides Lead Generation and Lead Scraper capabilities as part of its broader acquisition ecosystem.",
        "Leads can be brought into a centralized workflow rather than remaining isolated at the discovery stage.",
        "Collected lead information can be processed by AI and connected with CRM and outreach workflows.",
        "The platform is designed to move users from discovering a lead to taking action on that lead.",
      ],

      competitor: [
        "Clay is designed to help users build and enrich prospect lists.",
        "Its workflows can combine information from different data providers.",
        "Users can use enriched records as the foundation for outbound sales and marketing campaigns.",
        "Clay is particularly strong when the quality and depth of prospect data are the primary requirements.",
      ],
    },

    {
      title: "AI & Data Processing",

      gigthink: [
        "GigThink's AI Parser is designed to process raw opportunity and lead information.",
        "The parser can structure information so it can be used by other GigThink components.",
        "AI processing can support personalization and downstream proposal or outreach workflows.",
        "This positions AI processing as part of the complete client-acquisition lifecycle.",
      ],

      competitor: [
        "Clay combines data enrichment, research, and workflow automation capabilities.",
        "Its ecosystem can use information from multiple data sources to create richer prospect records.",
        "The platform is particularly useful when users need to research and enrich prospects before outreach.",
      ],
    },

    {
      title: "Proposal Creation",

      gigthink: [
        "Proposal Studio provides a dedicated proposal-generation workflow.",
        "AI assistance can use opportunity-specific information to help create a relevant proposal.",
        "Users can move from opportunity discovery to proposal creation without manually rebuilding the opportunity context.",
        "Proposal generation is integrated into the broader acquisition workflow.",
      ],

      competitor: [
        "Clay's primary purpose is prospect data enrichment and go-to-market automation.",
        "Proposal creation is not its central product category.",
        "Users requiring dedicated proposal-generation functionality may need another tool alongside their Clay workflow.",
      ],
    },

    {
      title: "Personalized Outreach",

      gigthink: [
        "GigThink can use available lead and opportunity context to support personalized outreach.",
        "Email Automation connects communication with the broader acquisition workflow.",
        "CRM information can provide additional context for managing prospect relationships.",
        "Auto Follow-ups can help continue communication after initial outreach.",
      ],

      competitor: [
        "Clay is highly focused on personalized outbound workflows.",
        "Enriched prospect information can be used to create more relevant messaging.",
        "Its workflow model is particularly valuable for teams running personalized outbound campaigns at scale.",
        "The strength of the workflow comes from combining data enrichment with activation.",
      ],
    },

    {
      title: "CRM & Client Management",

      gigthink: [
        "GigThink includes Client CRM as a native part of the platform ecosystem.",
        "Lead and opportunity information can flow into client management workflows.",
        "CRM activity can connect with proposals, email outreach, and follow-ups.",
        "This allows users to manage the relationship after the initial discovery stage.",
      ],

      competitor: [
        "Clay is primarily an enrichment and go-to-market workflow platform rather than a traditional standalone CRM.",
        "It can work alongside CRM and sales systems.",
        "Teams may use Clay to enrich and prepare prospect data before or alongside their CRM processes.",
      ],
    },

    {
      title: "Workflow Automation",

      gigthink: [
        "GigThink connects opportunity discovery, lead generation, AI processing, proposals, CRM, email automation, and follow-ups.",
        "Auto Follow-ups are designed to reduce repetitive manual communication tasks.",
        "Email Automation can support structured outreach workflows.",
        "The platform is designed to keep the acquisition process connected from discovery through relationship management.",
      ],

      competitor: [
        "Clay provides flexible workflows for prospect research, enrichment, and outbound activation.",
        "Users can combine different data sources and workflow steps.",
        "Its automation capabilities are particularly valuable for complex go-to-market processes.",
        "Clay is especially strong when the workflow depends heavily on enrichment and data transformation.",
      ],
    },

    {
      title: "Multi-Source Acquisition",

      gigthink: [
        "GigThink is designed to bring opportunities and leads from multiple supported sources into a centralized acquisition system.",
        "Users can work with opportunities, leads, proposals, CRM records, and outreach from the same broader ecosystem.",
        "The focus is on reducing fragmentation between discovery and client acquisition.",
        "The workflow is suitable for users who need more than just prospect enrichment.",
      ],

      competitor: [
        "Clay is designed to bring together data from multiple providers.",
        "The platform can enrich and transform prospect information before activating outbound workflows.",
        "Its multi-source approach is primarily centered around data enrichment and go-to-market intelligence.",
      ],
    },

    {
      title: "Outreach & Follow-ups",

      gigthink: [
        "Email Automation is connected to GigThink's lead and client workflows.",
        "Auto Follow-ups can support continued communication after initial outreach.",
        "CRM records can provide context for managing ongoing prospect relationships.",
        "The objective is to connect outreach with the rest of the acquisition lifecycle.",
      ],

      competitor: [
        "Clay supports personalized outbound activation using enriched prospect information.",
        "Its workflows can help teams create targeted messaging based on available prospect data.",
        "The platform is particularly useful for teams that want highly customized outbound campaigns.",
      ],
    },

    {
      title: "End-to-End Client Acquisition",

      gigthink: [
        "GigThink is designed around a broader client-acquisition lifecycle.",
        "Users can discover opportunities and leads.",
        "AI can process and structure available information.",
        "Proposal Studio can support opportunity-specific proposal creation.",
        "Email Automation can support direct outreach.",
        "Client CRM can manage prospects and clients.",
        "Auto Follow-ups can continue the relationship after initial contact.",
      ],

      competitor: [
        "Clay is optimized around prospect discovery, data enrichment, research, workflow automation, and outbound activation.",
        "It is particularly powerful when prospect data quality and personalization are central requirements.",
        "Teams may combine Clay with other tools for proposal management, CRM, or other parts of the client-acquisition lifecycle.",
      ],
    },
  ],

  verdict: {
    gigthinkBetter:
      "GigThink is a stronger fit if you want an integrated client-acquisition platform that combines opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and automated follow-ups in one workflow.",

    competitorBetter:
      "Clay is a stronger fit if your primary requirement is advanced prospect research, multi-source data enrichment, complex data workflows, and highly personalized outbound activation.",

    final:
      "Clay and GigThink approach client acquisition from different directions. Clay is particularly strong as a data enrichment and go-to-market automation platform, helping teams combine information from multiple providers, build richer prospect profiles, and activate personalized outbound campaigns. GigThink takes a broader acquisition approach by connecting opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups. For teams that need sophisticated data enrichment and highly customized outbound workflows, Clay can be the better fit. For freelancers, agencies, and service providers looking for a more connected end-to-end client-acquisition workflow, GigThink provides a broader product experience.",
  },

  faqs: [
    {
      question: "Is GigThink a replacement for Clay?",

      answer:
        "GigThink and Clay have overlapping capabilities around lead generation, data processing, and outreach, but their primary product focus is different. Clay specializes in data enrichment, prospect research, and go-to-market automation. GigThink focuses on a broader client-acquisition workflow that connects opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups.",
    },

    {
      question: "What is the biggest difference between GigThink and Clay?",

      answer:
        "The biggest difference is the overall workflow they are designed to support. Clay is heavily focused on enriching and activating prospect data, while GigThink is designed to connect the broader journey from discovering an opportunity or lead through AI processing, proposal creation, outreach, CRM management, and follow-up.",
    },

    {
      question: "Does GigThink provide data enrichment like Clay?",

      answer:
        "GigThink's AI Parser is primarily designed to structure and process collected opportunity and lead information. It is not positioned as a direct equivalent to Clay's multi-provider data enrichment ecosystem. Clay is the stronger choice when deep prospect enrichment and combining multiple data providers are the primary requirements.",
    },

    {
      question: "Can GigThink generate leads like Clay?",

      answer:
        "Yes. GigThink includes Lead Generation and Lead Scraper capabilities for discovering potential prospects from supported sources. The key difference is that GigThink connects lead discovery with other acquisition stages such as AI processing, proposals, CRM, email automation, and follow-ups.",
    },

    {
      question: "Does GigThink have a Proposal Studio?",

      answer:
        "Yes. GigThink includes Proposal Studio, which is designed to help users create opportunity-specific proposals with AI assistance. This makes proposal creation part of the broader acquisition workflow rather than requiring a separate proposal-focused system.",
    },

    {
      question: "Does Clay generate proposals?",

      answer:
        "Proposal generation is not the primary focus of Clay. Clay is primarily designed around prospect research, data enrichment, workflow automation, and outbound activation. Users who require dedicated proposal-generation workflows may use another specialized solution alongside Clay.",
    },

    {
      question: "Does GigThink include a CRM?",

      answer:
        "Yes. GigThink includes Client CRM as part of its acquisition ecosystem. Leads and opportunities can be connected to client management workflows, allowing users to manage prospects and clients alongside proposals, outreach, and follow-ups.",
    },

    {
      question: "Which platform is better for personalized outreach?",

      answer:
        "Both platforms can support personalized outreach, but they approach it differently. Clay is particularly strong when personalization depends on deep prospect research and multi-source enrichment. GigThink connects personalization with a broader acquisition workflow that includes opportunity discovery, proposals, CRM, email automation, and follow-ups.",
    },

    {
      question: "Which is better for freelancers and agencies: GigThink or Clay?",

      answer:
        "The better choice depends on the workflow. Clay is particularly useful for teams that need advanced data enrichment, prospect research, and sophisticated outbound workflows. GigThink is designed for freelancers, agencies, and service providers who want a more connected workflow covering opportunity discovery, lead generation, proposals, CRM, outreach, and follow-ups.",
    },

    {
      question: "Should I choose Clay or GigThink for client acquisition?",

      answer:
        "Choose Clay when advanced prospect enrichment, data research, and highly personalized outbound activation are the main priorities. Choose GigThink when you want a broader client-acquisition workflow that combines opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and automated follow-ups in one platform.",
    },
  ],
};
