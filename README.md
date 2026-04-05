# CS184 Final Project Website

This repository now uses **Next.js + Nextra Docs Theme** instead of the old
single-file static template.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Current structure

- `content/index.mdx`: overview page
- `content/approach.mdx`: approach page
- `content/result.mdx`: result page
- `content/contribution.mdx`: contribution page
- `content/reference.mdx`: reference page
- `app/_components/*`: custom banner, navbar, and showcase components

## Notes

- The site uses a light beige note-paper visual system.
- The top navigator lives inside a frosted glass sticky banner and hides on downward scroll.
- The site is split into five standalone pages instead of one long scrolling homepage.
- Nextra's built-in `Playground` component is kept as a client-only demo block on the result flow.
