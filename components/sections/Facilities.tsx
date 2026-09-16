import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { facilities } from "@/lib/data/facilities";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const categoryLabels: Record<string, string> = {
  "campus-building": "CAMPUS INFRASTRUCTURE",
  "assembly-courtyard": "ASSEMBLY & GATHERINGS",
  "health-camps": "STUDENT HEALTH & WELLNESS",
  "gated-entrance": "CAMPUS ACCESS & SAFETY",
};

export function Facilities() {
  return (
    <section id="facilities" className="relative bg-canvas py-24 sm:py-32 border-b border-line/60 overflow-hidden">
      {/* Subtle glossy background glow */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-navy-100/50 blur-3xl" />

      <Container className="relative">
        {/* Section Header */}
        <div className="flex flex-col max-w-2xl">
          <ScrollReveal>
            <div className="section-label mb-4">
              <Sparkles size={13} className="text-teal-600" />
              <span>04 &mdash; Facilities &amp; Campus</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-950 leading-[1.12]">
              Campus{" "}
              <span className="brand-gradient-text">Infrastructure</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-600">
              Grounded in actual campus spaces supporting classroom learning, morning assemblies, and regular student health screening.
            </p>
          </ScrollReveal>
        </div>

        {/* Large Image-Led Grid with Glossy Overlays */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {facilities.map((facility, i) => (
            <ScrollReveal
              key={facility.id}
              delay={i * 0.08}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                {facility.image && (
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
                {/* Glossy gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent transition-opacity duration-300 group-hover:opacity-85" />

                {/* Floating Frosted Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-xl border border-white/40 bg-white/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-xs">
                    {categoryLabels[facility.id] || "FACILITY"}
                  </span>
                </div>
              </div>

              {/* Content Description with Arrow Micro-Interaction */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink-950 group-hover:text-navy-900 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-ink-600">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-900/10 flex items-center justify-between text-xs font-semibold text-teal-600 group-hover:text-navy-900 transition-colors">
                  <span>Inderwan, Thawe Campus</span>
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
