// Board do Miro com o Design Sprint completo.
const DESIGN_SPRINT_EMBED =
  "https://miro.com/app/live-embed/uXjVHCjc9SA=/?embedMode=view_only_without_ui&moveToViewport=-318%2C-646%2C3631%2C6261&embedId=301973545908";

export function DesignSprintSection() {
  return (
    <section id="design-sprint" aria-labelledby="design-sprint-heading" className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 id="design-sprint-heading" className="mb-8 text-center text-3xl font-bold">Design Sprint</h2>
        <div className="mx-auto h-[600px] w-full overflow-hidden rounded-xl border border-border shadow-sm">
          <iframe
            src={DESIGN_SPRINT_EMBED}
            title="Mapa do Design Sprint — UTFPR Buy e Sell (Miro)"
            allow="fullscreen; clipboard-read; clipboard-write"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
