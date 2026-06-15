// Loads every JSON document under ./data as the canonical baseline content.
// The filename (without extension) becomes the document key, e.g. data/home.json -> "home".
const modules = import.meta.glob("./data/*.json", { eager: true });

function buildBaseDocs() {
  const docs = {};
  for (const [filePath, mod] of Object.entries(modules)) {
    const name = filePath.replace("./data/", "").replace(".json", "");
    docs[name] = mod.default ?? mod;
  }
  return docs;
}

// Deep clone so editing in the CMS never mutates the imported module objects.
export function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

export function loadBaseDocs() {
  return clone(buildBaseDocs());
}

export const DOC_NAMES = Object.keys(buildBaseDocs()).sort();
