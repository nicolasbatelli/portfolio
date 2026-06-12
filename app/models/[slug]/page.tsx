import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
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
                {model.printSettings.walls && (
                  <li>Walls: {model.printSettings.walls}</li>
                )}
                {model.printSettings.topBottomLayers && (
                  <li>Top / bottom: {model.printSettings.topBottomLayers}</li>
                )}
                {model.printSettings.supports && (
                  <li>Supports: {model.printSettings.supports}</li>
                )}
              </ul>
            </div>
          </>
        )}

        {model.notes && model.notes.length > 0 && (
          <>
            <Separator className="my-8" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Build notes</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                {model.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        {model.components && model.components.length > 0 && (
          <>
            <Separator className="my-8" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Hardware used</p>
              <ul className="mt-3 space-y-4">
                {model.components.map((component) => (
                  <li key={component.label}>
                    {component.image ? (
                      <div className="flex items-center gap-4">
                        <div className="relative size-20 shrink-0 overflow-hidden rounded-lg border border-border bg-white">
                          <Image
                            src={component.image}
                            alt={component.label}
                            fill
                            sizes="80px"
                            className="object-contain p-1"
                          />
                        </div>
                        <span className="text-foreground">{component.label}</span>
                      </div>
                    ) : component.url ? (
                      <Link
                        href={component.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline"
                      >
                        {component.label}
                        <ExternalLink className="size-3" />
                      </Link>
                    ) : (
                      <span>{component.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {model.credit && (
          <>
            <Separator className="my-8" />
            <div className="text-sm text-muted-foreground">
              <p>
                {model.credit.text}
                {model.credit.link && (
                  <>
                    {" "}
                    <Link
                      href={model.credit.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline"
                    >
                      {model.credit.link.label}
                      <ExternalLink className="size-3" />
                    </Link>
                  </>
                )}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
