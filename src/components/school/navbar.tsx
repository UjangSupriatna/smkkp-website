"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  X,
} from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Profil", href: "#profil" },
  { label: "Program Keahlian", href: "#program" },
  { label: "Prestasi", href: "#prestasi" },
  { label: "Blog", href: "#blog" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top info bar */}
      <div className="bg-blue-900 text-blue-50 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              0859-7433-3090
            </span>
            <span>Jl. Raya Talun No. 51, Rancaekek, Kab. Bandung</span>
          </div>
          <div className="flex items-center gap-4">
            <span>NPSN: 20259581</span>
            <span>|</span>
            <span>Akreditasi: B</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100"
            : "bg-white shadow-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#beranda"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#beranda");
              }}
              className="flex items-center gap-3"
            >
              <img
                src="/images/school/logo.png"
                alt="Logo SMK Karya Permata"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <div>
                <h1 className="text-base md:text-lg font-bold text-blue-900 leading-tight">
                  SMK Karya Permata
                </h1>
                <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">
                  Rancaekek, Kabupaten Bandung
                </p>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-600"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Mobile menu */}
            <div className="flex items-center gap-3">
              <Button
                onClick={() => handleNavClick("#kontak")}
                className="hidden md:inline-flex bg-blue-700 hover:bg-blue-800 text-white shadow-md hover:shadow-lg transition-all"
                size="sm"
              >
                Daftar Sekarang
              </Button>

              <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden text-blue-800"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-80 bg-white p-0 overflow-y-auto"
                >
                  <VisuallyHidden>
                    <SheetTitle>Menu Navigasi</SheetTitle>
                  </VisuallyHidden>
                  <div className="flex items-center justify-between p-4 border-b border-blue-100">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/school/logo.png"
                        alt="Logo SMK Karya Permata"
                        className="w-8 h-8 object-contain"
                      />
                      <span className="font-bold text-blue-900">
                        SMK Karya Permata
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <nav className="p-4 space-y-1">
                    <AnimatePresence>
                      {navLinks.map((link, index) => (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(link.href);
                          }}
                          className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                            activeSection === link.href.replace("#", "")
                              ? "bg-blue-50 text-blue-700"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {link.label}
                        </motion.a>
                      ))}
                    </AnimatePresence>
                  </nav>
                  <div className="p-4 border-t border-blue-100">
                    <Button
                      onClick={() => handleNavClick("#kontak")}
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                    >
                      Daftar Sekarang
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}
