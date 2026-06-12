import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { MotionWrapper } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { getProjects } from "@/lib/github";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open-source projects from GitHub.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <MotionWrapper>
          <SectionHeading
            title="All Projects"
            subtitle="Repositories pulled from GitHub, with custom descriptions where configured."
          />
        </MotionWrapper>

        {projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <MotionWrapper key={project.name} delay={index * 0.05}>
                <ProjectCard project={project} />
              </MotionWrapper>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            No projects found. Check your GitHub username configuration.
          </p>
        )}
      </div>
    </div>
  );
}
