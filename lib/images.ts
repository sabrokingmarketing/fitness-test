import type { StaticImageData } from "next/image";
import hero from "@/public/images/hero.jpg";
import service1 from "@/public/images/service-1.jpg";
import service2 from "@/public/images/service-2.jpg";
import service3 from "@/public/images/service-3.jpg";
import service4 from "@/public/images/service-4.jpg";
import service5 from "@/public/images/service-5.jpg";
import coach from "@/public/images/coach.jpg";
import outdoor from "@/public/images/outdoor.jpg";
import stretch from "@/public/images/stretch.jpg";

/** Every photo on the site. Files live in /public/images. */
export const images = {
  hero,
  "service-1": service1,
  "service-2": service2,
  "service-3": service3,
  "service-4": service4,
  "service-5": service5,
  coach,
  outdoor,
  stretch,
} satisfies Record<string, StaticImageData>;

export type ImageKey = keyof typeof images;
