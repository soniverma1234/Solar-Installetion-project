# Sunora Clean Energy

A React, Vite, and Tailwind CSS website for Sunora Clean Energy.

## Get started

```bash
npm install
npm run dev
```

## Available checks

```bash
npm run lint
npm run build
npx tsc --noEmit
```

## Contact form

The inquiry form opens a pre-filled email draft; it does not send messages to a
server. Copy `.env.example` to `.env.local` and set `VITE_CONTACT_EMAIL` to the
inbox that should receive inquiries. Restart the development server after
changing environment variables.

## UI components

shadcn/ui is configured in `components.json`. Add components with:

```bash
npx shadcn@latest add button
```

Components are generated in `src/components/ui`, and the `@/*` import alias
points to `src/*`.
"# Solar-Installetion-project" 
