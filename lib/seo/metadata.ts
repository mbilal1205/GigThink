// lib/seo/metadata.ts
import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type SEOInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  /** Full URL override — for CMS-provided canonicals (e.g. syndicated posts) */
  canonicalOverride?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/opengraph-image.png",
  keywords = [],
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  canonicalOverride,
}: SEOInput): Metadata {
  const canonicalUrl = canonicalOverride
    ? canonicalOverride.startsWith("http")
      ? canonicalOverride
      : `${siteConfig.url}${canonicalOverride}`
    : `${siteConfig.url}${path}`;

  const fullTitle =
    path === "/"
      ? `${siteConfig.name} — ${siteConfig.tagline}`
      : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: authors ? authors.map((a) => ({ name: a })) : [...siteConfig.authors],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,

    alternates: {
      canonical: canonicalUrl,
      languages: { "en-US": canonicalUrl, "x-default": canonicalUrl },
    },

    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },

    openGraph: {
      type,
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: `${siteConfig.url}${image}`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${title}`,
        },
      ],
      ...(type === "article" && { publishedTime, modifiedTime, authors }),
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
      images: [`${siteConfig.url}${image}`],
    },

    category: "technology",
    applicationName: siteConfig.name,
    formatDetection: { email: false, address: false, telephone: false },
    metadataBase: new URL(siteConfig.url),
  };
}