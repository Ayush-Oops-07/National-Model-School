import Image from "next/image";
import { MapPin, Phone, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { school, navLinks } from "@/lib/data/school";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/80">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
                <Image
                  src="/logo.png"
                  alt={`${school.name} logo`}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <span className="font-display text-base font-bold text-white">
                {school.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              An English-medium school following the CBSE pattern from {school.classRange} in
              Thawe, Gopalganj, Bihar.
            </p>
            <div className="mt-4 text-xs text-white/50">
              <p>Run by: {school.trust}</p>
              <p className="mt-1">UDISE Code: {school.udise}</p>
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href={school.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Director on WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold-500 hover:text-gold-500"
              >
                <WhatsAppIcon width={16} height={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact &amp; Location
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold-500" />
                <span>
                  {school.address.line1}
                  <br />
                  {school.address.line2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold-500" />
                <div className="flex flex-col">
                  {school.contacts.map((c) => (
                    <a
                      key={c.name}
                      href={c.phoneHref}
                      className="hover:text-gold-500"
                    >
                      {c.name} ({c.role}): {c.phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon width={18} height={18} className="mt-0.5 shrink-0 text-gold-500" />
                <a
                  href={school.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-500"
                >
                  WhatsApp Inquiries
                </a>
              </li>
              <li className="flex gap-3">
                <Award size={18} className="mt-0.5 shrink-0 text-gold-500" />
                <span>UDISE: {school.udise}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Admissions
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Admissions are open for {school.classRange} following the CBSE pattern.
            </p>
            <a
              href="#admissions"
              className="mt-4 inline-block text-sm font-semibold text-gold-500 hover:underline"
            >
              Enquire now →
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {year} {school.name}. All rights reserved.
          </p>

          <a
            href="https://aka-ai-studio-eygf.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2.5 overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-gold-500/40 hover:bg-white/10 hover:text-white"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-y-4 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100"
            />
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-600 font-display text-[10px] font-bold text-navy-950">
              A
            </span>
            <span>
              Designed &amp; Developed by{" "}
              <span className="font-semibold text-gold-500">AKA AI Studio</span>
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
