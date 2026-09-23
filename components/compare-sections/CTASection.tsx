import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-headings">
          Ready to supercharge your client acquisition?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Join GigThink today and experience the power of AI-driven opportunity discovery,
          proposals, CRM, and automation — all in one place.
        </p>
        <div className="mt-8 flex justify-center gap-4">
  {/* Gradient hata kar soft black (bg-neutral-800) lagaya aur hover state freeze kar di */}
  <Button size="lg" className="bg-neutral-900 text-white font-semibold px-8 hover:bg-neutral-800 transition-none">
    Start Free Trial
  </Button>
  
  <Button size="lg" variant="outline" className="border-primary/40 text-black px-8">
    Book a Demo
  </Button>
</div>

      </div>
    </section>
  );
}