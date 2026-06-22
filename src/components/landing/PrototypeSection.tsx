// TODO: substituir PROTOTYPE_EMBED pelo link de embed do protótipo no Figma.
// Use o link "Share prototype" e troque por https://www.figma.com/embed?embed_host=share&url=<URL>
const PROTOTYPE_EMBED =
  "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FREPLACE_ME";

export function PrototypeSection() {
  return (
    <section id="prototipo" aria-labelledby="prototipo-heading" className="bg-background py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 id="prototipo-heading" className="mb-8 text-center text-3xl font-bold">
          Protótipo — UTFPR Buy e Sell
        </h2>
        <div className="mx-auto h-[720px] w-full max-w-md overflow-hidden rounded-xl border border-border bg-secondary shadow-sm">
          <iframe
            src={PROTOTYPE_EMBED}
            title="Protótipo navegável UTFPR Buy e Sell"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
