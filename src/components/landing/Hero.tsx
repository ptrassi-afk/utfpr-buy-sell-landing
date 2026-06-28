import { SECTION_IDS, SITE } from "@/config/site";

export function Hero() {
  const headingId = `${SECTION_IDS.top}-heading`;
  return (
    <section
      id={SECTION_IDS.top}
      aria-labelledby={headingId}
      className="bg-background"
    >
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-24">
        <h1
          id={headingId}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          {SITE.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
          Compre, venda e divulgue produtos entre estudantes da {SITE.campus}.
          Encontre anúncios de eletrônicos, móveis, alimentos, serviços e muito
          mais.
        </p>
      </div>
    </section>
  );
}
