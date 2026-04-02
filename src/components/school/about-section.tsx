"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Target,
  Eye,
  Heart,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const stats = [
  { number: "20259581", label: "NPSN" },
  { number: "B", label: "Akreditasi" },
  { number: "2009", label: "Tahun Berdiri" },
  { number: "Swasta", label: "Status" },
];

const values = [
  {
    icon: Target,
    title: "Visi",
    description:
      "Menjadi lembaga pendidikan kejuruan yang unggul, inovatif, dan berkarakter dalam mencetak tenaga kerja profesional di tingkat nasional dan internasional.",
  },
  {
    icon: Eye,
    title: "Misi",
    items: [
      "Menyelenggarakan pendidikan dan pelatihan kejuruan yang berkualitas",
      "Mengembangkan kompetensi peserta didik sesuai kebutuhan industri",
      "Menjalin kerjasama dengan dunia usaha dan dunia industri (DUDI)",
      "Membentuk karakter peserta didik yang berakhlak mulia, disiplin, dan bertanggung jawab",
    ],
  },
  {
    icon: Heart,
    title: "Tujuan",
    items: [
      "Menghasilkan lulusan yang kompeten di bidang Perhotelan dan TKJ",
      "Memfasilitasi peserta didik untuk memperoleh sertifikasi kompetensi",
      "Mempersiapkan lulusan yang siap kerja dan mampu berwirausaha",
      "Mewujudkan lingkungan sekolah yang kondusif, aman, dan nyaman",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
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

export default function AboutSection() {
  return (
    <section id="profil" className="py-20 md:py-28 bg-white">
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
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Profil Sekolah</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengenal Lebih Dekat{" "}
            <span className="text-blue-700">SMK Karya Permata</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sekolah Menengah Kejuruan yang berkomitmen mencetak lulusan siap
            kerja dan berwirausaha sejak tahun 2009 di Rancaekek, Kabupaten
            Bandung.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-blue-700 rounded-xl p-6 text-center text-white shadow-lg"
            >
              <p className="text-2xl md:text-3xl font-bold mb-1">
                {stat.number}
              </p>
              <p className="text-blue-200 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Image + Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/school/about.jpg"
                alt="SMK Karya Permata Rancaekek"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-xl shadow-xl p-4 md:p-5 border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">15+ Tahun</p>
                  <p className="text-sm text-gray-500">Pengalaman Mendidik</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Sekolah Kejuruan Terpercaya di{" "}
              <span className="text-blue-700">Rancaekek</span>
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                SMK Karya Permata didirikan pada tanggal 7 Mei 2009 dan mulai
                beroperasi secara resmi pada 13 Mei 2011. Sekolah ini berlokasi
                di Jl. Raya Talun No. 51, Rancaekek, Kabupaten Bandung, Jawa
                Barat.
              </p>
              <p>
                Dengan dukungan Yayasan yang berkomitmen, SMK Karya Permata
                menyelenggarakan pendidikan kejuruan berkualitas melalui dua
                program keahlian unggulan yang dirancang sesuai kebutuhan industri
                saat ini.
              </p>
              <p>
                Kami percaya bahwa setiap siswa memiliki potensi luar biasa.
                Melalui kurikulum yang relevan, fasilitas modern, dan tenaga
                pengajar profesional, kami berkomitmen untuk membantu siswa
                meraih cita-cita mereka.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Visi, Misi, Tujuan */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {values.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-blue-700" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h4>
              {item.description ? (
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              ) : (
                <ul className="space-y-2">
                  {item.items?.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
