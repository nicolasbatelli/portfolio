import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { models } from "@/content/models";
import { ModelViewer } from "@/components/model-viewer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = models.find((m) => m.slug === slug);

  if (!model) {
    return { title: "Model not found" };
  }

  return {
    title: model.title,
    description: model.description,
  };
}

export default async function ModelPage({ params }: PageProps) {
  const { slug } = await params;
  const model = models.find((m) => m.slug === slug);

  if (!model) {
    notFound();
  }

  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Button variant="ghost" size="sm" className="mb-8" render={<Link href="/models" />}>
          <ArrowLeft className="size-4" />
          Back to models
        </Button>

        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">{model.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{model.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {model.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <ModelViewer parts={model.parts} />

        {model.parts.length > 1 && (
          <p className="mt-3 text-sm text-muted-foreground">
            This model has {model.parts.length} parts — use the buttons above to view and
            download each one.
          </p>
        )}

        {model.printSettings && (
          <>
            <Separator className="my-8" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Suggested print settings</p>
              <ul className="mt-2 space-y-1">
                {model.printSettings.material && (
                  <li>Material: {model.printSettings.material}</li>
                )}
                {model.printSettings.layerHeight && (
                  <li>Layer height: {model.printSettings.layerHeight}</li>
                )}
                {model.printSettings.infill && (
                  <li>Infill: {model.printSettings.infill}</li>
                )}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
