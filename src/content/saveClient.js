// Helpers the CMS uses to persist content. In dev, edits are written straight to
// the JSON files via the cms-save Vite middleware. Anywhere else, we fall back to
// downloading the JSON so it can be committed to the repo by hand.

export const isDev = import.meta.env.DEV;

export async function saveDocToDisk(name, data) {
  const res = await fetch("/__cms/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, data }),
  });
  let payload = null;
  try {
    payload = await res.json();
  } catch {
    /* non-JSON response */
  }
  if (!res.ok || !payload?.ok) {
    throw new Error(payload?.error || `Save failed (HTTP ${res.status})`);
  }
  return payload;
}

export function downloadDoc(name, data) {
  const blob = new Blob([JSON.stringify(data, null, 2) + "\n"], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
