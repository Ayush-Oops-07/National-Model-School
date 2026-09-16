import { createClient } from "@/lib/supabase/server";
import type { Notice } from "@/types";

/**
 * Fetches the most recent published notices for the homepage.
 * RLS ensures only active + already-published notices are ever returned
 * to unauthenticated visitors.
 */
export async function getLatestNotices(limit = 5): Promise<Notice[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("notices")
    .select("*")
    .order("publish_date", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("getLatestNotices error:", error.message);
    return [];
  }
  return data ?? [];
}

/** Fetches all published notices, newest first, for the /notices page. */
export async function getAllNotices(): Promise<Notice[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("notices")
    .select("*")
    .order("publish_date", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getAllNotices error:", error.message);
    return [];
  }
  return data ?? [];
}

/** True once NEXT_PUBLIC_SUPABASE_URL / ANON_KEY are set. */
export function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
