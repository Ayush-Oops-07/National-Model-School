import type { NavLink, StatItem } from "@/types";

export const school = {
  name: "National Model High School",
  shortName: "NMHS",
  motto: "CBSE Pattern | English Medium",
  tagline: "Quality Education in Thawe, Gopalganj",
  established: 2012,
  board: "CBSE Pattern",
  medium: "English Medium",
  classRange: "Nursery to Class 10",
  udise: "10150903702",
  registrationNumber: "217122320221126171725",
  trust: "National Model Minority Educational & Welfare Charitable Trust",
  certification: "ISO 9001 Certified",
  about:
    "National Model High School is an English-medium school following the CBSE pattern, located at Inderwan, Pakhopali Road, Thawe, Gopalganj, Bihar. The school is run by National Model Minority Educational & Welfare Charitable Trust (Regd. No. 217122320221126171725, UDISE Code: 10150903702).",
  address: {
    village: "Inderwan / Inderwa Abadullah",
    road: "Pakhopali Road",
    area: "Thawe",
    district: "Gopalganj",
    state: "Bihar",
    pin: "841440",
    line1: "Inderwan, Pakhopali Road",
    line2: "Thawe, Gopalganj, Bihar – 841440",
    full: "Inderwan, Pakhopali Road, Thawe, Gopalganj, Bihar – 841440",
  },
  contacts: [
    {
      name: "Md. Mustafa",
      role: "Director",
      phone: "+91 99394 54315",
      phoneRaw: "9939454315",
      phoneHref: "tel:+919939454315",
    },
    {
      name: "Javed Akhter",
      role: "Managing Director",
      qualification: "B. Tech., B. Lib",
      phone: "+91 99735 54080",
      phoneRaw: "9973554080",
      phoneHref: "tel:+919973554080",
    },
  ],
  phone: "+91 99394 54315",
  phoneHref: "tel:+919939454315",
  whatsappNumber: "919939454315",
  whatsappHref:
    "https://wa.me/919939454315?text=" +
    encodeURIComponent(
      "Hello National Model High School, I would like to enquire about admission."
    ),
  // Unprovided contact channels kept cleanly marked for manual configuration:
  email: "", // [MANUAL CONFIGURATION] Not provided — configure when available
  mapUrl: "", // [MANUAL CONFIGURATION] Not provided — configure when available
  domain: "", // [MANUAL CONFIGURATION] Not provided — configure when available
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Notices", href: "/notices" },
  { label: "Academics", href: "/#academics" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export const stats: StatItem[] = [
  { id: "established", value: 2012, label: "Year Established" },
  { id: "classes", value: 13, suffix: "+", label: "Classes (Nur to X)" },
  { id: "board", value: 100, suffix: "%", label: "CBSE Aligned Pattern" },
  { id: "medium", value: 1, suffix: "st", label: "English Medium School" },
];
