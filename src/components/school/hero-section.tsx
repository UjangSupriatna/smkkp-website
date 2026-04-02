"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ChevronDown,
  MapPin,
  Users,
  Award,
} from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="beranda" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/school/banner.jpg"
          alt="SMK Karya Permata"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-800/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-0">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-100 text-sm font-medium">
              Pendaftaran Tahun Ajaran 2025/2026 Dibuka
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            SMK Karya{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-amber-300">
              Permata
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100/90 mb-4 max-w-2xl leading-relaxed"
          >
            Mencetak Lulusan Siap Kerja & Berwirausaha
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-blue-200/80 mb-8 max-w-2xl leading-relaxed"
          >
            Sekolah Menengah Kejuruan unggulan di Rancaekek, Kabupaten Bandung.
            Dengan program keahlian Perhotelan dan Teknik Jaringan Akses, kami
            mempersiapkan generasi muda untuk menghadapi tantangan dunia kerja
            global.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={() => handleScroll("#kontak")}
              className="bg-white text-blue-800 hover:bg-blue-50 font-semibold shadow-lg hover:shadow-xl transition-all px-8 py-6 text-base"
            >
              Daftar Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScroll("#profil")}
              className="border-2 border-white text-blue-950 hover:bg-white hover:text-blue-900 font-semibold px-8 py-6 text-base transition-all"
            >
              Profil Sekolah
            </Button>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-6 md:gap-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">500+</p>
                <p className="text-blue-200/70 text-xs">Siswa Aktif</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Award className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">95%</p>
                <p className="text-blue-200/70 text-xs">Tingkat Kelulusan</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">15+</p>
                <p className="text-blue-200/70 text-xs">Tahun Berdiri</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => handleScroll("#profil")}
          className="flex flex-col items-center gap-1 text-white/60 hover:text-white/90 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
