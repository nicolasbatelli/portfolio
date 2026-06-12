import { experience } from "@/content/experience";
import { MotionWrapper } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-muted/30 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <MotionWrapper>
          <SectionHeading
            title="Experience"
            subtitle="Where I've worked and what I've shipped."
          />
        </MotionWrapper>

        <div className="relative space-y-8">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:block" />

          {experience.map((entry, index) => (
            <MotionWrapper key={`${entry.company}-${entry.period}`} delay={index * 0.08}>
              <article className="relative md:pl-10">
                <div className="absolute left-0 top-2 hidden size-3.5 rounded-full border-2 border-primary bg-background md:block" />

                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{entry.role}</h3>
                      <p className="text-muted-foreground">{entry.company}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>{entry.period}</p>
                      {entry.location && <p>{entry.location}</p>}
                    </div>
                  </div>

                  <p className="mt-4 text-muted-foreground">{entry.description}</p>

                  <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {entry.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
