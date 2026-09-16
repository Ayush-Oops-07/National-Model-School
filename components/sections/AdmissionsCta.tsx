import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { school } from "@/lib/data/school";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export function AdmissionsCta() {
  return (
    <section id="admissions" className="relative bg-gradient-to-b from-canvas via-mist to-canvas py-24 sm:py-32 border-b border-line/60 overflow-hidden">
      {/* Glossy ambient reflections */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[640px] rounded-full bg-gradient-to-tr from-navy-100/60 via-teal-100/50 to-gold-100/40 blur-3xl" />

      <Container className="relative">
        <ScrollReveal className="glass-panel relative mx-auto max-w-3xl rounded-3xl p-8 sm:p-14 text-center overflow-hidden border border-white/95">
          {/* Subtle decorative inner corner glow */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-teal-400/15 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-navy-600/10 blur-2xl pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-navy-900 shadow-2xs backdrop-blur-md mb-4">
            <Sparkles size={13} className="text-teal-600" />
            <span>Admissions &amp; Enquiries</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-950 leading-[1.12]">
            National Model{" "}
            <span className="brand-gradient-text">High School</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-600 max-w-xl mx-auto">
            Admissions open for foundational, primary, middle and secondary grades following the {school.board} in {school.medium}. Reach out directly to school administration for admission criteria and campus visit guidance.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Button href="#contact" size="lg" variant="primary" className="group shadow-md hover:shadow-lg">
              <span>Contact School</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Button>

            <Button
              href={school.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="secondary"
              className="border-emerald-600/25 bg-white/90 text-emerald-800 hover:bg-emerald-50 hover:border-emerald-600 shadow-xs"
            >
              <WhatsAppIcon width={17} height={17} className="text-emerald-600" />
              <span>WhatsApp Enquiry</span>
            </Button>

            <Button href={school.phoneHref} size="lg" variant="ghost" className="text-navy-950">
              <Phone size={16} className="text-teal-600" />
              <span>Call Director</span>
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-navy-900/10 text-xs text-ink-400 font-medium">
            Campus: Inderwan, Pakhopali Road, Thawe, Gopalganj (Bihar) &bull; UDISE: {school.udise}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
