import { FinalCTAContent } from "@/data/solution-content/types";
import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  finalCta: FinalCTAContent;
}

export default function FinalCTASection({ finalCta }: FinalCTASectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-headings">
          {finalCta.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">{finalCta.subtitle}</p>
        <div className="mt-8">
  {/* Gradient hata kar soft black lagaya aur hover state ko freeze kar diya */}
  <Button size="lg" className="bg-neutral-900 text-white font-semibold px-8 hover:bg-neutral-800 transition-none">
    {finalCta.ctaText}
  </Button>
</div>

      </div>
    </section>
  );
}