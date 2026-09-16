import { MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { school } from "@/lib/data/school";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="relative bg-white py-24 sm:py-32 border-b border-line/60 overflow-hidden">
      {/* Subtle glossy background glow */}
      <div className="pointer-events-none absolute left-0 bottom-0 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl" />

      <Container className="relative">
        {/* Section Header */}
        <div className="flex flex-col max-w-2xl mb-14">
          <ScrollReveal>
            <div className="section-label mb-4">
              <Sparkles size={13} className="text-teal-600" />
              <span>08 &mdash; Contact &amp; Campus Location</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-950 leading-[1.12]">
              Get in{" "}
              <span className="brand-gradient-text">touch.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-600">
              Direct access to school management for admission queries, campus visits, and academic information.
            </p>
          </ScrollReveal>
        </div>

        {/* Premium Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Campus Address & Official Trust */}
          <ScrollReveal className="lg:col-span-5 flex flex-col gap-6">
            {/* Campus Address Card in Glossy Finish */}
            <div className="glass-card rounded-3xl p-7 sm:p-8">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600">
                School Campus Address
              </span>
              <h3 className="font-display text-xl font-extrabold text-ink-950 mt-1">
                {school.name}
              </h3>

              <div className="mt-5 flex items-start gap-3.5 text-sm leading-relaxed text-ink-600">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-100 text-navy-900 shadow-2xs">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="font-semibold text-ink-950">{school.address.line1}</p>
                  <p>{school.address.area}, {school.address.district}</p>
                  <p>{school.address.state} &ndash; {school.address.pin}</p>
                  <p className="text-xs text-ink-400 mt-1">Village: {school.address.village}</p>
                </div>
              </div>
            </div>

            {/* Verified Institutional Registration Badge */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 text-xs text-ink-600 space-y-2.5">
              <div className="flex items-center gap-2 font-display text-xs font-bold text-navy-900 uppercase tracking-wider">
                <ShieldCheck size={16} className="text-teal-600" />
                <span>Institutional Credentials</span>
              </div>
              <p><strong className="text-ink-950">UDISE Code:</strong> {school.udise}</p>
              <p><strong className="text-ink-950">Registration No.:</strong> {school.registrationNumber}</p>
              <p><strong className="text-ink-950">Governing Trust:</strong> {school.trust}</p>
              <p><strong className="text-ink-950">Accreditation:</strong> {school.certification}</p>
            </div>
          </ScrollReveal>

          {/* Right Column: Glossy Leadership Contact Cards + Form */}
          <ScrollReveal delay={0.1} className="lg:col-span-7 flex flex-col gap-6">
            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {school.contacts.map((contact) => (
                <div
                  key={contact.name}
                  className="glass-card rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600">
                      {contact.role}
                    </span>
                    <h4 className="font-display text-base font-bold text-ink-950 mt-0.5">
                      {contact.name}
                    </h4>
                    {"qualification" in contact && contact.qualification && (
                      <p className="text-[11px] text-ink-400 mt-0.5">{contact.qualification}</p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-navy-900/10 flex items-center gap-2">
                    <a
                      href={contact.phoneHref}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-navy-900/15 bg-white py-2 px-3 text-xs font-bold text-navy-900 shadow-2xs hover:bg-navy-900 hover:text-white transition-all"
                    >
                      <Phone size={12} className="text-teal-600" />
                      <span>Call</span>
                    </a>
                    <a
                      href={`https://wa.me/91${contact.phoneRaw}?text=${encodeURIComponent("Hello, I would like to enquire about National Model High School.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-600/20 bg-emerald-50 py-2 px-3 text-xs font-bold text-emerald-800 shadow-2xs hover:bg-emerald-600 hover:text-white transition-all"
                    >
                      <WhatsAppIcon width={13} height={13} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Enquiry Form in Glossy Container */}
            <div className="glass-panel rounded-3xl p-7 sm:p-9 border border-white/95">
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600">
                  Admission Enquiry
                </span>
                <h3 className="font-display text-xl font-bold text-ink-950 mt-1">
                  Send an Inquiry via WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-ink-600 mt-1">
                  Fill in your details below to instantly message our admissions team.
                </p>
              </div>

              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
