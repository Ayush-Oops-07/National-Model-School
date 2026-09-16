import { Sparkles } from "lucide-react";
import { galleryImages } from "@/lib/data/gallery";
import { school } from "@/lib/data/school";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-canvas py-24 sm:py-32 border-b border-line/60 overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl" />

      <Container className="relative">
        {/* Section Header */}
        <div className="flex flex-col max-w-2xl mb-14">
          <ScrollReveal>
            <div className="section-label mb-4">
              <Sparkles size={13} className="text-teal-600" />
              <span>06 &mdash; Campus Gallery</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-950 leading-[1.12]">
              Life at{" "}
              <span className="brand-gradient-text">{school.shortName}</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-600">
              Photographic records of national ceremonies, health awareness checkups, prize distributions, and campus life at Inderwan, Thawe.
            </p>
          </ScrollReveal>
        </div>

        <GalleryGrid images={galleryImages} />
      </Container>
    </section>
  );
}
