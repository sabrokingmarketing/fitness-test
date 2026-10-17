"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Makes sure every page opens at the top.
 * - Going to a new page: jump to the top (unless the link points to a section, like /#faqs).
 * - Clicking a link to the page you are already on: glide back to the top.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  // new page: start at the top, unless the address points at a section
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  // link to the page you're already on: back to the top
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // site links handle the click themselves (so it is already "prevented"); only skip new-tab clicks
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.target === "_blank") return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin || url.hash) return;
      const here = window.location.pathname.replace(/\/$/, "") || "/";
      const there = url.pathname.replace(/\/$/, "") || "/";
      if (here !== there) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, left: 0, behavior: reduce ? "instant" : "smooth" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
