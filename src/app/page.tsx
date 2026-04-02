"use client";

import Navbar from "@/components/school/navbar";
import HeroSection from "@/components/school/hero-section";
import AboutSection from "@/components/school/about-section";
import ProgramsSection from "@/components/school/programs-section";
import StatsSection from "@/components/school/stats-section";
import ContactSection from "@/components/school/contact-section";
import Footer from "@/components/school/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
