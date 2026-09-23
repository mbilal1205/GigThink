import { allCompetitors } from "@/data/compare-content";
import CompareIndexCard from "@/components/compare-sections/CompareIndexCard";

export const metadata = {
  title: "Compare GigThink with Other Tools | GigThink vs Competitors",
  description:
    "See detailed comparisons between GigThink and Upwork, Fiverr, Apollo, HubSpot, and more. Find out which tool fits your client acquisition workflow.",
};

export default function CompareIndexPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-headings">
            GigThink vs Competitors
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Dekho GigThink kaise compare karta hai doosre popular tools ke saath.
            Find the best fit for your client acquisition workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCompetitors.map((competitor) => (
            <CompareIndexCard key={competitor.slug} data={competitor} />
          ))}
        </div>
      </div>
    </main>
  );
}