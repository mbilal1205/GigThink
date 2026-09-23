import { DocArticle } from "../types";

export const doc: DocArticle = {
  slug: "getting-started-creating-account",
  title: "Creating Your GigThink Account",
  description: "Step-by-step guide to sign up for GigThink and set up your account.",
  category: "getting-started",
  order: 2,
  seo: {
    title: "Creating Your GigThink Account | GigThink Documentation",
    description: "Learn how to create your GigThink account and get started with the platform.",
  },
  content: [
    { type: "paragraph", text: "Creating a GigThink account is simple and takes only a few minutes. Follow the steps below to get started." },
    { type: "steps", steps: [
      { title: "Visit the Sign-up Page", description: "Go to the GigThink sign-up page and enter your name and email address." },
      { title: "Verify Your Email", description: "Check your inbox for a verification email from GigThink and click the verification link." },
      { title: "Complete Your Profile", description: "Add basic information about your role, such as freelancer, agency, or team." },
      { title: "Explore the Dashboard", description: "Once logged in, you'll see the main dashboard where you can start discovering opportunities." },
    ]},
    { type: "callout", variant: "success", text: "Your account is now ready! You can begin exploring GigThink's features." },
  ],
};