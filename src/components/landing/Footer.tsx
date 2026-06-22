import logo from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-4 py-8 sm:flex-row">
        <img src={logo.url} alt="UTFPR Buy e Sell" className="h-10 w-auto" />
        <span className="font-semibold text-foreground">UTFPR Buy e Sell</span>
      </div>
      <p className="pb-6 text-center text-xs text-foreground/60">
        © {new Date().getFullYear()} — Projeto de IHC, Ciência da Computação, UTFPR-CM
      </p>
    </footer>
  );
}
