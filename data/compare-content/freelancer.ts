
import { CompetitorData } from "./types";

const gigThinkPricing = "Free trial available (pricing details coming soon)";

export const freelancerData: CompetitorData = {
  slug: "freelancer",

  name: "Freelancer.com",

  shortName: "Freelancer",

  tagline: "Freelance marketplace & contest platform",

  description:
    "Freelancer.com is a global freelance marketplace where businesses can post projects and freelancers can discover projects, submit bids, participate in contests, communicate with clients, and complete work through the platform. GigThink takes a broader client-acquisition approach by connecting opportunity discovery, lead generation, AI-powered data processing, proposal creation, CRM management, email automation, and automated follow-ups into one centralized workflow.",

  category: "Freelance Marketplace",

  features: [
    {
      label: "Core Focus",
      gigthink:
        "AI-powered end-to-end client acquisition covering opportunity discovery, lead generation, AI processing, proposals, CRM, outreach, and follow-ups",
      competitor:
        "Freelance marketplace focused on project bidding, freelancer-client connections, and contests",
    },

    {
      label: "Opportunity Discovery",
      gigthink:
        "Centralizes opportunities from multiple supported sources through the Opportunity Engine",
      competitor:
        "Project discovery primarily takes place through jobs and projects posted on Freelancer.com",
    },

    {
      label: "Lead Generation",
      gigthink:
        "Lead Generation and Lead Scraper capabilities support discovering potential prospects from supported sources",
      competitor:
        "Lead opportunities primarily originate from projects and clients available within the Freelancer.com marketplace",
    },

    {
      label: "Opportunity Aggregation",
      gigthink:
        "Designed to bring opportunities from multiple supported sources into a centralized acquisition workflow",
      competitor:
        "Primarily operates as its own freelance marketplace where clients publish projects directly",
    },

    {
      label: "AI Processing",
      gigthink:
        "AI Parser can structure available opportunity and lead information for downstream acquisition workflows",
      competitor:
        "Provides marketplace search, project information, bidding, communication, and contest functionality rather than a centralized AI acquisition pipeline",
    },

    {
      label: "Proposal Studio",
      gigthink:
        "AI-assisted Proposal Studio helps users create proposals based on opportunity-specific context",
      competitor:
        "Freelancers submit bids and proposals directly to projects listed on Freelancer.com",
    },

    {
      label: "Proactive Outreach",
      gigthink:
        "Supports proactive outreach through Email Automation and automated follow-up workflows",
      competitor:
        "Primarily operates through marketplace bidding, client interactions, and platform-based communication",
    },

    {
      label: "Automation",
      gigthink:
        "Email Automation and Auto Follow-ups support repeatable client-acquisition workflows",
      competitor:
        "Core marketplace activity centers around project discovery, bidding, communication, and delivery rather than an external acquisition automation workflow",
    },

    {
      label: "CRM",
      gigthink:
        "Built-in Client CRM designed to organize prospects, clients, and acquisition activity",
      competitor:
        "Marketplace-based project and client management rather than a dedicated cross-source client acquisition CRM",
    },

    {
      label: "Follow-ups",
      gigthink:
        "Auto Follow-ups are designed to automate follow-up workflows after initial outreach",
      competitor:
        "Follow-up communication is primarily handled through Freelancer.com's platform communication workflow",
    },

    {
      label: "Email Automation",
      gigthink:
        "Email Automation connects outreach with leads, prospects, CRM, and follow-up workflows",
      competitor:
        "External email automation is not the primary focus of the Freelancer.com marketplace",
    },

    {
      label: "Contests",
      gigthink:
        "Focuses on opportunity discovery, lead generation, proposals, CRM, outreach, and automation rather than marketplace contests",
      competitor:
        "Supports contests as part of its freelance marketplace offering",
    },

    {
      label: "Multi-Source Acquisition",
      gigthink:
        "Designed to bring opportunities and leads from multiple supported sources into one acquisition workflow",
      competitor:
        "Primarily focused on clients and projects available through the Freelancer.com marketplace",
    },

    {
      label: "Client Acquisition Workflow",
      gigthink:
        "Discovery → AI Processing → Personalization → Proposal/Outreach → CRM → Follow-up",
      competitor:
        "Project Discovery → Bid/Contest → Client Communication → Contract → Project Delivery",
    },

    {
      label: "Data Centralization",
      gigthink:
        "Relevant opportunity and lead information can be centralized within the GigThink database",
      competitor:
        "Project, bid, communication, and marketplace activity are managed within the Freelancer.com ecosystem",
    },

    {
      label: "Pricing",
      gigthink: gigThinkPricing,
      competitor:
        "Freelancer.com uses marketplace fees and may offer membership plans; applicable fees and terms can vary by project type, account, and current platform policies",
    },
  ],

  pricing: {
    gigthink: gigThinkPricing,

    competitor:
      "Freelancer.com uses a marketplace-based fee structure with applicable project and transaction fees, along with optional paid membership plans. Exact fees and limits can change and should be verified against Freelancer.com's current pricing and terms.",
  },

  detailedComparison: [
    {
      title: "Business Model",

      gigthink: [
        "GigThink is designed around proactive client acquisition rather than dependence on a single freelance marketplace.",
        "Users can discover opportunities and leads from multiple supported sources.",
        "The platform connects discovery with AI processing, proposals, CRM, outreach, and follow-ups.",
        "This creates a broader acquisition workflow that can continue beyond the initial opportunity discovery stage.",
      ],

      competitor: [
        "Freelancer.com operates as a global freelance marketplace.",
        "Businesses can publish projects and freelancers can discover projects and submit bids.",
        "The platform also supports contests as another way for freelancers to compete for client work.",
        "Its core value comes from connecting buyers and freelancers through its marketplace ecosystem.",
      ],
    },

    {
      title: "Opportunity Discovery",

      gigthink: [
        "GigThink's Opportunity Engine is designed to centralize opportunities from multiple supported sources.",
        "Users can manage discovered opportunities within one centralized environment.",
        "AI Parser can process raw opportunity information and convert it into structured data.",
        "The discovery process is connected directly to downstream acquisition actions such as proposals and outreach.",
      ],

      competitor: [
        "Freelancer.com provides a marketplace where clients publish projects and freelancers search for relevant opportunities.",
        "Project discovery takes place primarily within the Freelancer.com ecosystem.",
        "Freelancers can review project requirements and decide which opportunities to pursue.",
        "External opportunity aggregation is not the primary purpose of the marketplace.",
      ],
    },

    {
      title: "Lead Generation",

      gigthink: [
        "GigThink includes Lead Generation and Lead Scraper capabilities.",
        "Potential prospects can be discovered from supported external sources.",
        "Lead information can be processed and connected to CRM, proposals, outreach, and follow-up workflows.",
        "The objective is to help users proactively build a pipeline rather than relying exclusively on marketplace project postings.",
      ],

      competitor: [
        "Freelancer.com's primary source of opportunities is its marketplace of client-posted projects.",
        "Freelancers discover projects and compete through the platform's bidding workflow.",
        "The platform is not primarily designed as a multi-source external lead-generation system.",
        "Users seeking prospects outside Freelancer.com generally need additional acquisition channels or tools.",
      ],
    },

    {
      title: "Proposal & Bid Workflow",

      gigthink: [
        "Proposal Studio provides a dedicated workflow for creating proposals.",
        "AI assistance can use opportunity-specific information to support more relevant proposal creation.",
        "Users can move from opportunity discovery into proposal creation without manually rebuilding all available context.",
        "Proposal creation is part of the broader client-acquisition lifecycle.",
      ],

      competitor: [
        "Freelancer.com allows freelancers to submit bids for projects posted by clients.",
        "Freelancers review project requirements and create their own bid responses.",
        "The bidding process is directly connected to Freelancer.com's marketplace.",
        "The platform's proposal process is primarily designed around competing for marketplace projects.",
      ],
    },

    {
      title: "AI & Data Processing",

      gigthink: [
        "GigThink's AI Parser is designed to process raw opportunity and lead information.",
        "Available data can be structured into a more usable format for downstream workflows.",
        "AI processing can support personalization and proposal or outreach workflows.",
        "This creates an intelligence layer between opportunity discovery and client acquisition.",
      ],

      competitor: [
        "Freelancer.com provides project information and marketplace functionality to help freelancers evaluate available work.",
        "The freelancer remains responsible for reviewing project requirements and deciding how to respond.",
        "Its primary focus is marketplace participation rather than a centralized AI processing pipeline for external opportunities.",
      ],
    },

    {
      title: "CRM & Client Management",

      gigthink: [
        "GigThink includes Client CRM as part of its acquisition ecosystem.",
        "Prospects and clients can be organized within a centralized system.",
        "CRM records can connect with opportunities, proposals, outreach, and follow-ups.",
        "This allows the user to maintain client context beyond a single marketplace project.",
      ],

      competitor: [
        "Freelancer.com provides marketplace-based project and client interaction workflows.",
        "Communication and project activity are connected to the Freelancer.com ecosystem.",
        "The platform is not primarily positioned as a cross-source CRM for prospects acquired through multiple external channels.",
        "Users seeking a broader independent client CRM may need additional tooling.",
      ],
    },

    {
      title: "Email Outreach & Automation",

      gigthink: [
        "GigThink includes Email Automation as part of the client-acquisition workflow.",
        "Users can connect lead discovery with outbound email communication.",
        "Email workflows can work alongside CRM and automated follow-ups.",
        "This enables a more proactive approach to building client relationships outside marketplace-only communication.",
      ],

      competitor: [
        "Freelancer.com's core communication workflow is centered around its marketplace environment.",
        "Users can communicate with clients regarding projects and work through the platform.",
        "External email automation is not the central purpose of the Freelancer.com marketplace.",
      ],
    },

    {
      title: "Follow-up Management",

      gigthink: [
        "Auto Follow-ups are designed to automate follow-up actions after initial outreach.",
        "Follow-up workflows can be connected with lead and client records.",
        "CRM information can provide context for continued prospect communication.",
        "The goal is to reduce repetitive manual follow-up work.",
      ],

      competitor: [
        "Freelancer.com provides communication functionality for clients and freelancers working through the marketplace.",
        "Follow-up conversations can take place within the platform.",
        "Automated external prospect follow-up is not the primary focus of the marketplace.",
      ],
    },

    {
      title: "Contests vs. Acquisition Automation",

      gigthink: [
        "GigThink does not position itself as a freelance contest marketplace.",
        "Its focus is on discovering opportunities and leads and moving them through an acquisition workflow.",
        "Users can use AI processing, proposals, CRM, outreach, and follow-ups to manage the acquisition lifecycle.",
        "The platform emphasizes repeatable acquisition processes rather than contest participation.",
      ],

      competitor: [
        "Freelancer.com includes contests as part of its marketplace model.",
        "Contests can provide another way for freelancers to compete for client work.",
        "This can be valuable for freelancers who prefer creative competitions or contest-based opportunities.",
        "Users specifically looking for freelance contests may therefore find Freelancer.com more relevant.",
      ],
    },

    {
      title: "Multi-Channel Client Acquisition",

      gigthink: [
        "GigThink is designed to support acquisition across multiple supported opportunity and lead sources.",
        "Users can combine opportunity discovery, lead generation, AI processing, proposals, CRM, and outreach.",
        "The system is intended to reduce fragmentation between different acquisition channels.",
        "This allows users to build a broader pipeline rather than relying on one marketplace.",
      ],

      competitor: [
        "Freelancer.com is primarily focused on its own freelance marketplace.",
        "Its strength comes from connecting freelancers with clients who publish projects through the platform.",
        "Users seeking clients through additional channels generally need separate acquisition methods or tools.",
      ],
    },

    {
      title: "End-to-End Acquisition Workflow",

      gigthink: [
        "GigThink connects opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups.",
        "Users can move from finding an opportunity to taking action without leaving the broader GigThink workflow.",
        "AI can help structure and personalize available opportunity information.",
        "CRM and follow-up capabilities extend the workflow beyond the initial proposal or outreach.",
        "The overall objective is to create a repeatable client-acquisition system.",
      ],

      competitor: [
        "Freelancer.com connects project discovery with bidding, communication, contracting, project delivery, and marketplace activity.",
        "Its contest functionality provides an additional path to potential freelance work.",
        "Its primary strength is the established marketplace and the clients and projects available within that ecosystem.",
        "It is less focused on operating a multi-source external client-acquisition pipeline.",
      ],
    },
  ],

  verdict: {
    gigthinkBetter:
      "GigThink is a stronger fit if you want to proactively discover opportunities and leads from multiple supported sources and connect them with AI processing, proposal creation, CRM, email outreach, and automated follow-ups.",

    competitorBetter:
      "Freelancer.com is a stronger fit if you specifically want access to its freelance marketplace, project bidding system, contest opportunities, and existing client ecosystem.",

    final:
      "GigThink and Freelancer.com are designed around different approaches to acquiring freelance work. Freelancer.com is a marketplace where clients publish projects and freelancers compete through bids or, where applicable, contests. GigThink is designed as a broader client-acquisition platform that can centralize opportunities and leads from multiple supported sources and connect them with AI processing, proposals, CRM, email automation, and follow-ups. Freelancer.com can be a strong option for freelancers who want marketplace-based project opportunities and contests, while GigThink is better suited to users who want a proactive, multi-source, and automation-driven client-acquisition workflow.",
  },

  faqs: [
    {
      question: "Is GigThink a replacement for Freelancer.com?",

      answer:
        "GigThink and Freelancer.com serve different primary purposes. Freelancer.com is a freelance marketplace where clients post projects and freelancers submit bids or participate in contests. GigThink is designed around a broader client-acquisition workflow that includes opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups. GigThink can therefore complement marketplace activity rather than functioning as a direct copy of Freelancer.com.",
    },

    {
      question: "What is the biggest difference between GigThink and Freelancer.com?",

      answer:
        "The biggest difference is the acquisition model. Freelancer.com is primarily a marketplace where freelancers discover client-posted projects and compete for work through bids or contests. GigThink focuses on proactive client acquisition by bringing together opportunities and leads from multiple supported sources and connecting them with AI processing, proposals, CRM, outreach, and follow-up automation.",
    },

    {
      question: "Does GigThink have project bidding like Freelancer.com?",

      answer:
        "GigThink is not designed as a traditional freelance bidding marketplace. Instead, its focus is on discovering opportunities and leads, processing them with AI, creating proposals or outreach, managing prospects in CRM, and automating follow-ups. Freelancer.com is specifically designed around marketplace project bidding.",
    },

    {
      question: "Does GigThink offer freelance contests?",

      answer:
        "No. GigThink is not positioned as a freelance contest platform. Its primary focus is client acquisition through opportunity discovery, lead generation, AI processing, proposal creation, CRM, outreach, and follow-ups. Freelancer.com is the more relevant option if participation in freelance contests is an important part of your acquisition strategy.",
    },

    {
      question: "Can GigThink help me find clients outside Freelancer.com?",

      answer:
        "Yes. GigThink is designed to centralize opportunities and leads from multiple supported sources. This allows users to build a broader client-acquisition pipeline rather than depending exclusively on projects available through a single freelance marketplace.",
    },

    {
      question: "Does GigThink include a CRM?",

      answer:
        "Yes. GigThink includes Client CRM as part of its broader acquisition ecosystem. The CRM is designed to organize prospects and clients and connect them with opportunities, proposals, outreach, and follow-up activities.",
    },

    {
      question: "Can GigThink create proposals for opportunities?",

      answer:
        "Yes. GigThink includes Proposal Studio with AI assistance. It is designed to help users create proposals using available opportunity-specific information, making proposal creation a connected part of the client-acquisition workflow.",
    },

    {
      question: "Does GigThink automate follow-ups?",

      answer:
        "Yes. GigThink includes Auto Follow-ups, which are designed to automate follow-up workflows after initial outreach. These workflows can work alongside email automation and CRM capabilities to help users maintain consistent prospect communication.",
    },

    {
      question: "Can GigThink automate email outreach?",

      answer:
        "Yes. GigThink includes Email Automation designed to connect outbound communication with leads, prospects, CRM records, and follow-up workflows. This supports a proactive acquisition process beyond marketplace-only communication.",
    },

    {
      question: "Which is better for freelancers and agencies: GigThink or Freelancer.com?",

      answer:
        "The better option depends on the acquisition strategy. Freelancer.com can be a strong choice for users who want access to an established freelance marketplace, project bidding, and contests. GigThink is designed for freelancers, agencies, and service providers who want to proactively discover opportunities and leads, create personalized proposals, manage prospects through CRM, automate outreach, and maintain follow-up workflows across a broader acquisition pipeline.",
    },
  ],
};
