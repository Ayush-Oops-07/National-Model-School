import Link from "next/link";
import { FileText, CheckCircle2, EyeOff, PlusCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const { data: notices } = await supabase
    .from("notices")
    .select("id, title, is_active, publish_date, created_at")
    .order("created_at", { ascending: false });

  const all = notices ?? [];
  const active = all.filter((n) => n.is_active).length;
  const inactive = all.length - active;
  const latest = all[0];

  const stats = [
    { label: "Total Notices", value: all.length, icon: FileText, color: "bg-navy-100 text-navy-900" },
    { label: "Published", value: active, icon: CheckCircle2, color: "bg-emerald-100 text-emerald-700" },
    { label: "Unpublished", value: inactive, icon: EyeOff, color: "bg-amber-100 text-amber-700" },
  ];

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-display text-2xl font-bold text-navy-950">Dashboard</h1>
          <p className="mt-1 text-sm text-ink-600">
            A quick overview of your notices and circulars.
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

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5"
          >
            <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.color}`}>
              <stat.icon size={20} />
            </span>
            <p className="mt-4 font-display text-3xl font-bold text-navy-950">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-ink-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5">
        <h2 className="font-display text-base font-bold text-navy-950">
          Most Recent Notice
        </h2>
        {latest ? (
          <div className="mt-3 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-ink-900">{latest.title}</p>
              <p className="mt-0.5 text-xs text-ink-600">
                Publish date: {latest.publish_date}
              </p>
            </div>
            <Link
              href="/nmhs-admin/notices"
              className="shrink-0 text-sm font-semibold text-navy-900 underline underline-offset-4"
            >
              Manage all
            </Link>
          </div>
        ) : (
          <p className="mt-3 text-sm text-ink-600">
            No notices yet — add your first one to get started.
          </p>
        )}
      </div>
    </div>
  );
}
