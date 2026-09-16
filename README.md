# National Model High School — Website

A premium, production-ready marketing website for **National Model High School**,
an English-medium school following the CBSE pattern (Nursery–Class 10) in Inderwan, Pakhopali Road, Thawe, Gopalganj, Bihar.

Built with **Next.js 15**, **Tailwind CSS v4**, **Framer Motion**, and **Supabase** for the notice/circular management system.

---

## Key Features

- **Cinematic hero section** with background video, Ken Burns-style transitions, and poster fallback
- **Responsive design** — mobile-first, premium visual language across all screen sizes
- **Smooth scroll animations** via Framer Motion (`ScrollReveal`, counters, staggered lists)
- **School sections**: About, Academics, Why Choose Us, Facilities, Leadership, Gallery, Contact
- **Notice & Circular system** — powered by Supabase (database + storage), with a full admin panel
- **Admin panel (`/nmhs-admin`)** — single-admin Supabase Auth, notice CRUD with PDF upload
- **SEO optimized** — Schema.org JSON-LD, Open Graph, Twitter cards, meta descriptions
- **WhatsApp integration** — floating chat button and admission inquiry links
- **Contact form** — direct submission to school management
- **Google Analytics** ready (configure via `NEXT_PUBLIC_GA_MEASUREMENT_ID`)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Backend | Supabase (Database + Auth + Storage) |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
git clone <repository-url>
cd nmhs-school
npm install
```

### Environment Variables

```bash
cp .env.example .env.local
```

Fill in your Supabase credentials (see [SETUP-NOTICES.md](./SETUP-NOTICES.md) for the full guide):

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-code
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```
nmhs-school/
├── app/
│   ├── layout.tsx                 # Root layout, metadata, JSON-LD
│   ├── page.tsx                   # Homepage (all sections)
│   ├── globals.css                # Tailwind + custom design tokens
│   ├── notices/                   # Public notices page
│   ├── nmhs-admin/               # Admin panel (protected)
│   │   ├── (auth)/login/          # Admin login
│   │   └── (dashboard)/           # Admin dashboard, notice CRUD
│   ├── api/download/              # PDF download API route
│   ├── robots.ts                  # SEO robots.txt
│   └── sitemap.ts                 # SEO sitemap
├── components/
│   ├── layout/                    # Navbar, Footer
│   ├── sections/                  # Hero, About, Academics, etc.
│   ├── notices/                   # Notice cards, search, grid
│   ├── gallery/                   # Gallery grid, lightbox
│   └── ui/                        # Buttons, containers, scroll reveal
├── lib/
│   ├── data/                      # School data (school, leadership, etc.)
│   ├── supabase/                  # Supabase client/server helpers
│   ├── notices.ts                 # Notice fetching utilities
│   └── utils.ts                   # Shared utilities
├── public/
│   ├── logo.png                   # School crest
│   ├── hero.mp4                   # Hero background video
│   ├── hero-poster.jpg            # Hero poster fallback
│   └── school images/             # School photos
├── supabase/
│   └── schema.sql                 # Database & storage setup
├── SETUP-NOTICES.md               # Step-by-step Supabase setup guide
└── proxy.ts                       # Middleware for admin auth
```

---

## Notice & Circular System

The notice system is powered by Supabase and provides:

- **Public page (`/notices`)**: Search, view, and download published notices
- **Admin panel (`/nmhs-admin`)**: Login, create, edit, toggle, and delete notices with PDF upload
- **Automatic scheduling**: Set a future publish date and it won't appear until that date

For setup instructions, see [SETUP-NOTICES.md](./SETUP-NOTICES.md).

### Admin Workflow

```
Login at /nmhs-admin  →  Add Notice (PDF + details)  →  Publish  →  Live on the site
```

---

## School Details

| Detail | Value |
|---|---|
| **School Name** | National Model High School |
| **Location** | Inderwan, Pakhopali Road, Thawe, Gopalganj, Bihar – 841440 |
| **Board** | CBSE Pattern |
| **Medium** | English Medium |
| **Classes** | Nursery to Class 8 |
| **UDISE Code** | 10150903702 |
| **Registration No.** | 217122320221126171725 |
| **Trust** | National Model Minority Educational & Welfare Charitable Trust |
| **Certification** | ISO 9001 Certified |
| **Established** | 2012 |

### Management Contacts

| Name | Role | Phone |
|---|---|---|
| Md. Mustafa | Director | +91 99394 54315 |
| Javed Akhter | Managing Director (B. Tech., B. Lib) | +91 99735 54080 |

---

## Architecture

- **Admin (`/nmhs-admin`):** single admin account (Supabase Auth, no
  self-registration), notice CRUD with PDF upload to Supabase Storage.
- **Public (`/notices`):** server-rendered page fetching published notices.
- **Middleware (`proxy.ts`):** protects admin routes, redirects unauthenticated users.
- **Data layer (`lib/data/`):** static school data driving all sections.

---

## Credits

Designed & Developed by [AKA AI Studio](https://aka-ai-studio-eygf.vercel.app/)
