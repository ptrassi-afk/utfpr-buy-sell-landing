import sobreNosAsset from "@/assets/sobre-nos.png.asset.json";

export function AboutSection() {
  return (
    <section id="sobre" aria-labelledby="sobre-heading" className="bg-secondary/40 py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 id="sobre-heading" className="mb-4 text-3xl font-bold">Sobre nós</h2>
          <p className="text-foreground/80 leading-relaxed">
            Somos estudantes do curso de Ciência da Computação da UTFPR Campo
            Mourão. O <strong>UTFPR Buy e Sell</strong> nasceu como projeto da
            disciplina de Interação Humano-Computador (IHC), com o objetivo de
            facilitar a compra, venda e divulgação de produtos e serviços
            dentro da comunidade acadêmica do nosso campus.
          </p>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
          {/* TODO: substituir por imagem real da equipe ou do projeto */}
          <img
            src={sobreNosAsset.url}
            alt="Ilustração da plataforma UTFPR Buy & Sell"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
