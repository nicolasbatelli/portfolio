import { Car, MapPin, Printer } from "lucide-react";
import { siteConfig } from "@/content/site";
import { MotionWrapper } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <MotionWrapper>
          <SectionHeading
            title="About"
            subtitle="A bit about who I am and what I do."
          />
        </MotionWrapper>

        <MotionWrapper delay={0.1}>
          <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {siteConfig.bio}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {siteConfig.interests}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold">Quick facts</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin className="size-4 shrink-0" />
                  {siteConfig.location}
                </li>
                <li>
                  <span className="font-medium text-foreground">Focus:</span>{" "}
                  .NET, React, microservices &amp; cloud architecture
                </li>
                <li>
                  <span className="font-medium text-foreground">Experience:</span>{" "}
                  8+ years full-stack engineering
                </li>
                <li className="flex items-start gap-2">
                  <Printer className="mt-0.5 size-4 shrink-0" />
                  3D design &amp; printing (Inventor · Ender 3 V2 · Bambu Lab A1)
                </li>
                <li className="flex items-start gap-2">
                  <Car className="mt-0.5 size-4 shrink-0" />
                  Car builds: VW Touareg V8 (off-road) &amp; GR86 (track)
                </li>
                <li>
                  <span className="font-medium text-foreground">Languages:</span>{" "}
                  Spanish (native), English (B2), German (A2)
                </li>
              </ul>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
