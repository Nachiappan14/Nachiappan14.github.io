# Personal portfolio

Status: local portfolio built and production preview verified. No GitHub push or deployment is authorized.

Start with `AGENTS.md`, then `PLAN.md`. User-supplied inputs below are authoritative; `content/profile.template.json` mirrors them as a worksheet. Exact palette is ready in `design/tokens.css`.

## Builder kickoff

> Read AGENTS.md, README.md inputs and PLAN.md. Read and apply design-taste-frontend, visualize:visualize and caveman using the skill paths in AGENTS.md. Build the local portfolio described there with Vite, vanilla TypeScript and plain CSS. Reuse design/tokens.css. Complete a responsive portrait hero, calm About, real project stories and Contact. Use supplied assets; label missing content in the local draft. Verify the production preview at desktop, tablet and mobile widths, keyboard navigation and reduced motion. Return the local preview URL and concise verification results. Do not push, publish or deploy.

`.taste-skill/direction.json` records the design draw; PLAN.md records the project-specific adaptations. The implementation retains that direction. See `QA.md` for browser checks, screenshots, critique, and intentional exceptions.

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

Production preview: http://127.0.0.1:4173/. Vite 8.3.5 and TypeScript 7.0.2 are exact development dependencies; runtime dependencies are zero. Content lives in semantic `index.html`, styles in `src/styles.css`, and progressive enhancements in `src/main.ts`. Public assets and the licensed self-hosted font live in `public/`. Original resources and exact theme tokens are preserved.

## User-supplied inputs

- preferred public name: Nachiappan S K
- portrait file: ./resources/hero_image.jpg
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

Name, portrait, résumé contents, and image crop reviewed locally. Employer work is summarized only at the level supplied in the bio; project stories retain team attribution.

See PLAN.md for the build sequence, file layout and acceptance checks.

## Screenshot check

`resources/project_1.png` and `resources/project_2.png` are byte-identical (SHA-256 verified). Builder must inspect image content before assigning it. Do not present one screen as two distinct project interfaces; use it only where accurate and omit the other image or use an explicitly labeled local draft slot pending replacement. This does not block the rest of the local build.
