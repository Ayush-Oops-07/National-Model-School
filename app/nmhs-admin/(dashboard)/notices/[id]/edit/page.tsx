import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { NoticeForm } from "../../NoticeForm";

export default async function EditNoticePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: notice } = await supabase
    .from("notices")
    .select("*")
    .eq("id", id)
    .single();

  if (!notice) notFound();

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
        Edit Notice
      </h1>
      <p className="mt-1 text-sm text-ink-600">{notice.title}</p>

      <div className="mt-8 max-w-2xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5 sm:p-8">
        <NoticeForm notice={notice} />
      </div>
    </div>
  );
}
