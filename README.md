# Personal portfolio

Status: full-screen 4:3 hero and unified project-card revision implemented and verified locally on 3 November 2026. Fresh results and limitations are at the top of `QA.md`; older results remain as history. GitHub repository creation, push and Pages deployment authorized by the user on 3 November 2026; deployment preparation is recorded below.

Start with `AGENTS.md`, then `PLAN.md`. User-supplied inputs below are authoritative; `content/profile.template.json` mirrors them as a worksheet. Exact palette is ready in `design/tokens.css`.

## Builder kickoff

> Read AGENTS.md, authoritative README.md inputs and PLAN.md. Apply design-taste-frontend, visualize:visualize and caveman using paths in AGENTS.md; reuse recorded direction. Revise the existing Vite/vanilla TypeScript/plain CSS build. Regenerate hero assets from new 4:3 resources/hero_image.jpg. Make one continuous full-screen photograph across orientations, with grouped role/description at bottom right, static identity/CTA and transparent lower-edge marquee in reserved layout space over the same photograph, never a separate strip below it; remove below-image copy and broad underlays. Put each project’s media, heading, description, supplied links and details inside one square flat card, with a soft horizontal separator between cards. Keep theme tokens, content and interactions. Complete production QA specified in PLAN.md, then return actual preview URL and results. No scaffold, push, publication or deployment.

`.taste-skill/direction.json` records the design draw; PLAN.md records the project-specific adaptations. The implementation retains that direction. See `QA.md` for current browser checks, screenshots, critique, and intentional exceptions.

## Latest user design requirements

- Hero photograph fills the opening screen continuously on monitor, tablet and phone, including both orientations. Phone uses a tighter crop; preserve face/headroom and avoid stretching. Extra zoom is modest and subject to crop review.
- Role and short description stay together toward bottom right, above reserved marquee layout space over the same photograph, never a separate strip below it. Keep static name, View projects and pause readable. Remove separate below-photo introduction, opaque role badge and full-width marquee underlay; avoid a broad header banner. A small text-local contrast scrim is acceptable only where necessary.
- Each project is one visually unified card containing accurate screenshot when available, title, description, contribution/details, supplied actions and technologies. Use consistent square flat surfaces and spacing; stack media/text on phones. Flash cards remains text-only without a supplied URL.
- Add a soft horizontal rule between project cards, visible in both themes. This explicitly overrides prior “no decorative rules” and generic skill card restrictions for this section.
- Dennis Snellenberg is the hero and separator reference; user clarified the “Daniel” mention with https://dennissnellenberg.com/. Existing Rithwik reference is https://www.rtwksai.com/ for project grouping. Exact implementation and acceptance criteria live in PLAN.md.

## Run locally

Use Node 22.12+ (verified with Node 22.13.0).

```sh
npm ci
npm run dev
```

Production verification:

```sh
npm run check
npm run build
npm run preview -- --host 127.0.0.1
```

Verified production preview: http://127.0.0.1:4173/?revision=ready. Restart with the preview command above when needed. Vite 8.3.5 and TypeScript 7.0.2 are exact development dependencies; runtime dependencies are zero. Content lives in semantic `index.html`, styles in `src/styles.css`, and progressive enhancements in `src/main.ts`. Public assets and the licensed self-hosted font live in `public/`. Original resources and exact theme tokens are preserved.

## User-supplied inputs

- preferred public name: Nachiappan S K
- portrait file: ./resources/hero_image.jpg — selected hero source, 1273×955 (approximately 4:3); inspected 3 November 2026. New `public/images/hero-*` derivatives serve the hero. The existing `portrait-*` assets remain for About. ./resources/hero_image_2.jpg is an alternate older portrait, not the selected hero.
- resume: ./resources/Nachiappan_resume.pdf
- Short bio: Software engineer with 3+ years at Oracle Cloud Infrastructure, building Tier 0 distributed networking services across backend APIs, infrastructure automation, security, and production operations. Combines computer science fundamentals with hands-on experience taking complex systems from design and implementation through validation, rollout, and incident response. Delivered deployment automation and regional build improvements through cross-team engineering. Brings Python/PyTorch research and applied AI/ML experience in data-drift detection, NLP, and computer vision, alongside AI-assisted development and leadership as an elected Student Affairs Council member at IIIT Bangalore.

## Projects for builder

- **Campus security analytics:** Worked with team and customers to turn concept into working video analytics system. Features: intrusion detection, person and vehicle tracking, number plate recognition, real time alerts. Demonstrated at Bangalore Tech Summit 2022; piloted at NIMHANS. [Project site](https://sahasraaksha.github.io/).
  - Screenshot: `./resources/project_1.png`.
- **Flash cards app:** Built multiuser decks, timed study, quizzes with friends, attempt reviews, leaderboard. Stack: React, Node.js, MongoDB, Jenkins, Docker, Ansible, ELK.
  - Screenshot: `./resources/project_2.png`.
  - Project URL not supplied; omit link unless an explicit matching URL is found in the résumé.

## Public contact

- Email: [nicenach149@gmail.com](mailto:nicenach149@gmail.com)
- [GitHub](https://github.com/Nachiappan14)
- [LinkedIn](https://www.linkedin.com/in/mr-nskn/)
- Mobile: 8300843618

## Optional inputs

- Separate About photo; reuse supplied portrait otherwise.
- Flash cards app repository/demo URL. Not required to complete local preview.

Theme, menu, reading progress, name marquee and pause are required enhancements. Consider subtle section entrances or portrait drift after browser review.

Name and résumé contents were reviewed during the original build. New 4:3 source and responsive crops were reviewed during this revision. Employer work is summarized only at the level supplied in the bio; project stories retain team attribution.

See PLAN.md for the build sequence, file layout and acceptance checks.

## Screenshot check

`resources/project_1.png` and `resources/project_2.png` are byte-identical (SHA-256 verified). Builder must inspect image content before assigning it. Do not present one screen as two distinct project interfaces; use it only for campus analytics. Keep the Flash cards card intentionally text-only until distinct media is supplied. This does not block the rest of the local build.

## GitHub Pages deployment

Target repository: `Nachiappan14/Nachiappan14.github.io` (public). Live URL: https://nachiappan14.github.io/. User authorized committing existing work, creating the repository, pushing and deploying on 3 November 2026; this supersedes earlier local-only restrictions for this task.

`.github/workflows/deploy-pages.yml` builds the locked dependencies with Node 22.13.0 and publishes only `dist/` on pushes to the existing `master` branch or manual dispatch. Repository Settings → Pages → Source must be **GitHub Actions**. Vite's default `/` base is correct for this account-root repository; no custom domain is configured. See the [Vite deployment guide](https://vite.dev/guide/static-deploy.html#github-pages).

Deployed and verified on 3 November 2026. The user created the repository, SSH pushed `master`, and the initial remote license was preserved by merging histories. After switching Pages Source from branch publication to GitHub Actions, the deployment job was rerun. Homepage, built CSS/JS, all referenced images, both fonts and résumé returned HTTP 200; the styled live hero and enhancement controls were inspected in-browser. Future pushes to `master` automatically rebuild and deploy. GitHub CLI authentication was not needed.
