import fs from "node:fs";
import path from "node:path";

/**
 * GitHub Pages has no SPA rewrite support: navigating directly to a client-side
 * route like /admin returns the 404 page. GitHub serves 404.html for any unknown
 * path while keeping the URL, so making 404.html a copy of index.html lets the
 * React app boot and route correctly. This plugin writes that copy after build.
 */
export default function spaFallback() {
  return {
    name: "spa-fallback",
    apply: "build",
    closeBundle() {
      const outDir = path.resolve(process.cwd(), "dist");
      const index = path.join(outDir, "index.html");
      const notFound = path.join(outDir, "404.html");
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, notFound);
      }
    },
  };
}
