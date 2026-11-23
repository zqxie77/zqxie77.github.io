"use client";

import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "about-me", label: "About Me" },
  { id: "news", label: "News" },
  { id: "publications", label: "Publications" },
  { id: "education", label: "Education" },
  { id: "honors-and-awards", label: "Honors and Awards" },
  { id: "service", label: "Academic Service" },
] as const;

/** How many links stay visible next to the hamburger on small screens. */
const MOBILE_VISIBLE = 3;

function useActiveSection() {
  const [active, setActive] = useState<string>(NAV_ITEMS[0].id);

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Masthead() {
  const active = useActiveSection();

  const linkClass = (id: string) =>
    cn(
      "whitespace-nowrap text-subtle transition-colors hover:text-[#2f3437]",
      active === id && "text-text",
    );

  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-white">
      <div className="mx-auto flex h-12 max-w-[1280px] items-center px-4">
        <a
          href="#about-me"
          className="mr-8 hidden font-bold text-subtle hover:text-[#2f3437] md:block"
        >
          Homepage
        </a>

        <nav
          aria-label="Sections"
          className="flex min-w-0 flex-1 items-center gap-x-7 text-[0.93rem]"
        >
          {NAV_ITEMS.map(({ id, label }, i) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={cn(linkClass(id), i >= MOBILE_VISIBLE && "hidden md:block")}
            >
              {label}
            </a>
          ))}
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label="More sections"
            className="ml-3 flex size-9 shrink-0 items-center justify-center rounded-md bg-text text-white outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:hidden"
          >
            <MenuIcon className="size-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {NAV_ITEMS.slice(MOBILE_VISIBLE).map(({ id, label }) => (
              <DropdownMenuItem
                key={id}
                render={<a href={`#${id}`} />}
                className="px-3 py-2 text-[0.93rem]"
              >
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
