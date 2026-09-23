// components/careers-sections/JobCard.tsx

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { JobPosition } from "@/data/careers/types";

export default function JobCard({ job }: { job: JobPosition }) {
  return (
    <Link href={`/careers/${job.slug}`} className="block h-full group">
      <Card className="h-full flex flex-col border-border/60 bg-card hover:border-primary/30 hover:shadow-sm transition-colors">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-primary border-primary/30">
              {job.department}
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" /> {job.type}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {job.location}
            </span>
          </div>
          <CardTitle className="text-lg font-semibold text-headings group-hover:text-primary transition-colors">
            {job.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">{job.description}</p>
        </CardContent>
        <div className="px-5 pb-4 text-sm text-primary font-medium flex items-center">
          View Position <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </Card>
    </Link>
  );
}