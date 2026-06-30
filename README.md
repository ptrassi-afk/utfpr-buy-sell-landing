# UTFPR Buy e Sell

Landing page do projeto **UTFPR Buy e Sell** — Marketplace para estudantes da
UTFPR Campo Mourão. Projeto da disciplina de Interação Humano-Computador (IHC)
do curso de Ciência da Computação.

Site estático (SPA) construído com **Vite + React + Tailwind v4**, pronto
para hospedagem no **GitHub Pages**.

## Desenvolvimento

```bash
bun install
bun run dev
```

Acesse `http://localhost:8080`.

## Build

```bash
bun run build
```

A pasta `dist/` contém os arquivos estáticos prontos para deploy. O Vite
está configurado com `base: "./"`, então o mesmo build funciona em qualquer
subpath do GitHub Pages (`https://<user>.github.io/<repo>/`).

## Deploy no GitHub Pages

Existe um workflow pronto em `.github/workflows/deploy.yml` que faz o
build e publica automaticamente a cada push na branch `main`.

Para ativar:

1. No GitHub, em **Settings → Pages**, mude **Source** para **GitHub Actions**.
2. Faça push para a `main`. A Action rodará `bun run build` e publicará
   `dist/` no Pages.
3. O site ficará disponível em `https://<seu-usuario>.github.io/<nome-do-repo>/`.

> A landing é single-page (uma rota só, com âncoras `#secao`), então não há
> problema de rotas em refresh. Mesmo assim, há um `public/404.html` que
> serve como fallback caso o usuário entre em uma URL desconhecida.

### Deploy manual (alternativa)

Se preferir não usar Actions:

```bash
bun run build
# suba o conteúdo de dist/ para a branch gh-pages (ex: usando a CLI gh-pages)
```

## O que editar

Os TODOs estão em `src/config/site.ts` (links de vídeo, Figma, Miro e
equipe) e nos componentes em `src/components/landing/`.

## Stack

- React 19 + Vite 8
- Tailwind CSS v4 (tokens em `src/styles.css`)
- TypeScript estrito
