// Crawls every known route against our own working Node server and saves
// the rendered HTML as static files, alongside the built client assets.
// Used because @tanstack/react-start's built-in `prerender` option is
// currently broken in this dependency version (its internal preview-server
// plugin looks for a file that never gets built in our pipeline).
import { spawn } from "node:child_process";
import { mkdir, writeFile, cp, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const PORT = 4173;
const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_DIR = path.join(ROOT, "dist-static");

const SERVICE_SLUGS = [
  "global-recruitment",
  "work-visas",
  "student-visas",
  "family-migration",
];

const ROUTES = [
  "/",
  "/about",
  "/services",
  ...SERVICE_SLUGS.map((slug) => `/services/${slug}`),
];

function routeToFile(route) {
  if (route === "/") return "index.html";
  return path.join(route.replace(/^\//, ""), "index.html");
}

async function waitForServer(url, attempts = 40) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status < 500) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Server at ${url} never became ready`);
}

async function main() {
  if (existsSync(OUT_DIR)) await rm(OUT_DIR, { recursive: true });
  await mkdir(OUT_DIR, { recursive: true });

  const server = spawn("node", [".output/server/index.mjs"], {
    cwd: ROOT,
    env: { ...process.env, PORT: String(PORT) },
    stdio: ["ignore", "pipe", "pipe"],
  });

  let serverError = "";
  server.stderr.on("data", (d) => (serverError += d.toString()));

  try {
    await waitForServer(`http://localhost:${PORT}/`);

    for (const route of ROUTES) {
      const res = await fetch(`http://localhost:${PORT}${route}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch ${route}: ${res.status} ${res.statusText}`);
      }
      const html = await res.text();
      const outPath = path.join(OUT_DIR, routeToFile(route));
      await mkdir(path.dirname(outPath), { recursive: true });
      await writeFile(outPath, html, "utf-8");
      console.log(`✓ ${route} -> ${path.relative(ROOT, outPath)}`);
    }
  } finally {
    server.kill();
  }

  if (serverError) {
    console.error("--- server stderr ---");
    console.error(serverError);
  }

  // Copy built client assets (JS, CSS, images) alongside the generated HTML.
  const publicDir = path.join(ROOT, ".output", "public");
  if (existsSync(publicDir)) {
    await cp(publicDir, OUT_DIR, { recursive: true });
  }

  // GitHub Pages SPA-style fallback for any unlisted path.
  const indexHtml = path.join(OUT_DIR, "index.html");
  if (existsSync(indexHtml)) {
    await cp(indexHtml, path.join(OUT_DIR, "404.html"));
  }

  console.log(`\nStatic site generated at ${path.relative(ROOT, OUT_DIR)}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
