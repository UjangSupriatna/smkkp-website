"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const news = [
  {
    category: "Akademik",
    date: "15 Maret 2025",
    readTime: "5 menit",
    title: "SMK Karya Permata Raih Juara 1 LKS Tingkat Kabupaten Bandung",
    excerpt:
      "Siswa jurusan TKJ berhasil meraih juara pertama dalam Lomba Kompetensi Siswa (LKS) bidang IT Networking Support tingkat Kabupaten Bandung tahun 2025.",
    featured: true,
  },
  {
    category: "Kegiatan",
    date: "10 Maret 2025",
    readTime: "3 menit",
    title: "Kunjungan Industri ke Hotel Bintang Lima di Bandung",
    excerpt:
      "Siswa jurusan Perhotelan mengunjungi Hotel Hilton Bandung untuk melihat langsung operasional hotel bintang lima dan belajar dari praktisi industri.",
    featured: false,
  },
  {
    category: "Pengumuman",
    date: "1 Maret 2025",
    readTime: "2 menit",
    title: "Pendaftaran Peserta Didik Baru Tahun Ajaran 2025/2026",
    excerpt:
      "SMK Karya Permata membuka pendaftaran peserta didik baru untuk tahun ajaran 2025/2026. Segera daftarkan putra-putri Anda!",
    featured: false,
  },
  {
    category: "Prestasi",
    date: "20 Februari 2025",
    readTime: "4 menit",
    title: "Alumni SMK Karya Permata Berhasil di Dunia Industri",
    excerpt:
      "Beberapa alumni SMK Karya Permata kini berhasil menapaki karir gemilang di berbagai perusahaan ternama di Indonesia dan luar negeri.",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function getCategoryColor(category: string) {
  switch (category) {
    case "Akademik":
      return "bg-blue-100 text-blue-700";
    case "Kegiatan":
      return "bg-amber-100 text-amber-700";
    case "Pengumuman":
      return "bg-rose-100 text-rose-700";
    case "Prestasi":
      return "bg-purple-100 text-purple-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default function NewsSection() {
  const featuredNews = news[0];
  const otherNews = news.slice(1);

  return (
    <section id="berita" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 mb-4">
            <Newspaper className="w-4 h-4" />
            <span className="text-sm font-medium">Berita & Informasi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Berita <span className="text-blue-700">Terbaru</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ikuti perkembangan terbaru dari SMK Karya Permata melalui berita dan
            informasi terkini.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Featured news */}
          <motion.div
            variants={itemVariants}
            className="group cursor-pointer"
          >
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 md:p-8 h-full text-white hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                  {featuredNews.category}
                </span>
                <span className="text-blue-200 text-sm">
                  Berita Utama
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-200 transition-colors">
                {featuredNews.title}
              </h3>
              <p className="text-blue-100/80 mb-6 leading-relaxed">
                {featuredNews.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-blue-200/70">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredNews.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredNews.readTime}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-300 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Other news */}
          <div className="space-y-4">
            {otherNews.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group cursor-pointer bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-lg border border-transparent hover:border-blue-100 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-xs font-medium rounded-full px-2.5 py-0.5 ${getCategoryColor(
                          item.category
                        )}`}
                      >
                        {item.category}
                      </span>
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 mt-1 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
          >
            Lihat Semua Berita
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
