"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown, FileText, MapPin, ShieldCheck } from "lucide-react";
import { school } from "@/lib/data/school";
import { Button } from "@/components/ui/Button";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt auto-playback smoothly once mounted
    const video = videoRef.current;
    if (!video) return;

    if (video.readyState >= 3) {
      setVideoReady(true);
    } else {
      const handleCanPlay = () => setVideoReady(true);
      video.addEventListener("canplay", handleCanPlay, { once: true });
      return () => video.removeEventListener("canplay", handleCanPlay);
    }
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 pb-8 sm:pt-32 sm:pb-12 overflow-hidden bg-canvas"
    >
      {/* Background cinematic media area — Bright, clear, visible campus */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Instant high-quality poster fallback */}
        <Image
          src="/hero-poster.jpg"
          alt="National Model High School Campus Life"
          fill
          priority
          sizes="100vw"
          className="object-cover hero-media"
        />

        {/* Web-optimized faststart video */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out"
          style={{ opacity: videoReady ? 1 : 0 }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          onCanPlay={() => setVideoReady(true)}
        >
          <source src="/hero-web.mp4" type="video/mp4" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* LIGHT, ASYMMETRICAL GRADIENT OVERLAY — Not pitch black, building stays bright! */}
        {/* Soft dark vignette bottom and left only for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20 sm:from-black/70 sm:via-black/25 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/40 via-transparent to-transparent hidden sm:block" />
        {/* Subtle subtle brand tint highlight */}
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content: Glossy Editorial Panel */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8 my-auto text-center flex flex-col items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center max-w-3xl"
        >
          {/* Frosted Glass Eyebrow Badge */}
          <motion.div
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/25 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-md shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-gold-400 shadow-[0_0_8px_#f59e0b] animate-pulse" />
            <span>National Model High School</span>
          </motion.div>

          {/* Large Editorial Headline with subtle brand gradient on accent words */}
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-md"
          >
            National Model
            <br />
            <span className="bg-gradient-to-r from-white via-white to-gold-300 bg-clip-text text-transparent">
              High School
            </span>
          </motion.h1>

          {/* Factual Supporting Information */}
          <motion.div variants={item} className="mt-5 max-w-xl">
            <p className="text-base sm:text-lg font-medium text-white/95 leading-relaxed drop-shadow-sm">
              CBSE Pattern &bull; English Medium
            </p>
            <p className="mt-1 flex items-center justify-center gap-1.5 text-xs sm:text-sm text-white/85">
              <MapPin size={14} className="shrink-0 text-gold-400" />
              <span>Inderwan, Pakhopali Road, Thawe, Gopalganj, Bihar</span>
            </p>
          </motion.div>

          {/* Hero Call to Action Buttons */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            <Button
              href="#about"
              size="lg"
              variant="primary"
              className="w-full sm:w-auto font-semibold shadow-lg hover:shadow-xl group"
            >
              <span>Explore the School</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Button>
            <Button
              href="/notices"
              size="lg"
              variant="outline-light"
              className="w-full sm:w-auto font-medium"
            >
              <FileText size={16} className="text-white/90" />
              <span>View Notices</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Glossy Glass Information Panel */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-navy-900/10 rounded-2xl sm:rounded-3xl border border-white/80 bg-white/88 p-4 sm:p-5 shadow-[0_12px_36px_-6px_rgba(10,34,68,0.14)] backdrop-blur-xl"
        >
          {/* Item 1: Curriculum */}
          <div className="py-2.5 sm:py-0 sm:px-4 text-center sm:text-left">
            <p className="text-[10px] uppercase font-bold tracking-wider text-navy-700/70">
              Curriculum
            </p>
            <p className="font-display text-sm sm:text-base font-bold text-navy-950 mt-0.5">
              CBSE Pattern
            </p>
          </div>

          {/* Item 2: Medium */}
          <div className="py-2.5 sm:py-0 sm:px-4 text-center sm:text-left">
            <p className="text-[10px] uppercase font-bold tracking-wider text-navy-700/70">
              Medium
            </p>
            <p className="font-display text-sm sm:text-base font-bold text-navy-950 mt-0.5">
              English Medium
            </p>
          </div>

          {/* Item 3: Established */}
          <div className="py-2.5 sm:py-0 sm:px-4 text-center sm:text-left">
            <p className="text-[10px] uppercase font-bold tracking-wider text-navy-700/70">
              Established
            </p>
            <p className="font-display text-sm sm:text-base font-bold text-navy-950 mt-0.5">
              2012
            </p>
          </div>

          {/* Item 4: UDISE Code */}
          <div className="py-2.5 sm:py-0 sm:px-4 text-center sm:text-left">
            <p className="text-[10px] uppercase font-bold tracking-wider text-navy-700/70">
              UDISE Code
            </p>
            <p className="font-display text-sm sm:text-base font-bold text-navy-950 mt-0.5 flex items-center justify-center sm:justify-start gap-1 font-mono">
              <ShieldCheck size={15} className="text-teal-600 shrink-0" />
              <span>{school.udise}</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 mt-4 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll down to About section"
          className="inline-flex flex-col items-center text-white/80 hover:text-white transition-colors"
        >
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
