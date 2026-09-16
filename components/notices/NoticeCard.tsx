import { FileText, CalendarDays, ExternalLink, Download } from "lucide-react";
import type { Notice } from "@/types";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function NoticeCard({ notice, delay = 0 }: { notice: Notice; delay?: number }) {
  const downloadHref = `/api/download?url=${encodeURIComponent(
    notice.pdf_url
  )}&name=${encodeURIComponent(notice.title.replace(/\s+/g, "-") + ".pdf")}`;

  return (
    <ScrollReveal
      delay={delay}
      className="group flex flex-col rounded-2xl border border-navy-950/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(11,46,99,0.18)]"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-100 text-navy-900 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
          <FileText size={20} strokeWidth={2} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-base font-bold leading-snug text-navy-950 sm:text-lg">
            {notice.title}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-gold-600">
            <CalendarDays size={13} />
            {formatDate(notice.publish_date)}
          </p>
        </div>
      </div>

      {notice.description && (
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-600">
          {notice.description}
        </p>
      )}

      <div className="mt-5 flex gap-3 pt-1">
        <a
          href={notice.pdf_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-navy-950/15 px-4 py-2 text-xs font-semibold text-navy-950 transition-colors hover:bg-navy-100"
        >
          <ExternalLink size={14} />
          Read
        </a>
        <a
          href={downloadHref}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-navy-950 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-700"
        >
          <Download size={14} />
          Download
        </a>
      </div>
    </ScrollReveal>
  );
}
