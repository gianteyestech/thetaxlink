// Publishes content straight to the GitHub repo from the browser using the
// GitHub REST Contents API. No backend / no third-party service — GitHub itself
// stores the change, and the connected Vercel project redeploys on the new commit.
//
// The token is a GitHub fine-grained Personal Access Token with "Contents:
// Read and write" on this repo. It is stored ONLY in this browser's localStorage
// (never committed, never sent anywhere except api.github.com). Treat it like a
// password and use a token scoped to just this one repo.

const GH_KEY = "thetaxlink:cms:github";

export function getGithubConfig() {
  try {
    return JSON.parse(localStorage.getItem(GH_KEY)) || null;
  } catch {
    return null;
  }
}

export function setGithubConfig(cfg) {
  localStorage.setItem(GH_KEY, JSON.stringify(cfg));
}

export function clearGithubConfig() {
  localStorage.removeItem(GH_KEY);
}

export function isGithubConnected() {
  const c = getGithubConfig();
  return !!(c && c.token && c.repo);
}

// btoa() can't handle multi-byte UTF-8 (— “ ” etc.) directly, so encode bytes first.
function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin);
}

async function ghFetch(path, opts, token) {
  return fetch(`https://api.github.com${path}`, {
    ...opts,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(opts?.headers || {}),
    },
  });
}

async function ghError(res) {
  let msg = `GitHub API error (${res.status})`;
  try {
    const j = await res.json();
    if (j.message) msg = j.message;
  } catch {
    /* ignore */
  }
  if (res.status === 401) msg = "Invalid or expired token (401).";
  else if (res.status === 403) msg = "Token lacks permission, or rate limited (403).";
  else if (res.status === 404) msg = "Repo or file not found for this token (404). Check repo name and token scope.";
  return msg;
}

// Confirms the token can see the repo (used by the connect dialog).
export async function verifyGithub(cfg) {
  const res = await ghFetch(`/repos/${cfg.repo}`, { method: "GET" }, cfg.token);
  if (!res.ok) throw new Error(await ghError(res));
  return res.json();
}

// Commits one content document to src/content/data/<name>.json.
export async function publishDocToGithub(name, data) {
  const cfg = getGithubConfig();
  if (!cfg?.token || !cfg?.repo) throw new Error("GitHub is not connected.");
  const branch = cfg.branch || "main";
  const filePath = `src/content/data/${name}.json`;
  const body = JSON.stringify(data, null, 2) + "\n";

  // Updating an existing file requires its current blob SHA.
  let sha;
  const getRes = await ghFetch(
    `/repos/${cfg.repo}/contents/${filePath}?ref=${encodeURIComponent(branch)}`,
    { method: "GET" },
    cfg.token
  );
  if (getRes.ok) {
    sha = (await getRes.json()).sha;
  } else if (getRes.status !== 404) {
    throw new Error(await ghError(getRes));
  }

  const putRes = await ghFetch(
    `/repos/${cfg.repo}/contents/${filePath}`,
    {
      method: "PUT",
      body: JSON.stringify({
        message: `CMS: update ${name}.json`,
        content: utf8ToBase64(body),
        branch,
        ...(sha ? { sha } : {}),
      }),
    },
    cfg.token
  );
  if (!putRes.ok) throw new Error(await ghError(putRes));
  return (await putRes.json()).commit; // { html_url, sha, ... }
}
