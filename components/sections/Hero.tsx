"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ChevronDown, MapPin, FileText, PhoneCall } from "lucide-react";
import { school } from "@/lib/data/school";
import { Button } from "@/components/ui/Button";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const heading: Variants = {
  hidden: { y: 16 },
  show: {
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950"
    >
      {/* Background media — cinematic slow motion with poster fallback */}
      <div className="hero-media absolute inset-0">
        <Image
          src="/hero-poster.jpg"
          alt="National Model High School Campus"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out"
          style={{ opacity: videoReady ? 1 : 0 }}
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
          onCanPlay={() => setVideoReady(true)}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Layered cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/75 via-navy-950/50 to-navy-950/92" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 text-center sm:px-8"
      >
        <motion.span
          variants={item}
          className="relative mb-6 h-20 w-20 overflow-hidden rounded-full bg-navy-900 shadow-[0_0_0_4px_rgba(255,255,255,0.18),0_8px_30px_-8px_rgba(0,0,0,0.7)] sm:h-24 sm:w-24"
        >
          <Image
            src="/logo.png"
            alt={`${school.name} logo`}
            fill
            sizes="96px"
            className="object-cover"
            priority
          />
        </motion.span>

        <motion.div
          variants={item}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 backdrop-blur-sm drop-shadow-sm"
        >
          <span>{school.board}</span>
          <span className="text-white/40">&middot;</span>
          <span>{school.medium}</span>
          <span className="text-white/40">&middot;</span>
          <span>Est. {school.established}</span>
        </motion.div>

        <motion.h1
          variants={heading}
          className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-6xl lg:text-[4.5rem]"
        >
          {school.name}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 flex items-center justify-center gap-1.5 text-sm font-medium text-white/90 drop-shadow-sm sm:text-base"
        >
          <MapPin size={16} className="shrink-0 text-gold-500" />
          <span>Thawe, Gopalganj, Bihar</span>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-3 max-w-xl text-base text-white/80 drop-shadow-sm sm:text-lg"
        >
          Inderwan, Pakhopali Road &bull; Classes: {school.classRange}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#contact" size="lg">
            <PhoneCall size={18} />
            Contact School
          </Button>
          <Button href="/notices" size="lg" variant="outline-light">
            <FileText size={18} />
            View Notices
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
            Scroll
          </span>
          <ChevronDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
