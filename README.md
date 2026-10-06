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

Update the `profile` object and `caseFiles` array in `src/data/portfolio.js`. Image case files use a `gallery` array; keep artwork in `public/projects/` and add each image's relative path and descriptive alt text there.

The Mamali project currently contains six locally stored image boards from the linked Behance project. Add future projects to the same `caseFiles` array.