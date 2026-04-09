import { getOpenHousesMapEmbedSrc } from "@/lib/site-contact";

type OpenHousesMapEmbedProps = {
  className?: string;
};

export function OpenHousesMapEmbed({ className }: OpenHousesMapEmbedProps) {
  return (
    <div className={className}>
      <iframe
        title="Map of open house locations — Lone Mountain and Las Vegas area"
        src={getOpenHousesMapEmbedSrc()}
        className="aspect-[4/3] h-auto min-h-[320px] w-full max-h-[560px] rounded-lg border border-stone-200 shadow-sm sm:min-h-[400px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
