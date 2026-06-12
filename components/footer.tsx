import Link from "next/link";
import { AtSign, Code2, Link2 } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { href: siteConfig.links.github, icon: Code2, label: "GitHub" },
  { href: siteConfig.links.linkedin, icon: Link2, label: "LinkedIn" },
  { href: `mailto:${siteConfig.email}`, icon: AtSign, label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 sm:px-6">
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-5" />
            </Link>
          ))}
        </div>
        <Separator className="max-w-xs" />
        <p className="text-center text-sm text-muted-foreground">
          &copy; {year} {siteConfig.name}. Built with Next.js &amp; deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
