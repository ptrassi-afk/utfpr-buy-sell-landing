// Embed do protótipo Figma — Projeto Pedro IHC (UTFPR Buy e Sell).
const PROTOTYPE_EMBED =
  "https://www.figma.com/embed?embed_host=share&url=" +
  encodeURIComponent(
    "https://www.figma.com/design/kPbAaCPp0CcwU8SVWW5Pua/Projeto-Pedro-IHC?node-id=0-1&t=CrPw1I8qjNX6blPy-1",
  );

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
