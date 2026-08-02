@AGENTS.md

# Conchem Website

## Stack
- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4

## Design Principles

- Never redesign existing UI unless explicitly requested.
- Prefer improving existing components over replacing them.
- Reuse existing components whenever possible.
- Keep sections modular.
- Mobile-first responsive design.
- Preserve desktop layouts when fixing mobile.
- Avoid unnecessary client components.
- Prefer Server Components by default.
- Use next/image for production images.
- Use the shared Container component.
- Keep typography and spacing consistent across pages.

## Workflow

- Make the smallest change necessary.
- Do not modify unrelated files.
- Run `npm run lint` after every change.
- Explain what changed.
- Stop after completing the requested task.
- Never continue into unrelated refactors.

## Git

Never run git commands automatically.
Wait for user confirmation before committing.