import { galleryImages } from "@/lib/data/gallery";
import { school } from "@/lib/data/school";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Campus Gallery"
          title={`Life at ${school.name}`}
          subtitle="Glimpses of academic ceremonies, national festivals, health welfare camps, and campus life."
          align="center"
          className="mx-auto mb-14"
        />
        <GalleryGrid images={galleryImages} />
      </Container>
    </section>
  );
}
