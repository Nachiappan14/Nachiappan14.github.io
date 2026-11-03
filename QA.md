# Deployment preparation — 3 November 2026

- User authorized commit, repository creation, push and GitHub Pages deployment.
- Target: `Nachiappan14/Nachiappan14.github.io`, using the existing `master` branch.
- Fresh `npm run check` and `npm run build` passed on Node 22.13.0. No UI changes made for deployment.
- Added a SHA-pinned Actions build/deploy workflow following Vite's official Pages guide. Only `dist/` is uploaded as the Pages artifact.
- GitHub connector identifies `Nachiappan14`; accessible repository list contains only unrelated `resume-preparation`. Connector has no repository-creation or Pages-settings tools. Local `gh auth status` reports signed out; no Git remote exists.
- Public deployment and live-site verification remain pending authentication. Prior visual QA below describes the unchanged UI, not a deployed site.

# Local build verification

## Current revision — continuous hero and unified project cards

Completed locally on 3 November 2026. Preview: http://127.0.0.1:4173/?revision=ready. No deployment, push, upload, dependency upgrade or hosting change.

### Changed files and result

- `index.html`: new truthful 1273×955 hero sources; grouped role/description; two unified semantic project articles; one native separator. Original About image and all supplied content/links retained.
- `src/styles.css`: one grid hero covering at least 100svh, bottom-right copy, transparent marquee lane, text-local contrast backing, responsive focal points, compact narrow headers and short-landscape growth. No 560/680px split, below-photo copy panel, broad header banner, opaque role badge or marquee underlay.
- `public/images/hero-{640,1273}.{webp,jpg}`: regenerated from the selected 4:3 image; no upscaling. Old portrait derivatives preserved for About.
- `README.md`, `PLAN.md`, `QA.md`: implementation status and new evidence. User edits to AGENTS.md and the worksheet preserved. `src/main.ts`, palette, lockfile and dependency versions unchanged.

Direction retained: **The name as a monument**, seed **1911319021**, no redraw. Idea: Nachiappan's real portrait and moving name establish identity; actual engineering work provides proof. The native project index remains the live interaction. Required design-taste-frontend, visualize and caveman guidance retained; no extra in-chat mockup was needed. No stock/generated photos or invented project media.

### Current verification

- `npm run check`, `npm run build`, skill source lint and `git diff --check`: passed. Source lint **0 FAIL / 0 WARN**, with source comments limited to the user-required project separator and the 100vh fallback immediately followed by 100svh.
- Production light theme: 1440×900, 1024×768 and 768×1024 in `.taste-skill/revision-final-desktop/`: **0 FAIL / 3 WARN**. 390×844, 844×390 and 320×844 in `.taste-skill/revision-final-phones/`: **0 FAIL / 2 WARN**.
- Production dark theme + reduced motion, all six sizes: `.taste-skill/revision-dark-reduced/`: **0 FAIL / 2 WARN**. Marquee is static and pause control hidden; essential content remains visible.
- Production with JavaScript disabled, 390×844, 844×390 and 320×844: `.taste-skill/revision-no-js/`: **0 FAIL / 2 WARN**. Native navigation is visible at the right, clear of the face; static identity, role, description, CTA and full page content remain available.
- New hero folds and project/page screenshot sheets reviewed in both themes. No actual overflow, clipped controls, face/copy/name collisions or detached project content at required sizes. Separator remains soft and visible in both themes. In short landscape the hero grows to about 601px, keeping the photograph behind all content; the name and pause remain reachable by native scrolling.
- In-app resize through 640→641 and 1000→1001: continuous photo/copy layout, no overflow; menu resets when crossing its mobile breakpoint. At 641px copy bottom 669.7px / name top 681.7px within an 844px hero. At 1000/1001px, copy bottom ≈538.6px / name top ≈550.6px within a 768px hero. Rotating 390×844→844×390 with menu open closes it and preserves copy/name separation.
- Final menu keyboard Enter/Escape and focus return; pause/resume with `aria-pressed` and computed paused animation; offscreen pause; View projects / Flash cards anchors; changing reading-progress transform; light/dark theme switch and persisted dark choice after reload: exercised. Console error/warning log was empty. Mail and phone handlers were not activated.
- Enlarged-text spot check: isolated temporary copy with **all font-size declarations doubled**, tested at 1440×900. Body 36px, role 56px, hero grows to 1434.75px; copy bottom 889.95px, marquee top 901.95px; no horizontal overflow or face obstruction. This is text-size emulation, not a claimed native browser zoom test (Ctrl+= did not change browser metrics). Production CSS was not modified by the test. An additional 720×450 compact-landscape collision was fixed by increasing the reserved face space, while retaining the continuous photograph.
- Current public destinations: project site and GitHub HTTP 200; local page, hero and résumé HTTP 200. LinkedIn blocks automated requests with HTTP 999; exact supplied URL retained. Email and `tel:8300843618` match the brief.
- Inspector helper copy only adds accurate heights for landscape/narrow viewports; its rules remain unchanged. Before screenshots reconstructed from unchanged HEAD implementation in an isolated temporary directory are in `.taste-skill/revision-before/`. Initial preview was not running; the temporary baseline server was started for those captures. A longer light-theme inspector process ended early, so its successful final checks were split into desktop/tablet and phone reports above.

