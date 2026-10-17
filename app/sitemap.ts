import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/programmes", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy-policy", priority: 0.3 },
  ];
  return pages.map((p) => ({
    url: `${siteUrl}${p.path}`,
    lastModified: new Date("2026-10-17"),
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
