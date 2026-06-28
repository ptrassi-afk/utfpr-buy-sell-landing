/**
 * Utilitários de rolagem suave para navegação âncora.
 * Mantemos a URL sincronizada via History API sem disparar reload.
 */

const SMOOTH_OPTIONS: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "start",
};

export function scrollToId(id: string): boolean {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView(SMOOTH_OPTIONS);
  return true;
}

export function scrollToHash(hash: string): boolean {
  if (!hash) return false;
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  return scrollToId(id);
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function updateUrlHash(hash: string): void {
  if (window.location.hash !== hash) {
    history.pushState(null, "", hash);
  }
}
