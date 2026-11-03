# Portfolio revision plan

## Status and scope

Requirements updated 3 November 2026. The assigned hero/project revision is now implemented locally. Fresh production checks, screenshots, critique and limits are recorded at the top of `QA.md`; the older QA remains historical. Requirements and the sequence below remain the approved brief.

Read `AGENTS.md`, then authoritative user inputs in `README.md`, then this plan. The worksheet in `content/profile.template.json` mirrors supplied content. Keep existing work, stack, content, palette and interactions. No scaffold, dependency migration, Git push, repository creation, deployment, hosting changes or public uploads.

Audience: recruiters, collaborators and startups. Public name: **Nachiappan S K**. Role: **Backend engineer**. Primary action: **View projects**. Page order: Hero → About → Projects → Contact. No blog, skill meters, testimonials or extra routes.

## Baseline implementation and findings before revision

| File or asset | Current responsibility / finding |
| --- | --- |
| `index.html` | Semantic page content, hero picture and copy, project articles, native anchors, metadata and public links. |
| `src/styles.css` | Plain CSS, tokens, local font, responsive layout and marquee. Main revision location. |
| `src/main.ts` | Theme persistence, mobile menu, reading progress, reduced motion, explicit and offscreen marquee pause. Preserve behavior and DOM hooks. |
| `design/tokens.css` | Exact user palette for both themes; preserve values. |
| `public/images/portrait-*` | Existing optimized portrait derivatives used by both hero and About. Still based on the older portrait composition. |
| `resources/hero_image.jpg` | New authoritative hero source: 1273×955, approximately 4:3. Inspected: subject left of center, face in upper part, open background to right. |
| `resources/hero_image_2.jpg` | Existing alternate portrait: 3048×3588. Do not select it as hero merely because it is larger. |
| `resources/project_1.png`, `resources/project_2.png` | Byte-identical campus-site screenshots; one cannot represent two different products. |
| `package.json`, lockfile, `tsconfig.json` | Existing Vite 8.3.5 / TypeScript 7.0.2, exact dev dependencies, zero runtime dependencies. Reuse. |
| `QA.md`, `.taste-skill/` | Prior verification evidence and recorded direction; retain as history. |

Root causes of the supplied mobile screenshot:

- At ≤640px, `.hero-stage` uses `padding-top: 560px`; `.hero-portrait` is fixed at 560px; `.hero-copy` becomes a full-width opaque block below it. At 641–1000px, the same split uses 680px. This creates the unwanted separate introduction panel.
- `.role` is independently positioned over the portrait with an opaque background, separating it from supporting copy.
- `.name-band` has a full-width dark scrim. The header also has a broad scrim. These obscure the photo and reinforce the visual bands.
- Changing the resource file does not regenerate `public/images/portrait-*`. HTML also retains the older image dimensions.
- Campus is already one semantic article, but image and two-column story have separate visual treatment and large gaps. Flash cards uses a different filled wrapper. Both need one consistent card treatment, with each project's evidence and actions visibly contained together.

## Reference decisions

