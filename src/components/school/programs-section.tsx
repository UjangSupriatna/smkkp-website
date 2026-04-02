"use client";

import { motion } from "framer-motion";
import {
  Hotel,
  Network,
  Cog,
  ArrowRight,
  Users,
  Briefcase,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const programs = [
  {
    icon: Hotel,
    title: "Perhotelan",
    subtitle: "Hospitality",
    image: "/images/school/perhotelan.jpg",
    description:
      "Program keahlian yang mempersiapkan siswa untuk menjadi tenaga profesional di industri perhotelan, pariwisata, dan hospitality service.",
    highlights: [
      "Front Office & Housekeeping",
      "Food & Beverage Service",
      "Kitchen / Culinary Art",
      "Event Management",
      "Praktik Kerja Lapangan di Hotel Bintang",
    ],
    career: [
      "Staff Hotel & Resort",
      "Travel Agent",
      "Event Organizer",
      "Restoran & Katering",
      "Cruise Line Staff",
    ],
    color: "blue",
    stats: { students: "250+", teachers: "15+" },
  },
  {
    icon: Network,
    title: "Teknik Jaringan Akses",
    subtitle: "Computer Networking",
    image: "/images/school/tkj.jpg",
    description:
      "Program keahlian yang mempersiapkan siswa menjadi ahli dalam bidang teknologi informasi, khususnya jaringan komputer dan akses internet.",
    highlights: [
      "Jaringan LAN & Wireless",
      "Server Administration",
      "Cyber Security Basics",
      "Cloud Computing",
      "Sertifikasi MikroTik & Cisco",
    ],
    career: [
      "Network Administrator",
      "IT Support Specialist",
      "System Administrator",
      "Web Developer",
      "IT Consultant",
    ],
    color: "teal",
    stats: { students: "250+", teachers: "15+" },
  },
  {
    icon: Cog,
    title: "Mekatronika",
    subtitle: "Mechatronics Engineering",
    image: "/images/school/mekatronika.jpg",
    description:
      "Program keahlian yang mempersiapkan siswa menjadi ahli dalam bidang mekatronika, menggabungkan ilmu mesin, elektronika, dan pemrograman untuk otomasi industri modern.",
    highlights: [
      "Pneumatik & Hidraulik",
      "PLC (Programmable Logic Controller)",
      "Robotika & Otomasi",
      "CAD/CAM & CNC",
      "Pemrograman Mikrokontroler",
    ],
    career: [
      "Teknisi Otomasi Industri",
      "Robotics Engineer",
      "Maintenance Engineer",
      "PLC Programmer",
      "Teknisi CNC & Manufaktur",
    ],
    color: "blue",
    stats: { students: "100+", teachers: "8+" },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ProgramsSection() {
  return (
    <section id="program" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
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
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium">Program Keahlian</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pilihan <span className="text-blue-700">Program Keahlian</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tiga program keahlian unggulan yang dirancang sesuai kebutuhan industri
            dan dunia kerja saat ini.
          </p>
        </motion.div>

        {/* Programs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative rounded-2xl overflow-hidden shadow-xl ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  width={600}
                  height={400}
                  className="w-full h-[350px] md:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        {program.title}
                      </h3>
                      <p className="text-white/80 text-sm">{program.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <program.icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-500">{program.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Stats */}
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-4 py-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-700">
                      {program.stats.students} Siswa
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-amber-50 rounded-lg px-4 py-2">
                    <Briefcase className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-medium text-amber-700">
                      {program.stats.teachers} Pengajar
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Materi Pelajaran:
                    </h4>
                    <ul className="space-y-1.5">
                      {program.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Prospek Karir:
                    </h4>
                    <ul className="space-y-1.5">
                      {program.career.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    const el = document.querySelector("#kontak");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-blue-700 hover:bg-blue-800 text-white shadow-md hover:shadow-lg transition-all"
                >
                  Daftar Program Ini
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
