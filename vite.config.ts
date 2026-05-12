// @lovable.dev/vite-tanstack-config already includes the following; do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Default production build targets Cloudflare Workers (see wrangler.jsonc).
// On Vercel, the platform sets VERCEL=1 during build; we skip the Cloudflare plugin then
// so the output is a Node SSR bundle (see vercel.json + api/ssr.mjs).
export default defineConfig({
  cloudflare: process.env.VERCEL === "1" ? false : undefined,
  tanstackStart: {
    server: { entry: "server" },
  },
});
