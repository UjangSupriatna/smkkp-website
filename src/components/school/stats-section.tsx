"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Briefcase, BookOpen } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 500,
    suffix: "+",
    label: "Siswa Aktif",
    description: "Peserta didik yang sedang menempuh pendidikan",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: BookOpen,
    number: 30,
    suffix: "+",
    label: "Tenaga Pengajar",
    description: "Guru dan instruktur profesional berpengalaman",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
  {
    icon: TrendingUp,
    number: 95,
    suffix: "%",
    label: "Tingkat Kelulusan",
    description: "Persentase kelulusan Ujian Nasional",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    icon: Briefcase,
    number: 85,
    suffix: "%",
    label: "Terserap Dunia Kerja",
    description: "Lulusan yang bekerja dalam 6 bulan pertama",
    color: "text-rose-600",
    bgColor: "bg-rose-100",
  },
  {
    icon: Award,
    number: 50,
    suffix: "+",
    label: "Prestasi Diraih",
    description: "Juara di berbagai kompetisi tingkat kabupaten & provinsi",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Users,
    number: 2000,
    suffix: "+",
    label: "Total Alumni",
    description: "Alumni yang tersebar di berbagai sektor industri",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
  },
];

function AnimatedCounter({
  target,
  suffix,
  duration = 2000,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(target * eased));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-gray-900">
      {count.toLocaleString()}
      <span className="text-blue-600">{suffix}</span>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function StatsSection() {
  return (
    <section
      id="prestasi"
      className="py-20 md:py-28 bg-blue-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Prestasi & Statistik</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pencapaian <span className="text-blue-300">SMK Karya Permata</span>
          </h2>
          <p className="text-blue-200/80 max-w-2xl mx-auto text-lg">
            Kami bangga dengan berbagai pencapaian yang telah diraih oleh siswa
            dan alumni kami selama bertahun-tahun.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <AnimatedCounter
                target={stat.number}
                suffix={stat.suffix}
              />
              <p className="text-white font-semibold mt-2 mb-1">{stat.label}</p>
              <p className="text-blue-300/60 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
