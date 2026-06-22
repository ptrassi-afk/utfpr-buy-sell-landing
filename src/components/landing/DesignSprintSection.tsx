// TODO: substituir DESIGN_SPRINT_EMBED pelo link de embed do Figma do Design Sprint.
// Formato: https://www.figma.com/embed?embed_host=share&url=<URL_DO_ARQUIVO_FIGMA>
const DESIGN_SPRINT_EMBED =
  "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FREPLACE_ME";

export function DesignSprintSection() {
  return (
    <section id="design-sprint" aria-labelledby="design-sprint-heading" className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 id="design-sprint-heading" className="mb-8 text-center text-3xl font-bold">Design Sprint</h2>
        <div className="mx-auto h-[600px] w-full overflow-hidden rounded-xl border border-border shadow-sm">
          <iframe
            src={DESIGN_SPRINT_EMBED}
            title="Mapa do Design Sprint — UTFPR Buy e Sell"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
