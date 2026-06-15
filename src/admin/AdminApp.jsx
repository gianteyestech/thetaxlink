import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  Save, Download, Undo2, LogOut, ExternalLink, FileText, Lock, CircleDot,
} from "lucide-react";
import { useContentStore } from "@/content/ContentContext";
import { DOC_META, DOC_ORDER, labelFor } from "@/content/schema";
import { isDev, saveDocToDisk, downloadDoc } from "@/content/saveClient";
import { isAuthed, login, logout } from "./auth";
import { ObjectEditor } from "./fields";

function docTitle(name) {
  return DOC_META[name]?.title || labelFor(name);
}

function LoginScreen({ onAuthed }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (login(pw)) onAuthed();
    else setError(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0E1F3D] px-6">
      <form onSubmit={submit} className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E3A6E]">
            <Lock className="h-5 w-5 text-[#F5C400]" />
          </span>
          <div>
            <h1 className="font-serif text-xl font-bold text-[#1E3A6E]">Content Manager</h1>
            <p className="text-xs text-gray-400">The Tax Link</p>
          </div>
        </div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A]/60">
          Password
        </label>
        <input
          type="password"
          autoFocus
          value={pw}
          onChange={(e) => { setPw(e.target.value); setError(false); }}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-[#1E3A6E] focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]/15"
          placeholder="Enter admin password"
        />
        {error && <p className="mt-2 text-xs text-red-500">Incorrect password.</p>}
        <button
          type="submit"
          className="mt-5 w-full rounded-full bg-[#1E3A6E] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#162d57]"
        >
          Unlock
        </button>
      </form>
    </div>
  );
}

export default function AdminApp() {
  const [authed, setAuthed] = useState(() => isAuthed());
  const store = useContentStore();
  const docNames = useMemo(() => {
    const present = Object.keys(store.docs);
    const ordered = DOC_ORDER.filter((n) => present.includes(n));
    const rest = present.filter((n) => !ordered.includes(n)).sort();
    return [...ordered, ...rest];
  }, [store.docs]);

  const [selected, setSelected] = useState(docNames[0]);
  const [saving, setSaving] = useState(false);

  if (!authed) return <LoginScreen onAuthed={() => setAuthed(true)} />;

  const doc = store.docs[selected];
  const dirty = store.hasDraft(selected);

  const handleSave = async () => {
    if (!isDev) {
      downloadDoc(selected, doc);
      toast.success(`Downloaded ${selected}.json — commit it to publish.`);
      return;
    }
    setSaving(true);
    try {
      await saveDocToDisk(selected, doc);
      store.commitDoc(selected, doc);
      toast.success(`Saved to src/content/data/${selected}.json`);
    } catch (err) {
      toast.error(`Save failed: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8F9FC] text-[#1E3A6E]">
      {/* Sidebar */}
      <aside className="flex w-64 shrink-0 flex-col border-r border-gray-200 bg-white">
        <div className="border-b border-gray-100 px-5 py-4">
          <h1 className="font-serif text-base font-bold text-[#1E3A6E]">Content Manager</h1>
          <p className="text-xs text-gray-400">The Tax Link</p>
        </div>
        <nav className="flex-1 space-y-0.5 overflow-y-auto p-3">
          {docNames.map((name) => (
            <button
              key={name}
              onClick={() => setSelected(name)}
              className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                selected === name ? "bg-[#1E3A6E] text-white" : "text-[#1E3A6E]/80 hover:bg-[#1E3A6E]/5"
              }`}
            >
              <span className="flex min-w-0 items-center gap-2">
                <FileText className="h-4 w-4 shrink-0 opacity-70" />
                <span className="truncate">{docTitle(name)}</span>
              </span>
              {store.hasDraft(name) && (
                <CircleDot className={`h-3.5 w-3.5 shrink-0 ${selected === name ? "text-[#F5C400]" : "text-[#F5C400]"}`} />
              )}
            </button>
          ))}
        </nav>
        <div className="border-t border-gray-100 p-3">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="mb-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#1E3A6E]/80 hover:bg-[#1E3A6E]/5"
          >
            <ExternalLink className="h-4 w-4" /> View site
          </a>
          <button
            onClick={() => { logout(); setAuthed(false); }}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#1E3A6E]/80 hover:bg-[#1E3A6E]/5"
          >
            <LogOut className="h-4 w-4" /> Log out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-gray-200 bg-white/95 px-6 py-3 backdrop-blur">
          <div className="min-w-0">
            <h2 className="truncate font-serif text-lg font-bold text-[#1E3A6E]">{docTitle(selected)}</h2>
            <p className="truncate text-xs text-gray-400">
              {DOC_META[selected]?.description || `src/content/data/${selected}.json`}
              {dirty && <span className="ml-2 font-semibold text-[#F5C400]">• unsaved changes (previewing live)</span>}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => { store.resetDoc(selected); toast("Reverted to last saved version."); }}
              disabled={!dirty}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-3.5 py-2 text-xs font-semibold text-[#1E3A6E] transition-colors hover:bg-gray-50 disabled:opacity-40"
            >
              <Undo2 className="h-3.5 w-3.5" /> Revert
            </button>
            <button
              onClick={() => downloadDoc(selected, doc)}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-3.5 py-2 text-xs font-semibold text-[#1E3A6E] transition-colors hover:bg-gray-50"
            >
              <Download className="h-3.5 w-3.5" /> Download JSON
            </button>
            <button
              onClick={handleSave}
              disabled={saving || (!dirty && isDev)}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1E3A6E] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#162d57] disabled:opacity-40"
            >
              <Save className="h-3.5 w-3.5" /> {saving ? "Saving…" : isDev ? "Save" : "Save (download)"}
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="mx-auto max-w-3xl">
            {!isDev && (
              <div className="mb-5 rounded-xl border border-[#F5C400]/40 bg-[#F5C400]/10 px-4 py-3 text-sm text-[#1E3A6E]">
                You're on a built/deployed copy. Edits preview live in this browser, but
                <strong> Save </strong> downloads the JSON file — commit it to the repo to publish for everyone.
              </div>
            )}
            {doc && typeof doc === "object" ? (
              <ObjectEditor value={doc} onChange={(v) => store.setDoc(selected, v)} />
            ) : (
              <p className="text-sm text-gray-500">This document has no editable fields.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
