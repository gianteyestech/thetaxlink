import { useState } from "react";
import { X, Github, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { getGithubConfig, setGithubConfig, clearGithubConfig, verifyGithub, isGithubConnected } from "./githubClient";

export default function GithubConnect({ onClose, onChange }) {
  const existing = getGithubConfig() || {};
  const [token, setToken] = useState(existing.token || "");
  const [repo, setRepo] = useState(existing.repo || "gianteyestech/thetaxlink");
  const [branch, setBranch] = useState(existing.branch || "main");
  const [busy, setBusy] = useState(false);
  const connected = isGithubConnected();

  const inputCls =
    "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-[#1E3A6E] focus:border-[#1E3A6E] focus:outline-none focus:ring-2 focus:ring-[#1E3A6E]/15";

  const save = async () => {
    if (!token.trim() || !repo.trim()) {
      toast.error("Token and repo are required.");
      return;
    }
    setBusy(true);
    try {
      const cfg = { token: token.trim(), repo: repo.trim(), branch: branch.trim() || "main" };
      await verifyGithub(cfg);
      setGithubConfig(cfg);
      onChange?.(true);
      toast.success("GitHub connected. You can now Publish.");
      onClose();
    } catch (e) {
      toast.error(`Couldn't connect: ${e.message}`);
    } finally {
      setBusy(false);
    }
  };

  const disconnect = () => {
    clearGithubConfig();
    onChange?.(false);
    toast("GitHub disconnected.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-[#1E3A6E]">
            <Github className="h-5 w-5" /> Connect GitHub
          </h2>
          <button onClick={onClose} className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="mb-4 text-xs leading-relaxed text-[#4A4A4A]/70">
          Publishing commits the JSON file directly to your repo, then Vercel redeploys.
          Your token is stored <strong>only in this browser</strong> — use a fine-grained token
          scoped to just this repo with <strong>Contents: Read and write</strong>.
        </p>

        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A]/60">
              GitHub token
            </label>
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className={inputCls}
              placeholder="github_pat_…"
              autoComplete="off"
            />
            <a
              href="https://github.com/settings/personal-access-tokens/new"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[#1E3A6E] hover:underline"
            >
              Create a fine-grained token <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A]/60">
                Repository
              </label>
              <input value={repo} onChange={(e) => setRepo(e.target.value)} className={inputCls} placeholder="owner/repo" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#4A4A4A]/60">
                Branch
              </label>
              <input value={branch} onChange={(e) => setBranch(e.target.value)} className={inputCls} placeholder="main" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          {connected ? (
            <button onClick={disconnect} className="text-xs font-semibold text-red-500 hover:underline">
              Disconnect
            </button>
          ) : (
            <span />
          )}
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="rounded-full border border-gray-300 px-4 py-2 text-xs font-semibold text-[#1E3A6E] hover:bg-gray-50">
              Cancel
            </button>
            <button
              onClick={save}
              disabled={busy}
              className="rounded-full bg-[#1E3A6E] px-4 py-2 text-xs font-semibold text-white hover:bg-[#162d57] disabled:opacity-40"
            >
              {busy ? "Checking…" : "Connect"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
