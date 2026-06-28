interface EmbedFrameProps {
  src: string;
  title: string;
  /** Define a proporção/altura. `video` => 16:9 responsivo. */
  variant?: "video" | "tall" | "phone";
  allow?: string;
}

const VARIANTS = {
  video: "relative aspect-video w-full",
  tall: "h-[600px] w-full",
  phone: "h-[720px] w-full max-w-md",
} as const;

/**
 * Iframe responsivo e acessível para embeds (YouTube, Figma, Miro).
 */
export function EmbedFrame({
  src,
  title,
  variant = "video",
  allow,
}: EmbedFrameProps) {
  return (
    <div
      className={`mx-auto overflow-hidden rounded-xl border border-border bg-secondary shadow-sm ${VARIANTS[variant]}`}
    >
      <iframe
        src={src}
        title={title}
        allow={allow}
        allowFullScreen
        className={
          variant === "video"
            ? "absolute inset-0 h-full w-full"
            : "h-full w-full"
        }
      />
    </div>
  );
}
