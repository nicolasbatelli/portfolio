import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import { MotionWrapper } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on software development, 3D design, and more.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <MotionWrapper>
          <SectionHeading
            title="Blog"
            subtitle="Thoughts on development, 3D printing, and side projects."
          />
        </MotionWrapper>

        {posts.length > 0 ? (
          <div className="grid gap-6">
            {posts.map((post, index) => (
              <MotionWrapper key={post.slug} delay={index * 0.08}>
                <Link href={`/blog/${post.slug}`} className="block">
                  <Card className="transition-colors hover:border-primary/30">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3.5" />
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription>{post.summary}</CardDescription>
                    </CardHeader>
                    {post.tags.length > 0 && (
                      <CardContent>
                        <div className="flex flex-wrap items-center gap-2">
                          <Tag className="size-3.5 text-muted-foreground" />
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No posts yet. Add MDX files to content/blog/.</p>
        )}
      </div>
    </div>
  );
}
