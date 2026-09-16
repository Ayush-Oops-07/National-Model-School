-- ============================================================================
-- National Model High School — Notice & Circular System
-- Run this whole file once in Supabase Dashboard → SQL Editor → New query.
-- ============================================================================

-- 1. Table -------------------------------------------------------------------
create table if not exists public.notices (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  pdf_url text not null,        -- public URL of the uploaded PDF
  pdf_path text not null,       -- storage path, e.g. "notices/abc123.pdf" (used for deletion)
  publish_date date not null default current_date,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists notices_publish_date_idx
  on public.notices (publish_date desc);

-- 2. Keep updated_at current on every edit -----------------------------------
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists notices_set_updated_at on public.notices;
create trigger notices_set_updated_at
before update on public.notices
for each row execute function public.set_updated_at();

-- 3. Row Level Security -------------------------------------------------------
alter table public.notices enable row level security;

-- Public visitors (and the site itself, unauthenticated) can only ever see
-- notices that are marked active AND whose publish date has arrived.
drop policy if exists "Public can view published notices" on public.notices;
create policy "Public can view published notices"
on public.notices for select
to anon, authenticated
using (is_active = true and publish_date <= current_date);

-- The single logged-in admin can do everything (used by the /nmhs-admin panel).
drop policy if exists "Authenticated can manage notices" on public.notices;
create policy "Authenticated can manage notices"
on public.notices for all
to authenticated
using (true)
with check (true);

-- ============================================================================
-- 4. Storage — create the bucket first via Dashboard → Storage → New bucket:
--      Name: notices
--      Public bucket: ON
--    Then run the policies below.
-- ============================================================================

drop policy if exists "Public can read notice PDFs" on storage.objects;
create policy "Public can read notice PDFs"
on storage.objects for select
to public
using (bucket_id = 'notices');

drop policy if exists "Authenticated can upload notice PDFs" on storage.objects;
create policy "Authenticated can upload notice PDFs"
on storage.objects for insert
to authenticated
with check (bucket_id = 'notices');

drop policy if exists "Authenticated can update notice PDFs" on storage.objects;
create policy "Authenticated can update notice PDFs"
on storage.objects for update
to authenticated
using (bucket_id = 'notices');

drop policy if exists "Authenticated can delete notice PDFs" on storage.objects;
create policy "Authenticated can delete notice PDFs"
on storage.objects for delete
to authenticated
using (bucket_id = 'notices');
