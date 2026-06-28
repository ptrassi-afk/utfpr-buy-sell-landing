import { useEffect, useMemo } from "react";

import logo from "@/assets/logo.png.asset.json";
import { NAV_LINKS, SECTION_IDS, SITE } from "@/config/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { scrollToHash, scrollToTop, updateUrlHash } from "@/lib/scroll";

interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
  onSelect: (href: string) => void;
}

function NavItem({ href, label, isActive, onSelect }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        onClick={(event) => {
          event.preventDefault();
          onSelect(href);
        }}
        aria-current={isActive ? "true" : undefined}
        className={`rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors ${
          isActive ? "bg-primary" : "hover:bg-primary/60"
        }`}
      >
        {label}
      </a>
    </li>
  );
}

export function Header() {
  const sectionIds = useMemo(() => NAV_LINKS.map((link) => link.id), []);
  const active = useActiveSection(sectionIds);

  // Sincroniza deep-links (#hash na URL) e navegação back/forward.
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.location.hash) scrollToHash(window.location.hash);

    const onHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handleNavSelect = (href: string) => {
    if (scrollToHash(href)) updateUrlHash(href);
  };

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToTop();
    updateUrlHash(`#${SECTION_IDS.top}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <a
          href={`#${SECTION_IDS.top}`}
          onClick={handleLogoClick}
          className="flex items-center gap-3"
        >
          <img src={logo.url} alt={SITE.name} className="h-10 w-auto" />
          <span className="hidden font-bold text-foreground sm:inline">
            {SITE.name}
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
            {NAV_LINKS.map((link) => {
              const href = `#${link.id}`;
              return (
                <NavItem
                  key={link.id}
                  href={href}
                  label={link.label}
                  isActive={active === link.id}
                  onSelect={handleNavSelect}
                />
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
