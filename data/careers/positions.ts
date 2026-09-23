
// data/careers/positions.ts

import { JobPosition } from "./types";

export const positions: JobPosition[] = [
  {
    slug: "mern-developer",
    title: "MERN Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",

    description:
      "Build, improve, and maintain the core product experiences behind GigThink's AI-powered client acquisition platform.",

    aboutRole: [
      "We're looking for a capable and product-minded MERN Stack Developer to help build the web applications that power GigThink. You will work across the frontend and backend, turning product requirements and ideas into reliable, maintainable, and production-ready features.",
      "This role is suited to a developer who understands that strong product development is more than writing code. You should care about usability, performance, maintainability, reliability, and the overall experience a user has with the product.",
      "You will contribute to features across GigThink's product ecosystem, including opportunity discovery, lead generation, AI-assisted workflows, proposal creation, client relationship management, and automated follow-up workflows.",
      "As an early-stage product, GigThink requires developers who can work independently, investigate problems, make sensible technical decisions, and communicate clearly when requirements or implementation details need clarification.",
    ],

    whatYoullDo: [
      "Develop and maintain production-quality web applications using MongoDB, Express.js, React, and Node.js.",
      "Build responsive, accessible, and intuitive user interfaces that work reliably across modern browsers and screen sizes.",
      "Develop reusable React components and maintain a consistent component architecture across the product.",
      "Build and integrate RESTful APIs and ensure reliable communication between frontend and backend services.",
      "Design and maintain MongoDB schemas, queries, indexes, and data relationships appropriate to product requirements.",
      "Translate product requirements and design concepts into complete, working features.",
      "Work with existing product architecture while continuously identifying opportunities to improve code quality and maintainability.",
      "Integrate frontend experiences with backend services, authentication systems, databases, and relevant third-party APIs.",
      "Investigate and resolve bugs across the application stack.",
      "Improve application performance by identifying inefficient rendering, queries, API calls, and other bottlenecks.",
      "Write clear, maintainable, and reusable code rather than relying on unnecessary complexity or quick fixes.",
      "Participate in technical discussions and contribute thoughtful solutions to product and engineering problems.",
      "Review code where applicable and provide constructive feedback focused on correctness, maintainability, security, and user experience.",
      "Handle edge cases and failure states so that features remain reliable outside of the ideal workflow.",
      "Contribute to improving development practices, reusable patterns, and the overall quality of the codebase.",
    ],

    whatWereLookingFor: [
      "Strong practical experience with JavaScript and/or TypeScript.",
      "Solid understanding of React, including components, state management, hooks, forms, API integration, and reusable UI patterns.",
      "Strong understanding of Node.js and server-side application development.",
      "Practical experience with Express.js or a comparable Node.js backend framework.",
      "Good working knowledge of MongoDB, including schema design, queries, indexes, and data modeling.",
      "Experience designing and consuming RESTful APIs.",
      "Understanding of authentication, authorization, sessions, tokens, and common web application security concepts.",
      "Strong understanding of asynchronous JavaScript and error handling.",
      "Experience debugging frontend and backend issues systematically.",
      "Understanding of responsive web development and modern UI/UX principles.",
      "Ability to read an existing codebase, understand its structure, and make changes without unnecessarily breaking existing functionality.",
      "Ability to work independently while communicating progress, blockers, and technical decisions clearly.",
      "Strong attention to detail and willingness to take responsibility for the quality of delivered work.",
    ],

    niceToHave: [
      "Experience with Next.js and modern React application architecture.",
      "Experience working with TypeScript in production applications.",
      "Experience with shadcn/ui, Tailwind CSS, or comparable component and styling systems.",
      "Experience building SaaS products or productivity/workflow applications.",
      "Experience integrating AI or LLM-powered functionality into web applications.",
      "Experience working with third-party APIs and external data sources.",
      "Understanding of caching, background processing, queues, or asynchronous workflows.",
      "Experience with testing practices and automated testing.",
      "Familiarity with Git-based development workflows and CI/CD.",
    ],

    applyEmail: "gigthinkofficial@gmail.com",
  },

  {
    slug: "backend-developer",
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",

    description:
      "Build reliable backend services, APIs, data systems, and integrations that support GigThink's client acquisition workflows.",

    aboutRole: [
      "We're looking for a strong Backend Developer to help design, build, and maintain the server-side systems behind GigThink. You will work on APIs, databases, data processing, integrations, authentication, and the backend workflows that support the product.",
      "The role requires more than framework knowledge. We are looking for someone who understands how to design reliable systems, structure data properly, handle failure cases, protect application data, and build services that can evolve as product requirements change.",
      "GigThink processes and connects information across multiple product workflows. Your work will help ensure that opportunity data, leads, client information, proposals, automation workflows, and other application data are handled consistently and reliably.",
      "You should be comfortable investigating technical problems independently and making well-reasoned backend decisions while working closely with frontend and product development.",
    ],

    whatYoullDo: [
      "Design, implement, and maintain backend services for GigThink.",
      "Build well-structured RESTful APIs for frontend applications and internal product workflows.",
      "Design database schemas and data models that support current requirements while remaining maintainable as the product evolves.",
      "Work with MongoDB, PostgreSQL, or other databases used by the actual product architecture.",
      "Build data processing workflows for opportunities, leads, users, clients, and other product entities.",
      "Develop integrations with third-party services and APIs where required by product functionality.",
      "Implement reliable validation, error handling, authentication, authorization, and access-control logic.",
      "Improve backend performance by identifying inefficient queries, unnecessary processing, and application bottlenecks.",
      "Design services and workflows with appropriate handling for retries, failures, incomplete data, and external API errors.",
      "Work closely with frontend developers to define and integrate clean API contracts.",
      "Maintain clear separation between business logic, data access, API handling, and other application responsibilities.",
      "Investigate production issues and trace problems across APIs, databases, integrations, and application services.",
      "Contribute to technical decisions around backend architecture and implementation.",
      "Write maintainable code and documentation that allows other developers to understand and extend backend functionality.",
      "Follow appropriate security and data-protection practices when handling user and application data.",
    ],

    whatWereLookingFor: [
      "Strong practical experience with Node.js and backend development.",
      "Strong understanding of JavaScript and/or TypeScript.",
      "Experience building production APIs using Express.js or a comparable backend framework.",
      "Solid database knowledge, including MongoDB and/or PostgreSQL.",
      "Experience designing data models and database structures for real applications.",
      "Experience building RESTful APIs and integrating external services.",
      "Strong understanding of authentication and authorization concepts.",
      "Experience with input validation, error handling, logging, and API reliability.",
      "Understanding of backend security fundamentals.",
      "Ability to analyze performance problems and optimize database queries and backend operations.",
      "Experience working with Git and structured development workflows.",
      "Ability to independently investigate technical problems and communicate solutions clearly.",
      "Strong understanding of clean code, separation of concerns, and maintainable backend architecture.",
    ],

    niceToHave: [
      "Experience with Next.js server-side functionality.",
      "Experience with Supabase, Firebase, or comparable backend services.",
      "Experience with Redis, queues, caching, or background jobs.",
      "Experience integrating AI or LLM APIs into production workflows.",
      "Experience working with data ingestion, processing, or aggregation pipelines.",
      "Experience with cloud platforms such as AWS, GCP, or comparable infrastructure.",
      "Experience with Docker and containerized development.",
      "Experience with CI/CD pipelines and deployment workflows.",
      "Experience monitoring and troubleshooting production backend systems.",
    ],

    applyEmail: "gigthinkofficial@gmail.com",
  },

  {
    slug: "social-media-marketer",
    title: "Social Media Marketer",
    department: "Growth",
    location: "Remote",
    type: "Full-time",

    description:
      "Build GigThink's social presence through strategic content, clear product communication, and consistent audience engagement.",

    aboutRole: [
      "We're looking for a results-oriented Social Media Marketer who can help communicate what GigThink does and why it matters to freelancers, agencies, and other potential users.",
      "This is not simply a posting role. We want someone who can understand a product, identify useful stories and educational topics, turn them into strong content, and continuously improve the approach based on audience response and performance.",
      "You will work closely with the product and growth side of GigThink to communicate features, use cases, educational content, product updates, and ideas relevant to client acquisition and workflow automation.",
      "The right candidate should be comfortable taking ownership of content from idea generation through publishing and performance analysis.",
    ],

    whatYoullDo: [
      "Develop and execute a social media content strategy aligned with GigThink's product and audience.",
      "Research topics relevant to freelancers, agencies, client acquisition, sales workflows, productivity, AI, and SaaS.",
      "Create clear and useful social content that communicates practical value rather than relying on generic promotional messaging.",
      "Develop content for platforms relevant to GigThink's target audience, based on the actual channels the company chooses to operate.",
      "Write social posts, educational threads, product announcements, feature explanations, and campaign content.",
      "Coordinate with product and design resources to create supporting visuals when required.",
      "Turn product features and workflows into easy-to-understand content for potential users.",
      "Develop content ideas around common problems faced by freelancers and agencies.",
      "Monitor published content and identify patterns in engagement, reach, clicks, and other relevant metrics.",
      "Use performance insights to improve future content and distribution.",
      "Maintain a consistent GigThink brand voice across social communication.",
      "Research competitors and industry conversations to identify useful opportunities without copying their content.",
      "Support product launches, announcements, campaigns, and other growth initiatives.",
      "Maintain an organized content calendar and publishing workflow.",
    ],

    whatWereLookingFor: [
      "Demonstrable experience in social media marketing, content marketing, or digital growth.",
      "Strong written communication skills and the ability to explain products clearly.",
      "Ability to understand a B2B SaaS product and communicate its value to a specific audience.",
      "Experience creating content for professional or business-focused audiences.",
      "Ability to research topics and turn information into useful, original content.",
      "Understanding of social media analytics and performance measurement.",
      "Ability to work independently, manage deadlines, and maintain a consistent publishing workflow.",
      "Strong attention to brand voice, messaging, grammar, and visual presentation.",
      "A portfolio, examples of previous work, or measurable experience demonstrating your skills.",
    ],

    niceToHave: [
      "Experience marketing SaaS or technology products.",
      "Experience with LinkedIn content and B2B audience growth.",
      "Experience with short-form video content.",
      "Basic knowledge of SEO and content marketing.",
      "Experience using analytics and social scheduling platforms.",
      "Basic familiarity with Figma, Canva, or comparable design tools.",
      "Experience using AI tools as part of a structured content workflow.",
      "Startup or early-stage product experience.",
    ],

    applyEmail: "gigthinkofficial@gmail.com",
  },

  {
    slug: "video-editor",
    title: "Video Editor",
    department: "Growth",
    location: "Remote",
    type: "Full-time",

    description:
      "Create polished product, educational, marketing, and social video content that communicates GigThink clearly and professionally.",

    aboutRole: [
      "We're looking for a skilled Video Editor who can turn product concepts, screen recordings, scripts, and creative direction into polished video content for GigThink.",
      "Your work may include product walkthroughs, feature demonstrations, educational videos, social content, launch videos, explainers, and other visual content that helps people understand the product.",
      "We are looking for someone who understands that professional editing is not only about effects. Strong pacing, storytelling, typography, sound, visual hierarchy, product clarity, and consistency with the brand are equally important.",
      "You should be able to take a defined objective and produce a finished video while maintaining consistency across GigThink's visual identity.",
    ],

    whatYoullDo: [
      "Edit product demonstrations and screen-recorded walkthroughs into clear, professional videos.",
      "Create short-form video content for social platforms.",
      "Produce educational and feature-focused videos that explain GigThink workflows clearly.",
      "Edit promotional and product launch videos according to provided objectives and creative direction.",
      "Add clean motion graphics, transitions, captions, typography, and supporting visual elements where appropriate.",
      "Improve audio quality through appropriate editing, cleanup, leveling, and sound design.",
      "Maintain consistent visual treatment across GigThink video content.",
      "Work with product screenshots and recordings to accurately represent the actual GigThink interface.",
      "Collaborate with the team on scripts, storyboards, shot planning, and video concepts when required.",
      "Create multiple versions or aspect ratios of content when required for different publishing channels.",
      "Ensure videos communicate the intended message clearly within the available duration.",
      "Organize project files, assets, source footage, and final exports in a maintainable structure.",
      "Review finished work carefully for visual, audio, typography, timing, and branding issues before delivery.",
      "Stay aware of current video formats and editing techniques relevant to SaaS and technology content.",
    ],

    whatWereLookingFor: [
      "Strong practical experience with professional video editing.",
      "A portfolio demonstrating editing quality, storytelling, pacing, and visual judgment.",
      "Strong knowledge of editing software such as Adobe Premiere Pro, After Effects, DaVinci Resolve, or comparable tools.",
      "Understanding of typography, composition, pacing, transitions, and visual hierarchy.",
      "Ability to create clean and professional product-focused videos.",
      "Understanding of audio editing, music placement, voice-over synchronization, and basic sound design.",
      "Strong attention to detail.",
      "Ability to follow brand guidelines and maintain visual consistency.",
      "Ability to work independently from a brief while asking appropriate questions when information is missing.",
      "Ability to manage multiple deliverables and meet agreed deadlines.",
    ],

    niceToHave: [
      "Experience creating SaaS or technology product videos.",
      "Strong motion graphics and After Effects experience.",
      "Experience creating UI/product animations.",
      "Experience editing short-form content for social platforms.",
      "Experience creating product explainers or educational content.",
      "Experience with screen-recording and product-demo workflows.",
      "Familiarity with AI-assisted video production tools.",
      "Experience working with startup or technology brands.",
      "Basic understanding of YouTube and social video optimization.",
    ],

    applyEmail: "gigthinkofficial@gmail.com",
  },
];