"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, school } from "@/lib/data/school";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolledRaw, setScrolledRaw] = useState(false);
  const scrolled = scrolledRaw || !isHome;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolledRaw(window.scrollY > 40);
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

  // Scroll-spy: highlight the nav link for whichever section is most in
  // view. Only relevant on the homepage, where the anchor targets live.
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
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
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
          ? "bg-white/90 shadow-[0_1px_20px_-4px_rgba(11,46,99,0.15)] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="flex items-center gap-3">
            <span
              className={cn(
                "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full ring-2 transition-all duration-300 sm:h-12 sm:w-12",
                scrolled ? "ring-navy-900/10" : "ring-white/40"
              )}
            >
              <Image
                src="/logo.png"
                alt={`${school.name} logo`}
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </span>
            <span
              className={cn(
                "font-display text-sm font-bold leading-tight transition-colors duration-300 sm:text-base",
                scrolled ? "text-navy-950" : "text-white"
              )}
            >
              {school.name}
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
                    scrolled
                      ? isActive
                        ? "text-navy-950"
                        : "text-ink-600 hover:text-navy-950"
                      : isActive
                        ? "text-white"
                        : "text-white/85 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/#admissions" size="md">
              Admissions Open
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className={cn(
              "inline-flex items-center justify-center rounded-full p-2 transition-colors duration-300 lg:hidden",
              scrolled ? "text-navy-950" : "text-white"
            )}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-white shadow-lg lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    isLinkActive(link.href)
                      ? "bg-navy-100 text-navy-950"
                      : "text-ink-900 hover:bg-navy-100"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/#admissions" size="md" className="mt-2 justify-center">
                Admissions Open
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
