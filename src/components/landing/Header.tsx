import logo from "@/assets/logo.png.asset.json";

const navLinks = [
  { href: "#video", label: "Vídeo" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#design-sprint", label: "Design Sprint" },
  { href: "#equipe", label: "Nossa Equipe" },
  { href: "#prototipo", label: "Protótipo" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-secondary border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <a href="#topo" className="flex items-center gap-3">
          <img src={logo.url} alt="UTFPR Buy e Sell" className="h-10 w-auto" />
          <span className="font-bold text-foreground hidden sm:inline">
            UTFPR Buy e Sell
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
