
import { CompetitorData } from "./types";

const gigThinkPricing = "Free trial available (pricing details coming soon)";

export const linkedinData: CompetitorData = {
  slug: "linkedin",

  name: "LinkedIn",

  shortName: "LinkedIn",

  tagline: "Professional network, prospecting & B2B relationship platform",

  description:
    "LinkedIn is a professional networking platform used by individuals and businesses to build relationships, discover professionals and companies, share content, recruit talent, and generate business opportunities. Its Sales Navigator product adds advanced prospect and account search capabilities for sales teams. GigThink takes a broader client-acquisition approach by connecting opportunity discovery, lead generation, AI-powered data processing, proposal creation, Client CRM, email automation, and automated follow-ups into a centralized workflow.",

  category: "Professional Network & B2B Sales",

  features: [
    {
      label: "Core Focus",
      gigthink:
        "AI-powered client acquisition covering opportunity discovery, lead generation, AI processing, proposals, CRM, outreach, and follow-ups",
      competitor:
        "Professional networking, relationship building, social selling, professional identity, and B2B prospect discovery",
    },

    {
      label: "Opportunity Discovery",
      gigthink:
        "Built-in Opportunity Engine designed to centralize opportunities from multiple supported sources",
      competitor:
        "Professional and company discovery through LinkedIn search and Sales Navigator",
    },

    {
      label: "Lead Generation",
      gigthink:
        "Lead Generation and Lead Scraper capabilities support discovering prospects from supported sources",
      competitor:
        "LinkedIn search and Sales Navigator provide professional and company prospecting capabilities",
    },

    {
      label: "AI Processing",
      gigthink:
        "AI Parser structures available opportunity and lead information for downstream acquisition workflows",
      competitor:
        "LinkedIn provides AI-assisted and recommendation-driven experiences across selected products and features",
    },

    {
      label: "Proposal Studio",
      gigthink:
        "AI-assisted Proposal Studio helps create proposals using available opportunity-specific context",
      competitor:
        "No dedicated proposal-generation workflow as a core LinkedIn capability",
    },

    {
      label: "CRM",
      gigthink:
        "Built-in Client CRM designed to organize prospects, opportunities, clients, and acquisition activity",
      competitor:
        "LinkedIn is not a full standalone CRM; businesses commonly connect LinkedIn activity with external CRM systems",
    },

    {
      label: "Email Automation",
      gigthink:
        "Email Automation supports outreach and follow-ups connected to leads and CRM workflows",
      competitor:
        "LinkedIn primarily supports on-platform communication such as messages, connection requests, and InMail rather than being a dedicated email automation platform",
    },

    {
      label: "Follow-ups",
      gigthink:
        "Auto Follow-ups are integrated into the broader client-acquisition workflow",
      competitor:
        "Users can manually continue conversations through LinkedIn messaging and available sales workflows",
    },

    {
      label: "Professional Network",
      gigthink:
        "Aggregates opportunities and lead information from supported sources into an acquisition workflow",
      competitor:
        "Large professional network built around professional profiles, companies, connections, content, and business relationships",
    },

    {
      label: "Social Selling",
      gigthink:
        "Focused on converting discovered opportunities and prospects into an organized acquisition workflow",
      competitor:
        "Strong native environment for professional networking, relationship building, content engagement, and social selling",
    },

    {
      label: "Multi-Source Acquisition",
      gigthink:
        "Designed to bring opportunities and leads from multiple supported sources into one acquisition workflow",
      competitor:
        "Primarily provides discovery within the LinkedIn ecosystem and its associated professional data",
    },

    {
      label: "Proposal Workflow",
      gigthink:
        "Connects opportunity discovery directly with AI-assisted proposal creation",
      competitor:
        "Proposal creation is not a primary LinkedIn workflow",
    },

    {
      label: "Client Acquisition Workflow",
      gigthink:
        "Discovery → AI Processing → Personalization → Proposal/Outreach → CRM → Follow-up",
      competitor:
        "Search → Connect → Engage → Message/InMail → Relationship Building",
    },

    {
      label: "Data Centralization",
      gigthink:
        "Lead and opportunity information can be organized within the GigThink acquisition environment",
      competitor:
        "Professional profiles, company information, interactions, and networking activity are managed within the LinkedIn ecosystem",
    },

    {
      label: "Pricing",
      gigthink: gigThinkPricing,
      competitor:
        "LinkedIn offers free access with additional paid products and subscriptions such as Sales Navigator; pricing varies by market, plan, and subscription type",
    },
  ],

  pricing: {
    gigthink: gigThinkPricing,

    competitor:
      "LinkedIn provides a free basic experience, while premium products such as Sales Navigator are offered through paid subscriptions. Current pricing varies by region, product, and plan and should be verified directly with LinkedIn.",
  },

  detailedComparison: [
    {
      title: "Core Product Focus",

      gigthink: [
        "GigThink is designed as a client-acquisition platform rather than a social network.",
        "It connects opportunity discovery, lead generation, AI processing, proposal creation, CRM, email outreach, and follow-ups.",
        "The platform focuses on moving prospects through an acquisition workflow.",
        "Its objective is to reduce the number of disconnected tools required to manage client acquisition.",
      ],

      competitor: [
        "LinkedIn is primarily a professional networking and social platform.",
        "It allows professionals and businesses to build relationships, publish content, discover companies and people, and communicate directly.",
        "Sales Navigator adds specialized prospecting and account-search capabilities for sales users.",
        "Its major advantage is the size and depth of its professional network.",
      ],
    },

    {
      title: "Lead & Prospect Discovery",

      gigthink: [
        "GigThink includes Lead Generation and Lead Scraper capabilities for supported sources.",
        "The platform is designed to centralize discovered prospect and opportunity information.",
        "Collected information can move into AI processing, CRM, proposal, and outreach workflows.",
        "Lead discovery is treated as the beginning of a larger acquisition process.",
      ],

      competitor: [
        "LinkedIn provides professional search capabilities for discovering people and companies.",
        "Sales Navigator adds more advanced prospecting and account-search functionality.",
        "Users can identify prospects based on professional characteristics, company information, and other available criteria.",
        "LinkedIn's major strength is access to a large professional network rather than being a complete acquisition workflow.",
      ],
    },

    {
      title: "Opportunity Discovery",

      gigthink: [
        "GigThink's Opportunity Engine is designed to centralize opportunities from multiple supported sources.",
        "Users can manage opportunities inside the same environment used for subsequent acquisition activities.",
        "AI Parser can structure raw opportunity information.",
        "Opportunities can then move directly into proposal, CRM, outreach, and follow-up workflows.",
      ],

      competitor: [
        "LinkedIn provides professional discovery rather than functioning primarily as a multi-source opportunity aggregation platform.",
        "Users can discover companies, professionals, and potential business relationships through LinkedIn.",
        "Sales Navigator provides additional prospecting functionality.",
        "Users may need other tools when their acquisition process depends on opportunities from sources outside LinkedIn.",
      ],
    },

    {
      title: "AI & Data Processing",

      gigthink: [
        "GigThink's AI Parser is designed to process available opportunity and lead information.",
        "Raw information can be transformed into structured data for downstream acquisition workflows.",
        "AI processing can support personalization and proposal creation.",
        "The AI layer is connected to multiple stages of the client-acquisition process.",
      ],

      competitor: [
        "LinkedIn uses algorithmic recommendations and AI-assisted functionality across selected experiences.",
        "Its platform is built around professional identity, relationships, content, search, and business networking.",
        "LinkedIn's AI capabilities are integrated into the broader professional-network ecosystem rather than centered specifically on an end-to-end acquisition pipeline.",
      ],
    },

    {
      title: "Outreach Channels",

      gigthink: [
        "GigThink supports email-based outreach and automated follow-ups.",
        "Email activity can be connected with lead information and CRM records.",
        "Users can manage outreach as part of a broader acquisition workflow.",
        "The platform is designed to connect discovery with subsequent communication and follow-up.",
      ],

      competitor: [
        "LinkedIn provides native communication through connection requests, messages, and InMail depending on account and product capabilities.",
        "These channels are closely connected to professional profiles and networking activity.",
        "LinkedIn is particularly strong when relationship-building happens directly within the professional network.",
        "Dedicated email automation generally requires separate tools or workflows.",
      ],
    },

    {
      title: "Email Automation",

      gigthink: [
        "GigThink includes Email Automation for outreach and follow-up workflows.",
        "Email campaigns can be connected to lead and CRM information.",
        "Automated follow-ups help maintain consistent communication.",
        "Email is integrated into the larger client-acquisition process.",
      ],

      competitor: [
        "LinkedIn is not primarily an email automation platform.",
        "Its native communication experience is centered around LinkedIn messages and InMail.",
        "Users who require sophisticated external email sequences generally need additional tools.",
        "This creates a distinction between LinkedIn's network-based communication and GigThink's acquisition-focused email workflow.",
      ],
    },

    {
      title: "CRM & Client Management",

      gigthink: [
        "GigThink includes Client CRM as a native component of its acquisition workflow.",
        "Prospects, opportunities, and clients can be organized within the same environment.",
        "CRM records can connect with proposals, email activity, and follow-ups.",
        "The CRM is designed around maintaining continuity throughout the acquisition lifecycle.",
      ],

      competitor: [
        "LinkedIn provides extensive professional profile and networking data but is not primarily a standalone CRM.",
        "Businesses commonly connect LinkedIn activity with external CRM platforms.",
        "Sales Navigator can support prospecting and relationship-management workflows.",
        "A separate CRM may still be required for broader pipeline management and client lifecycle tracking.",
      ],
    },

    {
      title: "Proposal Creation",

      gigthink: [
        "GigThink includes Proposal Studio with AI assistance.",
        "Users can create proposals based on available opportunity-specific context.",
        "Proposal generation is connected with lead and opportunity information.",
        "This allows the workflow to continue from discovery into proposal creation without requiring a separate proposal platform for the core workflow.",
      ],

      competitor: [
        "LinkedIn does not primarily provide a dedicated proposal-generation workflow.",
        "Users can communicate with prospects and share business information through LinkedIn.",
        "Formal proposals generally require external documents, proposal platforms, or business workflows.",
      ],
    },

    {
      title: "Social Selling",

      gigthink: [
        "GigThink focuses on structured client acquisition rather than social networking.",
        "Users can organize discovered prospects and manage subsequent acquisition activities.",
        "The platform complements relationship-building channels by connecting prospects with CRM, proposals, outreach, and follow-ups.",
      ],

      competitor: [
        "LinkedIn is one of the strongest environments for professional social selling.",
        "Users can build credibility through profiles and content.",
        "Sales professionals can engage with prospects through connections, messages, InMail, posts, and professional interactions.",
        "This native social context is a major advantage for LinkedIn.",
      ],
    },

    {
      title: "Data Centralization",

      gigthink: [
        "GigThink is designed to centralize opportunity and lead information within its acquisition environment.",
        "Users can connect lead data with AI processing, CRM, proposals, and outreach.",
        "The goal is to provide continuity between discovery and client management.",
      ],

      competitor: [
        "LinkedIn centralizes professional identities, company information, connections, conversations, content, and networking activity within its ecosystem.",
        "Its data is primarily designed to support professional networking and discovery.",
        "Businesses may still require external systems for complete sales pipeline and customer management.",
      ],
    },

    {
      title: "End-to-End Acquisition",

      gigthink: [
        "GigThink connects discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups.",
        "The acquisition workflow can begin with opportunity discovery and continue through prospect management.",
        "Users can keep multiple acquisition activities connected in one focused environment.",
        "The platform is designed specifically around converting opportunities into managed client relationships.",
      ],

      competitor: [
        "LinkedIn provides a strong environment for discovering professionals, building relationships, engaging with prospects, and initiating conversations.",
        "Its strength comes from its professional network and native communication ecosystem.",
        "Users may combine LinkedIn with external CRM, email automation, proposal, and workflow tools for a broader acquisition system.",
        "This makes LinkedIn highly valuable as a prospecting and relationship-building channel even when it is not the entire acquisition stack.",
      ],
    },

    {
      title: "Best-Fit User",

      gigthink: [
        "Freelancers looking for opportunities across multiple supported sources.",
        "Agencies that want a centralized client-acquisition workflow.",
        "Service providers who need lead discovery, proposals, CRM, email outreach, and follow-ups connected.",
        "Users who want to manage acquisition activities beyond a single professional network.",
      ],

      competitor: [
        "Professionals who want to build and maintain a professional network.",
        "Sales teams using social selling and relationship-based prospecting.",
        "Businesses that want access to LinkedIn's professional ecosystem.",
        "Sales users who benefit from advanced prospecting capabilities through Sales Navigator.",
      ],
    },
  ],

  verdict: {
    gigthinkBetter:
      "GigThink is a stronger fit if you want to centralize opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups into one client-acquisition workflow.",

    competitorBetter:
      "LinkedIn is a stronger fit if your strategy depends heavily on professional networking, social selling, relationship building, content engagement, and direct communication within a large professional network.",

    final:
      "GigThink and LinkedIn serve different primary purposes. LinkedIn is a professional network with powerful relationship-building and prospecting capabilities, while GigThink is designed as a broader client-acquisition workflow. LinkedIn is particularly valuable for discovering professionals and companies, building credibility, engaging with prospects, and starting conversations through its native networking environment. GigThink extends beyond a single network by connecting opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and automated follow-ups. For users whose primary strategy is professional networking and social selling, LinkedIn remains highly valuable. For freelancers, agencies, and service providers who want to organize and automate a broader client-acquisition process across multiple sources, GigThink provides a more acquisition-focused workflow.",
  },

  faqs: [
    {
      question: "Is GigThink a replacement for LinkedIn?",

      answer:
        "GigThink is not a direct replacement for LinkedIn's professional networking ecosystem. LinkedIn provides a large professional network, profiles, connections, content, messaging, and prospecting capabilities. GigThink focuses on the broader client-acquisition workflow, including opportunity discovery, lead generation, AI processing, proposals, CRM, email automation, and follow-ups.",
    },

    {
      question: "What is the biggest difference between GigThink and LinkedIn?",

      answer:
        "The biggest difference is their core purpose. LinkedIn is primarily a professional networking and social-selling platform, while GigThink is designed as a client-acquisition workflow platform. LinkedIn helps users discover and connect with professionals, while GigThink focuses on managing the broader process from opportunity discovery through outreach, proposals, CRM, and follow-ups.",
    },

    {
      question: "Can GigThink find leads like LinkedIn?",

      answer:
        "GigThink includes Lead Generation and Lead Scraper capabilities for supported sources. LinkedIn provides professional search and prospecting through its own network, with additional capabilities available through Sales Navigator. The two platforms approach lead discovery differently.",
    },

    {
      question: "Does GigThink replace LinkedIn Sales Navigator?",

      answer:
        "GigThink should not be positioned as a one-to-one replacement for every Sales Navigator capability. Sales Navigator specializes in professional prospect and account discovery within LinkedIn's network. GigThink focuses on a broader acquisition workflow that includes opportunity discovery, lead generation, AI processing, proposals, CRM, email automation, and follow-ups.",
    },

    {
      question: "Can GigThink automate LinkedIn messages?",

      answer:
        "GigThink's core automation capabilities focus on email outreach, follow-ups, CRM workflows, and broader client acquisition. Automated LinkedIn activity should only be used where permitted by LinkedIn's current policies, terms, and available integrations. GigThink should not be represented as bypassing LinkedIn restrictions.",
    },

    {
      question: "Does GigThink include a CRM like LinkedIn?",

      answer:
        "GigThink includes Client CRM as part of its acquisition workflow. LinkedIn provides professional profiles, connections, conversations, and networking data, but it is not primarily positioned as a standalone full-featured CRM. Businesses often connect LinkedIn activity with an external CRM for broader pipeline management.",
    },

    {
      question: "Can GigThink send automated emails to leads?",

      answer:
        "Yes. GigThink includes Email Automation designed to support outreach and follow-up workflows. Email activity can be connected with lead and CRM information, allowing users to manage communication as part of the broader acquisition process.",
    },

    {
      question: "Does GigThink create proposals?",

      answer:
        "Yes. GigThink includes Proposal Studio with AI assistance. It is designed to help users create proposals using available opportunity-specific information, making proposal generation a connected step within the client-acquisition workflow.",
    },

    {
      question: "Can GigThink and LinkedIn be used together?",

      answer:
        "Yes. They can serve complementary purposes. LinkedIn can be used for professional networking, prospect research, relationship building, and social selling, while GigThink can organize acquisition activities such as opportunity management, lead processing, proposals, CRM, email outreach, and follow-ups. Any data collection or automation involving LinkedIn should comply with LinkedIn's current terms and policies.",
    },

    {
      question: "Which is better for freelancers and agencies: GigThink or LinkedIn?",

      answer:
        "The best choice depends on the workflow. LinkedIn is highly valuable for professional networking, social selling, prospect discovery, and relationship building. GigThink is designed for freelancers and agencies that want a broader client-acquisition system covering opportunity discovery, lead generation, AI processing, proposals, CRM, email automation, and follow-ups. Many users can benefit from using LinkedIn as a networking channel while managing their broader acquisition workflow through GigThink.",
    },
  ],
};
