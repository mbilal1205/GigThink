// data/legal/cookies.ts

import { LegalPageData } from "./types";

export const cookiesData: LegalPageData = {
  title: "Cookie Policy",
  updatedDate: "September 26, 2026",
  intro: "This Cookie Policy explains how GigThink uses cookies and similar technologies.",
  sections: [
    {
      heading: "What Are Cookies?",
      paragraphs: [
        "Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and improve your experience.",
      ],
    },
    {
      heading: "How We Use Cookies",
      paragraphs: [
        "We use essential cookies for authentication, session management, and security. We may also use analytics cookies to understand usage patterns and improve our service.",
      ],
    },
    {
      heading: "Types of Cookies",
      listItems: [
        "Essential Cookies: Required for the platform to function properly.",
        "Analytics Cookies: Help us analyze traffic and usage to improve GigThink.",
        "Preference Cookies: Remember your settings and choices.",
      ],
    },
    {
      heading: "Managing Cookies",
      paragraphs: [
        "Most web browsers allow you to control cookies through their settings. You can usually delete or block cookies, but this may affect your ability to use some features.",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "We may update this Cookie Policy from time to time. Any changes will be posted on this page.",
      ],
    },
  ],
};