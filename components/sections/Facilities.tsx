import Image from "next/image";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { facilities } from "@/lib/data/facilities";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Facilities() {
  return (
    <section id="facilities" className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Facilities & Campus"
          title="Campus Infrastructure & Environment"
          subtitle="Grounded in verified campus facilities that support safe and focused learning."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, i) => {
            const Icon = (Icons[facility.icon as keyof typeof Icons] || Icons.Building) as LucideIcon;
            return (
              <ScrollReveal
                key={facility.id}
                delay={(i % 4) * 0.08}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(11,46,99,0.2)]"
              >
                {facility.image ? (
                  <div className="relative h-48 w-full overflow-hidden bg-navy-950">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-navy-950/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/40 backdrop-blur-sm">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                  </div>
                ) : (
                  <div className="flex h-48 w-full items-center justify-center bg-navy-950">
                    <Icon size={44} strokeWidth={1.5} className="text-gold-500" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-navy-950">
                    {facility.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {facility.description}
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
