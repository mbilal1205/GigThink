"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  listItems?: string[];
}

interface LegalPageLayoutProps {
  title: string;
  updatedDate: string;
  intro?: string;
  sections: LegalSection[];
}

export default function LegalPageLayout({
  title,
  updatedDate,
  intro,
  sections,
}: LegalPageLayoutProps) {
  const [isDark, setIsDark] = useState(false);

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem("legal-theme");
    if (saved === "dark") setIsDark(true);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("legal-theme", next ? "dark" : "light");
      return next;
    });
  };

  const sectionId = (heading: string, index: number) =>
    `section-${index}-${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className={isDark ? "legal-theme-dark" : "legal-theme-light"}>
      <main className="min-h-screen bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Header with Toggle */}
          <div className="flex items-start justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-headings tracking-tight mb-2">
                {title}
              </h1>
              <p className="text-sm text-muted-foreground">
                Last updated: {updatedDate}
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className="flex-shrink-0 h-10 w-10 rounded-xl bg-muted hover:bg-muted/80 transition-colors flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>

          {intro && (
            <p className="mt-4 text-lg text-foreground/80 leading-relaxed max-w-3xl mb-10">
              {intro}
            </p>
          )}

          {/* Mobile Table of Contents */}
          <details className="lg:hidden mb-8 bg-card border border-border rounded-xl overflow-hidden">
            <summary className="cursor-pointer px-4 py-3 font-semibold text-foreground hover:bg-muted/50">
              Table of Contents
            </summary>
            <nav className="px-4 pb-4 pt-1">
              <ul className="space-y-2">
                {sections.map((section, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${sectionId(section.heading, idx)}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>

          {/* Desktop Layout: Sidebar + Content */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar (desktop) */}
            <aside className="hidden lg:block lg:w-72 shrink-0">
              <div className="sticky top-24">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  On This Page
                </h2>
                <nav className="border-l border-border/60 pl-4">
                  <ul className="space-y-1">
                    {sections.map((section, idx) => (
                      <li key={idx}>
                        <a
                          href={`#${sectionId(section.heading, idx)}`}
                          className="block py-1.5 px-2 rounded-md text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-8">
                  <a
                    href="#top"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    ↑ Back to top
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div id="top" className="flex-1 min-w-0">
              <div className="space-y-10">
                {sections.map((section, idx) => (
                  <section
                    key={idx}
                    id={sectionId(section.heading, idx)}
                    className="scroll-mt-24"
                  >
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-headings mb-4">
                      {section.heading}
                    </h2>
                    {section.paragraphs?.map((para, i) => (
                      <p
                        key={i}
                        className="text-foreground/80 leading-relaxed mb-4"
                      >
                        {para}
                      </p>
                    ))}
                    {section.listItems && (
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        {section.listItems.map((item, i) => (
                          <li
                            key={i}
                            className="text-foreground/80 leading-relaxed"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <div className="mt-12 pt-6 border-t border-border/50">
                <a
                  href="#top"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  ↑ Back to top
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}