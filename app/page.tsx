import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Facilities } from "@/components/sections/Facilities";
import { Leadership } from "@/components/sections/Leadership";
import { AdmissionsCta } from "@/components/sections/AdmissionsCta";
import { Contact } from "@/components/sections/Contact";
import { NoticesSection } from "@/components/notices/NoticesSection";

// Below-the-fold sections with heavier client-side logic (scroll-linked
// motion, masonry + lightbox) are code-split so they don't add to the
// critical initial bundle.
const Academics = dynamic(() =>
  import("@/components/sections/Academics").then((m) => m.Academics)
);
const Gallery = dynamic(() =>
  import("@/components/sections/Gallery").then((m) => m.Gallery)
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <NoticesSection />
        <Academics />
        <WhyChooseUs />
        <Facilities />
        <Leadership />
        <Gallery />
        <AdmissionsCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
