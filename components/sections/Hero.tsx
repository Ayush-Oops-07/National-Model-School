"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown, FileText, MapPin, ShieldCheck, Sparkles } from "lucide-react";
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
        {/* Poster fallback */}
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

        {/* Delicate Gradient Scrim — Video background remains bright & visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/25 sm:from-black/70 sm:via-black/20 sm:to-transparent" />
        {/* Glowing golden ambient radial glow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content: Clean, Open Layout without Dark Box */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-8 my-auto text-center flex flex-col items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center w-full max-w-3xl"
        >
          {/* Frosted Glass Golden Badge */}
          <motion.div
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-black/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-amber-300 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          >
            <Sparkles size={13} className="text-amber-400 animate-pulse" />
            <span>National Model High School</span>
          </motion.div>

          {/* Gorgeous Glowing Golden Metallic Headline — 100% Clear Video Background */}
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-center"
          >
            <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              National Model
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(245,158,11,0.8)]">
              High School
            </span>
          </motion.h1>

          {/* Factual Supporting Information */}
          <motion.div variants={item} className="mt-5 max-w-xl">
            <p className="text-base sm:text-lg font-bold tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              CBSE Pattern &bull; English Medium
            </p>
            <p className="mt-1.5 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              <MapPin size={14} className="shrink-0 text-amber-400" />
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
              className="w-full sm:w-auto font-bold shadow-[0_4px_25px_rgba(15,60,120,0.4)] hover:shadow-amber-500/30 group"
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
              className="w-full sm:w-auto font-semibold border-white/60 bg-black/30 backdrop-blur-md hover:border-amber-400 hover:text-amber-300"
            >
              <FileText size={16} className="text-amber-400" />
              <span>View Notices</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Glossy Glass Information Panel */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-8 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-navy-900/10 rounded-2xl sm:rounded-3xl border border-white/80 bg-white/92 p-4 sm:p-5 shadow-[0_12px_36px_-6px_rgba(10,34,68,0.18)] backdrop-blur-xl"
        >
          {/* Item 1: Curriculum */}
          <div className="py-2.5 sm:py-0 sm:px-4 text-center sm:text-left">
            <p className="text-[10px] uppercase font-bold tracking-wider text-amber-700">
              Curriculum
            </p>
            <p className="font-display text-sm sm:text-base font-extrabold text-navy-950 mt-0.5">
              CBSE Pattern
            </p>
          </div>

          {/* Item 2: Medium */}
          <div className="py-2.5 sm:py-0 sm:px-4 text-center sm:text-left">
            <p className="text-[10px] uppercase font-bold tracking-wider text-amber-700">
              Medium
            </p>
            <p className="font-display text-sm sm:text-base font-extrabold text-navy-950 mt-0.5">
              English Medium
            </p>
          </div>

          {/* Item 3: Established */}
          <div className="py-2.5 sm:py-0 sm:px-4 text-center sm:text-left">
            <p className="text-[10px] uppercase font-bold tracking-wider text-amber-700">
              Established
            </p>
            <p className="font-display text-sm sm:text-base font-extrabold text-navy-950 mt-0.5">
              2012
            </p>
          </div>

          {/* Item 4: UDISE Code */}
          <div className="py-2.5 sm:py-0 sm:px-4 text-center sm:text-left">
            <p className="text-[10px] uppercase font-bold tracking-wider text-amber-700">
              UDISE Code
            </p>
            <p className="font-display text-sm sm:text-base font-extrabold text-navy-950 mt-0.5 flex items-center justify-center sm:justify-start gap-1 font-mono">
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
          className="inline-flex flex-col items-center text-white/80 hover:text-amber-400 transition-colors"
        >
          <ChevronDown size={18} className="animate-bounce text-amber-400" />
        </a>
      </div>
    </section>
  );
}
