import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { securityData } from "@/data/legal/security";

export const metadata = {
  title: "Security | GigThink",
  description:
    "Learn how GigThink approaches security and protects your client acquisition data.",
};

export default function SecurityPage() {
  return <LegalPageLayout {...securityData} />;
}