import { Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { isSupabaseConfigured } from "@/lib/notices";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { NoticeGridSkeleton } from "./NoticeSkeleton";
import { LatestNoticesGrid } from "./LatestNoticesGrid";

export function NoticesSection() {
  if (!isSupabaseConfigured()) return null;

  return (
    <section id="notices" className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Announcements"
          title="Latest Notices & Circulars"
          subtitle="Stay updated with the latest announcements, circulars and important dates from the school."
          align="center"
          className="mx-auto mb-14"
        />

        <Suspense fallback={<NoticeGridSkeleton />}>
          <LatestNoticesGrid />
        </Suspense>

        <div className="mt-10 flex justify-center">
          <Button href="/notices" variant="secondary" size="md">
            View All Notices
            <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
