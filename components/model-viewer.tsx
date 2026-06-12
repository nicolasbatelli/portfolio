"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import type { ModelPart } from "@/content/models";
import { StlViewerWrapper } from "@/components/stl-viewer-wrapper";
import { Button } from "@/components/ui/button";

type ModelViewerProps = {
  parts: ModelPart[];
};

export function ModelViewer({ parts }: ModelViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePart = parts[activeIndex] ?? parts[0];

  return (
    <div>
      {parts.length > 1 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {parts.map((part, index) => (
            <Button
              key={part.file}
              variant={index === activeIndex ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveIndex(index)}
            >
              {part.name}
            </Button>
          ))}
        </div>
      )}

      <StlViewerWrapper key={activePart.file} url={activePart.file} />

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Viewing: <span className="font-medium text-foreground">{activePart.name}</span>
        </p>
        <Button variant="outline" size="sm" render={<a href={activePart.file} download />}>
          <Download className="size-4" />
          Download {activePart.name}
        </Button>
      </div>
    </div>
  );
}
