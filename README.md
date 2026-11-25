# PlanBuddy Web

React + TypeScript + Vite frontend for the shared PlanBuddy FastAPI backend. No separate backend or database.

## Prerequisites
Node 18+ and npm.

## Setup
```
cp .env.example .env     # set VITE_API_BASE_URL
npm install
npm run dev              # local dev
npm run build            # production build -> dist/
npm test                 # Vitest
```

## Structure
`src/app` (providers, routes, auth) · `src/components` (shared UI) · `src/features/*` (per module) · `src/services` (API client + endpoints) · `src/types` · `src/utils` · `src/styles` (design tokens).

## Status
- Done: scaffold, design tokens, router with protected routes, shared API client (Bearer token, normalised errors), React Query setup, Dashboard and Notifications wired to the API layer.
- TODO (marked in each stub file): Login/auth provider, Groups, Group details, Plan form/details, Polls, Checklist, Expenses, Profile/Settings, Landing/legal pages, tests.
- `demo/planbuddy-demo.html` is a standalone clickable prototype of all screens (mock data, OTP `123456`) to use as a visual and behaviour reference.

## Rules
Never hardcode the API URL; never expose secrets; follow the real OpenAPI contract (endpoint paths in `src/services/endpoints.ts` are placeholders); the backend is the source of truth for permissions, balances and poll results.

## Deployment
Serve `dist/` from any static host with SPA fallback to `index.html`. Hosting and domain to be confirmed.
