"use client";

import { Suspense, useMemo, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Bounds, Center, OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import * as THREE from "three";
import { Button } from "@/components/ui/button";

type StlModelProps = {
  url: string;
  wireframe: boolean;
};

function StlModel({ url, wireframe }: StlModelProps) {
  const geometry = useLoader(STLLoader, url);

  const normalizedGeometry = useMemo(() => {
    const cloned = geometry.clone();
    cloned.computeVertexNormals();
    cloned.center();
    cloned.computeBoundingBox();
    const box = cloned.boundingBox;
    if (box) {
      const size = new THREE.Vector3();
      box.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim > 0) {
        cloned.scale(2 / maxDim, 2 / maxDim, 2 / maxDim);
      }
    }
    return cloned;
  }, [geometry]);

  return (
    <Center>
      <mesh geometry={normalizedGeometry} castShadow receiveShadow>
        <meshStandardMaterial
          color="#94a3b8"
          metalness={0.25}
          roughness={0.45}
          wireframe={wireframe}
        />
      </mesh>
    </Center>
  );
}

type StlViewerProps = {
  url: string;
  className?: string;
};

export function StlViewer({ url, className }: StlViewerProps) {
  const [wireframe, setWireframe] = useState(false);

  return (
    <div className={className}>
      <div className="mb-3 flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setWireframe((prev) => !prev)}
        >
          {wireframe ? "Solid view" : "Wireframe"}
        </Button>
      </div>
      <div className="h-[400px] w-full overflow-hidden rounded-xl border border-border bg-muted/30 sm:h-[500px]">
        <Canvas
          shadows
          camera={{ position: [3, 3, 3], fov: 45 }}
          gl={{ antialias: true }}
        >
          <color attach="background" args={["#0a0a0a"]} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
          <directionalLight position={[-3, 2, -2]} intensity={0.4} />
          <Suspense fallback={null}>
            <Bounds fit clip observe margin={1.2}>
              <StlModel url={url} wireframe={wireframe} />
            </Bounds>
          </Suspense>
          <OrbitControls makeDefault enableDamping dampingFactor={0.05} />
        </Canvas>
      </div>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Drag to rotate · Scroll to zoom · Right-click to pan
      </p>
    </div>
  );
}
