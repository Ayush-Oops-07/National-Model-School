export function NoticeCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-line bg-white p-6 sm:p-7 shadow-2xs">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="h-3 w-16 rounded bg-line" />
        <div className="h-3 w-20 rounded bg-line" />
      </div>
      <div className="space-y-2 mt-2">
        <div className="h-5 w-4/5 rounded bg-line" />
        <div className="h-4 w-3/5 rounded bg-line" />
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-line-subtle" />
        <div className="h-3 w-4/5 rounded bg-line-subtle" />
      </div>
      <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between">
        <div className="h-4 w-24 rounded bg-line" />
        <div className="h-6 w-14 rounded bg-line" />
      </div>
    </div>
  );
}

export function NoticeGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <NoticeCardSkeleton key={i} />
      ))}
    </div>
  );
}
