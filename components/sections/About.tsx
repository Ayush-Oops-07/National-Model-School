import Image from "next/image";
import { CheckCircle2, Award, BookOpen, ShieldCheck } from "lucide-react";
import { school, stats } from "@/lib/data/school";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { Button } from "@/components/ui/Button";

const verifiedCredentials = [
  {
    label: "Board & Curriculum",
    value: "CBSE Pattern English Medium",
    icon: BookOpen,
  },
  {
    label: "UDISE Code",
    value: "10150903702",
    icon: Award,
  },
  {
    label: "Registration No.",
    value: "217122320221126171725",
    icon: ShieldCheck,
  },
  {
    label: "Management Trust",
    value: "National Model Minority Educational & Welfare Charitable Trust",
    icon: ShieldCheck,
  },
];

const highlights = [
  "English-medium school following the CBSE pattern from Nursery to Class 10",
  "Run by National Model Minority Educational & Welfare Charitable Trust",
  "Located at Inderwan, Pakhopali Road, Thawe, Gopalganj, Bihar (841440)",
  "Officially certified: UDISE 10150903702 & Regd. No. 217122320221126171725",
];

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal className="relative order-2 lg:order-1">
            <div className="group relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-navy-950/10">
              <Image
                src="/school images/building.png"
                alt="National Model High School Campus Building at Inderwan, Thawe"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden w-52 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-navy-950/5 sm:-right-6 sm:block">
              <p className="font-display text-2xl font-bold text-navy-950">
                Est. {school.established}
              </p>
              <p className="text-xs text-ink-600">Thawe, Gopalganj (Bihar)</p>
            </div>
          </ScrollReveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About Our School"
              title="Dedicated to Quality Education in Thawe"
              subtitle="National Model High School is an English-medium institution following the CBSE pattern, located at Inderwan, Pakhopali Road, Thawe, Gopalganj, Bihar."
              className="mb-8"
            />

            <ScrollReveal delay={0.1}>
              <p className="mb-6 text-sm leading-relaxed text-ink-600 sm:text-base">
                The school is operated under the auspices of{" "}
                <strong className="font-semibold text-navy-950">
                  National Model Minority Educational &amp; Welfare Charitable Trust
                </strong>
                . The institution provides structured learning from Nursery through Class 10
                with a steadfast commitment to disciplined student development.
              </p>

              <ul className="mb-8 space-y-3 text-sm text-ink-600 sm:text-base">
                {highlights.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-gold-600"
                      strokeWidth={2}
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Button href="#academics" variant="secondary" size="md">
                  View Academic Stages
                </Button>
                <Button href="#contact" variant="outline-dark" size="md">
                  Contact School
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal
              delay={0.2}
              className="mt-10 grid grid-cols-2 divide-y divide-navy-950/10 border-t border-navy-950/10 pt-8 sm:grid-cols-4 sm:gap-6 sm:divide-y-0"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.id}
                  className={`py-3 sm:py-0 ${
                    i % 2 === 0 ? "sm:border-r sm:border-navy-950/10 sm:pr-6" : ""
                  }`}
                >
                  <p className="font-display text-3xl font-bold text-navy-950 sm:text-4xl">
                    {stat.value}
                    {stat.suffix && <span className="text-gold-600">{stat.suffix}</span>}
                  </p>
                  <p className="mt-1 text-xs text-ink-600 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
