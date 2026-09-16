"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand, Sparkles } from "lucide-react";
import type { GalleryImage } from "@/types";
import { Lightbox } from "./Lightbox";

const categoryTags: Record<string, string> = {
  "gallery-campus-building": "CAMPUS",
  "gallery-main-gate": "ENTRANCE",
  "gallery-flag-hoisting": "EVENTS & CELEBRATIONS",
  "gallery-awards-ceremony": "STUDENT HONOURS",
  "gallery-cultural-parade": "ACTIVITIES",
  "gallery-dental-camp": "STUDENT HEALTH",
  "gallery-health-camp": "HEALTH CAMPS",
  "gallery-doctor-consultation": "COMMUNITY WELFARE",
};

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* Editorial Masonry-Style Photo Grid with Glossy Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
        {images.map((image, i) => {
          // Layout spans:
          // Image 0: Large Featured Lead (spans 8 cols)
          // Image 1: Side Feature (spans 4 cols)
          // Image 2: Regular (spans 4 cols)
          // Image 3: Regular (spans 4 cols)
          // Image 4: Regular (spans 4 cols)
          // Image 5: Wide Supporting (spans 6 cols)
          // Image 6: Wide Supporting (spans 6 cols)
          let colSpan = "sm:col-span-1 lg:col-span-4";
          let aspect = "aspect-[4/3]";

          if (i === 0) {
            colSpan = "sm:col-span-2 lg:col-span-8";
            aspect = "aspect-[16/10]";
          } else if (i === 1) {
            colSpan = "sm:col-span-1 lg:col-span-4";
            aspect = "aspect-[4/3] lg:aspect-auto lg:h-full";
          } else if (i === 5 || i === 6) {
            colSpan = "sm:col-span-1 lg:col-span-6";
            aspect = "aspect-[16/10]";
          }

          const tag = categoryTags[image.id] || "CAMPUS LIFE";

          return (
            <button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`group relative overflow-hidden rounded-3xl border border-white/90 bg-white p-2 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-navy-900/25 hover:shadow-xl ${colSpan}`}
              aria-label={`View larger image: ${image.alt}`}
            >
              <div className={`relative w-full ${aspect} overflow-hidden rounded-2xl bg-slate-100`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    i === 0
                      ? "(min-width: 1024px) 66vw, 100vw"
                      : "(min-width: 1024px) 33vw, 50vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Floating Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 rounded-xl border border-white/40 bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-2xs">
                    <Sparkles size={11} className="text-gold-400" />
                    <span>{tag}</span>
                  </span>
                </div>

                {/* Bottom Caption & Expand Icon */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between transition-all duration-300">
                  <p className="text-xs text-white font-medium line-clamp-2 text-left pr-3 drop-shadow-sm">
                    {image.alt}
                  </p>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/25 text-white backdrop-blur-md border border-white/40 group-hover:bg-white group-hover:text-navy-900 transition-colors">
                    <Expand size={15} />
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <Lightbox
        images={images}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={(next) => setActiveIndex(next)}
      />
    </>
  );
}
