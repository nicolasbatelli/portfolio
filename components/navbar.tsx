"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Download, Link2, Menu } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const desktopLinks = siteConfig.nav.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-foreground",
        isActive(item.href) ? "text-foreground" : "text-muted-foreground"
      )}
    >
      {item.label}
    </Link>
  ));

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:opacity-80"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-muted-foreground">.</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">{desktopLinks}</nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] gap-0 p-0">
              <SheetHeader className="border-b border-border/50 px-6 py-5">
                <SheetTitle className="text-base font-semibold tracking-tight">
                  {siteConfig.name}
                  <span className="text-muted-foreground">.</span>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-3 py-4">
                {siteConfig.nav.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <SheetClose
                      key={item.href}
                      render={
                        <Link
                          href={item.href}
                          className={cn(
                            "relative rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors",
                            active
                              ? "bg-muted text-foreground"
                              : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                          )}
                        />
                      }
                    >
                      {active && (
                        <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-primary" />
                      )}
                      {item.label}
                    </SheetClose>
                  );
                })}
              </nav>

              <div className="mt-auto border-t border-border/50 px-6 py-5">
                <Button
                  className="w-full"
                  render={<a href={siteConfig.resume} download />}
                >
                  <Download className="size-4" />
                  Download CV
                </Button>
                <div className="mt-4 flex items-center justify-center gap-5">
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Code2 className="size-5" />
                  </Link>
                  <Link
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Link2 className="size-5" />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