### Contrast, warnings and scoped exceptions

- Focus rings on photo controls are inset into their known contrasting backing; CTA uses dark focus ink inside its light fill. This focus-only refinement was checked manually after the normal-layout captures.
- Exact palette preserved. Photo-local cream text uses a 76% neutral dark backing limited to actual text groups/controls, never a full-width banner or name underlay. Even over a white photo pixel the calculated contrast is **7.94:1**. Normal prose remains primary ink on theme surfaces.
- The transparent moving name uses the theme's primary ink with the opposite ground as a narrow glyph outline (3px desktop / 2px phone), preserving readability over both shirt and floor without a rectangular underlay. Light ink/outline pair contrast is **14.11:1**; its best glyph boundary against any backdrop is at least **3.76:1**. Dark-theme pair is likewise above the large-text threshold. The outline is contrast protection, not a shadow.
- Inspector allowances remain `few-pictures,still-page,palette-cream,eyebrow`, for the previously approved honest imagery/motion/palette and decorative-name heuristic. Added `hairline` applies only to the **single requested project separator**, using unchanged `--border`; both cards use the requested flat square surface. No unrelated rules/borders added or hidden.
- Unsuppressed warnings: `small-title` (24px static h1 accompanies the much larger decorative signature); `no-footage` (no supplied video); light-only `grey-body` (probe selects cream hero text and compares it to the page's cream ground instead of its photo-local backing). The backing's worst-case contrast is measured above; actual body prose is not grey-on-cream.

### Screenshot critique

ROUND 1
Seen in one second: real portrait over a continuous opening photograph.
Idea: name and portrait are the opening signature.
Live thing: native project-story index.
Layout words: hero=full photo / about=boxed portrait split / projects=stacked unified cards / contact=compact split.
Scores: design 6.5 · usability 7 · creativity 7 · content 8 → arithmetic 6.9; raw inspector failure cap 6.0.
Top problems: portrait phones selected the small 640px source; short landscape showed a 248px blank section gap; transparent name's contrast needed a theme-aware fill/outline. Fixed cover-aware sizes, shorter landscape spacing and glyph contrast.

ROUND 2
Seen in one second: portrait, role and name.
Scores: design 6.5 · usability 7 · creativity 7 · content 8 → 6.9.
Top problems: in-app 320px header wrapped over hair; extra 720×450 landscape placed identity over the face; full-copy contrast panel was larger than necessary. Fixed narrow control padding, reserved face space for compact landscape, and split backing into text bounds with grouped role/description.

ROUND 3 — final
Seen in one second: real portrait and oversized name, followed by backend focus.
Idea: the supplied portrait and name establish identity; grouped project evidence follows.
Live thing: native project-story index, phone and keyboard usable.
Layout words: hero=full photo / about=boxed portrait split / projects=stacked unified cards / contact=compact split.
Scores: design 6.5 · usability 9 · creativity 7 · content 8 → **7.5**.
Caps applied: three honest images cap design at 6.5 under the generic skill rubric; the intentionally familiar reference approach caps creativity at 7. User-required project cards/separator are explicit exceptions.
Remaining visual limits: large desktop source looks softer because the selected photo is only 1273px wide; the campus screenshot is its project website rather than a close product interface; Flash cards has no distinct supplied screenshot. No fabricated replacements added. No remaining actual layout defect found in the required final views.

### Limits and optional content

Hero WebP: **68,686 bytes at 1273×955**, **28,034 bytes at 640×480**. JPEG fallbacks: 120,462 and 41,705 bytes. All are below the 500KB image goal. Portrait-phone source selection verified as `hero-1273.webp`. No crisp high-density desktop detail is claimed beyond the source resolution. Lighthouse scores and cold throttled initial transfer were not measured. Distinct Flash cards screenshot/URL remain optional; nothing blocks local review.

## Historical verification below

> Historical baseline only. The 3 November 2026 full-screen 4:3 hero / bottom-right copy / unified project cards / soft separators revision is pending in PLAN.md. Results below cover the previous public portrait derivatives and split mobile/tablet hero, not the new requirements. Add fresh evidence after implementation; do not reuse these passes as revision validation.

Verified 3 November 2026. Local only; no push, repository creation, deployment, hosting changes, or public uploads.

## Deliverable

- `index.html`: semantic one-page content, metadata, anchors, résumé and public links.
- `src/styles.css`: responsive layout, original tokens, licensed local font, both themes, marquee and static fallbacks.
- `src/main.ts`: theme persistence, mobile disclosure, reading progress, marquee pause/resume and offscreen pause.
- `package.json`, `package-lock.json`, `tsconfig.json`: Vite 8.3.5 + TypeScript 7.0.2, exact development dependencies; no runtime dependencies. Package engines checked against Node 22.13.0.
- `public/`: optimized supplied portrait in three WebP sizes with JPEG fallback, campus screenshot in WebP/PNG, original résumé, font and OFL license.
- `README.md`, `.gitignore`, this record, and local `.taste-skill/` reports/screenshots.

Preview: http://127.0.0.1:4173/?review=portrait-final (`npm run preview -- --host 127.0.0.1`).

## Content and direction

Retained **The name as a monument**, seed **1911319021**. No redraw. During implementation the user updated the hero brief in AGENTS.md/PLAN.md and requested visual inspection of the open Dennis Snellenberg reference. The live site was inspected in the in-app browser. The final hero uses a full-width portrait, plain navigation over its top, a visible role beside the portrait, and the moving name over its lower edge. Neutral flat scrims protect text against the supplied bright photo; no blur or gradient. At tablet/phone widths the supporting copy moves below the image to keep the face clear. Idea: Nachiappan's own portrait and name form the opening signature; real work supplies the evidence below. The live interaction is the short project index linking to visible project stories with native anchors.

Subject inventory: Nachiappan S K; teal-kurta portrait; backend engineering; OCI distributed networking; infrastructure automation; production ownership; Python/PyTorch research; IIIT Bangalore leadership; Sahasraaksha team/customer collaboration; Bangalore Tech Summit 2022; NIMHANS pilot; shared Flash cards study sessions.

Page argument follows the approved plan: identity and backend focus → supplied portrait/bio; engineering ownership → readable About and résumé; project capability → two supplied stories and campus project-site screenshot; collaboration → real contacts.

Résumé read before implementation. Detailed internal employer architecture, access-control findings, and operational counts were not repeated in portfolio copy. Original résumé is linked as supplied. The duplicate screenshots were inspected: both depict Sahasraaksha's website, so only campus analytics uses the image. It is captioned as a project website, not a product interface. Flash cards has no image or unsupplied URL. No invented content or metrics; no stock/generated assets or substitute likeness. No found photos/clips requiring attribution. Bricolage Grotesque regular/bold downloaded from Google Fonts, converted to WOFF2; redistribution license in `public/fonts/OFL.txt`.

## Checks

- `npm run check`: passed.
- `npm run build`: passed; final generated CSS ≈10 KB, JS ≈3 KB before gzip. `public/` assets total 984 KB. The largest hero WebP is 131,006 bytes; the 1280px version is 78,392 bytes and 640px version is 32,912 bytes, below the 500 KB hero goal. Lighthouse is not installed; performance/accessibility scores and a throttled total-transfer measurement were not run or claimed.
- Skill source lint: **0 FAIL, 0 WARN**.
- Production inspector, light theme: **0 FAIL, 2 WARN**, after the explicit exceptions below. Widths: 1440×900, 768×1024, 390×844. Report/screenshots: `.taste-skill/portrait-final/`.
- Production inspector, system dark theme + reduced motion: **0 FAIL, 2 WARN**, same widths and exceptions. Report/screenshots: `.taste-skill/portrait-dark-reduced/`. Static name, hidden motion control, visible content in reduced-motion screenshots.
- JavaScript disabled in Chromium at 390×844 and 320×844: **0 FAIL, 1 WARN**. Static title/name, visible navigation links, complete content, images and native links remain available; inactive enhancement buttons are hidden. Report/screenshots: `.taste-skill/portrait-no-js/`.
- Final light/dark screenshot sheets reviewed at all three widths. No headline over two lines, overflow, contrast, or collision findings from the final inspectors.
- Narrow-phone checks use 320×844, with visible role and CTA, no horizontal overflow, and semantic headings at most two lines. Interactive result: **0 FAIL, 1 WARN** (small static title). The skill's default 320px viewport was only 200px tall and flagged normal spacing. A temporary inspector copy changes only that height mapping to 844px (plus absolute helper import paths), leaving its rules unchanged. Current no-JS evidence is in `.taste-skill/portrait-no-js/`; interactive evidence is in `.taste-skill/portrait-320/`.
- In-app interactions: theme switching and persisted choice; mobile menu open/close; keyboard Tab into menu; Escape closes and returns focus; selecting About closes menu; native View projects and project-story jumps; reading-progress transform changes; pause button sets `aria-pressed=true` and pauses animation; resume restores the label; offscreen marquee pauses.
- Menu Enter/Escape, both theme switches, and pause/resume were repeated at 390×844 on the final revised hero. Temporary viewport overrides were reset afterward.
- Current in-app browser error/warning log: empty.
- Contact destinations audited: email and `tel:8300843618` match supplied inputs and PLAN.md's exact-display instruction. Mail/phone handlers were not activated. Project site, GitHub and local résumé returned HTTP 200. LinkedIn returned HTTP 999 to automated access, so its live profile cannot be independently confirmed; exact supplied URL retained.

## Inspector exceptions

The approved brief takes priority over the skill's general quotas. Final command allows only `few-pictures,still-page,palette-cream,eyebrow`:

- `few-pictures`: three image elements from the two honest supplied assets. No unrelated imagery added to reach four.
- `still-page`: one signature marquee plus reading progress; section entrances, portrait drift and extra scroll scenes omitted to preserve calm reading.
- `palette-cream`: exact user tokens retained, including the warm ground. Dark CTA uses neutral ink fill for separation and contrast.
- `eyebrow`: false positive from classifying the oversized, decorative, `aria-hidden` name band as the hero headline and the preceding View projects CTA as its eyebrow. The actual h1 has no eyebrow.
- Remaining `no-footage` warning: no suitable personal/project footage was supplied. No generic video added.
- Remaining `small-title` warning: the visible static semantic name is 28px desktop / 24px phone, while the signature name is 210px desktop / 80px phone. This keeps the portrait dominant and avoids a second competing large title. Decorative moving text remains `aria-hidden`; the real h1 and nav name remain static and readable.

## Screenshot critique

ROUND 1 — revised full-width hero
Seen in one second: full-width portrait and large name.
Idea (one sentence): the real portrait and long name become an opening signature.
Live thing: project index jumps to visible stories.
Layout words by section: hero=portrait stage / about=boxed portrait split / projects=large image and stacked stories / contact=compact split.
Scores: design 6.5 · usability 6 · creativity 7 · content 8 → overall 6.6.
Caps applied: fewer than four images caps design at 6.5; familiar portrait/name approach caps creativity at 7.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. Initial full-width tablet fold placed the copy panel over the left edge of the face: moved supporting copy below the image through 1000px and kept only the role beside the portrait.
2. Initial full-width desktop fold put hair behind the navigation strip: moved desktop object-position to 0% for headroom.
3. The Flash cards story has no distinct supplied image: retained honest text-only treatment rather than reusing the campus screenshot.

ROUND 2
Seen in one second: Nachiappan and the real portrait, with backend role and project action immediately available.
Idea (one sentence): the portrait and moving name establish identity, then work stories remain calm and direct.
Live thing: project index and native story anchors; keyboard and phone usable.
Layout words by section: hero=full-width portrait and overlaid name / about=boxed portrait split / projects=large image and stacked stories / contact=compact split.
Scores: design 6.5 · usability 9 · creativity 7 · content 8 → overall 7.5.
Caps applied: same honest image/creativity limits; no remaining layout failure.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. `portrait-final/mobile-page-01.jpg`: campus screenshot text is small on phones. Story text carries all essential facts; a supplied product close-up would improve evidence.
2. `portrait-final/desktop-page-01.jpg`: Flash cards is less visual than campus analytics. A distinct supplied screenshot could improve it; duplicate asset deliberately omitted.
3. `portrait-final/tablet-page-01.jpg`: About has a long text column beside a shorter photo. Retained the full supplied bio and approved boxed portrait layout; no filler added.

## Remaining content

Nothing blocks local review. Optional improvements: distinct Flash cards screenshot and repository/demo URL; separate About portrait if desired. Continue applying the three required skills in AGENTS.md for subsequent build work. No deployment is authorized.
