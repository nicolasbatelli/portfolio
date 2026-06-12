import Link from "next/link";
import { ExternalLink, GitFork, Star } from "lucide-react";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col transition-colors hover:border-primary/30">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{project.name}</CardTitle>
          {project.featured && (
            <Badge variant="secondary" className="shrink-0">
              Featured
            </Badge>
          )}
        </div>
        <CardDescription className="line-clamp-3">
          {project.description || "No description provided."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-1.5">
          {project.language && (
            <Badge variant="outline">{project.language}</Badge>
          )}
          {project.topics.slice(0, 4).map((topic) => (
            <Badge key={topic} variant="outline">
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="size-3.5" />
            {project.stars}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="size-3.5" />
            {project.forks}
          </span>
        </div>
        <div className="flex gap-2">
          {project.homepage && (
            <Button variant="outline" size="sm" render={<Link href={project.homepage} target="_blank" rel="noopener noreferrer" />}>
              <ExternalLink className="size-3.5" />
              Demo
            </Button>
          )}
          <Button variant="default" size="sm" render={<Link href={project.url} target="_blank" rel="noopener noreferrer" />}>
            <ExternalLink className="size-3.5" />
            Code
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
