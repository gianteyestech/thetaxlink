// Resolves a public asset path (e.g. "/hero.jpg" stored in content JSON) against
// the app's base URL. This matters on GitHub Pages project sites where everything
// is served from a subpath like "/thetaxlink/". In local dev the base is "/", so
// paths are returned unchanged. External URLs (http, data, mailto, tel) pass through.
export function asset(path) {
  if (!path || typeof path !== "string") return path;
  if (/^(https?:|data:|mailto:|tel:|\/\/)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // "" in dev, "/thetaxlink" in build
  return base + (path.startsWith("/") ? path : `/${path}`);
}
