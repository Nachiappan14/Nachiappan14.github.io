# Local build verification

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
