import { MapPin, Phone, Building, ShieldCheck, Award } from "lucide-react";
import { school } from "@/lib/data/school";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact & Location"
          title="Connect with National Model High School"
          subtitle="Direct contact with school administration for admissions, inquiries, and campus visits."
          align="center"
          className="mx-auto mb-14"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              {/* Address Card */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-100 text-navy-900">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-navy-950">
                      Campus Address
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {school.address.line1}
                      <br />
                      {school.address.line2}
                    </p>
                    <p className="mt-1 text-xs text-ink-600">
                      Village: {school.address.village}
                    </p>
                  </div>
                </div>
              </div>

              {/* Management Contacts Card */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-100 text-navy-900">
                    <Phone size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-sm font-bold text-navy-950">
                      Management Contacts
                    </p>
                    <div className="mt-2 space-y-2 text-sm text-ink-600">
                      {school.contacts.map((c) => (
                        <div key={c.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <span>
                            <strong className="text-navy-950">{c.name}</strong>{" "}
                            <span className="text-xs text-ink-600">({c.role})</span>
                          </span>
                          <a
                            href={c.phoneHref}
                            className="font-medium text-navy-900 hover:text-gold-600"
                          >
                            {c.phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                    <WhatsAppIcon width={20} height={20} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-navy-950">
                      WhatsApp Inquiries
                    </p>
                    <a
                      href={school.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-medium text-navy-900 hover:text-[#25D366]"
                    >
                      Chat with Director on WhatsApp (+91 99394 54315)
                    </a>
                  </div>
                </div>
              </div>

              {/* Institutional Registration Card */}
              <div className="flex-1 rounded-2xl bg-navy-950 p-6 text-white shadow-sm ring-1 ring-white/10">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-gold-400">
                  <Award size={16} />
                  <span>Institutional Credentials</span>
                </div>
                <div className="mt-3 space-y-2 text-xs text-white/80">
                  <p>
                    <span className="text-white/50">UDISE Code:</span>{" "}
                    <span className="font-mono font-semibold text-white">{school.udise}</span>
                  </p>
                  <p>
                    <span className="text-white/50">Regd. No.:</span>{" "}
                    <span className="font-mono font-semibold text-white">{school.registrationNumber}</span>
                  </p>
                  <p>
                    <span className="text-white/50">Trust:</span>{" "}
                    <span className="font-medium text-white">{school.trust}</span>
                  </p>
                  <p>
                    <span className="text-white/50">Certification:</span>{" "}
                    <span className="font-medium text-gold-400">{school.certification}</span>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={0.1}
            className="lg:col-span-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5 sm:p-8"
          >
            <ContactForm />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
