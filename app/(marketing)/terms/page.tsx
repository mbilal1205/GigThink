import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { termsData } from "@/data/legal/terms";

export const metadata = {
  title: "Terms of Service | GigThink",
  description:
    "Read the terms and conditions for using GigThink's client acquisition platform.",
};

export default function TermsPage() {
  return <LegalPageLayout {...termsData} />;
}