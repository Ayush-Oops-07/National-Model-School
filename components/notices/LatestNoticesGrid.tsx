import { getLatestNotices } from "@/lib/notices";
import { NoticeCard } from "./NoticeCard";
import { NoticeEmptyState } from "./EmptyState";

export async function LatestNoticesGrid() {
  const notices = await getLatestNotices(5);

  if (notices.length === 0) {
    return <NoticeEmptyState />;
  }

  return (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto">
      {notices.map((notice, i) => (
        <NoticeCard key={notice.id} notice={notice} delay={i * 0.06} />
      ))}
    </div>
  );
}
