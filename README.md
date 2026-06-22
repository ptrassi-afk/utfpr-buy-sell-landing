# UTFPR Buy e Sell

Landing page do projeto **UTFPR Buy e Sell** — Marketplace para estudantes da
UTFPR Campo Mourão. Projeto da disciplina de Interação Humano-Computador (IHC)
do curso de Ciência da Computação.

## Desenvolvimento

```bash
bun install
bun run dev
```

## O que editar

Os "TODOs" estão concentrados nos componentes em `src/components/landing/`:

- `VideoSection.tsx` → `VIDEO_EMBED_URL` (link embed do YouTube)
- `DesignSprintSection.tsx` → `DESIGN_SPRINT_EMBED` (link embed Figma)
- `PrototypeSection.tsx` → `PROTOTYPE_EMBED` (link embed do protótipo Figma)
- `TeamSection.tsx` → lista `team` com nomes e fotos dos integrantes
- `AboutSection.tsx` → imagem ao lado do texto

Para o Figma, use o link de **share** e troque pelo formato:

```
https://www.figma.com/embed?embed_host=share&url=<URL_CODIFICADA_DO_ARQUIVO>
```

## Deploy no GitHub Pages

1. Faça `bun run build` para gerar o build estático em `dist/`.
2. Suba o conteúdo de `dist/` para o branch `gh-pages` do repositório (ou
   configure uma GitHub Action de deploy estático para Pages).
3. Em **Settings → Pages** do repositório, selecione o branch `gh-pages` como
   fonte.

> A landing é single-page (uma rota só, com âncoras), então não há problema de
> rotas em refresh no GitHub Pages.

## Stack

- TanStack Start (React 19) + Vite
- Tailwind CSS v4 (tokens em `src/styles.css`)
