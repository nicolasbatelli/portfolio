import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { getFeaturedProjects } from "@/lib/github";

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects(3);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ProjectsSection projects={featuredProjects} />
      <Contact />
    </>
  );
}
