import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { whyChooseUs } from "@/lib/data/whyChooseUs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="What Sets National Model High School Apart"
          subtitle="A disciplined environment committed to verified academic standards and student development."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = (Icons[item.icon as keyof typeof Icons] || Icons.CheckCircle) as LucideIcon;
            return (
              <ScrollReveal
                key={item.id}
                delay={(i % 3) * 0.08}
                className="group relative overflow-hidden rounded-2xl border border-navy-950/8 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/20 hover:shadow-[0_20px_40px_-16px_rgba(11,46,99,0.18)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-500/0 blur-2xl transition-colors duration-500 group-hover:bg-gold-500/15"
                />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-navy-100 text-navy-900 transition-all duration-300 group-hover:-rotate-6 group-hover:bg-gold-500 group-hover:text-navy-950">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-bold text-navy-950">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-600">
                  {item.description}
                </p>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
