// components/contact-sections/ContactOptions.tsx

import Link from "next/link";
import { contactOptions } from "@/data/contact-content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactOptions() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactOptions.map((option) => (
            <Card
              key={option.title}
              className="bg-card border-border/60 hover:border-primary/30 transition-colors"
            >
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <option.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-headings">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                <Link
                  href={option.link}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  {option.linkText} <span className="ml-1">→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}