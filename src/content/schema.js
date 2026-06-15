// Metadata that makes the generic CMS editor friendlier. The editor works without
// this (it infers field types from the data), but these hints give nicer document
// titles and force certain fields to the right widget.

// Human-friendly titles + ordering for the document list in the CMS sidebar.
export const DOC_META = {
  global: { title: "Global (Header & Footer)", description: "Company details, navigation, and footer used across every page." },
  home: { title: "Home Page", description: "All sections of the homepage." },
  about: { title: "About Page", description: "About Us page content." },
  services: { title: "Services Page", description: "The services overview / listing page." },
  servicePages: { title: "Service Detail Pages", description: "The individual service pages (one per service)." },
  contact: { title: "Contact Page", description: "Contact details, form labels, and map." },
  privacy: { title: "Privacy Policy", description: "Privacy policy sections." },
  terms: { title: "Terms & Conditions", description: "Terms & conditions sections." },
};

export const DOC_ORDER = ["global", "home", "about", "services", "servicePages", "contact", "privacy", "terms"];

// Field-name hints (case-insensitive, matched as substrings where noted).
export const ICON_FIELDS = new Set(["icon"]);
export const IMAGE_FIELD_PARTS = ["image", "avatar", "logo", "photo"];
export const TEXTAREA_FIELD_PARTS = ["desc", "description", "text", "subtitle", "paragraph", "blurb", "message", "intro", "quote", "caption", "closing", "answer"];

// Friendlier labels for common keys.
export const LABEL_OVERRIDES = {
  desc: "Description",
  cta: "Call to action",
  ctaLabel: "Button label",
  ctaPath: "Button link",
  primaryCtaLabel: "Button label",
  primaryCtaPath: "Button link",
  q: "Question",
  a: "Answer",
  imageAlt: "Image alt text",
  phoneDisplay: "Phone (display)",
  phoneHref: "Phone (link)",
  href: "Link",
  path: "Link",
};

export function labelFor(key) {
  if (LABEL_OVERRIDES[key]) return LABEL_OVERRIDES[key];
  // camelCase / kebab -> Title Case
  const spaced = String(key)
    .replace(/[-_]/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

export function isIconField(key) {
  return ICON_FIELDS.has(key);
}

export function isImageField(key) {
  const k = String(key).toLowerCase();
  return IMAGE_FIELD_PARTS.some((p) => k.includes(p)) && !k.includes("alt");
}

export function isTextareaField(key, value) {
  const k = String(key).toLowerCase();
  if (TEXTAREA_FIELD_PARTS.some((p) => k.includes(p))) return true;
  return typeof value === "string" && value.length > 70;
}
