import Image from "next/image";
import { galleryImagePaths } from "@/lib/gallery-images";

export function PhotoGallery() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {galleryImagePaths.map((src, index) => (
        <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone-200 shadow-sm">
          <Image
            src={src}
            alt={`Lone Mountain and Las Vegas area real estate photography ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3}
          />
        </div>
      ))}
    </div>
  );
}
