/**
 * Configuração estática do site.
 * Centralizar aqui evita "magic strings" espalhadas pelos componentes e
 * facilita ajustes de copy, links e navegação.
 */

import m1 from "@/assets/team/m1.jpg";
import m2 from "@/assets/team/m2.jpg";
import m3 from "@/assets/team/m3.jpg";
import m4 from "@/assets/team/m4.jpg";

export const SITE = {
  name: "UTFPR Buy e Sell",
  tagline: "Marketplace da UTFPR Campo Mourão",
  description:
    "Marketplace para estudantes da UTFPR-CM comprarem, venderem e divulgarem produtos e serviços. Projeto de IHC.",
  course: "Ciência da Computação",
  campus: "UTFPR-CM",
  discipline: "Interação Humano-Computador (IHC)",
} as const;

export const SECTION_IDS = {
  top: "topo",
  video: "video",
  about: "sobre",
  designSprint: "design-sprint",
  team: "equipe",
  prototype: "prototipo",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const NAV_LINKS: ReadonlyArray<{ id: SectionId; label: string }> = [
  { id: SECTION_IDS.video, label: "Vídeo" },
  { id: SECTION_IDS.about, label: "Sobre nós" },
  { id: SECTION_IDS.designSprint, label: "Design Sprint" },
  { id: SECTION_IDS.team, label: "Nossa Equipe" },
  { id: SECTION_IDS.prototype, label: "Protótipo" },
];

export const TEAM: ReadonlyArray<{ name: string; photo: string }> = [
  { name: "Eduardo Cordeiro Pedrozo", photo: m1 },
  { name: "Higor Pelozatto Reis Vassoler", photo: m2 },
  { name: "João A. S. M. S. Trassi", photo: m3 },
  { name: "Pedro A. S. M. S. Trassi", photo: m4 },
];

export const EMBEDS = {
  // Link do vídeo de apresentação do projeto (YouTube).
  video: "https://www.youtube.com/embed/J0iRyt-d2zE",
  designSprint:
    "https://miro.com/app/live-embed/uXjVHCjc9SA=/?embedMode=view_only_without_ui&moveToViewport=-318%2C-646%2C3631%2C6261&embedId=301973545908",
  prototype:
    "https://www.figma.com/embed?embed_host=share&url=" +
    encodeURIComponent(
      "https://www.figma.com/proto/kPbAaCPp0CcwU8SVWW5Pua/Projeto-Pedro-IHC?node-id=9-86&t=TSEzgnrN2Xgzoplw-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A86&show-proto-sidebar=1",
    ),
} as const;
