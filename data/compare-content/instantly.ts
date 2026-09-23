
import { CompetitorData } from "./types";

const gigThinkPricing = "Free trial available (pricing details coming soon)";

export const instantlyData: CompetitorData = {
  slug: "instantly",

  name: "Instantly.ai",

  shortName: "Instantly",

  tagline: "Cold email outreach, automation & deliverability platform",

  description:
    "Instantly.ai is an outbound sales platform focused primarily on cold email outreach, campaign automation, email deliverability, and managing large-scale outbound campaigns. Its core value is helping users send and optimize cold email campaigns while supporting deliverability and campaign management. GigThink takes a broader client-acquisition approach by connecting opportunity discovery, lead generation, AI-powered data processing, proposal creation, Client CRM, email automation, and automated follow-ups into one acquisition-focused workflow.",

  category: "Cold Email Outreach & Sales Engagement",

  features: [
    {
      label: "Core Focus",
      gigthink:
        "AI-powered end-to-end client acquisition covering opportunity discovery, lead generation, AI processing, proposals, CRM, outreach, and follow-ups",
      competitor:
        "Cold email outreach, campaign automation, email deliverability, and outbound sales engagement",
    },

    {
      label: "Opportunity Discovery",
      gigthink:
        "Built-in Opportunity Engine designed to centralize opportunities from multiple supported sources",
      competitor:
        "Not primarily designed as a multi-source opportunity discovery engine; focused mainly on outbound prospecting and email campaigns",
    },

    {
      label: "Lead Generation",
      gigthink:
        "Lead Generation and Lead Scraper capabilities support discovering potential prospects from supported sources",
      competitor:
        "Supports outbound prospecting workflows and lead management, with its core value centered around executing cold email campaigns",
    },

    {
      label: "AI Processing",
      gigthink:
        "AI Parser structures available opportunity and lead information for downstream acquisition workflows",
      competitor:
        "Provides AI-related capabilities within its outbound sales and email workflow, depending on the current product offering",
    },

    {
      label: "Proposal Studio",
      gigthink:
        "AI-assisted Proposal Studio helps create proposals using opportunity-specific context",
      competitor:
        "No dedicated proposal-generation workflow as a core product capability",
    },

    {
      label: "CRM",
      gigthink:
        "Built-in Client CRM designed around prospects, opportunities, clients, and acquisition activity",
      competitor:
        "Provides prospect and campaign management functionality, with broader CRM requirements typically handled through integrations or connected workflows",
    },

    {
      label: "Email Automation",
      gigthink:
        "Email Automation supports automated outreach and follow-up workflows connected to leads and CRM records",
      competitor:
        "Advanced cold email campaign automation is a core capability",
    },

    {
      label: "Follow-ups",
      gigthink:
        "Auto Follow-ups are integrated into the client-acquisition workflow",
      competitor:
        "Automated email sequences and campaign follow-ups are core outbound capabilities",
    },

    {
      label: "Email Warmup & Deliverability",
      gigthink:
        "Email Automation focuses on outreach and follow-ups rather than being positioned primarily as a dedicated email warmup platform",
      competitor:
        "Strong focus on cold email infrastructure, deliverability, and email sending workflows",
    },

    {
      label: "Campaign Management",
      gigthink:
        "Acquisition activities are managed as part of a broader lead-to-client workflow",
      competitor:
        "Dedicated campaign management for outbound email campaigns",
    },

    {
      label: "Multi-Source Acquisition",
      gigthink:
        "Designed to bring opportunities and leads from multiple supported sources into one acquisition workflow",
      competitor:
        "Primarily centered around outbound prospecting and email campaign execution",
    },

    {
      label: "Proposal Workflow",
      gigthink:
        "Connects opportunity discovery directly with AI-assisted proposal creation",
      competitor:
        "Does not provide a dedicated proposal-generation workflow as a central feature",
    },

    {
      label: "Client Acquisition Workflow",
      gigthink:
        "Discovery → AI Processing → Personalization → Proposal/Outreach → CRM → Follow-up",
      competitor:
        "Prospecting → Campaign Setup → Cold Email → Automated Follow-up → Campaign Optimization",
    },

    {
      label: "Primary Strength",
      gigthink:
        "Connecting multiple client-acquisition activities into one focused workflow",
      competitor:
        "Executing and managing cold email campaigns at scale",
    },

    {
      label: "Pricing",
      gigthink: gigThinkPricing,
      competitor:
        "Instantly offers multiple plans and usage-based options; current pricing varies by product, plan, and account requirements",
    },
  ],

  pricing: {
    gigthink: gigThinkPricing,

    competitor:
      "Instantly offers paid plans for its outbound sales and email infrastructure products, with pricing and limits varying by the selected plan and current product offering. Current pricing should be verified directly with Instantly.",
  },

  detailedComparison: [
    {
      title: "Core Product Focus",

      gigthink: [
        "GigThink is designed as a broader client-acquisition platform.",
        "It connects opportunity discovery, lead generation, AI processing, proposals, CRM, email automation, and follow-ups.",
        "Email outreach is one component of the larger acquisition workflow.",
        "The platform is designed to help users move from discovering an opportunity to managing the resulting client relationship.",
      ],

      competitor: [
        "Instantly is primarily focused on outbound sales and cold email.",
        "Its core workflow revolves around campaign creation, sending, follow-ups, and email deliverability.",
        "The platform is particularly useful for users whose acquisition strategy relies heavily on cold email.",
        "Its specialization allows it to focus deeply on outbound email operations.",
      ],
    },

    {
      title: "Opportunity Discovery",

      gigthink: [
        "GigThink includes an Opportunity Engine designed to centralize opportunities from multiple supported sources.",
        "Users can manage discovered opportunities within the same acquisition environment.",
        "AI Parser can structure raw opportunity information.",
        "Opportunities can then move into proposals, outreach, CRM, and follow-up workflows.",
      ],

      competitor: [
        "Instantly is primarily focused on executing outbound campaigns rather than aggregating opportunities from multiple opportunity sources.",
        "Users generally begin with prospect or lead information and then build outbound campaigns.",
        "Its strength is campaign execution rather than opportunity aggregation.",
        "Additional tools may be used when broader opportunity discovery is required.",
      ],
    },

    {
      title: "Lead Generation",

      gigthink: [
        "GigThink includes Lead Generation and Lead Scraper capabilities.",
        "Users can discover potential prospects from supported sources.",
        "Collected information can be structured using AI and connected to CRM and outreach workflows.",
        "Lead generation is directly connected to the rest of the acquisition pipeline.",
      ],

      competitor: [
        "Instantly supports outbound prospecting workflows and campaign-based lead management.",
        "Its core workflow is optimized around using prospect data for cold email campaigns.",
        "Users can organize prospects for outbound campaigns.",
        "For specialized lead discovery from external sources, users may combine Instantly with additional lead-generation tools.",
      ],
    },

    {
      title: "Cold Email & Outreach",

      gigthink: [
        "GigThink provides Email Automation as part of the broader client-acquisition workflow.",
        "Outreach can be connected with lead information and CRM records.",
        "Users can combine initial outreach with automated follow-ups.",
        "Email is treated as one stage of a larger acquisition journey.",
      ],

      competitor: [
        "Instantly is specifically built around cold email outreach.",
        "Users can create and manage outbound email campaigns.",
        "Automated sequences help manage follow-up communication.",
        "The platform is designed for users who need dedicated outbound email infrastructure.",
      ],
    },

    {
      title: "Email Deliverability",

      gigthink: [
        "GigThink focuses on managing acquisition workflows rather than positioning itself primarily as a dedicated email deliverability platform.",
        "Email Automation is intended to support outreach and follow-up activities.",
        "Users requiring specialized deliverability infrastructure may need dedicated email infrastructure depending on their sending requirements.",
      ],

      competitor: [
        "Email deliverability is an important part of Instantly's outbound email positioning.",
        "The platform provides tools and workflows intended to support large-scale cold email operations.",
        "This makes Instantly particularly relevant for users whose primary concern is outbound email performance and deliverability.",
      ],
    },

    {
      title: "Email Warmup",

      gigthink: [
        "GigThink's primary focus is client acquisition rather than dedicated email warmup infrastructure.",
        "Its Email Automation functionality is designed around outreach and follow-ups.",
        "Email infrastructure requirements can vary depending on the user's sending setup.",
      ],

      competitor: [
        "Instantly has historically emphasized email infrastructure and deliverability features, including warmup-related functionality.",
        "Its product is built around helping users operate outbound email campaigns at scale.",
        "Users should verify the currently available warmup functionality and plan limitations directly with Instantly.",
      ],
    },

    {
      title: "Proposal Creation",

      gigthink: [
        "GigThink includes Proposal Studio with AI assistance.",
        "Users can create proposals using available opportunity-specific context.",
        "Proposal creation is connected directly to opportunity discovery and lead management.",
        "This allows users to move from opportunity discovery to proposal creation without leaving the acquisition workflow.",
      ],

      competitor: [
        "Instantly does not primarily function as a proposal-generation platform.",
        "Its workflow is centered on outbound email campaigns and prospect engagement.",
        "Users requiring dedicated proposals would generally use a separate proposal tool or workflow.",
      ],
    },

    {
      title: "CRM & Client Management",

      gigthink: [
        "GigThink includes Client CRM as a native part of its acquisition ecosystem.",
        "Prospects and clients can be organized alongside opportunities and lead information.",
        "CRM records can connect with proposals, outreach, and follow-ups.",
        "This provides continuity from initial prospect discovery through client management.",
      ],

      competitor: [
        "Instantly focuses more heavily on prospect and campaign management than full client relationship management.",
        "Users may connect external CRM systems depending on their workflow.",
        "This approach is useful for teams that already have a separate CRM and primarily need outbound email infrastructure.",
      ],
    },

    {
      title: "Follow-up Automation",

      gigthink: [
        "Auto Follow-ups are integrated into the client-acquisition workflow.",
        "Follow-ups can be connected to email automation and CRM activity.",
        "The system is designed to reduce repetitive manual prospect communication.",
        "Follow-up activity remains connected to the broader acquisition process.",
      ],

      competitor: [
        "Automated follow-up sequences are a core part of Instantly's outbound email workflow.",
        "Users can configure sequences to continue prospect communication after initial emails.",
        "This makes Instantly particularly strong for structured cold email campaigns.",
        "The workflow remains primarily focused on email-based prospect engagement.",
      ],
    },

    {
      title: "AI & Personalization",

      gigthink: [
        "GigThink uses AI to process opportunity and lead information.",
        "AI can help structure raw data for downstream workflows.",
        "Proposal Studio can use available context to support personalized proposals.",
        "The AI layer is connected to multiple stages of client acquisition.",
      ],

      competitor: [
        "Instantly provides capabilities designed to support outbound sales workflows and email campaign personalization.",
        "Its AI-related features are primarily relevant to prospecting and outbound communication.",
        "The overall product remains centered around cold email and sales engagement.",
      ],
    },

    {
      title: "End-to-End Acquisition",

      gigthink: [
        "GigThink connects discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups.",
        "The workflow can begin before a prospect is contacted and continue after outreach.",
        "Users can manage multiple acquisition activities from one focused platform.",
        "The objective is to reduce the number of disconnected tools required for client acquisition.",
      ],

      competitor: [
        "Instantly provides a strong workflow for outbound email acquisition.",
        "Its process is centered around prospect data, campaign setup, email sending, and automated follow-up.",
        "Users may combine Instantly with separate lead databases, CRM systems, proposal tools, and opportunity discovery platforms.",
        "This modular approach can be useful for teams that already have established tools for the other stages.",
      ],
    },

    {
      title: "Best-Fit User",

      gigthink: [
        "Freelancers looking for new client opportunities.",
        "Agencies that need a centralized acquisition workflow.",
        "Service businesses that want discovery, proposals, CRM, outreach, and follow-ups connected.",
        "Users who want to reduce fragmentation across multiple client-acquisition tools.",
      ],

      competitor: [
        "Sales teams heavily focused on cold email.",
        "Agencies running outbound email campaigns at scale.",
        "Businesses that already have separate lead databases and CRM systems.",
        "Users who prioritize email campaign execution and deliverability infrastructure.",
      ],
    },
  ],

  verdict: {
    gigthinkBetter:
      "GigThink is a stronger fit if you want one focused platform that connects opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups instead of using a dedicated cold email platform as the center of your acquisition workflow.",

    competitorBetter:
      "Instantly is a stronger fit if your primary requirement is dedicated cold email infrastructure, campaign automation, outbound sending, and deliverability-focused workflows.",

    final:
      "GigThink and Instantly are focused on different parts of client acquisition. Instantly specializes in outbound cold email, campaign management, automation, and deliverability, making it a strong choice for businesses whose acquisition strategy is primarily email-driven. GigThink takes a broader approach by connecting opportunity discovery, lead generation, AI processing, proposal creation, CRM, email automation, and follow-ups. If you primarily need sophisticated cold email infrastructure, Instantly may be the better specialized solution. If you want a broader client-acquisition workflow that covers the stages before and after email outreach, GigThink provides a more comprehensive acquisition-focused experience.",
  },

  faqs: [
    {
      question: "Is GigThink a replacement for Instantly?",

      answer:
        "GigThink can be an alternative for users who want a broader client-acquisition workflow, but it should not be presented as a one-to-one replacement for every Instantly capability. Instantly specializes in cold email infrastructure, outbound campaigns, and deliverability, while GigThink focuses on connecting opportunity discovery, lead generation, AI processing, proposals, CRM, outreach, and follow-ups.",
    },

    {
      question: "What is the biggest difference between GigThink and Instantly?",

      answer:
        "The biggest difference is their primary focus. Instantly is built primarily around cold email outreach and outbound sales campaigns. GigThink is designed around the broader client-acquisition lifecycle, starting with opportunity and lead discovery and continuing through AI processing, proposal creation, CRM management, email outreach, and follow-ups.",
    },

    {
      question: "Does GigThink have cold email capabilities?",

      answer:
        "GigThink includes Email Automation for outreach and follow-up workflows. However, its primary focus is broader client acquisition rather than dedicated cold email infrastructure. Users whose main requirement is large-scale cold email sending and deliverability-focused functionality may find Instantly more specialized for that purpose.",
    },

    {
      question: "Does GigThink have email warmup?",

      answer:
        "GigThink's core Email Automation functionality is focused on outreach and follow-ups rather than dedicated email warmup infrastructure. If email warmup and specialized deliverability management are central requirements, a dedicated outbound email platform such as Instantly may be more appropriate.",
    },

    {
      question: "Can GigThink discover opportunities like freelance jobs?",

      answer:
        "Yes. GigThink includes an Opportunity Engine designed to centralize opportunities from multiple supported sources. This makes opportunity discovery an integrated part of the acquisition workflow rather than requiring users to find opportunities separately before starting outreach.",
    },

    {
      question: "Can GigThink create proposals while Instantly focuses on email?",

      answer:
        "Yes. GigThink includes Proposal Studio with AI assistance. It is designed to help users create proposals using available opportunity-specific context. This creates a workflow where users can move from discovering an opportunity to creating a proposal and managing subsequent outreach and follow-ups.",
    },

    {
      question: "Does GigThink include a CRM?",

      answer:
        "Yes. GigThink includes Client CRM as part of its acquisition workflow. It is designed to organize prospects, opportunities, clients, and acquisition activity. Instantly is more focused on outbound prospecting and email campaign management, and users may use external CRM systems depending on their requirements.",
    },

    {
      question: "Which platform is better for cold email?",

      answer:
        "Instantly is the more specialized option when cold email is the primary requirement. Its product is centered around outbound email campaigns, automation, and deliverability-related workflows. GigThink is better suited when cold email is one component of a broader client-acquisition process.",
    },

    {
      question: "Can GigThink and Instantly be used together?",

      answer:
        "They can potentially complement each other depending on the available integrations and the user's technical workflow. GigThink can serve as the broader acquisition and client-management layer, while Instantly can be used for specialized outbound email execution. Any specific integration should be confirmed against the current capabilities of both platforms.",
    },

    {
      question: "Which is better for freelancers and agencies: GigThink or Instantly?",

      answer:
        "The best choice depends on the primary acquisition strategy. Instantly is a strong fit for agencies and sales teams that primarily depend on cold email campaigns. GigThink is designed for freelancers, agencies, and service providers who want a broader workflow covering opportunity discovery, lead generation, AI processing, proposals, CRM, email automation, and follow-ups.",
    },
  ],
};
