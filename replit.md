# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- Monorepo tool: pnpm workspaces
- Node.js version: 24
- Package manager: pnpm
- TypeScript version: 5.9
- Website framework: Next.js 15 App Router
- Styling: Tailwind CSS v4 and shadcn/ui

## Key Commands

- `pnpm run typecheck` - full typecheck across all packages
- `pnpm run build` - typecheck and build all packages
- `pnpm --filter @workspace/damas-auto-repair run typecheck` - typecheck the Damas website
- `pnpm --filter @workspace/damas-auto-repair run build` - build and export the Damas website

## Damas Auto Repair Website (`artifacts/damas-auto-repair`)

Static Next.js website for Damas Auto Repair in Chantilly, Virginia.

Business focus:

- Business name: Damas Auto Repair
- Address: 25358 Pleasant Valley Rd #120, Chantilly, VA 20152
- Primary market: Chantilly and nearby Northern Virginia drivers
- Core services: diagnostics, brake repair, oil changes, wheel alignment, steering and suspension, batteries, belts and hoses, tire rotation, tire balancing, and Virginia inspection support

Architecture:

- Pure frontend, no backend
- Next.js 15 App Router
- Static export to `out/`
- Business data centralized in `src/lib/data.ts`
- Shared hero component in `src/components/layout/page-hero.tsx`

Implementation notes:

- Keep copy focused on Damas Auto Repair, the Chantilly address, and auto repair services.
- Do not reintroduce former brand names, former branch addresses, or multi-location chain language.
- The repo currently keeps generated output under `out/`, so rebuild after source changes before publishing.
- On Windows, `pnpm-workspace.yaml` must allow the native `win32-x64-msvc` packages used by Next/Tailwind dependencies.
