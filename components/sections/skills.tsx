import { skills } from "@/content/skills";
import { MotionWrapper } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <MotionWrapper>
          <SectionHeading
            title="Skills"
            subtitle="Technologies and tools I work with."
          />
        </MotionWrapper>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, index) => (
            <MotionWrapper key={group.category} delay={index * 0.08}>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
