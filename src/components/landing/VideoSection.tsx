// TODO: substituir VIDEO_EMBED_URL pelo link real do vídeo (YouTube embed).
const VIDEO_EMBED_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

export function VideoSection() {
  return (
    <section id="video" aria-labelledby="video-heading" className="bg-background py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 id="video-heading" className="mb-8 text-center text-3xl font-bold">Vídeo</h2>
        <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-xl border border-border shadow-sm">
          <iframe
            src={VIDEO_EMBED_URL}
            title="Vídeo do projeto UTFPR Buy e Sell"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
