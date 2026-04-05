type GoogleMapEmbedProps = {
  title: string;
  className?: string;
};

export function GoogleMapEmbed({ title, className }: GoogleMapEmbedProps) {
  const src =
    "https://maps.google.com/maps?q=9406+W+Lake+Mead+Blvd,+Suite+100,+Las+Vegas,+NV+89134&hl=en&z=14&output=embed";

  return (
    <div className={className}>
      <iframe
        title={title}
        src={src}
        className="h-full min-h-[280px] w-full rounded-lg border border-stone-200 shadow-sm"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
