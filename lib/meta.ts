import type { Metadata } from "next";
import { site } from "@/content/site";

/** Builds a page's title, description and social-sharing preview in one place. */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const image = { url: "/og.jpg", width: 1200, height: 630, alt: `${site.name}: personal training and online coaching` };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      siteName: site.name,
      title,
      description,
      url: path,
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}
