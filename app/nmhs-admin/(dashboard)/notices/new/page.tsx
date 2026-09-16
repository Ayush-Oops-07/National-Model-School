import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { NoticeForm } from "../NoticeForm";

export default function NewNoticePage() {
  return (
    <div>
      <Link
        href="/nmhs-admin/notices"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-navy-950"
      >
        <ArrowLeft size={16} />
        Back to Notices
      </Link>

      <h1 className="mt-4 font-display text-2xl font-bold text-navy-950">
        Add Notice
      </h1>
      <p className="mt-1 text-sm text-ink-600">
        Upload a PDF and publish a new notice or circular.
      </p>

      <div className="mt-8 max-w-2xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5 sm:p-8">
        <NoticeForm />
      </div>
    </div>
  );
}
