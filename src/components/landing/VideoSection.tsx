import { EMBEDS, SECTION_IDS, SITE } from "@/config/site";
import { EmbedFrame } from "./EmbedFrame";
import { Section } from "./Section";

export function VideoSection() {
  return (
    <Section id={SECTION_IDS.video} title="Vídeo" maxWidth="md">
      <EmbedFrame
        src={EMBEDS.video}
        title={`Vídeo do projeto ${SITE.name}`}
        variant="video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </Section>
  );
}
