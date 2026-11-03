# Agent instructions

## Scope and authority

- Build a local personal portfolio for recruiters, collaborators and startups.
- Current handoff is planning only. Implement when assigned the build task.
- No git push, repository creation, deployment, hosting changes or public uploads without a later explicit user request. Do not add an active deploy workflow now.
- Keep existing user work. Do not overwrite this initialization with a scaffold generator.
- Read user inputs in `README.md` before `PLAN.md`; they override stale planning assumptions. `content/profile.template.json` is a synchronized worksheet, not a competing source. Confirmed name: Nachiappan S K. Portrait: `resources/hero_image.jpg`. Résumé: `resources/Nachiappan_resume.pdf`.
- Inspect supplied portrait before cropping. Read the résumé for relevant public facts/links before asking for already-supplied details; distinguish personal projects from employer work and omit confidential details.

## Stack and cost

- Vite + vanilla TypeScript + plain CSS; static, one page, native anchors.
- No React, Tailwind, component kit, router, backend, CMS or animation library for v1.
- Keep essential text and links in semantic HTML, readable without JS.
- Small named functions; modules only for distinct behavior. No generic component/config framework.
- Read this file and PLAN.md first. Search targeted files with rg; avoid repeated repository-wide reads. Keep updates and handoff concise. Do not delegate unless requested.

## Required skills for every future builder

Read and apply all three skills (do not copy their full text into project docs):

- `design-taste-frontend`: `/home/nachiappan-senthil-kumar/.agents/skills/design-taste-frontend/SKILL.md` — implementation, responsive layout, production browser inspection and screenshot critique. Reuse the recorded direction rather than drawing again.
- `visualize:visualize`: `/home/nachiappan-senthil-kumar/.codex/plugins/cache/openai-bundled/visualize/1.0.66/skills/visualize/SKILL.md` — in-chat previews/explanations when useful; Mermaid for static structure. It does not replace the actual local site or require an extra mockup on every task use only when helpful
- `caveman`: `/home/nachiappan-senthil-kumar/.agents/skills/caveman/SKILL.md` — terse user communication; keep code, accessibility labels and portfolio copy clear and grammatical.

If a listed path moves, locate the installed skill by name. Carry these three requirements into subsequent build handoffs. Follow user instructions when skill defaults conflict with the approved brief.

## Design contract

- Use supplied portrait as dominant, full-width hero image. Place plain navigation over its top, keep ‘Backend engineer’ visibly beside portrait, and run oversized moving name across image’s lower edge. Keep name clear of face; provide static readable name, pause, and reduced-motion fallback. Adapt crop and placement for mobile.
- Then calm About with boxed photo, selected project stories and Contact.
- Exact user theme tokens: `design/tokens.css`. One font family, square photo frames, equal outer gutters, flat surfaces.
- Plain top navigation, theme switch, mobile menu. Native scrolling; slim top reading-progress indicator.
- No fake credentials, project results, clients, testimonials, stock portraits or generated likeness.
- Missing assets may use explicitly labeled local layout slots; never broken images. Missing optional links are omitted, not `href="#"`.
- No glass, gradients, resting shadows, decorative rules, icon-card grids, preloaders, scroll hijacking or custom cursor.
- Never sacrifice readability to motion. Honor reduced motion, pause control, keyboard focus and no-JS fallback.
- Required enhancements: theme, menu, reading progress, name marquee and pause. Section entrances and portrait drift remain optional; consider only after browser review.
- Use the two supplied projects and public contacts in README/worksheet. Do not wait for extra projects. Preserve team attribution for campus analytics; omit unsupplied Flash cards app URLs. Inspect project screenshots before use.

## Build and verify

- Follow PLAN.md milestones in order. Proceed through the whole local build; intermediate milestones do not require new permission.
- Install only Vite and TypeScript as dev dependencies; exact versions and npm lockfile. Keep runtime dependencies at zero.
- Scripts: `dev: vite`, `check: tsc --noEmit`, `build: tsc --noEmit && vite build`, `preview: vite preview`.
- Run check/build, inspect production preview at 1440/768/390 and sanity-check 320px. Test both themes, mobile menu, anchors, motion pause, reduced motion and all supplied links.
- Apply skill lint/inspect and screenshot critique. Record genuine limitations; never claim checks not run or suppress real layout failures.
- Handoff: changed files, preview URL, checks, remaining content. No deployment.
