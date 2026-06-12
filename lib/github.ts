import { projectOverrides } from "@/content/projects";
import { siteConfig } from "@/content/site";
import type { Project } from "@/lib/types";

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

const REVALIDATE_SECONDS = 3600;

function getOverrideMap() {
  return new Map(projectOverrides.map((o) => [o.repo.toLowerCase(), o]));
}

function mergeRepo(repo: GitHubRepo, overrideMap: Map<string, (typeof projectOverrides)[number]>): Project {
  const override = overrideMap.get(repo.name.toLowerCase());

  return {
    name: repo.name,
    description: override?.description ?? repo.description ?? "",
    url: repo.html_url,
    homepage: repo.homepage || null,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
    topics: [...new Set([...(repo.topics ?? []), ...(override?.tags ?? [])])],
    updatedAt: repo.updated_at,
    featured: override?.featured ?? false,
    hidden: override?.hidden ?? false,
    screenshot: override?.screenshot ?? null,
  };
}

export async function getProjects(): Promise<Project[]> {
  const username = process.env.GITHUB_USERNAME ?? siteConfig.githubUsername;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers,
        next: { revalidate: REVALIDATE_SECONDS },
      }
    );

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} ${response.statusText}`);
      return getFallbackProjects();
    }

    const repos: GitHubRepo[] = await response.json();
    const overrideMap = getOverrideMap();

    return repos
      .filter((repo) => !repo.fork && !repo.archived)
      .map((repo) => mergeRepo(repo, overrideMap))
      .filter((project) => !project.hidden)
      .sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return b.stars - a.stars;
      });
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return getFallbackProjects();
  }
}

export async function getFeaturedProjects(limit = 3): Promise<Project[]> {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.featured);

  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }

  return [...featured, ...projects.filter((p) => !p.featured)].slice(0, limit);
}

function getFallbackProjects(): Project[] {
  return projectOverrides
    .filter((o) => !o.hidden)
    .map((o) => ({
      name: o.repo,
      description: o.description ?? "",
      url: `${siteConfig.links.github}/${o.repo}`,
      homepage: null,
      stars: 0,
      forks: 0,
      language: o.tags?.[0] ?? null,
      topics: o.tags ?? [],
      updatedAt: new Date().toISOString(),
      featured: o.featured ?? false,
      hidden: false,
      screenshot: o.screenshot ?? null,
    }));
}
