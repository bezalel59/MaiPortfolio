# MaiPortfolio

A static, responsive product-design portfolio built with React and Vite. Portfolio content is centralized in `src/data/portfolio.js` so case files, links, skills, tools, and profile details can be updated without changing the interface components.

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The production site is written to `dist/`. Vite uses relative asset paths, so the build works from a GitHub Pages project URL even if the repository name changes. The included `.github/workflows/pages.yml` builds and deploys the site whenever you push to `main`. In the repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** once.

## Edit portfolio content

Update the `profile` object and `caseFiles` array in `src/data/portfolio.js`. Each case file contains the ten story sections and optional Figma, prototype, and GitHub URLs. Empty links stay visibly marked as placeholders in the interface.

The case files currently contain draft placeholders only. Replace them with verified project details before publishing.