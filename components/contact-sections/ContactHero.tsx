// components/contact-sections/ContactHero.tsx

export default function ContactHero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-headings">
          Let's Build a Smarter Way to{" "}
          <span className="heading-gradient">Win Clients</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a question about GigThink, need help with your account, or want to explore how
          GigThink can fit into your workflow? Our team is here to help.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Questions, product support, partnerships, and business inquiries — all in one place.
        </p>
      </div>
    </section>
  );
}