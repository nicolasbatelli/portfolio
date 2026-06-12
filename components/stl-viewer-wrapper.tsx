"use client";

import dynamic from "next/dynamic";

const StlViewer = dynamic(
  () => import("@/components/stl-viewer").then((mod) => mod.StlViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[400px] items-center justify-center rounded-xl border border-border bg-muted/30 sm:h-[500px]">
        <p className="text-muted-foreground">Loading 3D viewer...</p>
      </div>
    ),
  }
);

type StlViewerWrapperProps = {
  url: string;
  className?: string;
};

export function StlViewerWrapper({ url, className }: StlViewerWrapperProps) {
  return <StlViewer url={url} className={className} />;
}
