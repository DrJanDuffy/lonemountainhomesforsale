import { siteContact } from "@/lib/site-contact";

type GoogleMapEmbedProps = {
  title: string;
  className?: string;
};

function mapEmbedSrc(): string {
  const q = [
    siteContact.streetAddress,
    `${siteContact.addressLocality}, ${siteContact.addressRegion} ${siteContact.postalCode}`,
    siteContact.addressCountry,
  ].join(", ");
  const params = new URLSearchParams({
    q,
    hl: "en",
    z: "14",
    output: "embed",
  });
  return `https://maps.google.com/maps?${params.toString()}`;
}

export function GoogleMapEmbed({ title, className }: GoogleMapEmbedProps) {
  const src = mapEmbedSrc();

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
