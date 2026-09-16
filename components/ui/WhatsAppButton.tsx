"use client";

import { motion } from "framer-motion";
import { school } from "@/lib/data/school";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export function WhatsAppButton() {
  return (
    <motion.a
      href={school.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon width={28} height={28} />
      <span className="sr-only">Chat with {school.name} on WhatsApp</span>
    </motion.a>
  );
}
