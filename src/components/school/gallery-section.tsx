"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryCategories = [
  "Semua",
  "Kegiatan Belajar",
  "Praktik Kerja",
  "Kegiatan Ekstra",
  "Prestasi",
];

const galleryItems = [
  { id: 1, src: "/images/school/perhotelan.jpg", alt: "Praktik Perhotelan", category: "Praktik Kerja", caption: "Siswa jurusan Perhotelan saat praktik di lab hotel" },
  { id: 2, src: "/images/school/tkj.jpg", alt: "Lab Komputer TKJ", category: "Kegiatan Belajar", caption: "Praktikum jaringan komputer di laboratorium TKJ" },
  { id: 3, src: "/images/school/gallery-classroom.jpg", alt: "Kegiatan Belajar Mengajar", category: "Kegiatan Belajar", caption: "Suasana kegiatan belajar mengajar di kelas" },
  { id: 4, src: "/images/school/graduation.jpg", alt: "Wisuda Siswa", category: "Prestasi", caption: "Acara wisuda dan pelepasan siswa angkatan 2024" },
  { id: 5, src: "/images/school/gallery-ceremony.jpg", alt: "Upacara Sekolah", category: "Kegiatan Ekstra", caption: "Upacara bendera dan kegiatan rutin sekolah" },
  { id: 6, src: "/images/school/gallery-students.jpg", alt: "Kerjasama Tim", category: "Kegiatan Ekstra", caption: "Kegiatan kerjasama tim dan diskusi kelompok siswa" },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "Semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage
    );
    let newIndex: number;
    if (direction === "prev") {
      newIndex =
        currentIndex - 1 < 0 ? filteredItems.length - 1 : currentIndex - 1;
    } else {
      newIndex = (currentIndex + 1) % filteredItems.length;
    }
    setSelectedImage(filteredItems[newIndex].id);
  };

  const selectedItem = galleryItems.find((item) => item.id === selectedImage);

  return (
    <section id="galeri" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 mb-4">
            <Camera className="w-4 h-4" />
            <span className="text-sm font-medium">Galeri Foto</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Galeri <span className="text-blue-700">Kegiatan</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Dokumentasi berbagai kegiatan dan momen berharga di SMK Karya
            Permata.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {galleryCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-blue-700 hover:bg-blue-800 text-white"
                  : "border-gray-200 hover:border-blue-300 hover:text-blue-700"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(item.id)}
              >
                <div className="relative h-64 md:h-72">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-blue-300 text-xs font-medium uppercase tracking-wide">
                      {item.category}
                    </span>
                    <p className="text-white text-sm font-medium mt-1">
                      {item.caption}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ImageIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-white font-medium">{selectedItem.caption}</p>
                <p className="text-gray-400 text-sm">{selectedItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
