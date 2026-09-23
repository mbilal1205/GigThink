// components/contact-sections/WhatHappensNext.tsx

import { whatHappensNext } from "@/data/contact-content";

export default function WhatHappensNext() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-headings text-center mb-12">
          What Happens Next?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {whatHappensNext.map((item) => (
            <div key={item.step} className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">{item.step}</div>
              <h3 className="text-lg font-semibold text-headings mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}