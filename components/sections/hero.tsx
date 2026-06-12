import Link from "next/link";
import { ArrowDown, Code2, Download, Mail } from "lucide-react";
import { siteConfig } from "@/content/site";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        <MotionWrapper>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Portfolio
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h1>
          <p className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
            {siteConfig.title}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {siteConfig.pitch}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" render={<Link href="/#contact" />}>
              <Mail className="size-4" />
              Get in touch
            </Button>
            <Button variant="outline" size="lg" render={<a href={siteConfig.resume} download />}>
              <Download className="size-4" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" render={<Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" />}>
              <Code2 className="size-4" />
              GitHub
            </Button>
            <Button variant="ghost" size="lg" render={<Link href="/projects" />}>
              View projects
            </Button>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.2} className="mt-20 flex justify-center">
          <Link
            href="/#about"
            className="flex flex-col items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="size-4 animate-bounce" />
          </Link>
        </MotionWrapper>
      </div>
    </section>
  );
}
