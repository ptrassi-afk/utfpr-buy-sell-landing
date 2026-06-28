import { EMBEDS, SECTION_IDS, SITE } from "@/config/site";
import { EmbedFrame } from "./EmbedFrame";
import { Section } from "./Section";

export function DesignSprintSection() {
  return (
    <Section id={SECTION_IDS.designSprint} title="Design Sprint">
      <EmbedFrame
        src={EMBEDS.designSprint}
        title={`Mapa do Design Sprint — ${SITE.name} (Miro)`}
        variant="tall"
        allow="fullscreen; clipboard-read; clipboard-write"
      />
    </Section>
  );
}
