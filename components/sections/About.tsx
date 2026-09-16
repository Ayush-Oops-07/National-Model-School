import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Award } from "lucide-react";
import { school } from "@/lib/data/school";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

const points = [
  "English-medium academic curriculum following the national CBSE pattern",
  "Operated by National Model Minority Educational & Welfare Charitable Trust",
  "Peaceful and secured campus at Inderwan, Pakhopali Road, Thawe, Gopalganj",
  "ISO 9001 certified educational quality with state government registration",
];

export function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-32 overflow-hidden border-b border-line/60">
      {/* Subtle glossy background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-navy-100/50 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Narrative, and Points */}
          <div className="lg:col-span-6 flex flex-col">
            <ScrollReveal>
              <div className="section-label mb-4">
                <Sparkles size={13} className="text-teal-600" />
                <span>01 &mdash; About the School</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-950 leading-[1.12]">
                A place to learn,
                <br />
                grow and{" "}
                <span className="brand-gradient-text">
                  belong.
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-600">
                <strong className="font-semibold text-ink-950">{school.name}</strong> is an English-medium school following the CBSE pattern, situated along Pakhopali Road in Inderwan, Thawe, Gopalganj, Bihar.
              </p>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-600">
                Under the guidance of the <strong className="font-semibold text-ink-950">{school.trust}</strong>, the institution nurtures students through disciplined academic foundations and moral development.
              </p>

              {/* Factual Highlights List */}
              <div className="mt-8 space-y-3">
                {points.map((pt) => (
                  <div key={pt} className="flex items-start gap-3 text-xs sm:text-sm text-ink-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600 mt-0.5">
                      <CheckCircle2 size={13} strokeWidth={2.5} />
                    </span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-wrap items-center gap-3.5">
                <Button href="#academics" variant="primary" size="md">
                  <span>Explore Academics</span>
                  <ArrowRight size={15} />
                </Button>
                <Button href="#contact" variant="secondary" size="md">
                  Contact School
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Image Composition with Floating Glossy Cards */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <ScrollReveal delay={0.15}>
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                {/* Main Campus Image in Glossy Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white bg-white p-2.5 shadow-xl ring-1 ring-navy-900/10">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src="/school images/building.png"
                      alt="National Model High School Campus Building in Inderwan, Thawe"
                      fill
                      sizes="(min-width: 1024px) 50vw, 90vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* Floating Glossy Card 1: EST. 2012 (Overlapping top-right / bottom-left) */}
                <div className="absolute -bottom-6 -left-3 sm:-left-6 glass rounded-2xl p-4 sm:p-5 shadow-lg border border-white/90 max-w-[210px] sm:max-w-[230px]">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-teal-600">
                    <Award size={14} />
                    <span>Established 2012</span>
                  </div>
                  <p className="font-display text-xl sm:text-2xl font-extrabold text-navy-950 mt-1">
                    10+ Years
                  </p>
                  <p className="text-[11px] text-ink-600 leading-snug mt-0.5">
                    Of dedicated academic service in Thawe, Gopalganj
                  </p>
                </div>

                {/* Floating Glossy Card 2: UDISE 10150903702 (Overlapping top-right) */}
                <div className="absolute -top-5 -right-3 sm:-right-6 glass rounded-2xl p-3.5 sm:p-4 shadow-lg border border-white/90">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                      <ShieldCheck size={16} />
                    </span>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-ink-400">
                        UDISE Registered
                      </p>
                      <p className="font-mono text-xs sm:text-sm font-bold text-navy-950">
                        {school.udise}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
