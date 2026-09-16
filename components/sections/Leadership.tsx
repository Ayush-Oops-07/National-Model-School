import { Phone, GraduationCap, Users, Sparkles } from "lucide-react";
import { leadership, staffMembers } from "@/lib/data/leadership";
import { Container } from "@/components/ui/Container";
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
    <section id="leadership" className="relative bg-white py-24 sm:py-32 border-b border-line/60 overflow-hidden">
      {/* Subtle glossy background glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl" />

      <Container className="relative">
        {/* Section Header */}
        <div className="flex flex-col max-w-2xl">
          <ScrollReveal>
            <div className="section-label mb-4">
              <Sparkles size={13} className="text-teal-600" />
              <span>05 &mdash; Leadership &amp; Governance</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-950 leading-[1.12]">
              School Leadership &amp;{" "}
              <span className="brand-gradient-text">Faculty</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-600">
              Experienced educational directors, certified administrators, and dedicated subject educators guiding National Model High School.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Core Administrative Leaders (Large Glossy Profile Cards) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedLeadership.map((leader, i) => (
            <ScrollReveal
              key={leader.id}
              delay={i * 0.08}
              className="glass-card group rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Corner glossy glow */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-navy-100/60 to-transparent rounded-bl-3xl pointer-events-none" />

              <div>
                {/* Monogram Emblem */}
                <div className="flex items-center justify-between">
                  <div className="flex h-15 w-15 items-center justify-center rounded-2xl border border-navy-900/15 bg-white font-display text-xl font-extrabold text-navy-900 shadow-sm group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-white transition-all duration-300">
                    {getInitials(leader.name)}
                  </div>
                  <span className="text-xs font-mono font-bold text-navy-900/30">
                    0{i + 1}
                  </span>
                </div>

                <div className="mt-6">
                  <span className="inline-block rounded-lg border border-navy-900/10 bg-navy-100/70 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-900">
                    {leader.role}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink-950 mt-2.5">
                    {leader.name}
                  </h3>
                </div>

                {leader.qualification && (
                  <p className="mt-3 flex items-start gap-1.5 text-xs leading-relaxed text-ink-600">
                    <GraduationCap size={14} className="text-teal-600 mt-0.5 shrink-0" />
                    <span>{leader.qualification}</span>
                  </p>
                )}
              </div>

              {leader.phone && (
                <div className="mt-6 pt-4 border-t border-navy-900/10">
                  <a
                    href={`tel:${leader.phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 hover:text-teal-600 transition-colors"
                  >
                    <Phone size={13} className="text-teal-600" />
                    <span>{leader.phone}</span>
                  </a>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Teaching Faculty & Staff (Glossy Monogram Card Grid) */}
        <div className="mt-20 glass-panel rounded-3xl p-7 sm:p-10">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-navy-900/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-600">
                <Users size={15} />
                <span>Academic Teaching Team</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-950 mt-1">
                Dedicated Teaching Faculty
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-ink-600 max-w-md">
              Committed classroom teachers fostering individual guidance and academic discipline across subjects.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4">
            {sortedStaff.map((member, i) => (
              <ScrollReveal
                key={member.id}
                delay={(i % 7) * 0.03}
                className="group flex flex-col items-center justify-center rounded-2xl border border-white/90 bg-white/80 p-4 text-center shadow-2xs backdrop-blur-md transition-all duration-200 hover:bg-white hover:border-navy-900/20 hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-canvas font-display text-xs font-bold text-navy-900 border border-navy-900/10 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-200">
                  {getInitials(member.name)}
                </div>
                <p className="mt-2.5 font-display text-xs sm:text-sm font-bold text-ink-950 truncate w-full">
                  {member.name}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-navy-700/60 font-semibold mt-0.5">
                  Faculty
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
