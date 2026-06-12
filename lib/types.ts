export type Project = {
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  stars: number;
  forks: number;
  language: string | null;
  topics: string[];
  updatedAt: string;
  featured: boolean;
  hidden: boolean;
  screenshot: string | null;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export type BlogPost = BlogPostMeta & {
  content: string;
};
