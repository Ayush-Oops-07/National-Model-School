import { getLatestNotices } from "@/lib/notices";
import { NoticeCard } from "./NoticeCard";
import { NoticeEmptyState } from "./EmptyState";

export async function LatestNoticesGrid() {
  const notices = await getLatestNotices(5);

  if (notices.length === 0) {
    return <NoticeEmptyState />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {notices.map((notice, i) => (
        <NoticeCard key={notice.id} notice={notice} delay={(i % 3) * 0.08} />
      ))}
    </div>
  );
}
