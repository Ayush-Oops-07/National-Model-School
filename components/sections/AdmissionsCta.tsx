import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { school } from "@/lib/data/school";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export function AdmissionsCta() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/school images/1 (1).png"
          alt="National Model High School Assembly and Gathering"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/92 to-navy-950/80" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl"
      />

      <Container className="relative">
        <ScrollReveal className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-center backdrop-blur-sm sm:px-12 sm:py-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
            Admissions Open
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Admissions at National Model High School
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Admissions open for {school.classRange} under the {school.board}, taught in {school.medium}. Reach out directly to school administration for inquiries.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="#contact" size="lg">
              Enquire About Admission
              <ArrowRight size={16} />
            </Button>
            <Button
              href={school.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#1fb959]"
            >
              <WhatsAppIcon width={18} height={18} />
              Enquire on WhatsApp
            </Button>
            <Button href={school.phoneHref} size="lg" variant="outline-light">
              <Phone size={18} />
              Call {school.phone}
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
