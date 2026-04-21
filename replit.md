# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Bingo Tire & Auto Service Website (`artifacts/bingo-tires`)

Modern React + Vite website for a Northern Virginia auto repair and tire shop chain.

### Architecture
- Pure frontend (no backend), wouter routing, Tailwind CSS + shadcn/ui, framer-motion animations
- All business data in `src/lib/data.ts` (Service + Location interfaces)
- Reusable `PageHero` component (Option B: white bg, image fades from right, red pill, stats row)

### Service SEO Fields (all 14 services)
- `seoTitle` — city-specific H1 displayed in PageHero (e.g. "Brake Repair & Service in Springfield, Woodbridge & Northern Virginia, VA")
- `bodyParagraphs[]` — 2 rich paragraphs with NOVA-specific content rendered after `fullDescription`
- `cityContent` — paragraph about the 5 locations (Springfield, Woodbridge, Alexandria, Centreville, Winchester)
- `whyUs` — paragraph about why Bingo Tire, displayed in a dedicated H2 section with 3 trust pillars
- `faqs` — 5 FAQs per service with H3 question tags (rendered via FAQ accordion)

### Pages
- `/` Home, `/about`, `/services`, `/services/:slug` Service Detail
- `/auto-services`, `/tire-services` Category pages
- `/tires` New & Used Tires, `/specials`, `/contact`, `/locations`, `/locations/:id`

### Container Rule
Always use `container mx-auto px-4` — no `max-w-*` overrides on wrapper divs.

### Virginia State Inspection
Only available at Centreville & Springfield. Uses `availableAt: ["Centreville", "Springfield"]` which causes amber banner, sidebar strikethrough, and grey city chips on the service detail page.
