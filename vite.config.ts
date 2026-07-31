// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";

// TanStack Devtools injects a `data-tsd-source` debug attribute into every JSX
// element at compile time. react-three-fiber's custom renderer doesn't understand
// that attribute on Three.js objects (<mesh>, <group>, ...) and throws. Strip it
// from the 3D globe component only, after devtools has already added it.
function stripTsdSourceFromR3F(): Plugin {
  return {
    name: "strip-tsd-source-r3f",
    enforce: "post",
    transform(code, id) {
      if (!id.includes("/components/GoldGlobe.tsx")) return null;
      if (!code.includes("data-tsd-source")) return null;
      return code
        .replace(/\s*data-tsd-source="[^"]*"/g, "")
        .replace(/"data-tsd-source":\s*"[^"]*",?\s*/g, "");
    },
  };
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Deploying to a plain Node host or generating a static export from it —
  // not Cloudflare — build a standard Node server instead of the Cloudflare
  // Workers output this config defaults to.
  nitro: {
    preset: "node-server",
  },
  vite: {
    plugins: [stripTsdSourceFromR3F()],
  },
});
