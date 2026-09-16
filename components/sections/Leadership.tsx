"use client";

import Image from "next/image";
import { Phone, GraduationCap, Users, Sparkles, Award } from "lucide-react";
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
    <section id="leadership" className="relative bg-canvas py-24 sm:py-32 border-b border-line/60 overflow-hidden">
      {/* Subtle glossy background glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute left-10 bottom-10 h-96 w-96 rounded-full bg-navy-900/10 blur-3xl" />

      <Container className="relative">
        {/* Section Header */}
        <div className="flex flex-col max-w-2xl">
          <ScrollReveal>
            <div className="section-label mb-4 border-amber-500/20 bg-amber-500/10 text-amber-700">
              <Sparkles size={13} className="text-amber-500 animate-pulse" />
              <span>05 &mdash; Leadership &amp; Governance</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-950 leading-[1.12]">
              School Leadership &amp;{" "}
              <span className="gold-gradient-text drop-shadow-xs">Faculty</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-600">
              Experienced educational directors, certified administrators, and dedicated subject educators guiding National Model High School.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Core Administrative Leaders (Prominent Glossy Profile Cards with Large Circular Avatars) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {sortedLeadership.map((leader, i) => (
            <ScrollReveal
              key={leader.id}
              delay={i * 0.08}
              className="glass-card group rounded-3xl p-7 flex flex-col justify-between items-center text-center relative overflow-hidden border border-white/90 shadow-md hover:border-amber-400/50 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Corner glossy glow */}
              <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-amber-400/20 via-amber-100/10 to-transparent rounded-bl-3xl pointer-events-none" />

              <div className="flex flex-col items-center w-full">
                {/* Large Circular Profile Frame */}
                <div className="relative mb-5">
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full ring-4 ring-amber-400/50 ring-offset-4 ring-offset-white shadow-[0_8px_25px_rgba(245,158,11,0.25)] overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover rounded-full"
                        sizes="(max-width: 640px) 112px, 128px"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-2">
                        <span className="font-display text-2xl sm:text-3xl font-extrabold gold-gradient-text tracking-wider">
                          {getInitials(leader.name)}
                        </span>
                        <Award size={14} className="text-amber-400 mt-1" />
                      </div>
                    )}
                  </div>

                  {/* Order Tag */}
                  <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-navy-950 font-mono text-xs font-extrabold shadow-md ring-2 ring-white">
                    0{i + 1}
                  </span>
                </div>

                {/* Role Badge & Name */}
                <div className="w-full">
                  <span className="inline-block rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-800 shadow-2xs">
                    {leader.role}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-950 mt-3 group-hover:text-amber-700 transition-colors">
                    {leader.name}
                  </h3>
                </div>

                {leader.qualification && (
                  <p className="mt-3 inline-flex items-center justify-center gap-1.5 text-xs font-medium leading-relaxed text-ink-600 bg-canvas/80 px-3 py-1.5 rounded-xl border border-navy-900/5">
                    <GraduationCap size={15} className="text-amber-600 shrink-0" />
                    <span>{leader.qualification}</span>
                  </p>
                )}
              </div>

              {leader.phone && (
                <div className="mt-6 pt-4 border-t border-navy-900/10 w-full flex justify-center">
                  <a
                    href={`tel:${leader.phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 hover:text-amber-600 transition-colors bg-white px-3.5 py-1.5 rounded-full border border-navy-900/10 shadow-2xs hover:border-amber-400"
                  >
                    <Phone size={13} className="text-amber-600" />
                    <span>{leader.phone}</span>
                  </a>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Teaching Faculty & Staff Grid */}
        <div className="mt-20 glass-panel rounded-3xl p-7 sm:p-10 border border-white/90 shadow-md">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-navy-900/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                <Users size={15} className="text-amber-500" />
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
                className="group flex flex-col items-center justify-center rounded-2xl border border-white/90 bg-white/80 p-4 text-center shadow-2xs backdrop-blur-md transition-all duration-200 hover:bg-white hover:border-amber-400/40 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-navy-900 to-navy-950 font-display text-xs font-bold text-amber-300 ring-2 ring-amber-400/30 group-hover:scale-105 transition-transform duration-200">
                  {getInitials(member.name)}
                </div>
                <p className="mt-2.5 font-display text-xs sm:text-sm font-bold text-ink-950 truncate w-full">
                  {member.name}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-amber-700 font-semibold mt-0.5">
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
