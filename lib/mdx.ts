import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, BlogPostMeta } from "@/lib/types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: (data.title as string) ?? slug,
      date: (data.date as string) ?? new Date().toISOString(),
      summary: (data.summary as string) ?? "",
      tags: (data.tags as string[]) ?? [],
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? new Date().toISOString(),
    summary: (data.summary as string) ?? "",
    tags: (data.tags as string[]) ?? [],
    content,
  };
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}
