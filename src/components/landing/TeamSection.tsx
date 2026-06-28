import { SECTION_IDS, TEAM } from "@/config/site";
import { Section } from "./Section";

export function TeamSection() {
  return (
    <Section id={SECTION_IDS.team} title="Nossa Equipe" tone="muted">
      <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {TEAM.map((member) => (
          <li
            key={member.name}
            className="flex flex-col items-center text-center"
          >
            <img
              src={member.photo}
              alt={`Foto de ${member.name}`}
              loading="lazy"
              className="h-32 w-32 rounded-full border-4 border-primary object-cover shadow-sm"
            />
            <p className="mt-3 font-medium text-foreground">{member.name}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
