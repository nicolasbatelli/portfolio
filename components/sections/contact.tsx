import Link from "next/link";
import { Code2, Link2, Mail } from "lucide-react";
import { siteConfig } from "@/content/site";
import { MotionWrapper } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    description: siteConfig.email,
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: Code2,
    description: "View my repositories",
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Link2,
    description: "Connect professionally",
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <MotionWrapper>
          <SectionHeading
            title="Contact"
            subtitle="Interested in working together? I'd love to hear from you."
          />
        </MotionWrapper>

        <MotionWrapper delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map(({ label, href, icon: Icon, description }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30 hover:bg-muted/50"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <p className="font-medium">{label}</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80">
                    {description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" render={<Link href={`mailto:${siteConfig.email}`} />}>
              <Mail className="size-4" />
              Send me an email
            </Button>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
