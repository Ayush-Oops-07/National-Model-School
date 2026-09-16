export interface AcademicStage {
  id: string;
  label: string;
  range: string;
  description: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  icon: string; // lucide icon name
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  qualification?: string;
  phone?: string;
  order: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Notice {
  id: string;
  title: string;
  description: string | null;
  pdf_url: string;
  pdf_path: string;
  publish_date: string; // ISO date, e.g. "2026-07-08"
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
