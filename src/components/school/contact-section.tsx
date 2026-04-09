"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    details: ["Jl. Raya Talun No. 51", "Rancaekek, Kabupaten Bandung", "Jawa Barat, Indonesia"],
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Phone,
    title: "Telepon",
    details: ["0859-7433-3090", "0857-1645-9680"],
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["smkkaryapermatarck51@gmail.com"],
    color: "bg-teal-100 text-teal-700",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    details: ["Senin - Jumat: 07:00 - 16:00", "Sabtu: 07:00 - 12:00"],
    color: "bg-rose-100 text-rose-700",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestLabels: Record<string, string> = {
    ppdb: "Pendaftaran Siswa Baru",
    perhotelan: "Program Perhotelan",
    tkj: "Program TKJ",
    mekatronika: "Program Mekatronika",
    kerjasama: "Kerjasama / Partnership",
    informasi: "Informasi Umum",
    lainnya: "Lainnya",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const interestText = formData.interest
      ? interestLabels[formData.interest] || formData.interest
      : "Tidak disebutkan";

    const waMessage = `Halo Admin SMK Karya Permata! \n\n` +
      `Saya ingin menyampaikan pesan melalui website:\n\n` +
      `*Nama:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*No. HP:* ${formData.phone || "-"}\n` +
      `*Minat:* ${interestText}\n\n` +
      `*Pesan:*\n${formData.message}\n\n` +
      `---\nPesan ini dikirim melalui form website SMK Karya Permata`;

    const waNumber = "6285974333090";
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // save silently
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
      setTimeout(() => {
        window.open(waUrl, "_blank");
        setIsSubmitted(false);
      }, 1500);
    }
  };

  return (
    <section id="kontak" className="py-20 md:py-28 bg-white">
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
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">Hubungi Kami</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-blue-700">Kami</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Punya pertanyaan tentang pendaftaran, program keahlian, atau ingin
            berkunjung? Silakan hubungi kami melalui formulir berikut.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <div
                  className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <info.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {info.title}
                  </h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-500 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-6">
              <iframe
                src="https://maps.google.com/maps?q=SMK+Karya+Permata+Rancaekek+Jl+Raya+Talun+No+51&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi SMK Karya Permata"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Mengarahkan ke WhatsApp...
                  </h3>
                  <p className="text-gray-600">
                    Pesan Anda sedang dikirim ke WhatsApp admin. Jika tidak otomatis terbuka, pastikan WhatsApp terinstal di perangkat Anda.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Kirim via WhatsApp
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Isi formulir di bawah ini, lalu klik tombol untuk mengirim pesan langsung ke WhatsApp kami.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Nama Lengkap <span className="text-red-500">*</span>
                        </label>
                        <Input
                          required
                          placeholder="Masukkan nama lengkap"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          required
                          type="email"
                          placeholder="contoh@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          No. Telepon / WhatsApp
                        </label>
                        <Input
                          placeholder="08xx-xxxx-xxxx"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Minat
                        </label>
                        <Select
                          value={formData.interest}
                          onValueChange={(value) =>
                            setFormData({ ...formData, interest: value })
                          }
                        >
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Pilih minat Anda" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ppdb">
                              Pendaftaran Siswa Baru
                            </SelectItem>
                            <SelectItem value="perhotelan">
                              Program Perhotelan
                            </SelectItem>
                            <SelectItem value="tkj">
                              Program TKJ
                            </SelectItem>
                            <SelectItem value="mekatronika">
                              Program Mekatronika
                            </SelectItem>
                            <SelectItem value="kerjasama">
                              Kerjasama / Partnership
                            </SelectItem>
                            <SelectItem value="informasi">
                              Informasi Umum
                            </SelectItem>
                            <SelectItem value="lainnya">Lainnya</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Pesan <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        required
                        placeholder="Tulis pesan Anda di sini..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="bg-white resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6 shadow-md hover:shadow-lg transition-all"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Memproses...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <MessageCircle className="w-5 h-5" />
                          Kirim via WhatsApp
                        </span>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
