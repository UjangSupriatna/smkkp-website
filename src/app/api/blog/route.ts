import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const DEFAULT_POSTS = [
  {
    title: "Jasa Pemasangan CCTV Profesional",
    slug: "jasa-pemasangan-cctv",
    excerpt:
      "Lindungi properti dan aset Anda dengan sistem CCTV terbaik. Tim profesional kami siap membantu pemasangan kamera pengawas untuk rumah, kantor, gudang, dan area komersial lainnya dengan teknologi terkini.",
    content: `
## Jasa Pemasangan CCTV Profesional

Keamanan merupakan aspek yang tidak bisa diabaikan, baik untuk rumah tinggal, kantor, maupun area komersial. Kami menyediakan **jasa pemasangan CCTV profesional** dengan standar kualitas tinggi untuk memastikan properti Anda terlindungi dengan baik.

### Layanan Kami

- **Survei Lokasi & Konsultasi Gratis** — Tim kami akan melakukan survei untuk menentukan titik pemasangan CCTV yang optimal sesuai kebutuhan Anda.
- **Pemasangan CCTV Indoor & Outdoor** — Kamera berkualitas tinggi untuk pengawasan di dalam maupun luar ruangan dengan fitur night vision.
- **Sistem DVR/NVR Terintegrasi** — Rekam dan simpan rekaman CCTV hingga 30 hari dengan sistem penyimpanan terbaru.
- **Remote Monitoring via Smartphone** — Pantau keamanan properti Anda dari mana saja melalui aplikasi HP.
- **Maintenance & Support** — Layanan perawatan berkala dan dukungan teknis 24/7.

### Mengapa Memilih Kami?

✅ Teknisi berpengalaman dan bersertifikat
✅ Menggunakan produk CCTV berkualitas (Hikvision, Dahua, dll)
✅ Garansi pemasangan dan peralatan
✅ Harga transparan tanpa biaya tersembunyi
✅ Respons cepat untuk layanan after-sales

### Area Layanan

Kami melayani pemasangan CCTV di wilayah Rancaekek, Kabupaten Bandung, dan sekitarnya. Hubungi kami sekarang untuk konsultasi gratis!
    `,
    category: "Keamanan",
    image: "/images/blog/cctv-installation.jpg",
  },
  {
    title: "Jasa Pemasangan Pintu Otomatis",
    slug: "jasa-pemasangan-pintu-otomatis",
    excerpt:
      "Tingkatkan efisiensi dan modernisasi bangunan Anda dengan pintu otomatis. Kami menyediakan solusi pintu geser, pintu ayun otomatis, dan barrier gate untuk berbagai kebutuhan komersial dan residensial.",
    content: `
## Jasa Pemasangan Pintu Otomatis

Pintu otomatis menjadi investasi penting untuk meningkatkan efisiensi, keamanan, dan kesan modern pada bangunan Anda. Kami hadir sebagai penyedia **jasa pemasangan pintu otomatis** terpercaya dengan berbagai pilihan sistem.

### Jenis Pintu Otomatis

- **Pintu Geser Otomatis (Automatic Sliding Door)** — Cocok untuk mall, hotel, rumah sakit, dan pertokoan. Sensor inframerah untuk deteksi otomatis.
- **Pintu Ayun Otomatis (Automatic Swing Door)** — Ideal untuk lobby kantor, restoran, dan area publik dengan sistem buka-tutup halus.
- **Barrier Gate & Palang Parkir** — Solusi untuk pengelolaan parkir, gudang, dan area akses kendaraan.
- **Rolling Door Otomatis** — Keamanan ekstra untuk ruko, gudang, dan garasi dengan sistem remote control.
- **Gate Motor Otomatis** — Pagar geser otomatis untuk perumahan dan area komersial.

### Keunggulan Layanan Kami

✅ Pemasangan oleh teknisi bersertifikat
✅ Produk berkualitas dari brand terpercaya
✅ Sensor canggih & aman (anti-pinch)
✅ Garansi unit dan pemasangan
✅ Perawatan & servis berkala

### Area Layanan

Kami melayani pemasangan pintu otomatis di Rancaekek, Bandung, dan sekitarnya. Konsultasikan kebutuhan Anda dengan tim kami sekarang!
    `,
    category: "Otomasi",
    image: "/images/blog/automatic-door.jpg",
  },
  {
    title: "Jasa Pembuatan Aplikasi & Website Custom",
    slug: "jasa-pembuatan-aplikasi-website",
    excerpt:
      "Wujudkan ide digital Anda menjadi nyata! Kami menyediakan jasa pembuatan website dan aplikasi mobile custom yang profesional, responsif, dan sesuai kebutuhan bisnis Anda dengan teknologi terkini.",
    content: `
## Jasa Pembuatan Aplikasi & Website Custom

Di era digital saat ini, kehadiran online bukan lagi sekadar pilihan, melainkan kebutuhan. Kami menawarkan **jasa pembuatan website dan aplikasi custom** yang dirancang khusus untuk memenuhi kebutuhan unik bisnis Anda.

### Layanan Kami

- **Website Company Profile** — Website profesional untuk merepresentasikan bisnis Anda secara online dengan desain modern dan responsif.
- **Toko Online / E-Commerce** — Platform jual beli online yang lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin.
- **Aplikasi Mobile (Android & iOS)** — Aplikasi mobile native atau hybrid untuk meningkatkan jangkauan dan engagement pelanggan.
- **Sistem Informasi Manajemen** — Aplikasi internal untuk mengelola operasional bisnis (inventory, HR, akuntansi, dll).
- **Landing Page & Digital Marketing** — Halaman promosi yang dioptimalkan untuk konversi dan kampanye digital.

### Teknologi yang Kami Gunakan

| Frontend | Backend | Mobile | Database |
|----------|---------|--------|----------|
| React / Next.js | Node.js | React Native | PostgreSQL |
| Vue.js / Nuxt | Laravel | Flutter | MySQL |
| Tailwind CSS | Express.js | Swift | MongoDB |

### Kenapa Memilih Kami?

✅ Tim developer berpengalaman dan profesional
✅ Desain UI/UX modern dan user-friendly
✅ Kode bersih, terstruktur, dan mudah di-maintain
✅ Support & maintenance pasca-launching
✅ Harga transparan dengan timeline jelas
✅ Revisi sampai puas

### Proses Pengerjaan

1. **Konsultasi** — Diskusi kebutuhan dan tujuan project
2. **Rancang & Prototype** — Pembuatan wireframe dan desain UI
3. **Development** — Proses coding dan integrasi fitur
4. **Testing** — Quality assurance dan uji coba menyeluruh
5. **Launch** — Deployment dan go-live
6. **Maintenance** — Support teknis berkelanjutan

Hubungi kami untuk konsultasi dan dapatkan penawaran terbaik!
    `,
    category: "Teknologi",
    image: "/images/blog/web-app-development.jpg",
  },
];

async function seedBlogPosts() {
  for (const post of DEFAULT_POSTS) {
    await db.blogPost.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        image: post.image,
      },
      create: post,
    });
  }
}

export async function GET() {
  try {
    // Seed default posts if empty
    const existingCount = await db.blogPost.count();
    if (existingCount === 0) {
      await seedBlogPosts();
    }

    const posts = await db.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data blog" },
      { status: 500 }
    );
  }
}
