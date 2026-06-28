import { EMBEDS, SECTION_IDS, SITE } from "@/config/site";
import { EmbedFrame } from "./EmbedFrame";
import { Section } from "./Section";

export function PrototypeSection() {
  return (
    <Section
      id={SECTION_IDS.prototype}
      title={`Protótipo — ${SITE.name}`}
      maxWidth="sm"
    >
      <EmbedFrame
        src={EMBEDS.prototype}
        title={`Protótipo navegável ${SITE.name}`}
        variant="phone"
      />
    </Section>
  );
}
