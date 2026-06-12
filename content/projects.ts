export type ProjectOverride = {
  /** GitHub repo name (must match exactly) */
  repo: string;
  description?: string;
  screenshot?: string;
  tags?: string[];
  featured?: boolean;
  hidden?: boolean;
};

/**
 * Per-repo overrides merged onto live GitHub data.
 * Add entries here to customize descriptions, hide repos, or feature projects.
 */
export const projectOverrides: ProjectOverride[] = [
  {
    repo: "portfolio",
    description:
      "This portfolio site — Next.js, Tailwind, shadcn/ui, GitHub integration, and a 3D STL viewer.",
    featured: true,
    tags: ["Next.js", "TypeScript", "Three.js"],
  },
  {
    repo: "GamingEcommerce",
    description:
      "A gaming e-commerce application built with C# and .NET.",
    featured: true,
    tags: ["C#", ".NET", "E-commerce"],
  },
  {
    repo: "construction-materias-ecommerce-api",
    description:
      "REST API for a construction materials e-commerce platform, built with C# / .NET.",
    featured: true,
    tags: ["C#", ".NET", "REST API"],
  },
  {
    repo: "nextjs-dashboard",
    description:
      "A Next.js dashboard application built with TypeScript.",
    tags: ["Next.js", "TypeScript"],
  },
  {
    repo: "Sat.Recruitment.Refactor",
    description:
      "A C# recruitment service refactor showcasing clean architecture and design patterns.",
    tags: ["C#", ".NET", "Refactoring"],
  },
];
