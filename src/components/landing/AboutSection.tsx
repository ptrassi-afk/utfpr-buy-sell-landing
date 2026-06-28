import sobreNosAsset from "@/assets/sobre-nos.png.asset.json";
import { SECTION_IDS, SITE } from "@/config/site";

export function AboutSection() {
  const headingId = `${SECTION_IDS.about}-heading`;
  return (
    <section
      id={SECTION_IDS.about}
      aria-labelledby={headingId}
      className="bg-secondary/40 py-16"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 id={headingId} className="mb-4 text-3xl font-bold">
            Sobre nós
          </h2>
          <p className="leading-relaxed text-foreground/80">
            Somos estudantes do curso de {SITE.course} da UTFPR Campo Mourão.
            O <strong>{SITE.name}</strong> nasceu como projeto da disciplina
            de {SITE.discipline}, com o objetivo de facilitar a compra, venda
            e divulgação de produtos e serviços dentro da comunidade acadêmica
            do nosso campus.
          </p>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
          <img
            src={sobreNosAsset.url}
            alt={`Ilustração da plataforma ${SITE.name}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
