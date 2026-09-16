"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { academicStages } from "@/lib/data/academics";
import { school } from "@/lib/data/school";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stageIcons: Record<string, string> = {
  "pre-primary": "Sprout",
  primary: "BookOpen",
  middle: "GraduationCap",
  secondary: "Award",
};

export function Academics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.35"],
  });
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="academics" className="relative overflow-hidden bg-mist py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Academics"
          title="The Learning Journey"
          subtitle={`Structured education from ${school.classRange} under the ${school.board}, taught in ${school.medium}.`}
          align="center"
          className="mx-auto"
        />

        <div ref={containerRef} className="relative mx-auto mt-20 max-w-3xl lg:max-w-4xl">
          {/* track */}
          <div className="absolute left-6 top-1 h-[calc(100%-8px)] w-px bg-navy-950/10 lg:left-1/2 lg:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: lineProgress }}
            className="absolute left-6 top-1 h-[calc(100%-8px)] w-px origin-top bg-gradient-to-b from-gold-500 via-gold-500 to-navy-900 lg:left-1/2 lg:-translate-x-1/2"
          />

          <div className="space-y-10 lg:space-y-8">
            {academicStages.map((stage, i) => {
              const isEven = i % 2 === 0;
              const Icon = (Icons[
                (stageIcons[stage.id] || "BookOpen") as keyof typeof Icons
              ] || Icons.BookOpen) as LucideIcon;

              return (
                <div
                  key={stage.id}
                  className={`relative flex items-start gap-6 lg:items-center lg:gap-0 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* node */}
                  <div className="absolute left-6 top-0 z-10 -translate-x-1/2 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-gold-500 shadow-lg ring-[6px] ring-mist"
                    >
                      <Icon size={20} strokeWidth={2} />
                    </motion.div>
                  </div>

                  {/* card */}
                  <div className="ml-14 flex-1 lg:ml-0 lg:w-1/2 lg:px-10">
                    <ScrollReveal
                      delay={0.05}
                      className={`group rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_8px_30px_-12px_rgba(11,46,99,0.15)] ring-1 ring-navy-950/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(11,46,99,0.25)] sm:p-7 ${
                        isEven ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <span className="inline-flex items-center rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
                        {stage.range}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-bold text-navy-950 sm:text-2xl">
                        {stage.label}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600 sm:text-base">
                        {stage.description}
                      </p>
                    </ScrollReveal>
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
