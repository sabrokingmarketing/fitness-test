"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Gently reveals each section's parts as they scroll into view.
 * Elements with data-reveal get their children staggered (heading, then text, then picture).
 */
export function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const groups = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
    groups.forEach((g) => Array.from(g.children).forEach((c, i) => (c as HTMLElement).style.setProperty("--i", String(i))));
    if (!("IntersectionObserver" in window)) {
      groups.forEach((g) => g.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    groups.forEach((g) => io.observe(g));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
