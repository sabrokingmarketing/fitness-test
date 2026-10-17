import { site } from "@/content/site";

/**
 * The website's public address. Uses your domain from content/site.ts when set,
 * otherwise the address Vercel gives the project. No setup needed.
 */
export const siteUrl = site.domain
  ? `https://${site.domain.replace(/^https?:\/\//, "").replace(/\/$/, "")}`
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";
