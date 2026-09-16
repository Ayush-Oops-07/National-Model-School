import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/notices";
import { AdminSidebar } from "./AdminSidebar";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isSupabaseConfigured()) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-mist px-4">
        <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-navy-950/5">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
            <AlertTriangle size={22} />
          </span>
          <h1 className="mt-4 font-display text-lg font-bold text-navy-950">
            Notice system isn&apos;t set up yet
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">
            Supabase environment variables are missing. Follow{" "}
            <code className="rounded bg-mist px-1.5 py-0.5 text-xs">
              SETUP-NOTICES.md
            </code>{" "}
            in the project root — it takes about 10 minutes.
          </p>
        </div>
      </div>
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/nmhs-admin/login");
  }

  return (
    <div className="flex min-h-screen bg-mist">
      <AdminSidebar userEmail={user.email ?? ""} />
      <main className="flex-1 lg:pl-64">
        <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-10">
          {children}
        </div>
      </main>
    </div>
  );
}
