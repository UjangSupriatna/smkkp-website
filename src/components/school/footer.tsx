"use client";

import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Profil Sekolah", href: "#profil" },
  { label: "Program Keahlian", href: "#program" },
  { label: "Prestasi", href: "#prestasi" },
  { label: "Kontak", href: "#kontak" },
];

const programLinks = [
  { label: "Perhotelan", href: "#program" },
  { label: "Teknik Jaringan Akses", href: "#program" },
  { label: "Pendaftaran PPDB", href: "#kontak" },
  { label: "Praktik Kerja Lapangan", href: "#program" },
  { label: "Sertifikasi Kompetensi", href: "#prestasi" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Siap Bergabung dengan Keluarga Besar{" "}
                <span className="text-blue-200">SMK Karya Permata?</span>
              </h3>
              <p className="text-blue-100/80 max-w-xl">
                Pendaftaran peserta didik baru tahun ajaran 2025/2026 telah
                dibuka. Segera daftarkan putra-putri Anda!
              </p>
            </div>
            <Button
              size="lg"
              onClick={() => handleNavClick("#kontak")}
              className="bg-white text-blue-800 hover:bg-blue-50 font-semibold shadow-xl px-8 py-6 text-base"
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">
                  SMK Karya Permata
                </h4>
                <p className="text-gray-400 text-xs">Rancaekek, Kab. Bandung</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Sekolah Menengah Kejuruan unggulan di Rancaekek yang berkomitmen
              mencetak lulusan siap kerja dan berwirausaha dengan program
              keahlian Perhotelan dan Teknik Jaringan Akses.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/official.smkkaryapermata_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">
              Tautan Cepat
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Program links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">
              Program Keahlian
            </h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">
              Kontak Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Jl. Raya Talun No. 51, Rancaekek, Kabupaten Bandung, Jawa
                  Barat
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">0859-7433-3090 / 0857-1645-9680</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">
                  smkkaryapermatarck51@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} SMK Karya Permata Rancaekek. Hak
              cipta dilindungi undang-undang.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
