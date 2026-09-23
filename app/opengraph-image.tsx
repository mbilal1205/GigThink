// app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo/site-config";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -4 }}>
          GigThink
        </div>
        <div
          style={{
            fontSize: 42,
            marginTop: 20,
            opacity: 0.85,
            textAlign: "center",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 40,
            opacity: 0.6,
            textAlign: "center",
          }}
        >
          Turn your skills into income.
        </div>
      </div>
    ),
    size
  );
}