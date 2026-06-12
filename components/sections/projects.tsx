import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { MotionWrapper } from "@/components/motion-wrapper";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="scroll-mt-20 bg-muted/30 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <MotionWrapper>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              title="Featured Projects"
              subtitle="A selection of my open-source work from GitHub."
              className="mb-0"
            />
            <Button variant="outline" render={<Link href="/projects" />}>
              View all
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </MotionWrapper>

        {projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <MotionWrapper key={project.name} delay={index * 0.08}>
                <ProjectCard project={project} />
              </MotionWrapper>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            No projects found. Update your GitHub username in{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">content/site.ts</code>{" "}
            or set the <code className="rounded bg-muted px-1.5 py-0.5 text-sm">GITHUB_USERNAME</code>{" "}
            environment variable.
          </p>
        )}
      </div>
    </section>
  );
}
