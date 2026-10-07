# GitHub Pages Deployment

This repository currently publishes from `main` at the repository root. The root `index.html` must therefore be the compiled Vite output, not the source HTML that loads `/src/main.jsx`.

## Publish after source changes

1. Run `npm run build` before committing. This builds `dist/`, copies the compiled HTML/assets/project images into the repository root, and verifies the generated entry point and required case artwork.
2. In GitHub Desktop, include the updated root `index.html`, `assets/`, and `projects/` along with your source changes.
3. Commit and push to `main`.
4. Open `https://bezalel59.github.io/MaiPortfolio/` and refresh. The root page should load a hashed `./assets/index-....js` file, never `/src/main.jsx`.

Do not replace the generated root `index.html` with a hand-edited Vite source entry. That is how GitHub Pages previously returned a blank page: it served JSX directly, which browsers cannot execute as the compiled app.

The alternative is to change **Repository Settings > Pages > Build and deployment > Source** to **GitHub Actions**. If using that mode, the existing workflow publishes the `dist/` artifact and the generated root copies are not required for deployment. The source mode and branch/source settings in GitHub must match the intended publishing mode.