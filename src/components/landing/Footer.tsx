import logo from "@/assets/logo.png.asset.json";
import { SITE } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-4 py-8 sm:flex-row">
        <img src={logo.url} alt={SITE.name} className="h-10 w-auto" />
        <span className="font-semibold text-foreground">{SITE.name}</span>
      </div>
      <p className="pb-6 text-center text-xs text-foreground/60">
        © {year} — Projeto de IHC, {SITE.course}, {SITE.campus}
      </p>
    </footer>
  );
}
