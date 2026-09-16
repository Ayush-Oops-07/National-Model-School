import { ArrowRight, Download, FileText } from "lucide-react";
import type { Notice } from "@/types";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function parseDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleDateString("en-IN", { month: "short" }).toUpperCase();
  const year = String(d.getFullYear());
  return { day, month, year };
}

export function NoticeCard({ notice, delay = 0 }: { notice: Notice; delay?: number }) {
  const { day, month, year } = parseDate(notice.publish_date);
  const downloadHref = `/api/download?url=${encodeURIComponent(
    notice.pdf_url
  )}&name=${encodeURIComponent(notice.title.replace(/\s+/g, "-") + ".pdf")}`;

  return (
    <ScrollReveal
      delay={delay}
      className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 rounded-3xl border border-navy-900/10 bg-white/90 p-5 sm:p-6 shadow-2xs backdrop-blur-md transition-all duration-300 hover:border-navy-900/30 hover:bg-navy-100/30 hover:shadow-md pl-6 sm:pl-7"
    >
      {/* Subtle Brand-Colored Vertical Indicator on Left */}
      <div className="absolute left-0 inset-y-4 w-1.5 rounded-r-full brand-gradient opacity-80 group-hover:opacity-100 group-hover:scale-y-105 transition-all duration-300" />

      {/* Date Block + Notice Information */}
      <div className="flex items-start gap-4 sm:gap-6 flex-1 min-w-0">
        {/* Date Stack Block */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-navy-900/10 bg-canvas p-2.5 sm:p-3 min-w-[62px] text-center shadow-2xs group-hover:bg-white transition-colors">
          <span className="font-display text-xl sm:text-2xl font-extrabold text-navy-900 leading-none">
            {day}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 mt-1 leading-none">
            {month}
          </span>
          <span className="text-[9px] font-mono text-ink-400 mt-0.5 leading-none">
            {year}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 rounded-md bg-teal-100/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal-700">
              <FileText size={11} />
              <span>Official Circular</span>
            </span>
          </div>

          <a
            href={notice.pdf_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-display text-base sm:text-lg font-bold text-ink-950 group-hover:text-navy-900 transition-colors leading-snug"
          >
            {notice.title}
          </a>

          {notice.description && (
            <p className="mt-1.5 text-xs sm:text-sm text-ink-600 line-clamp-2 leading-relaxed">
              {notice.description}
            </p>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end pt-3 sm:pt-0 border-t sm:border-t-0 border-navy-900/10">
        <a
          href={notice.pdf_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl border border-navy-900/15 bg-white px-4 py-2 text-xs font-bold text-navy-900 shadow-2xs group-hover:bg-navy-900 group-hover:text-white transition-all duration-200"
        >
          <span>VIEW</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>

        <a
          href={downloadHref}
          aria-label={`Download PDF: ${notice.title}`}
          className="inline-flex items-center justify-center rounded-xl border border-navy-900/10 bg-canvas p-2 text-ink-600 hover:text-navy-900 hover:bg-white transition-colors"
        >
          <Download size={14} />
        </a>
      </div>
    </ScrollReveal>
  );
}
