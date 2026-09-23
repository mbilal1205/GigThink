"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Moon, Sun } from "lucide-react";

type DocsTheme = "light" | "dark";

const DocsThemeContext = createContext<{
  theme: DocsTheme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export function useDocsTheme() {
  return useContext(DocsThemeContext);
}

export function DocsThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<DocsTheme>("light");

  // Persist in localStorage (optional)
  useEffect(() => {
    const saved = localStorage.getItem("docs-theme") as DocsTheme | null;
    if (saved) setTheme(saved);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("docs-theme", next);
      return next;
    });
  };

  return (
    <DocsThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "docs-theme-dark" : "docs-theme-light"}>
        {children}
      </div>
    </DocsThemeContext.Provider>
  );
}

// Toggle button component (can be used anywhere inside docs)
export function DocsThemeToggle() {
  const { theme, toggleTheme } = useDocsTheme();

  return (
    <button
      onClick={toggleTheme}
      className="h-9 w-9 rounded-lg bg-muted hover:bg-muted/80 transition-colors flex items-center justify-center"
      aria-label="Toggle docs theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-foreground" />
      ) : (
        <Moon className="h-4 w-4 text-foreground" />
      )}
    </button>
  );
}