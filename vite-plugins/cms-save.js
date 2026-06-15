import fs from "node:fs";
import path from "node:path";

/**
 * Dev-only Vite plugin that lets the in-app CMS write content back to the JSON
 * files in src/content/data. It exposes POST /__cms/save { name, data }.
 *
 * This only runs under `vite dev`. In a production build the endpoint does not
 * exist, so the CMS falls back to downloading the JSON for manual commit.
 */
export default function cmsSave() {
  const dataDir = path.resolve(process.cwd(), "src/content/data");
  const validName = /^[a-zA-Z0-9_-]+$/;

  return {
    name: "cms-save",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__cms/save", (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end("Method Not Allowed");
          return;
        }
        let body = "";
        req.on("data", (chunk) => {
          body += chunk;
          if (body.length > 5_000_000) req.destroy(); // ~5MB guard
        });
        req.on("end", () => {
          try {
            const { name, data } = JSON.parse(body);
            if (!name || !validName.test(name)) {
              res.statusCode = 400;
              res.end(JSON.stringify({ ok: false, error: "Invalid document name" }));
              return;
            }
            const file = path.join(dataDir, `${name}.json`);
            if (!file.startsWith(dataDir)) {
              res.statusCode = 400;
              res.end(JSON.stringify({ ok: false, error: "Path traversal blocked" }));
              return;
            }
            fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ ok: true, file: `src/content/data/${name}.json` }));
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ ok: false, error: String(err && err.message ? err.message : err) }));
          }
        });
      });
    },
  };
}
