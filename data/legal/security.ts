// data/legal/security.ts

import { LegalPageData } from "./types";

export const securityData: LegalPageData = {
  title: "Security",
  updatedDate: "January 2026",
  intro:
    "Security is a priority at GigThink. We implement reasonable measures to protect your information and maintain a secure platform.",
  sections: [
    {
      heading: "Data Protection",
      paragraphs: [
        "We use industry-standard encryption protocols (TLS) to protect data in transit. Stored data is protected using access controls and follows best practices.",
      ],
    },
    {
      heading: "Access Controls",
      paragraphs: [
        "We implement role-based access controls and least-privilege principles to ensure only authorized personnel can access sensitive information.",
      ],
    },
    {
      heading: "Application Security",
      paragraphs: [
        "Our development process includes code reviews, input validation, and regular dependency updates to reduce vulnerabilities.",
      ],
    },
    {
      heading: "Infrastructure Security",
      paragraphs: [
        "GigThink is hosted on secure cloud infrastructure with network isolation, monitoring, and DDoS protection.",
      ],
    },
    {
      heading: "Monitoring & Incident Response",
      paragraphs: [
        "We monitor for unusual activity and maintain an incident response plan to address security events promptly.",
      ],
    },
    {
      heading: "Responsible Disclosure",
      paragraphs: [
        "If you discover a security vulnerability, please report it to us privately. We will investigate and respond as quickly as possible.",
      ],
    },
  ],
};