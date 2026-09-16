"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, school } from "@/lib/data/school";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!isHome) return;

    const idsToObserve = navLinks
      .map((link) => link.href.split("#")[1])
      .filter((id): id is string => !!id);

    const sections = idsToObserve
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveHash(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-30% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  function isLinkActive(href: string) {
    if (href === "/notices") return pathname.startsWith("/notices");
    const hash = href.split("#")[1];
    return isHome && hash ? activeHash === `#${hash}` : false;
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/92 backdrop-blur-xl border-b border-navy-900/10 shadow-[0_4px_24px_-4px_rgba(15,60,120,0.08)] py-0"
          : "bg-white/80 backdrop-blur-lg border-b border-white/80 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)]"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo & School Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <span className="relative flex h-11 w-11 sm:h-13 sm:w-13 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-white shadow-[0_2px_10px_rgba(15,60,120,0.12)] ring-2 ring-navy-900/10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt={`${school.name} logo`}
                fill
                sizes="52px"
                className="object-cover"
                priority
              />
            </span>
            <div className="flex flex-col">
              <span className="font-display text-sm sm:text-base font-extrabold tracking-tight text-ink-950 group-hover:text-navy-900 transition-colors">
                {school.name}
              </span>
              <span className="text-[11px] font-medium tracking-wide text-navy-700/80">
                Thawe, Gopalganj (Bihar)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Primary" className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-[13px] font-semibold tracking-tight transition-all duration-150 rounded-xl",
                    active
                      ? "text-navy-900 bg-navy-100/60 shadow-2xs"
                      : "text-ink-600 hover:text-navy-950 hover:bg-white/70"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="active-nav-underline"
                      className="absolute inset-x-3.5 -bottom-0.5 h-[2.5px] bg-gradient-to-r from-navy-900 to-teal-600 rounded-full"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href="/#admissions"
              size="md"
              variant="primary"
              className="group shadow-sm hover:shadow-md"
            >
              <span>Admissions Open</span>
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="inline-flex items-center justify-center rounded-xl border border-navy-900/15 bg-white/80 p-2 text-ink-900 hover:bg-white transition-colors lg:hidden shadow-2xs"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer with Glossy Treatment */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-navy-900/10 bg-white/95 backdrop-blur-xl shadow-xl lg:hidden"
          >
            <Container className="flex flex-col gap-1.5 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                    isLinkActive(link.href)
                      ? "bg-navy-100 text-navy-900"
                      : "text-ink-900 hover:bg-mist"
                  )}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={14} className="text-navy-900/40" />
                </Link>
              ))}
              <div className="pt-3">
                <Button
                  href="/#admissions"
                  size="md"
                  variant="primary"
                  className="w-full justify-center group"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Admissions Open</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
