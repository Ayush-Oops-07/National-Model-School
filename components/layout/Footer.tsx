import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { school, navLinks } from "@/lib/data/school";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-canvas border-t border-navy-900/10 text-ink-900 relative overflow-hidden">
      {/* Subtle bottom glossy reflection */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-64 w-[600px] rounded-full bg-navy-100/40 blur-3xl" />

      <Container className="py-16 sm:py-20 relative">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Address Column (Spans 5 cols) */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-white shadow-sm ring-1 ring-navy-900/10">
                <Image
                  src="/logo.png"
                  alt={`${school.name} logo`}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <div className="flex flex-col">
                <span className="font-display text-base font-extrabold tracking-tight text-ink-950 group-hover:text-navy-900 transition-colors">
                  {school.name}
                </span>
                <span className="text-[11px] font-medium text-navy-700/80">
                  Thawe, Gopalganj (Bihar)
                </span>
              </div>
            </Link>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-ink-600 max-w-sm">
              An English-medium institution following the CBSE pattern, dedicated to academic discipline and holistic student development in Thawe, Gopalganj.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-xs text-ink-600">
              <p className="flex items-start gap-2">
                <MapPin size={15} className="text-teal-600 mt-0.5 shrink-0" />
                <span>{school.address.full}</span>
              </p>
              <p className="flex items-center gap-2 font-mono">
                <ShieldCheck size={15} className="text-teal-600 shrink-0" />
                <span><strong>UDISE:</strong> {school.udise}</span>
              </p>
            </div>

            <div className="mt-6">
              <a
                href={school.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/20 bg-emerald-50/70 px-3.5 py-2 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-colors shadow-2xs"
              >
                <WhatsAppIcon width={14} height={14} className="text-emerald-600" />
                <span>WhatsApp Admissions</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-navy-900/70">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-600 hover:text-navy-900 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Management Contacts (Spans 4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-navy-900/70">
              School Administration
            </h4>
            <div className="mt-4 space-y-3 text-xs sm:text-sm">
              {school.contacts.map((c) => (
                <div key={c.name} className="p-3.5 rounded-2xl border border-navy-900/10 bg-white/80 shadow-2xs">
                  <p className="font-display font-bold text-ink-950">{c.name}</p>
                  <p className="text-[11px] font-semibold text-teal-600">{c.role}</p>
                  <a
                    href={c.phoneHref}
                    className="mt-1 inline-flex items-center gap-1.5 font-mono text-xs font-bold text-navy-900 hover:text-teal-600"
                  >
                    <Phone size={11} className="text-teal-600" />
                    <span>{c.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits Strip */}
        <div className="mt-14 pt-8 border-t border-navy-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-400">
          <p>
            &copy; {year} {school.name}. All rights reserved.
          </p>

          <a
            href="https://akaaistudio.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-navy-900/10 bg-white px-3.5 py-1.5 text-xs text-ink-600 hover:text-navy-900 hover:border-navy-900/25 transition-all shadow-2xs"
          >
            <span>Designed &amp; Developed by</span>
            <span className="font-bold text-navy-900 group-hover:text-teal-600 transition-colors">
              AKA AI Studio
            </span>
            <ArrowUpRight size={12} className="text-ink-400 group-hover:text-teal-600 transition-colors" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
