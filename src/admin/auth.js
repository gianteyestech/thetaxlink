// Lightweight gate for the CMS. NOTE: this is a client-side convenience lock, not
// real security — anyone with the bundle can read the password. Because the site
// has no backend, this only keeps the editor out of casual reach. For a hardened
// setup, move content behind a real auth'd backend.
//
// The password can be overridden at build time with VITE_CMS_PASSWORD.
export const ADMIN_PASSWORD = import.meta.env.VITE_CMS_PASSWORD || "taxlink-admin";

const SESSION_KEY = "thetaxlink:cms:auth";

export function isAuthed() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

export function login(password) {
  if (password === ADMIN_PASSWORD) {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    return true;
  }
  return false;
}

export function logout() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    /* ignore */
  }
}
