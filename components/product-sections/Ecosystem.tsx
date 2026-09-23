import { ArrowRight } from "lucide-react";

interface EcosystemProps {
  data: {
    title: string;
    modules: string[];
  };
}

export function Ecosystem({ data }: EcosystemProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {data.title}
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {data.modules.map((module, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="bg-card border rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                {module}
              </span>
              {idx < data.modules.length - 1 && (
                <ArrowRight className="h-4 w-4 text-primary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}