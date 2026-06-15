import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { loadBaseDocs, clone } from "./index";

/**
 * ContentProvider holds all editable site content in memory and exposes it to
 * both the public site and the CMS. Edits made in the CMS are kept as per-document
 * "drafts" in localStorage so the live site updates instantly (preview) without a
 * rebuild. Saving from the CMS writes the JSON file to disk in dev (see the Vite
 * plugin) and then promotes the draft to the canonical value.
 */

const DRAFT_KEY = "thetaxlink:cms:drafts";
const ContentContext = createContext(null);

function readDrafts() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeDrafts(drafts) {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(drafts));
  } catch {
    /* storage may be unavailable; preview-only edits are best-effort */
  }
}

export function ContentProvider({ children }) {
  const base = useMemo(() => loadBaseDocs(), []);
  const [drafts, setDrafts] = useState(() => readDrafts());

  // Merged view: a drafted document fully replaces the baseline one.
  const docs = useMemo(() => ({ ...base, ...drafts }), [base, drafts]);

  useEffect(() => {
    writeDrafts(drafts);
  }, [drafts]);

  // Keep multiple open tabs (e.g. CMS + preview) in sync.
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === DRAFT_KEY) setDrafts(readDrafts());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setDoc = useCallback((name, value) => {
    setDrafts((prev) => ({ ...prev, [name]: clone(value) }));
  }, []);

  const resetDoc = useCallback(
    (name) => {
      setDrafts((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    },
    []
  );

  // Called after a successful save-to-disk: the file now matches, so the draft
  // is no longer needed and the baseline is updated in memory to match.
  const commitDoc = useCallback((name, value) => {
    base[name] = clone(value);
    setDrafts((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, [base]);

  const value = useMemo(
    () => ({
      docs,
      base,
      drafts,
      hasDraft: (name) => Object.prototype.hasOwnProperty.call(drafts, name),
      anyDraft: Object.keys(drafts).length > 0,
      getDoc: (name) => docs[name],
      setDoc,
      resetDoc,
      commitDoc,
    }),
    [docs, base, drafts, setDoc, resetDoc, commitDoc]
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContentStore() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContentStore must be used within <ContentProvider>");
  return ctx;
}

/** Read a single content document by name (reactive). */
export function useDoc(name) {
  const { docs } = useContentStore();
  return docs[name];
}
