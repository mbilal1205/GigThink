// components/careers-sections/OpenPositionsSection.tsx

import JobCard from "./JobCard";
import { JobPosition } from "@/data/careers/types";

interface OpenPositionsSectionProps {
  positions: JobPosition[];
}

export default function OpenPositionsSection({ positions }: OpenPositionsSectionProps) {
  return (
    <section id="open-positions" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-headings text-center mb-10">
          Open Positions
        </h2>
        {positions.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {positions.map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            We don't have any open positions right now, but check back soon.
          </p>
        )}
      </div>
    </section>
  );
}