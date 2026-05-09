# Rushikesh Pawar — Portfolio

Personal portfolio site, built with Next.js 15 (App Router) and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing your content

All content lives in `content/`:

- `site.ts` — name, role, tagline, contact links
- `experience.ts` — work history (FEV, Compserv)
- `education.ts` — Northeastern, CDAC, KIT
- `projects.ts` — case studies / featured work
- `publications.ts` — peer-reviewed papers
- `skills.ts` — grouped skills
- `posts.ts` — blog posts

Edit a file, save, and the dev server hot-reloads.

## Adding your resume

Drop a PDF at `public/resume.pdf`. The "Resume" buttons on the site link to it.

## Adding a headshot (optional)

If you'd like a photo in the hero or about section, drop it at `public/headshot.jpg` (square, ~600×600 recommended) and tell me where to render it.

## Deployment

The simplest path is Vercel:

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js and ships it.

For a custom domain, point your DNS at Vercel's nameservers and add the domain in the Vercel project settings.

## Tech

- Next.js 15 (App Router) + React 18
- Tailwind CSS 3
- TypeScript (strict)
- `lucide-react` for icons
- `framer-motion` available for richer animations (currently using CSS keyframes)
