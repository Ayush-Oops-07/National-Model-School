import { Suspense } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { isSupabaseConfigured } from "@/lib/notices";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { NoticeGridSkeleton } from "./NoticeSkeleton";
import { LatestNoticesGrid } from "./LatestNoticesGrid";

export function NoticesSection() {
  if (!isSupabaseConfigured()) return null;

  return (
    <section id="notices" className="relative bg-white py-24 sm:py-32 border-b border-line/60 overflow-hidden">
      {/* Subtle glossy background glow */}
      <div className="pointer-events-none absolute right-10 top-1/4 h-80 w-80 rounded-full bg-navy-100/50 blur-3xl" />

      <Container className="relative">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <ScrollReveal className="max-w-xl">
            <div className="section-label mb-4">
              <Sparkles size={13} className="text-teal-600" />
              <span>07 &mdash; Official Circulars</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-950 leading-[1.12]">
              Latest Notices &amp;{" "}
              <span className="brand-gradient-text">Announcements</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-600">
              Official circulars, holiday schedules, examination notices, and administrative notifications for parents and students.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Button href="/notices" variant="secondary" size="md">
              <span>All Notices Archive</span>
              <ArrowRight size={15} />
            </Button>
          </ScrollReveal>
        </div>

        <Suspense fallback={<NoticeGridSkeleton />}>
          <LatestNoticesGrid />
        </Suspense>
      </Container>
    </section>
  );
}
