import { Phone, GraduationCap, UserCheck, ShieldCheck } from "lucide-react";
import { leadership, staffMembers } from "@/lib/data/leadership";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Leadership() {
  const sortedLeadership = [...leadership].sort((a, b) => a.order - b.order);
  const sortedStaff = [...staffMembers].sort((a, b) => a.order - b.order);

  return (
    <section id="leadership" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Leadership"
          title="School Administration & Faculty"
          subtitle="Experienced leadership and dedicated educators guiding National Model High School."
          align="center"
          className="mx-auto"
        />

        {/* Core Administrative Leadership */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sortedLeadership.map((leader, i) => (
            <ScrollReveal
              key={leader.id}
              delay={i * 0.08}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-navy-950 p-7 text-center shadow-xl ring-1 ring-navy-950/10"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gold-500/15 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />

              <div>
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-navy-900 text-gold-500 ring-4 ring-gold-500/30 transition-transform duration-500 group-hover:scale-105">
                  <span className="font-display text-2xl font-bold tracking-wider">
                    {getInitials(leader.name)}
                  </span>
                </div>

                <h3 className="relative mt-5 font-display text-lg font-bold text-white">
                  {leader.name}
                </h3>

                <span className="relative mt-2 inline-block rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-500">
                  {leader.role}
                </span>

                {leader.qualification && (
                  <p className="relative mt-3 flex items-center justify-center gap-1.5 text-xs text-white/70">
                    <GraduationCap size={14} className="shrink-0 text-gold-400" />
                    <span>{leader.qualification}</span>
                  </p>
                )}
              </div>

              {leader.phone && (
                <div className="relative mt-6 border-t border-white/10 pt-4">
                  <a
                    href={`tel:${leader.phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 text-xs font-medium text-white/80 transition-colors hover:text-gold-400"
                  >
                    <Phone size={13} className="text-gold-500" />
                    <span>{leader.phone}</span>
                  </a>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Teaching & Support Staff */}
        <ScrollReveal className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-navy-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-navy-950">
            <UserCheck size={14} className="text-gold-600" />
            <span>Teaching &amp; Academic Staff</span>
          </div>
          <p className="mt-3 text-sm text-ink-600">
            Committed educators nurturing each student&apos;s academic journey
          </p>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {sortedStaff.map((member, i) => (
            <ScrollReveal
              key={member.id}
              delay={(i % 7) * 0.04}
              className="group flex flex-col items-center rounded-2xl border border-navy-950/8 bg-mist p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/30 hover:bg-white hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-display text-sm font-bold text-navy-950 shadow-sm ring-1 ring-navy-950/10 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                {getInitials(member.name)}
              </div>
              <p className="mt-3 font-display text-sm font-bold text-navy-950">
                {member.name}
              </p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-ink-600">
                Faculty
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
