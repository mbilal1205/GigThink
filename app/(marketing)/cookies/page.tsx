import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { cookiesData } from "@/data/legal/cookies";

export const metadata = {
  title: "Cookie Policy | GigThink",
  description:
    "Learn about the cookies used by GigThink and how you can manage them.",
};

export default function CookiePolicyPage() {
  return <LegalPageLayout {...cookiesData} />;
}