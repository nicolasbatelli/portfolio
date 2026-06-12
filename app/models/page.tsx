import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Box } from "lucide-react";
import { models } from "@/content/models";
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
  title: "3D Models",
  description: "STL models for 3D printing — view and explore in the browser.",
};

export default function ModelsPage() {
  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <MotionWrapper>
          <SectionHeading
            title="3D Models"
            subtitle="STL files I've designed for 3D printing. Click to view interactively."
          />
        </MotionWrapper>

        {models.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((model, index) => (
              <MotionWrapper key={model.slug} delay={index * 0.08}>
                <Link href={`/models/${model.slug}`} className="block h-full">
                  <Card className="flex h-full flex-col overflow-hidden pt-0 transition-colors hover:border-primary/30">
                    {model.image ? (
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                        <Image
                          src={model.image}
                          alt={model.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[4/3] w-full items-center justify-center bg-muted">
                        <Box className="size-10 text-muted-foreground" />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{model.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {model.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        {model.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            No models yet. Add entries to content/models.ts and STL files to public/models/.
          </p>
        )}
      </div>
    </div>
  );
}
