"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Pencil, Trash2, ExternalLink, Loader2 } from "lucide-react";
import type { Notice } from "@/types";
import { deleteNotice, toggleNoticeActive } from "../../actions";

export function NoticesTable({ notices }: { notices: Notice[] }) {
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [confirmId, setConfirmId] = useState<string | null>(null);

  function handleToggle(id: string, current: boolean) {
    setPendingId(id);
    startTransition(async () => {
      await toggleNoticeActive(id, !current);
      setPendingId(null);
    });
  }

  function handleDelete(id: string, pdfPath: string) {
    setPendingId(id);
    startTransition(async () => {
      await deleteNotice(id, pdfPath);
      setPendingId(null);
      setConfirmId(null);
    });
  }

  if (notices.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-navy-950/15 bg-white p-12 text-center">
        <p className="text-sm text-ink-600">
          No notices yet. Click &quot;Add Notice&quot; to publish your first one.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-950/5">
      <div className="hidden grid-cols-[1fr_140px_110px_160px] gap-4 border-b border-navy-950/8 bg-mist px-6 py-3 text-xs font-semibold uppercase tracking-wide text-ink-600 sm:grid">
        <span>Title</span>
        <span>Publish Date</span>
        <span>Status</span>
        <span className="text-right">Actions</span>
      </div>

      <ul className="divide-y divide-navy-950/8">
        {notices.map((notice) => (
          <li
            key={notice.id}
            className="grid grid-cols-1 gap-3 px-6 py-4 sm:grid-cols-[1fr_140px_110px_160px] sm:items-center sm:gap-4"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink-900">{notice.title}</p>
              {notice.description && (
                <p className="mt-0.5 truncate text-xs text-ink-600">{notice.description}</p>
              )}
            </div>

            <span className="text-sm text-ink-600">{notice.publish_date}</span>

            <button
              type="button"
              onClick={() => handleToggle(notice.id, notice.is_active)}
              disabled={isPending && pendingId === notice.id}
              className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                notice.is_active
                  ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                  : "bg-navy-100 text-ink-600 hover:bg-navy-100/70"
              }`}
            >
              {isPending && pendingId === notice.id ? (
                <Loader2 size={12} className="animate-spin" />
              ) : null}
              {notice.is_active ? "Published" : "Unpublished"}
            </button>

            <div className="flex items-center justify-start gap-2 sm:justify-end">
              <a
                href={notice.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View PDF"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-600 transition-colors hover:bg-navy-100 hover:text-navy-950"
              >
                <ExternalLink size={16} />
              </a>
              <Link
                href={`/nmhs-admin/notices/${notice.id}/edit`}
                aria-label="Edit notice"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-600 transition-colors hover:bg-navy-100 hover:text-navy-950"
              >
                <Pencil size={16} />
              </Link>

              {confirmId === notice.id ? (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleDelete(notice.id, notice.pdf_path)}
                    disabled={isPending && pendingId === notice.id}
                    className="rounded-lg bg-red-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-red-700"
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmId(null)}
                    className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-ink-600 hover:bg-navy-100"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmId(notice.id)}
                  aria-label="Delete notice"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-600 transition-colors hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
