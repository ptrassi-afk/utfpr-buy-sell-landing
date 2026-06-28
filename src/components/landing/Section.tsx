import type { ReactNode } from "react";

type Tone = "default" | "muted";

interface SectionProps {
  id: string;
  title: string;
  /** Largura máxima do conteúdo. */
  maxWidth?: "sm" | "md" | "lg";
  tone?: Tone;
  children: ReactNode;
}

const MAX_WIDTHS = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
} as const;

const TONES: Record<Tone, string> = {
  default: "bg-background",
  muted: "bg-secondary/40",
};

/**
 * Wrapper consistente para todas as seções da landing.
 * Padroniza heading acessível (aria-labelledby), espaçamento e tom de fundo.
 */
export function Section({
  id,
  title,
  maxWidth = "lg",
  tone = "default",
  children,
}: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`${TONES[tone]} py-16`}
    >
      <div className={`mx-auto ${MAX_WIDTHS[maxWidth]} px-4`}>
        <h2
          id={headingId}
          className="mb-8 text-center text-3xl font-bold"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
