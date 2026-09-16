"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, FileText, Upload } from "lucide-react";
import type { Notice } from "@/types";
import { createNotice, updateNotice } from "../../actions";

export function NoticeForm({ notice }: { notice?: Notice }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    setError(null);

    if (notice) {
      formData.set("existing_pdf_path", notice.pdf_path);
    }

    startTransition(async () => {
      const result = notice
        ? await updateNotice(notice.id, formData)
        : await createNotice(formData);

      if (result?.error) setError(result.error);
    });
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="mb-1.5 block text-sm font-medium text-ink-900">
          Notice Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={notice?.title}
          className="w-full rounded-xl border border-navy-950/15 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-navy-900 focus:ring-2 focus:ring-navy-900/15"
          placeholder="e.g. Winter Vacation Notice"
        />
      </div>

      <div>
        <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-ink-900">
          Short Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          defaultValue={notice?.description ?? ""}
          className="w-full rounded-xl border border-navy-950/15 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-navy-900 focus:ring-2 focus:ring-navy-900/15"
          placeholder="One or two lines summarising the notice"
        />
      </div>

      <div>
        <label htmlFor="publish_date" className="mb-1.5 block text-sm font-medium text-ink-900">
          Publish Date
        </label>
        <input
          id="publish_date"
          name="publish_date"
          type="date"
          required
          defaultValue={notice?.publish_date ?? new Date().toISOString().slice(0, 10)}
          className="w-full rounded-xl border border-navy-950/15 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-navy-900 focus:ring-2 focus:ring-navy-900/15 sm:w-56"
        />
        <p className="mt-1.5 text-xs text-ink-600">
          Notices with a future date won&apos;t appear on the site until that date arrives.
        </p>
      </div>

      <div>
        <label htmlFor="pdf" className="mb-1.5 block text-sm font-medium text-ink-900">
          PDF File {notice ? "(leave empty to keep the current file)" : ""}
        </label>
        <label
          htmlFor="pdf"
          className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-navy-950/20 bg-mist px-4 py-4 text-sm text-ink-600 transition-colors hover:border-navy-900/40"
        >
          <Upload size={18} className="shrink-0 text-navy-900" />
          <span className="min-w-0 flex-1 truncate">
            {fileName
              ? fileName
              : notice
                ? "Choose a new PDF to replace the current one"
                : "Choose a PDF file to upload"}
          </span>
        </label>
        <input
          id="pdf"
          name="pdf"
          type="file"
          accept="application/pdf"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
        {notice && (
          <a
            href={notice.pdf_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-navy-900 underline underline-offset-4"
          >
            <FileText size={13} />
            View current PDF
          </a>
        )}
      </div>

      <div className="flex items-center gap-3">
        <input
          id="is_active"
          name="is_active"
          type="checkbox"
          defaultChecked={notice?.is_active ?? true}
          className="h-4 w-4 rounded border-navy-950/30 text-navy-900 focus:ring-navy-900/30"
        />
        <label htmlFor="is_active" className="text-sm font-medium text-ink-900">
          Publish immediately (visible on the website)
        </label>
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {error}
        </div>
      )}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-navy-950 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700 disabled:opacity-60"
        >
          {isPending ? "Saving..." : notice ? "Save Changes" : "Publish Notice"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/nmhs-admin/notices")}
          className="rounded-full px-6 py-2.5 text-sm font-medium text-ink-600 transition-colors hover:bg-navy-100"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
