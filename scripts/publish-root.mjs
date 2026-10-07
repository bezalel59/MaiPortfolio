import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distPath = path.join(projectRoot, "dist");

const builtHtml = await readFile(path.join(distPath, "index.html"), "utf8");
await writeFile(path.join(projectRoot, "index.html"), builtHtml.replace(/\r\n/g, "\n"));

const assetsPath = path.join(projectRoot, "assets");
await rm(assetsPath, { recursive: true, force: true });
await cp(path.join(distPath, "assets"), assetsPath, { recursive: true });

const projectsPath = path.join(projectRoot, "projects");
await mkdir(projectsPath, { recursive: true });
await cp(path.join(distPath, "projects"), projectsPath, { recursive: true, force: true });

const rootHtml = await readFile(path.join(projectRoot, "index.html"), "utf8");
const scriptPath = rootHtml.match(/<script[^>]+src="([^"]+)"/)?.[1];
const stylePath = rootHtml.match(/<link[^>]+href="([^"]+\.css)"/)?.[1];

if (!scriptPath || !stylePath || /src\/main\.jsx/.test(rootHtml)) {
	throw new Error("Root index.html is not a compiled Pages entry point.");
}

for (const assetPath of [scriptPath, stylePath]) {
	const localAssetPath = path.resolve(projectRoot, assetPath.replace(/^\.\//, ""));
	await readFile(localAssetPath);
}

await readFile(path.join(projectsPath, "diyukan", "figma-08.webp"));

console.log("Published the built site to the repository root for branch-based GitHub Pages.");