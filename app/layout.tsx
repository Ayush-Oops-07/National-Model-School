import type { Metadata } from "next";
import "./globals.css";
import { school } from "@/lib/data/school";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";

// Configured via NEXT_PUBLIC_SITE_URL or fallback placeholder until domain is provided
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nationalmodelhighschool.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${school.name} | CBSE Pattern School in Thawe, Gopalganj`,
    template: `%s | ${school.name}`,
  },
  description:
    "National Model High School is an English-medium school following the CBSE pattern, located at Inderwan, Pakhopali Road, Thawe, Gopalganj, Bihar (UDISE: 10150903702).",
  keywords: [
    "National Model High School",
    "NMHS",
    "CBSE Pattern School Gopalganj",
    "English Medium School Thawe",
    "School in Inderwan",
    "School in Thawe Gopalganj",
    "National Model High School Thawe",
  ],
  authors: [{ name: school.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: school.name,
    title: `${school.name} | CBSE Pattern School in Thawe, Gopalganj`,
    description:
      "An English-medium school following the CBSE pattern from Nursery to Class 10 in Inderwan, Thawe, Gopalganj, Bihar.",
    images: [
      {
        url: "/hero-poster.jpg",
        width: 1920,
        height: 1080,
        alt: school.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${school.name} | CBSE Pattern School in Thawe, Gopalganj`,
    description:
      "An English-medium school following the CBSE pattern from Nursery to Class 10 in Inderwan, Thawe, Gopalganj, Bihar.",
    images: ["/hero-poster.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    name: school.name,
    alternateName: school.shortName,
    description:
      "National Model High School is an English-medium school following the CBSE pattern, located at Inderwan, Pakhopali Road, Thawe, Gopalganj, Bihar.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/hero-poster.jpg`,
    foundingDate: String(school.established),
    identifier: school.udise,
    address: {
      "@type": "PostalAddress",
      streetAddress: school.address.line1,
      addressLocality: "Thawe",
      addressRegion: "Bihar",
      postalCode: school.address.pin,
      addressCountry: "IN",
    },
    telephone: school.phone,
    areaServed: "Thawe, Gopalganj, Bihar",
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <a href="#top" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppButton />
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
