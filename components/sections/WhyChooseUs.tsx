import { BookOpen, Calendar, Check, GraduationCap, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { school } from "@/lib/data/school";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-white py-24 sm:py-32 border-b border-line/60 overflow-hidden">
      {/* Subtle glossy background glow */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-navy-100/50 blur-3xl" />

      <Container className="relative">
        {/* Section Header */}
        <div className="flex flex-col max-w-2xl">
          <ScrollReveal>
            <div className="section-label mb-4">
              <Sparkles size={13} className="text-teal-600" />
              <span>03 &mdash; Institutional Standards</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-950 leading-[1.12]">
              Why National Model{" "}
              <span className="brand-gradient-text">High School</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-600">
              A disciplined, values-grounded educational ecosystem in Thawe providing verified standards and personal mentorship.
            </p>
          </ScrollReveal>
        </div>

        {/* Large Editorial Asymmetric Grid with Glossy Styling */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* 01: Large Featured Lead Block (Spans 7 cols on desktop) */}
          <ScrollReveal
            className="md:col-span-7 glass-card rounded-3xl p-7 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-teal-100/60 to-transparent rounded-bl-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-4xl sm:text-5xl font-extrabold brand-gradient-text">
                  01
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/15 bg-navy-100/70 px-3 py-1 text-xs font-bold text-navy-900">
                  <BookOpen size={14} className="text-teal-600" />
                  <span>Curriculum Benchmark</span>
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ink-950">
                CBSE Pattern Curriculum
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-600">
                A structured, nationally aligned educational framework providing continuous scholastic growth from foundational years through secondary board preparation. Emphasizing conceptual clarity over rote memorization.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-navy-900/10 bg-white/80 px-3 py-1.5 text-xs font-semibold text-ink-700 shadow-2xs">
                  <Check size={13} className="text-teal-600" /> Continuous Scholastic Assessment
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-navy-900/10 bg-white/80 px-3 py-1.5 text-xs font-semibold text-ink-700 shadow-2xs">
                  <Check size={13} className="text-teal-600" /> Science &amp; Mathematical Rigor
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-navy-900/10 bg-white/80 px-3 py-1.5 text-xs font-semibold text-ink-700 shadow-2xs">
                  <Check size={13} className="text-teal-600" /> Activity-Based Growth
                </span>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-navy-900/10 flex items-center justify-between text-xs text-ink-400 font-semibold">
              <span>National CBSE Framework</span>
              <span className="text-navy-900">&bull; Verified Pattern</span>
            </div>
          </ScrollReveal>

          {/* 02: English Medium Instruction (Spans 5 cols on desktop) */}
          <ScrollReveal
            delay={0.08}
            className="md:col-span-5 glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-4xl font-extrabold text-navy-900/20">
                  02
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-100 text-navy-900 shadow-2xs">
                  <GraduationCap size={20} />
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-950">
                English Medium Instruction
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                Immersive English-medium communication environment designed to build language fluency, vocabulary comprehension, and self-confidence across all academic disciplines.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-navy-900/10 text-xs font-semibold text-teal-600">
              Communication &bull; Expression &bull; Global Competence
            </div>
          </ScrollReveal>

          {/* 03: Established 2012 (Spans 4 cols on desktop) */}
          <ScrollReveal
            delay={0.12}
            className="md:col-span-4 glass-card rounded-3xl p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-3xl font-extrabold text-navy-900/20">
                  03
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mist text-navy-900">
                  <Calendar size={18} />
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-ink-950">
                Established 2012
              </h3>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-ink-600">
                Over a decade of unbroken academic service and trust among students and families in Thawe and the wider Gopalganj region.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-navy-900/10 text-xs font-semibold text-ink-400">
              10+ Years of Excellence
            </div>
          </ScrollReveal>

          {/* 04: Accessible Campus in Thawe (Spans 4 cols on desktop) */}
          <ScrollReveal
            delay={0.16}
            className="md:col-span-4 glass-card rounded-3xl p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-3xl font-extrabold text-navy-900/20">
                  04
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mist text-navy-900">
                  <MapPin size={18} />
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-ink-950">
                Thawe, Gopalganj
              </h3>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-ink-600">
                Situated at Inderwan on Pakhopali Road, offering a quiet, peaceful campus atmosphere conducive to deep classroom focus.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-navy-900/10 text-xs font-semibold text-ink-400">
              PIN 841440 &bull; Bihar
            </div>
          </ScrollReveal>

          {/* 05: Verified Credentials & Trust (Spans 4 cols on desktop) */}
          <ScrollReveal
            delay={0.2}
            className="md:col-span-4 glass-card rounded-3xl p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-3xl font-extrabold text-navy-900/20">
                  05
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mist text-teal-600">
                  <ShieldCheck size={18} />
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-ink-950">
                UDISE &amp; Trust Regd.
              </h3>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-ink-600">
                Verified UDISE code 10150903702, governed under the National Model Minority Educational &amp; Welfare Charitable Trust.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-navy-900/10 text-xs font-semibold text-ink-400">
              ISO 9001 Certified Standards
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
