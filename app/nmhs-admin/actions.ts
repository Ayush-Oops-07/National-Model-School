"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/notices";

const BUCKET = "notices";

export type ActionResult = { error?: string; success?: boolean };

// ---------------------------------------------------------------------------
// Auth
// ---------------------------------------------------------------------------

export async function signIn(formData: FormData): Promise<ActionResult> {
  if (!isSupabaseConfigured()) {
    return {
      error:
        "Supabase isn't configured yet. See SETUP-NOTICES.md to finish setup.",
    };
  }

  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  if (!email || !password) {
    return { error: "Please enter both email and password." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: "Incorrect email or password." };
  }

  redirect("/nmhs-admin");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/nmhs-admin/login");
}

// ---------------------------------------------------------------------------
// Notices — CRUD
// ---------------------------------------------------------------------------

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function createNotice(formData: FormData): Promise<ActionResult> {
  const supabase = await createClient();

  const title = String(formData.get("title") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const publishDate = String(formData.get("publish_date") || "");
  const isActive = formData.get("is_active") === "on";
  const file = formData.get("pdf") as File | null;

  if (!title) return { error: "Title is required." };
  if (!publishDate) return { error: "Publish date is required." };
  if (!file || file.size === 0) return { error: "Please select a PDF file." };
  if (file.type !== "application/pdf") {
    return { error: "Only PDF files are allowed." };
  }

  const path = `${Date.now()}-${slugify(title)}.pdf`;

  const { error: uploadError } = await supabase.storage
    .from(BUCKET)
    .upload(path, file, { contentType: "application/pdf" });

  if (uploadError) {
    return { error: `Upload failed: ${uploadError.message}` };
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(BUCKET).getPublicUrl(path);

  const { error: insertError } = await supabase.from("notices").insert({
    title,
    description: description || null,
    pdf_url: publicUrl,
    pdf_path: path,
    publish_date: publishDate,
    is_active: isActive,
  });

  if (insertError) {
    // Roll back the uploaded file if the DB insert failed
    await supabase.storage.from(BUCKET).remove([path]);
    return { error: `Could not save notice: ${insertError.message}` };
  }

  revalidatePath("/nmhs-admin/notices");
  revalidatePath("/notices");
  revalidatePath("/");
  redirect("/nmhs-admin/notices");
}

export async function updateNotice(
  id: string,
  formData: FormData
): Promise<ActionResult> {
  const supabase = await createClient();

  const title = String(formData.get("title") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const publishDate = String(formData.get("publish_date") || "");
  const isActive = formData.get("is_active") === "on";
  const file = formData.get("pdf") as File | null;
  const existingPath = String(formData.get("existing_pdf_path") || "");

  if (!title) return { error: "Title is required." };
  if (!publishDate) return { error: "Publish date is required." };

  let pdf_url: string | undefined;
  let pdf_path: string | undefined;

  if (file && file.size > 0) {
    if (file.type !== "application/pdf") {
      return { error: "Only PDF files are allowed." };
    }
    const path = `${Date.now()}-${slugify(title)}.pdf`;
    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(path, file, { contentType: "application/pdf" });

    if (uploadError) {
      return { error: `Upload failed: ${uploadError.message}` };
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from(BUCKET).getPublicUrl(path);

    pdf_url = publicUrl;
    pdf_path = path;
  }

  const { error: updateError } = await supabase
    .from("notices")
    .update({
      title,
      description: description || null,
      publish_date: publishDate,
      is_active: isActive,
      ...(pdf_url && pdf_path ? { pdf_url, pdf_path } : {}),
    })
    .eq("id", id);

  if (updateError) {
    return { error: `Could not update notice: ${updateError.message}` };
  }

  // If a new file replaced an old one, clean up the old file afterward
  if (pdf_path && existingPath && existingPath !== pdf_path) {
    await supabase.storage.from(BUCKET).remove([existingPath]);
  }

  revalidatePath("/nmhs-admin/notices");
  revalidatePath("/notices");
  revalidatePath("/");
  redirect("/nmhs-admin/notices");
}

export async function deleteNotice(id: string, pdfPath: string) {
  const supabase = await createClient();

  await supabase.storage.from(BUCKET).remove([pdfPath]);
  await supabase.from("notices").delete().eq("id", id);

  revalidatePath("/nmhs-admin/notices");
  revalidatePath("/notices");
  revalidatePath("/");
}

export async function toggleNoticeActive(id: string, nextValue: boolean) {
  const supabase = await createClient();
  await supabase.from("notices").update({ is_active: nextValue }).eq("id", id);

  revalidatePath("/nmhs-admin/notices");
  revalidatePath("/notices");
  revalidatePath("/");
}
