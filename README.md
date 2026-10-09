================================================================================
HIK HIK — DEVELOPER PORTFOLIO
================================================================================

[Buy Me a Coffee](https://www.buymeacoffee.com/hik8hik)
[Patreon](https://www.patreon.com/hik8hik)

A modern, animated developer portfolio built with Next.js 15, TypeScript,
Tailwind CSS and shadcn/ui, and deployed as a static site to GitHub Pages.

Live site: https://hik8hik.github.io

--------------------------------------------------------------------------------
TABLE OF CONTENTS
--------------------------------------------------------------------------------

  - About
  - Tech Stack
  - Features
  - Project Structure
  - Getting Started
  - Environment Variables
  - Contact Form Setup
  - Content Customisation
  - Building & Deploying
  - Automated Deployment (GitHub Actions)
  - Contributing
  - License
  - Contact

--------------------------------------------------------------------------------
ABOUT
--------------------------------------------------------------------------------

This portfolio is my personal corner of the web — a place to showcase the
products I've built, the stack I work with, and how to get in touch. It focuses
on clean design, smooth motion, accessibility, and a frictionless contact
experience.

The site is fully static (exported to HTML/CSS/JS at build time) and served
from GitHub Pages, so it loads instantly and costs nothing to host.

--------------------------------------------------------------------------------
TECH STACK
--------------------------------------------------------------------------------

Framework & language
  - Next.js 15        — App Router, static export
  - React 19
  - TypeScript 5

Styling & UI
  - Tailwind CSS 3    — utility-first styling
  - shadcn/ui         — accessible Radix-based component primitives
  - tailwindcss-animate
  - Lucide            — icon set

Motion & interaction
  - Framer Motion     — page transitions, stagger effects
  - Swiper            — project carousel
  - react-countup     — animated stats

Theming & tooling
  - next-themes       — light / dark / system
  - ESLint 9 (flat config) + next/core-web-vitals + next/typescript
  - Husky + lint-staged — pre-commit linting
  - gh-pages          — deployment helper

Contact form
  - Formspree         — serverless form submission (static hosting friendly)

--------------------------------------------------------------------------------
FEATURES
--------------------------------------------------------------------------------

  - Static export — deploys anywhere, no server required
  - Responsive layout — mobile-first, tuned for tablets and large desktops
  - Animated page transitions — staircase wipe + fade using Framer Motion
  - Particle background — subtle canvas particles that respect the active theme
  - Light / dark / system theme — with hydration-safe toggle
  - Project showcase — frontend and backend stacks displayed separately,
    live previews via iframe
  - Working contact form — submits to my inbox via Formspree, with a mailto:
    fallback
  - Accessible — semantic landmarks, aria-labels, rel="noreferrer" on
    external links, focus states
  - SEO-ready — metadata, OpenGraph tags, canonical URL, theme-colour for
    mobile chrome
  - Pre-commit quality gates — ESLint on staged files, strict type-check at
    build time

--------------------------------------------------------------------------------
PROJECT STRUCTURE
--------------------------------------------------------------------------------

.
├── app/
│   ├── layout.tsx                # Root layout, metadata, theme provider
│   ├── page.tsx                  # Home / hero
│   ├── globals.css               # Tailwind layers + custom utilities
│   ├── contact/page.tsx          # Contact form (Formspree-backed)
│   ├── resume/page.tsx           # Tabbed resume
│   ├── services/page.tsx         # Services grid
│   ├── work/page.tsx             # Project carousel
│   └── data/
│       └── data.tsx              # Single source of truth for all content
├── components/
│   ├── Header.tsx                # Site header (desktop + mobile nav)
│   ├── MobileNav.tsx             # Slide-out sheet nav
│   ├── Nav.tsx                   # Desktop nav links
│   ├── PageTransition.tsx        # Fade-out overlay on route change
│   ├── ThinkTypeTransition.tsx   # Staircase wipe intro
│   ├── ThinkType.tsx             # The staircase bars themselves
│   ├── Photo.tsx                 # Hero portrait with animated ring
│   ├── Social.tsx                # Social icon list
│   ├── Stats.tsx                 # Animated count-up stats
│   ├── WorkSliderButtons.tsx     # Swiper prev/next controls
│   ├── theme-provider.tsx        # next-themes wrapper
│   ├── themeToggle.tsx           # Light / dark / system toggle
│   ├── effects/
│   │   └── ParticleBackground.tsx
│   └── ui/                       # shadcn/ui primitives
│       ├── button.tsx
│       ├── input.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── sheet.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       └── tooltip.tsx
├── lib/
│   └── utils.ts                  # cn() helper
├── public/
│   ├── assets/                   # Images, SVG, work thumbnails, resume icons
│   └── files/                    # Downloadable CV (03c22v.pdf)
├── .github/workflows/deploy.yml  # (optional) CI auto-deploy to gh-pages
├── next.config.ts                # Static export, unoptimised images,
│                                 #   strict builds
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── components.json               # shadcn/ui config
├── eslint.config.mjs             # ESLint 9 flat config
├── .env.example                  # Documented env vars
└── package.json

--------------------------------------------------------------------------------
GETTING STARTED
--------------------------------------------------------------------------------

Prerequisites
  - Node.js 20+  (https://nodejs.org/)
  - npm (or yarn / pnpm — pick one and stick with it)

Installation

  git clone https://github.com/hik8hik/hik8hik.github.io.git
  cd hik8hik.github.io
  npm install

Run the dev server

  npm run dev

Then open http://localhost:3000

Lint

  npm run lint

--------------------------------------------------------------------------------
ENVIRONMENT VARIABLES
--------------------------------------------------------------------------------

The only environment variable this project needs is the Formspree form ID
used by the contact page.

Copy the template:

  cp .env.example .env.local

Then edit .env.local:

  NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here

If this variable is empty at build time, the contact form silently falls back
to opening the visitor's mail client with a prefilled message addressed to
hik8hik@gmail.com. Nothing breaks — you just get a slightly less polished UX.

--------------------------------------------------------------------------------
CONTACT FORM SETUP
--------------------------------------------------------------------------------

  1. Sign up for a free account at https://formspree.io using
     hik8hik@gmail.com.

  2. Create a new form and set its recipient to hik8hik@gmail.com.

  3. Copy the form ID — the part after /f/ in your endpoint, e.g.
     https://formspree.io/f/abcdwxyz  →  abcdwxyz

  4. Put that ID in .env.local as NEXT_PUBLIC_FORMSPREE_ID.

  5. For CI builds, add the same value as a GitHub Actions secret named
     NEXT_PUBLIC_FORMSPREE_ID (see below).

The free tier covers 50 submissions per month, which is more than enough for a
personal portfolio.

--------------------------------------------------------------------------------
CONTENT CUSTOMISATION
--------------------------------------------------------------------------------

All text, links, projects, skills and contact details live in a single file:

  app/data/data.tsx

This exports:

  Export        Used by                       What it controls
  ------------------------------------------------------------------------
  services      /services                     Service cards
  about         /resume (About tab)           Personal info list
  experience    /resume (Experience tab)      Jobs
  education     /resume (Education tab)       Degrees & certifications
  skills        /resume (Skills tab)          Skill categories
  projects      /work, home                   Project entries
  info          /contact                      Contact channels

Adding or editing a project
Each entry in projects looks like this:

  {
    num: "01",
    title: "Sniffle",
    category: "fullstack",          // "fullstack" | "frontend" | "backend" | "mobile"
    description: "Short pitch.",
    frontend: [
      { name: "Next.js", usage: "Framework" },
      { name: "TypeScript", usage: "Language" },
    ],
    backend: [
      { name: "Node.js", usage: "Runtime" },
      { name: "REST API", usage: "Interface" },
    ],
    image: "assets/work/thumb1.png", // fallback if no `link`
    link: "https://example.com",     // optional — live iframe preview
    github: "https://github.com/...",// main repo (frontend or monorepo)
    backendGithub: "https://github.com/...", // optional — extra GitHub button
  }

Drop the thumbnail in public/assets/work/ and reference it as
assets/work/your-file.png (no leading slash).

Swapping the CV
Replace public/files/03c22v.pdf with your updated file, keeping the same
filename — or update the link in app/page.tsx.

--------------------------------------------------------------------------------
BUILDING & DEPLOYING
--------------------------------------------------------------------------------

Build a static export locally

  npm run build

This runs NEXT_PUBLIC_OUTPUT=export next build and emits the full site into
out/.

Preview the built site:

  npx serve out

Deploy to GitHub Pages

  npm run deploy

This runs gh-pages -d out, which pushes the contents of out/ to the gh-pages
branch of your repository. GitHub Pages picks it up within a minute or two.

NOTE: GitHub Pages for this repo is configured to build from the gh-pages
branch. Pushing only to main will NOT update the live site — the build must be
deployed.

Hard-refresh (Ctrl+Shift+R) your live URL after a minute to bypass the browser
cache.

--------------------------------------------------------------------------------
AUTOMATED DEPLOYMENT (GITHUB ACTIONS)
--------------------------------------------------------------------------------

To have pushes to main automatically build and deploy, add this workflow at
.github/workflows/deploy.yml:

  name: Deploy to GitHub Pages

  on:
    push:
      branches: [main]
    workflow_dispatch:

  permissions:
    contents: write

  jobs:
    build-and-deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4

        - uses: actions/setup-node@v4
          with:
            node-version: 20
            cache: npm

        - run: npm ci

        - name: Build
          run: npm run build
          env:
            NEXT_PUBLIC_OUTPUT: export
            NEXT_PUBLIC_FORMSPREE_ID: ${{ secrets.NEXT_PUBLIC_FORMSPREE_ID }}

        - name: Deploy
          uses: JamesIves/github-pages-deploy-action@v4
          with:
            folder: out
            branch: gh-pages
            clean: true

Then add the secret:

  GitHub → Settings → Secrets and variables → Actions → New repository secret

  Name:  NEXT_PUBLIC_FORMSPREE_ID
  Value: your Formspree form ID

After this, every push to main triggers a build and refreshes
https://hik8hik.github.io/ automatically. You can watch progress under the
Actions tab.

--------------------------------------------------------------------------------
CONTRIBUTING
--------------------------------------------------------------------------------

Contributions, issues and suggestions are welcome. Please read CONTRIBUTING.md
before opening a pull request.

Quick version:

  1. Fork the repo
  2. Create a feature branch: git checkout -b feature/your-feature
  3. Commit using conventional-commit format: feat(scope): subject
  4. Push and open a PR

--------------------------------------------------------------------------------
LICENSE
--------------------------------------------------------------------------------

Released under the MIT License. See LICENSE for details.

--------------------------------------------------------------------------------
CONTACT
--------------------------------------------------------------------------------

  Email:     hik8hik@gmail.com
  GitHub:    https://github.com/hik8hik
  LinkedIn:  https://www.linkedin.com/in/hik8hik
  Twitter/X: https://x.com/hik_8_hik

If you found this portfolio useful as inspiration, a coffee or a star is
always appreciated:

  Buy Me a Coffee: https://www.buymeacoffee.com/hik8hik
  Patreon:         https://www.patreon.com/hik8hik

================================================================================
