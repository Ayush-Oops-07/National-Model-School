import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { getAllNotices, isSupabaseConfigured } from "@/lib/notices";
import { NoticesSearchGrid } from "@/components/notices/NoticesSearchGrid";
import { NoticeEmptyState } from "@/components/notices/EmptyState";
import { school } from "@/lib/data/school";

export const metadata: Metadata = {
  title: "Notices & Circulars",
  description: `Official notices, circulars and announcements from ${school.name}, Thawe, Gopalganj.`,
};

export const revalidate = 60;

export default async function NoticesPage() {
  const configured = isSupabaseConfigured();
  const notices = configured ? await getAllNotices() : [];

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1 bg-white pb-20 pt-32 sm:pb-28 sm:pt-40">
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Announcements
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              Notices &amp; Circulars
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
              Official circulars, notifications and important updates from {school.name}, newest first.
            </p>
          </div>

          {!configured ? (
            <NoticeEmptyState message="The notice board is being initialized for National Model High School. Please check back soon." />
          ) : (
            <NoticesSearchGrid notices={notices} />
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