- [Dennis Snellenberg](https://dennissnellenberg.com/): portrait filling the opening stage, plain navigation over image, oversized moving name over lower image, role off the face. User clarified the “Daniel” reference with this URL. Borrow responsive composition principles, not assets, code, preloader or custom cursor.
- [Rithwik](https://www.rtwksai.com/) and its [projects page](https://www.rtwksai.com/projects): grouped project information in single containers and quiet separation between content areas. Treat “Refik Size” as this previously recorded reference unless corrected. Do not copy its technology badges, rounded outlines or framework.
- Live review on 3 November 2026: Dennis landscape screenshot shows one continuous image, unboxed role at right and transparent large-name overlay. DOM inspection confirms the portrait uses `object-fit: cover` and the hero has a viewport-related minimum height. Rithwik’s mobile projects view shows each project grouped in its own container, and its home page shows a faint horizontal content divider. Our square flat cards adapt these principles to the existing theme.
- Limitation: the attempted 390×844 override did not take effect on Dennis (reported viewport remained 1280×720); do not claim its phone crop or all responsive behavior was verified. The phone full-screen requirement remains explicit user direction. Exact responsive crop and collision checks belong to implementation QA. Reference observations do not validate our pending redesign.

Retain recorded **The name as a monument**, seed **1911319021**, Bricolage Grotesque, `.taste-skill/direction.json`. Do not redraw. Idea: Nachiappan's portrait and name establish identity; real engineering work supplies evidence below.

## Requirements

### H1 — One continuous full-screen portrait hero

- New `resources/hero_image.jpg` is the hero source. Regenerate responsive public derivatives and update HTML intrinsic dimensions/srcset together. Do not stretch or upscale a 1273px source into claimed extra detail. Keep original files intact. About may retain its existing portrait derivatives under separate names if needed; the hero refresh must not silently break About's crop or dimensions.
- Fill the opening viewport edge to edge on desktop, tablet and phone, in portrait and landscape orientations. “Full screen” describes the opening composition, not the browser Fullscreen API or a pinned scroll scene.
- Use one hero stage with photograph covering its complete area, typically `object-fit: cover` and breakpoint-specific `object-position`. The image's 4:3 source ratio must not set a 4:3 hero box. A tall phone intentionally shows a tighter crop; landscape shows more surrounding scene. Never use `contain`, letterboxing or distortion.
- Start with `min-height: 100svh` and a suitable `100vh` fallback. Allow height to grow when text enlargement, no-JS navigation or short landscape screens need room. Avoid rigid height/overflow rules that clip essential content. Account for mobile browser chrome and safe-area insets.
- Remove the 560px/680px portrait heights, padding-top spacer technique and breakpoint rules that send supporting copy below the photo. About begins after the complete hero.
- Apply a modest additional crop/zoom only if needed after browser review. `cover` already zooms considerably on a tall phone; no arbitrary scale that cuts off the head. Protect headroom, full face and recognizable shoulders. Tune the actual image rather than centering blindly.

### H2 — Bottom-right identity and supporting copy

- Keep **Backend engineer** and “I build distributed networking services, backend APIs, and infrastructure automation.” together in one compact overlay toward the bottom right at every normal viewport. Keep the static semantic name and View projects action readable within the same hero.
- “Bottom right” means the lower-right region above the marquee lane, not text flush against the viewport corner. Use shared gutters, a readable maximum width and layout space reserved for name motion and controls. Text alignment may remain left within the right-anchored block.
- Place the face higher/left of the copy through deliberate crop and placement. No header, role, description, CTA or marquee may intersect the face during resizing. On phones, copy may overlay lower torso/background while the face stays clear above it.
- Remove the opaque hero-copy panel and independent opaque role badge. Remove the full-width dark marquee background; large name sits directly over the photograph. Header should read as plain navigation over the image, not a broad opaque banner.
- Contrast must be checked on the actual photo in both themes and at every tested crop. Choose readable ink; if necessary use a small neutral flat scrim confined to text bounds. No full-width underlay, glass, gradient, shadow or replacement below-image panel.
- Keep a visible static full name and exactly one semantic `h1`. Decorative marquee duplicates remain `aria-hidden`. Preserve pause/resume, reduced-motion and no-JS static fallback. A clipped decorative name does not replace a readable name.
- Reserve separate vertical space for bottom-right copy, lower-edge marquee and pause control. Reflow/compact spacing at short heights; allow hero to grow if necessary. Never solve collisions by hiding role, description, CTA or static name, or by reducing body text below a readable size.

### P1 — One unified card per project

- Render two stacked, full-width project cards within the normal content shell. Each remains a semantic `<article>` with its existing anchor and heading association. No carousel or repeated multi-column card grid.
- All content for one project belongs inside one visually unified surface: screenshot/caption when accurate, project title, short description, contribution/features, historical outcome or implementation detail, project-site/repository links when supplied, and technologies when verified.
- Use a flat theme surface, square corners and consistent inner padding/gaps. No resting shadow or border around every nested element. Screenshot must feel part of the card, not a detached full-bleed section above it.
- Desktop/tablet with sufficient space: media and content may share a two-column card. Phone: media → title → description/contribution → available links → technologies/details. Keep all text readable and natural in DOM order. Title and links must not form a remote column disconnected from description.
- Campus analytics stays first, with its accurate campus website screenshot and Project site action inside the card. Preserve team/customer attribution and historical Bangalore Tech Summit 2022 / NIMHANS wording. Include only supplied or résumé-verified technologies.
- Flash cards uses the same outer card style and spacing. No distinct screenshot or URL is supplied: omit image and absent action; use an intentional text-only card. Never reuse campus screenshot or display broken images. Missing optional assets do not block implementation.
- Keep real links individually keyboard accessible. Do not wrap the entire article in an anchor containing other actions or make a generic clickable container.

### P2 — Soft horizontal project separators

- Add one quiet horizontal separator between adjacent project cards, aligned to content gutters, with equal breathing room above and below. A native `<hr>` is suitable; avoid a double line from adjacent card borders.
- Start with a 1px solid theme border token from `design/tokens.css`. Keep it subtle but visible in both themes; do not change palette values. The rule separates projects, not every paragraph or card component.
- This explicit user request overrides the old project prohibition on decorative rules and the design skill's general thin-rule/card defaults. Keep the exception scoped to project grouping and separation. Do not suppress unrelated inspector failures.

## Retained content and behavior

About remains calm: supplied bio and boxed photo, prose/photo split on desktop and stacked on mobile. Backend focus stays primary; AI/ML and leadership stay in About. Contact uses real email, GitHub, LinkedIn, supplied phone and résumé. No invented achievements, metrics, clients or employer details.

Public content is authoritative in README/worksheet. Campus team project: intrusion detection, person/vehicle tracking, number plate recognition and alerts; demonstrated at Bangalore Tech Summit 2022 and piloted at NIMHANS. Flash cards: multiuser decks, timed study, friend quizzes, attempt review and leaderboard; supplied stack React, Node.js, MongoDB, Jenkins, Docker, Ansible, ELK. Do not ask for already-supplied details; read résumé for facts when needed and omit confidential employer information.

Keep system-default theme with guarded persisted choice and pre-paint application, native anchors, slim reading progress, mobile disclosure with `aria-expanded`, Escape/focus behavior, and marquee pause/offscreen pause/reduced-motion behavior. Essential content and links must work without JS. No scroll hijacking, custom cursor, preloader, router, backend, animation library or runtime dependency.

Preserve exact palette, one self-hosted licensed font family, square photo frames, flat surfaces and equal gutters (approximately 20px phone / 32px desktop). Text 17–19px with readable measure; headings at most two lines. Brown accent is unsuitable for small dark-theme text: use existing accessible text/CTA pairings and verify actual contrast. No extra motion is required.

## Build sequence for the assigned implementation task

Proceed through all steps without intermediate permission prompts once the build task is assigned.

1. **Baseline.** Read all three required skills in AGENTS.md. Reuse recorded direction. Run current local site, capture hero/project before screenshots and source lint; inspect source portrait and existing assets. Preserve QA history. Use `npm ci` only if dependencies are absent; do not reinstall latest versions or regenerate the scaffold.
2. **Assets and static hero.** Generate derivatives from the new source with truthful sizes, optimized WebP/JPEG fallback, explicit dimensions and eager hero loading. Separate About assets if retained. Update `index.html` and `src/styles.css` to satisfy H1/H2 without motion first; review landscape and portrait crops. Keep existing semantic title/links and control hooks.
3. **Project cards.** Unify existing articles into P1, add P2 separator. Keep content in semantic HTML, preserve `#campus` / `#flashcards`, inspect screenshot accuracy, and keep missing Flash cards media/action omitted. No JS rendering/config framework.
4. **Enhancement regression.** Retain existing `src/main.ts` where possible. Change JS only if revised DOM requires it. Check theme/menu/progress/marquee/pause and static/reduced-motion fallbacks. Do not add optional entrances or portrait drift to solve layout problems.
5. **Production QA and handoff.** Run check/build, serve production preview, inspect all target sizes and both themes. Run skill lint/inspect and screenshot critique; record only narrowly applicable exceptions for user-required project cards/rules. Fix real overflow, collisions and contrast errors. Update QA with new evidence separately from historical results; return changed files, preview URL, checks and remaining optional content. No deployment.

```sh
npm run dev -- --host 127.0.0.1
npm run check
npm run build
npm run preview -- --host 127.0.0.1
```

Scripts remain `dev: vite`, `check: tsc --noEmit`, `build: tsc --noEmit && vite build`, `preview: vite preview`. Keep exact dev dependencies and lockfile; runtime dependencies remain zero.

## Acceptance criteria

- Review production at 1440×900 desktop, 1024×768 tablet landscape, 768×1024 tablet portrait, 390×844 phone, 844×390 phone landscape, and 320×844 narrow phone. Also resize through 640/641px and 1000/1001px to catch the former split transitions. Spot-check 200% text zoom.
- At normal target sizes, photo fills the first screen; no separate hero-copy slab or full-width marquee underlay. At short heights/enlarged text, hero may grow while photo continues behind content and controls remain reachable.
- Face and headroom survive every crop; no text/control crosses face. Role and description remain grouped lower right, separate from marquee and pause. Static name and View projects remain readable, with no page overflow. Decorative name clips only within its own lane.
- Both project cards read as complete units. Campus screenshot, title, description and Project site remain visibly grouped; Flash cards retains the same container treatment without fabricated media/actions. One soft separator is visible between cards in both themes.
- Normal text contrast ≥4.5:1; large text and meaningful controls ≥3:1 against actual photo/surface backgrounds. Keyboard focus visible; touch targets about 44px. No clipped navigation or controls.
- Check theme toggle/persistence, mobile menu open/close/Escape/focus return, all native anchors, reading progress, explicit pause/resume, offscreen pause, reduced motion, and no-JS content/links. Exercise orientation changes and resize with menu open.
- Production preview has no missing assets or console errors. Verify supplied project/contact/PDF destinations without sending messages or activating mail/phone handlers. Preserve exact LinkedIn URL if automated access is restricted; report limitation.
- Run skill source lint and production inspector; visually critique new screenshots. Record project-card/separator exceptions honestly. Historical QA passes are not revision passes.
- Image goals: hero around ≤500KB and initial transfer around ≤1MB. Target Lighthouse mobile performance/accessibility ≥90 only if measured. Report actual results and source-resolution limitation; do not promise a crisp high-density desktop image from 1273px source.

## Handoff and optional content

Implement from existing files; return preview URL only after server is actually running. Report changed files, checks performed, screenshots/critique and genuine limitations. Distinct Flash cards screenshot/URL and separate About photo remain optional. No extra projects are needed.

Required skills remain design-taste-frontend, visualize:visualize and caveman at the paths in AGENTS.md. Use visualize only when an in-chat preview/explanation helps; it does not replace the local site or require another mockup. Keep portfolio copy, code and accessibility labels grammatical.
