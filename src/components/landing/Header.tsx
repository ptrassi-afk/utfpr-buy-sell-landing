import { useEffect, useState } from "react";
import logo from "@/assets/logo.png.asset.json";

const navLinks = [
  { href: "#video", label: "Vídeo" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#design-sprint", label: "Design Sprint" },
  { href: "#equipe", label: "Nossa Equipe" },
  { href: "#prototipo", label: "Protótipo" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        // Compensa o header sticky (~5rem) no topo
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function Header() {
  const ids = navLinks.map((l) => l.href.slice(1));
  const active = useActiveSection(ids);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <a
          href="#topo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.replaceState(null, "", "#topo");
          }}
          className="flex items-center gap-3"
        >
          <img src={logo.url} alt="UTFPR Buy e Sell" className="h-10 w-auto" />
          <span className="font-bold text-foreground hidden sm:inline">
            UTFPR Buy e Sell
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors ${
                      isActive
                        ? "bg-primary"
                        : "hover:bg-primary/60"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
