"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { speakHref } from "@/lib/contact";
import { site } from "@/content/site";

const links = [
  { href: "/programmes", label: "Programmes" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/about", label: "Meet your coach" },
  { href: "/#faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  // the menu remembers which page it was opened on, so it closes itself when the page changes
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (v: boolean | ((o: boolean) => boolean)) =>
    setOpenOn((typeof v === "function" ? v(open) : v) ? pathname : null);
  const external = speakHref.startsWith("http");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-ground">
      <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name}, home`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="relative py-2 text-[0.975rem] font-medium text-ink transition-colors duration-150 hover:text-primary-text aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-0 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-[3px] aria-[current=page]:after:bg-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={speakHref}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="btn btn-sm hidden sm:inline-flex"
          >
            {site.hero.secondaryButton}
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 h-[3px] w-6 bg-ink transition-transform duration-200 ease-out ${open ? "top-[6.5px] rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-[6.5px] h-[3px] w-4 bg-primary transition-opacity duration-150 ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-[3px] w-6 bg-ink transition-transform duration-200 ease-out ${open ? "top-[6.5px] -rotate-45" : "top-[13px]"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="mobile-menu fixed inset-x-0 top-[var(--header-h)] bottom-0 overflow-y-auto bg-ground lg:hidden"
      >
        <nav aria-label="Mobile" className="wrap flex min-h-full flex-col pt-6 pb-10">
          <ul className="flex flex-col">
            {links.map((l, i) => (
              <li key={l.href} style={{ ["--i" as string]: i }}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="block py-3.5 text-[1.75rem] font-semibold tracking-[-0.02em] text-ink aria-[current=page]:text-primary-text"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={speakHref}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="btn mt-8 self-start"
          >
            {site.hero.secondaryButton}
          </a>
        </nav>
      </div>
    </header>
  );
}
