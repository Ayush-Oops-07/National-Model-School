"use client";

import { BookOpen, Award, GraduationCap, Sprout, Sparkles, CheckCircle } from "lucide-react";
import { academicStages } from "@/lib/data/academics";
import { school } from "@/lib/data/school";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const timelineIcons = [Sprout, BookOpen, GraduationCap, Award];
const stageNumbers = ["01", "02", "03", "04"];

export function Academics() {
  return (
    <section id="academics" className="relative bg-canvas py-24 sm:py-32 border-b border-line/60 overflow-hidden">
      {/* Glossy ambient gold & navy glows */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-10 h-96 w-96 rounded-full bg-navy-900/10 blur-3xl" />

      <Container className="relative">
        {/* Section Header */}
        <div className="flex flex-col max-w-2xl">
          <ScrollReveal>
            <div className="section-label mb-4 border-amber-500/20 bg-amber-500/10 text-amber-700">
              <Sparkles size={13} className="text-amber-500 animate-pulse" />
              <span>02 &mdash; Academic Structure</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-950 leading-[1.12]">
              The Learning{" "}
              <span className="gold-gradient-text drop-shadow-xs">
                Journey
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-600">
              Structured educational stages under the {school.board}, taught in {school.medium} for progressive conceptual clarity and student development.
            </p>
          </ScrollReveal>
        </div>

        {/* Desktop: Professional Horizontal Timeline without "Phase" wording */}
        <div className="hidden lg:block mt-16">
          {/* Continuous Axis Line with Glowing Gold Accent */}
          <div className="relative mb-10">
            <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-navy-900 rounded-full -translate-y-1/2 shadow-[0_0_12px_rgba(245,158,11,0.3)]" />
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {academicStages.map((stage, i) => {
                const Icon = timelineIcons[i] || BookOpen;
                return (
                  <div key={stage.id} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-navy-950 font-display text-xs font-extrabold shadow-[0_4px_12px_rgba(245,158,11,0.3)] ring-4 ring-white">
                      <Icon size={18} className="text-navy-950" />
                    </span>
                    <span className="text-xs font-mono font-extrabold tracking-wider text-amber-700">
                      STAGE {stageNumbers[i]}
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
                className="glass-card group flex flex-col justify-between rounded-3xl p-6 sm:p-7 relative overflow-hidden border border-white/90 shadow-md hover:border-amber-400/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Top Corner Gloss Accent */}
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-amber-400/20 via-amber-100/10 to-transparent rounded-bl-3xl pointer-events-none" />

                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-display text-3xl font-extrabold gold-gradient-text drop-shadow-xs">
                      {stageNumbers[i]}
                    </span>
                    <span className="rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-800 shadow-2xs">
                      {stage.range}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-ink-950 mb-2.5 group-hover:text-amber-700 transition-colors">
                    {stage.label}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-ink-600">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-900/10 flex items-center justify-between text-[11px] text-ink-400 font-semibold">
                  <span className="text-amber-700 font-bold flex items-center gap-1">
                    <CheckCircle size={12} className="text-amber-500" />
                    {school.medium}
                  </span>
                  <span>{school.board}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Vertical Timeline without "Phase" wording */}
        <div className="block lg:hidden mt-12 space-y-6">
          {academicStages.map((stage, i) => {
            const Icon = timelineIcons[i] || BookOpen;
            return (
              <ScrollReveal
                key={stage.id}
                delay={i * 0.05}
                className="relative pl-8 border-l-2 border-amber-400/60 pb-2 last:pb-0"
              >
                {/* Node indicator */}
                <div className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-amber-500 shadow-sm" />

                <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/90 shadow-sm">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-700 uppercase">
                      <Icon size={14} className="text-amber-500" />
                      STAGE {stageNumbers[i]}
                    </span>
                    <span className="rounded-md border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-800">
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
