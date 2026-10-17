# Website project rules
The owner is not a developer. Explain everything in plain, simple English.

- Before any design or content work, read DESIGN.md (if there is one) and follow the Taste Skill (design-taste-frontend), the ui-ux-pro-max skill and the design-motion-principles skill for all animation.
- Tech: Next.js (App Router) + TypeScript + Tailwind CSS. Static site, no database, no logins, no paid services, no API keys.
- Keep all business text, contact details and brand colour in one file: content/site.ts, so it is easy to edit.
- Before finishing any task: run npm run build, fix every error, then commit and push.
- Never invent reviews, prices, awards, statistics or client names.

## South Africa essentials
- Floating WhatsApp button using https://wa.me/27XXXXXXXXX (international format, no leading 0).
- Phone numbers as tap-to-call links. Prices in Rand, written like R1 500.
- A simple Privacy Policy page that mentions POPIA.

## Quality bar (check before you finish)
- Correct at 390px, 768px and 1440px. No sideways scrolling.
- Every page has a unique title, meta description, Open Graph image and favicon. Add sitemap.xml and robots.txt.
- All text meets WCAG AA contrast. Respect prefers-reduced-motion.
- No lorem ipsum, no invented reviews, prices, awards or clients. If something is missing, add a clear TODO in content/site.ts and list it in your reply.

## Vercel-ready (our team deploys this site on Vercel)
- Never ask the owner to connect Vercel, never install the Vercel CLI and never try to deploy. Only get the site ready so deployment cannot fail.
- Standard Next.js project: package.json with "dev", "build" and "start" scripts, "engines": { "node": "22.x" }, and package-lock.json committed. Do not add vercel.json and do not use output: "export" or a custom server.
- No environment variables, API keys or secrets are needed to build or run the site. Never commit .env files.
- .gitignore includes node_modules, .next and .env*. Never commit node_modules or .next.
- File and folder names are lowercase with no spaces, and every import matches the real file name exactly (Vercel is case-sensitive).
- Images live in /public and are referenced with paths that start with /. No remote images unless allowed in next.config.
- Nothing writes files or needs a database at runtime.
- Before finishing any task: delete node_modules and .next, run npm ci, then npm run lint and npm run build with zero errors and zero type errors. Fix everything, then commit and push.
