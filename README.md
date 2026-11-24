# MathDocs

A mathematics reference website built with **Next.js** (App Router, TypeScript, Tailwind CSS v4). The site language is **English**; every section ships with downloadable **PDFs in English and Russian**, generated locally and stored in `public/pdfs/`.

## Sections

Algebra · Geometry · Trigonometry · Calculus · Linear Algebra · Probability & Statistics · Number Theory · Discrete Mathematics · Differential Equations · Physics

Each section contains:

- **Theory** — core topics with formulas rendered by KaTeX, lists, and notes
- **Practice problems** — 5 problems per section (easy / medium / hard) with interactive answer & solution reveal
- **PDF downloads** — one English and one Russian PDF per section (theory + all problems with answers and solutions)

## Pages

| Route              | Description                                        |
| ------------------ | -------------------------------------------------- |
| `/`                | Hero, section cards, stats, how-it-works           |
| `/sections/[slug]` | Theory, formulas, practice problems, PDF buttons   |
| `/practice`        | All 50 problems with section/difficulty filters    |
| `/downloads`       | Table of all 20 PDFs with sizes and download links |

## Commands

```bash
npm run dev          # development server
npm run build        # production build (type-check included)
npm run start        # production server (add -- -p <port> to change port)
npm run lint         # ESLint
npm run pdfs         # regenerate all 20 PDFs from site content
npm run check:glyphs # verify DejaVu font covers every content character
```

> Note: on this machine port 3000 is used by Gitea and 3001 by another Next.js app — use e.g. `npm run start -- -p 3002`.

## Content model

All content is bilingual (`en` / `ru`) and lives in `lib/content/*.ts`:

- `lib/types.ts` — `Section`, `Topic`, `Block`, `Problem` types
- `lib/content/helpers.ts` — compact constructors (`p`, `formula`, `list`, `note`, `topic`, `prob`)
- Web pages render the English fields; formulas use LaTeX via KaTeX
- PDFs render either language; formulas use Unicode strings (DejaVu Sans covers Cyrillic + math symbols)

To add or edit material: change the section file, then run `npm run pdfs` to refresh the PDFs.

## Deploy to Vercel

The project is Vercel-ready: standard Next.js App Router, no environment variables, no external services. The 20 PDFs and the DejaVu fonts are committed to the repo, so the deployed site serves them as static assets without any build-time generation.

**Option A — Git integration (recommended):**

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js; keep the defaults (`npm run build`, output `.next`). Deploy.

**Option B — Vercel CLI:**

```bash
npx vercel        # preview deployment
npx vercel --prod # production deployment
```

Notes:

- `next/font/google` (Geist) is fetched at build time — works out of the box on Vercel.
- After editing content locally, run `npm run pdfs` and commit the refreshed PDFs before deploying.
- Node.js ≥ 20.9 is required (Vercel's default runtime is fine).

## PDF generation

`scripts/generate-pdfs.ts` (pdfkit) builds A4 documents with opencode-style blue accents, formula boxes, notes, and a full problem set with answers and solutions. Fonts are bundled in `scripts/fonts/` (DejaVu Sans). Output: `public/pdfs/<slug>-<en|ru>.pdf`.
