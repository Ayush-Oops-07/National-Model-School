"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Notice } from "@/types";
import { NoticeCard } from "./NoticeCard";
import { NoticeEmptyState } from "./EmptyState";

export function NoticesSearchGrid({ notices }: { notices: Notice[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return notices;
    return notices.filter((n) => n.title.toLowerCase().includes(q));
  }, [notices, query]);

  return (
    <div>
      <div className="relative mx-auto mb-10 max-w-md">
        <Search
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-300"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search notices by title..."
          className="w-full rounded-full border border-navy-950/15 bg-white py-3 pl-11 pr-4 text-sm text-ink-900 outline-none transition-colors focus:border-navy-900 focus:ring-2 focus:ring-navy-900/15"
        />
      </div>

      {filtered.length === 0 ? (
        <NoticeEmptyState
          message={
            query
              ? `No notices found matching "${query}".`
              : "No notices published yet. Please check back soon."
          }
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((notice, i) => (
            <NoticeCard key={notice.id} notice={notice} delay={(i % 3) * 0.06} />
          ))}
        </div>
      )}
    </div>
  );
}
