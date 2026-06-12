# Portfolio

A modern personal portfolio built with Next.js, Tailwind CSS, and shadcn/ui. Features GitHub project integration, an MDX blog, and an interactive STL 3D viewer.

## Features

- **Landing page** — Hero, About, Experience, Skills, Featured Projects, Contact
- **Projects** — Hybrid GitHub integration with per-repo overrides
- **Blog** — Filesystem MDX posts with frontmatter
- **3D Models** — Interactive STL viewer powered by Three.js / React Three Fiber
- **Dark mode** — System-aware theme toggle
- **Deploy-ready** — Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local` with your GitHub username:

```env
GITHUB_USERNAME=your-github-username
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Customization

All content lives in the `content/` folder:

| File | Purpose |
|------|---------|
| `content/site.ts` | Name, bio, links, navigation |
| `content/experience.ts` | Work history |
| `content/skills.ts` | Skill groups |
| `content/projects.ts` | Per-repo GitHub overrides |
| `content/models.ts` | 3D model metadata |
| `content/blog/*.mdx` | Blog posts |

### Adding a 3D model

1. Place your `.stl` file in `public/models/`
2. Add an entry to `content/models.ts`
3. Visit `/models` to see it in the gallery

### Adding a blog post

Create a new `.mdx` file in `content/blog/` with frontmatter:

```mdx
---
title: "My Post"
date: "2025-06-01"
summary: "A short description."
tags: ["tag1", "tag2"]
---

Your content here...
```

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Set environment variables:
   - `GITHUB_USERNAME` (required)
   - `GITHUB_TOKEN` (optional, for higher API rate limits)
   - `NEXT_PUBLIC_SITE_URL` (your Vercel domain)
4. Deploy

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)

## License

MIT
