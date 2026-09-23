import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { privacyData } from "@/data/legal/privacy";

export const metadata = {
  title: "Privacy Policy | GigThink",
  description:
    "Learn how GigThink collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return <LegalPageLayout {...privacyData} />;
}