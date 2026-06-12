"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
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

  const navLinks = siteConfig.nav.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      onClick={() => setOpen(false)}
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

        <nav className="hidden items-center gap-6 md:flex">{navLinks}</nav>

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
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">{navLinks}</nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
