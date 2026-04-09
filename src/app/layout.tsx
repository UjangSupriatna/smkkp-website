import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMK Karya Permata - Sekolah Menengah Kejuruan Unggulan di Rancaekek",
  description:
    "SMK Karya Permata Rancaekek, Kabupaten Bandung. Sekolah menengah kejuruan dengan program keahlian Perhotelan dan Teknik Jaringan dan Komputer. Mencetak lulusan siap kerja dan berwirausaha.",
  keywords: [
    "SMK Karya Permata",
    "sekolah kejuruan",
    "Rancaekek",
    "Bandung",
    "Perhotelan",
    "TKJ",
    "Teknik Jaringan dan Komputer",
    "SMK",
    "vocational school",
  ],
  authors: [{ name: "SMK Karya Permata" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SMK Karya Permata - Sekolah Unggulan di Rancaekek",
    description:
      "Mencetak lulusan siap kerja dan berwirausaha dengan program keahlian Perhotelan dan Teknik Jaringan dan Komputer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
