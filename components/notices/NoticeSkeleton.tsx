export function NoticeCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-navy-950/8 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 shrink-0 rounded-xl bg-navy-100" />
        <div className="min-w-0 flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded bg-navy-100" />
          <div className="h-3 w-1/3 rounded bg-navy-100" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-navy-100" />
        <div className="h-3 w-5/6 rounded bg-navy-100" />
      </div>
      <div className="mt-5 flex gap-3">
        <div className="h-8 flex-1 rounded-full bg-navy-100" />
        <div className="h-8 flex-1 rounded-full bg-navy-100" />
      </div>
    </div>
  );
}

export function NoticeGridSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <NoticeCardSkeleton key={i} />
      ))}
    </div>
  );
}
