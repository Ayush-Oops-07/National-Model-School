"use client";

import { BookOpen, Award, GraduationCap, Sprout, Sparkles } from "lucide-react";
import { academicStages } from "@/lib/data/academics";
import { school } from "@/lib/data/school";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const timelineIcons = [Sprout, BookOpen, GraduationCap, Award];
const timelineNumbers = ["01", "02", "03", "04"];

export function Academics() {
  return (
    <section id="academics" className="relative bg-canvas py-24 sm:py-32 border-b border-line/60 overflow-hidden">
      {/* Subtle glossy background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-navy-100/60 blur-3xl" />
      <div className="pointer-events-none absolute left-10 bottom-10 h-72 w-72 rounded-full bg-gold-100/50 blur-3xl" />

      <Container className="relative">
        {/* Section Header */}
        <div className="flex flex-col max-w-2xl">
          <ScrollReveal>
            <div className="section-label mb-4">
              <Sparkles size={13} className="text-teal-600" />
              <span>02 &mdash; Academics &amp; Curriculum</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-950 leading-[1.12]">
              The Learning{" "}
              <span className="brand-gradient-text">Journey</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-600">
              Structured education under the {school.board}, taught in {school.medium} to foster strong foundational knowledge, intellectual curiosity, and disciplined habits.
            </p>
          </ScrollReveal>
        </div>

        {/* Desktop: Horizontal Editorial Timeline with Brand-Colored Line */}
        <div className="hidden lg:block mt-16">
          {/* Continuous Axis Line with Brand Gradient */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-1 brand-gradient rounded-full -translate-y-1/2 opacity-70" />
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {academicStages.map((stage, i) => {
                const Icon = timelineIcons[i] || BookOpen;
                return (
                  <div key={stage.id} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-navy-900/20 text-navy-900 font-display text-xs font-extrabold shadow-sm ring-4 ring-canvas">
                      <Icon size={16} className="text-navy-900" />
                    </span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-navy-900/80">
                      Phase {timelineNumbers[i]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {academicStages.map((stage, i) => (
              <ScrollReveal
                key={stage.id}
                delay={i * 0.08}
                className="glass-card flex flex-col justify-between rounded-3xl p-6 sm:p-7 relative overflow-hidden"
              >
                {/* Top Corner Gloss Accent */}
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-navy-100/50 to-transparent rounded-bl-3xl pointer-events-none" />

                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-display text-3xl font-extrabold text-navy-900/25 group-hover:text-teal-600 transition-colors">
                      {timelineNumbers[i]}
                    </span>
                    <span className="rounded-lg border border-navy-900/10 bg-navy-100/60 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-900">
                      {stage.range}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-ink-950 mb-2.5">
                    {stage.label}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-ink-600">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-900/10 flex items-center justify-between text-[11px] text-ink-400 font-semibold">
                  <span className="text-teal-600">{school.medium}</span>
                  <span>{school.board}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Vertical Timeline with Glossy Cards */}
        <div className="block lg:hidden mt-12 space-y-6">
          {academicStages.map((stage, i) => {
            const Icon = timelineIcons[i] || BookOpen;
            return (
              <ScrollReveal
                key={stage.id}
                delay={i * 0.05}
                className="relative pl-8 border-l-2 border-navy-900/30 pb-2 last:pb-0"
              >
                {/* Node indicator */}
                <div className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-navy-900 shadow-sm" />

                <div className="glass-card rounded-2xl p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-teal-600 uppercase">
                      <Icon size={14} />
                      Phase {timelineNumbers[i]}
                    </span>
                    <span className="rounded-md border border-navy-900/10 bg-navy-100/60 px-2 py-0.5 text-[10px] font-bold text-navy-900">
                      {stage.range}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-ink-950">
                    {stage.label}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-600">
                    {stage.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
