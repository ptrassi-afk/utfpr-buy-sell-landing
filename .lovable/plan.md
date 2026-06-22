## Visão Geral

Landing page single-page (uma rota só, `/`), com navegação por âncoras suaves entre seções. Estilo limpo usando a paleta da marca:
- Fundo principal: `#EDEFD9`
- Header/superfícies: `#FFF6B3`
- Destaque (botões/links ativos): `#F4DD32`
- Texto: preto

## Estrutura da Página

```text
┌─────────────────────────────────────────────────────┐
│ HEADER (sticky, #FFF6B3)                            │
│ [Logo SVG + "UTFPR Buy e Sell"]   Video Sobre nós   │
│                                   Design Sprint     │
│                                   Equipe Protótipo  │
├─────────────────────────────────────────────────────┤
│ HERO                                                │
│ Marketplace da UTFPR Campo Mourão                   │
│ Compre, venda e divulgue...                         │
├─────────────────────────────────────────────────────┤
│ #video       → vídeo centralizado (iframe 16:9)    │
│ #sobre       → texto + imagem lado a lado          │
│ #design-sprint → título + embed Figma navegável    │
│ #equipe      → grid de fotos + nomes               │
│ #prototipo   → título + embed Figma navegável      │
├─────────────────────────────────────────────────────┤
│ FOOTER (#FFF6B3): logo + "UTFPR Buy e Sell"        │
└─────────────────────────────────────────────────────┘
```

## Implementação

### Rotas e arquivos
- `src/routes/index.tsx` — página única com todas as seções e `<a href="#id">` no header. Scroll suave via CSS (`html { scroll-behavior: smooth }`) e `scroll-margin-top` nas seções para compensar o header fixo.
- `src/routes/__root.tsx` — apenas atualizar título/meta para "UTFPR Buy e Sell".

### Componentes (`src/components/landing/`)
- `Header.tsx` — logo (SVG colado inline a partir do arquivo enviado) + nome + nav âncora.
- `Hero.tsx` — título + descrição do marketplace.
- `VideoSection.tsx` — wrapper responsivo 16:9 com iframe placeholder do YouTube (URL substituível depois).
- `AboutSection.tsx` — duas colunas: texto curto sobre o projeto IHC + imagem placeholder.
- `DesignSprintSection.tsx` — título "Design Sprint" + container com iframe Figma (placeholder de URL, navegável dentro do quadro).
- `TeamSection.tsx` — grid responsivo com 4 placeholders (foto circular + nome). Fácil de editar a lista.
- `PrototypeSection.tsx` — título "UTFPR Buy e Sell — Protótipo" + iframe Figma vertical (mobile) navegável.
- `Footer.tsx` — logo + nome centralizados.
- `assets/logo.svg` — SVG do logotipo enviado.

### Design tokens (`src/styles.css`)
Adicionar no `:root`:
```css
--background: oklch(de #EDEFD9);
--primary:    oklch(de #F4DD32);     /* destaque */
--secondary:  oklch(de #FFF6B3);     /* header/footer */
--foreground: oklch(0 0 0);
```
Mapear em `@theme inline` (já existe a estrutura). Usar classes semânticas (`bg-background`, `bg-secondary`, `bg-primary`, `text-foreground`) — nada de cores hardcoded.

### GitHub Pages
- A app é TanStack Start (SSR). Para GitHub Pages (estático) o caminho natural é exportar build estático ou — mais simples e suficiente aqui — manter a página única funcionando como SPA. Vou:
  1. Configurar `vite.config.ts` com `base: './'` para funcionar em subpath do Pages.
  2. Incluir um `public/404.html` que redireciona para `index.html` (fallback SPA padrão do Pages) — embora não seja necessário já que tudo é âncora numa única rota.
  3. Adicionar README curto com passos: `bun run build` → publicar pasta `dist/` no branch `gh-pages` (ou usar GitHub Action). Não vou criar a Action automaticamente para manter simples; instruções no README.

### Defaults assumidos (você troca depois)
- Vídeo: placeholder `https://www.youtube.com/embed/dQw4w9WgXcQ` com comentário `// TODO: substituir`.
- Figma Design Sprint e Protótipo: iframes com `src` placeholder `https://www.figma.com/embed?embed_host=share&url=...` marcados com TODO.
- Equipe: 4 cards com nomes "Integrante 1..4" e fotos placeholder (avatar cinza). Fácil substituir.
- Sobre nós: parágrafo curto sobre projeto da disciplina de IHC (Ciência da Computação, UTFPR-CM) + imagem placeholder.

### Boas práticas
- Componentes pequenos e focados, um por arquivo.
- Sem cores hardcoded — só tokens.
- HTML semântico (`<header>`, `<main>`, `<section>`, `<footer>`), `alt` em imagens, `aria-label` na nav.
- SEO: `<title>` e meta description específicos no `head()` da rota `/`.
- Responsivo: header colapsa para menu compacto no mobile (links continuam visíveis em wrap), seções com `max-w-5xl mx-auto px-4`.

## Não está incluído
- Backend / Lovable Cloud (não é necessário).
- Sistema real de upload de produtos (é só landing institucional do trabalho).
- Action de deploy automatizada — só instruções no README.
