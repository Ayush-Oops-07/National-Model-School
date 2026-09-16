import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { NoticesTable } from "./NoticesTable";

export default async function AdminNoticesPage() {
  const supabase = await createClient();
  const { data: notices } = await supabase
    .from("notices")
    .select("*")
    .order("publish_date", { ascending: false })
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-display text-2xl font-bold text-navy-950">Notices</h1>
          <p className="mt-1 text-sm text-ink-600">
            Add, edit, publish or remove notices and circulars.
          </p>
        </div>
        <Link
          href="/nmhs-admin/notices/new"
          className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
        >
          <PlusCircle size={17} />
          Add Notice
        </Link>
      </div>

      <div className="mt-8">
        <NoticesTable notices={notices ?? []} />
      </div>
    </div>
  );
}
