import { Inbox } from "lucide-react";

export function NoticeEmptyState({
  message = "No notices published yet. Please check back soon.",
}: {
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-navy-950/15 bg-mist px-6 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-100 text-navy-900">
        <Inbox size={26} />
      </span>
      <p className="mt-4 text-sm font-medium text-ink-600">{message}</p>
    </div>
  );
}
