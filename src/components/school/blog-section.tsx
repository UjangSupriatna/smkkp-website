"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Newspaper,
  Calendar,
  ArrowRight,
  Clock,
  X,
  ChevronRight,
  Shield,
  Zap,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const categoryIcons: Record<string, typeof Shield> = {
  Keamanan: Shield,
  Otomasi: Zap,
  Teknologi: Code,
};

const categoryColors: Record<string, string> = {
  Keamanan: "bg-red-100 text-red-700",
  Otomasi: "bg-amber-100 text-amber-700",
  Teknologi: "bg-blue-100 text-blue-700",
};

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        if (data.success) {
          setPosts(data.posts);
        }
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const renderMarkdown = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Skip empty lines
      if (line.trim() === "") {
        i++;
        continue;
      }

      // Headings
      if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={i}
            className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4"
          >
            {line.replace("## ", "")}
          </h2>
        );
        i++;
        continue;
      }

      if (line.startsWith("### ")) {
        elements.push(
          <h3
            key={i}
            className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-3"
          >
            {line.replace("### ", "")}
          </h3>
        );
        i++;
        continue;
      }

      // Table rows (simplified)
      if (line.startsWith("|") && line.endsWith("|")) {
        const isSeparator = line.replace(/[|\-\s]/g, "") === "";
        if (isSeparator) {
          i++;
          continue;
        }
        const cells = line
          .split("|")
          .filter((c) => c.trim() !== "")
          .map((c) => c.trim());
        elements.push(
          <div key={i} className="flex gap-4 py-2 border-b border-gray-100 text-sm">
            {cells.map((cell, ci) => (
              <span key={ci} className={ci === 0 ? "font-medium text-gray-700 flex-1" : "text-gray-600 flex-1"}>
                {cell}
              </span>
            ))}
          </div>
        );
        i++;
        continue;
      }

      // Numbered list
      const numberedMatch = line.match(/^(\d+)\.\s+(.*)/);
      if (numberedMatch) {
        elements.push(
          <div key={i} className="flex items-start gap-3 my-2">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              {numberedMatch[1]}
            </span>
            <span className="text-gray-700">{numberedMatch[2]}</span>
          </div>
        );
        i++;
        continue;
      }

      // Bullet points with bold
      if (line.startsWith("- **")) {
        const boldMatch = line.match(/^- \*\*(.*)\*\*\s*[—\-]?\s*(.*)/);
        if (boldMatch) {
          elements.push(
            <div key={i} className="flex items-start gap-2 my-1.5">
              <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                <strong className="text-gray-900">{boldMatch[1]}</strong>
                {boldMatch[2] ? ` — ${boldMatch[2]}` : ""}
              </span>
            </div>
          );
        } else {
          elements.push(
            <div key={i} className="flex items-start gap-2 my-1.5">
              <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
              <span
                className="text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: line
                    .replace(/^- /, "")
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            </div>
          );
        }
        i++;
        continue;
      }

      // Check items with emoji (✅)
      if (line.startsWith("✅") || line.startsWith("❌")) {
        const emoji = line.charAt(0);
        const text = line.slice(1).trim();
        elements.push(
          <div key={i} className="flex items-start gap-2 my-1">
            <span className="flex-shrink-0">{emoji}</span>
            <span
              className="text-gray-700"
              dangerouslySetInnerHTML={{
                __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          </div>
        );
        i++;
        continue;
      }

      // Regular paragraph
      elements.push(
        <p key={i} className="text-gray-700 leading-relaxed my-3">
          {line.replace(/\*\*(.*?)\*\*/g, "$1")}
        </p>
      );
      i++;
    }

    return elements;
  };

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="blog" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
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
            <span className="text-sm font-medium">Blog & Layanan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Artikel & <span className="text-blue-700">Layanan Kami</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Informasi terbaru seputar layanan yang kami tawarkan untuk membantu
            kebutuhan keamanan, otomasi, dan teknologi digital Anda.
          </p>
        </motion.div>

        {/* Loading state */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse"
              >
                <div className="w-full h-48 bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-4 w-20 bg-gray-200 rounded" />
                  <div className="h-6 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-3/4 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post) => {
              const IconComp = categoryIcons[post.category] || Newspaper;
              const colorClass =
                categoryColors[post.category] || "bg-blue-100 text-blue-700";

              return (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group cursor-pointer"
                  onClick={() => openPost(post)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${colorClass} border-0 font-medium px-3 py-1`}
                      >
                        <IconComp className="w-3 h-3 mr-1" />
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.createdAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        5 min baca
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => handleNavClick("#kontak")}
            variant="outline"
            className="border-blue-200 text-blue-700 hover:bg-blue-50 font-medium px-8"
          >
            Konsultasi Layanan
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>

      {/* Blog Post Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>
              {selectedPost?.title || "Detail Artikel"}
            </DialogTitle>
          </DialogHeader>
          {selectedPost && (
            <ScrollArea className="max-h-[90vh]">
              <div className="relative">
                {/* Hero image */}
                <div className="relative h-56 md:h-72">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge
                      className={`${
                        categoryColors[selectedPost.category] ||
                        "bg-blue-100 text-blue-700"
                      } border-0 font-medium mb-2`}
                    >
                      {selectedPost.category}
                    </Badge>
                    <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                      {selectedPost.title}
                    </h2>
                    <div className="flex items-center gap-4 text-white/70 text-xs mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(selectedPost.createdAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        5 min baca
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {renderMarkdown(selectedPost.content)}

                  <Separator className="my-8" />

                  {/* CTA */}
                  <div className="bg-blue-50 rounded-2xl p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Tertarik dengan layanan ini?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Hubungi kami untuk konsultasi gratis dan dapatkan penawaran
                      terbaik.
                    </p>
                    <Button
                      onClick={() => {
                        setIsDialogOpen(false);
                        setTimeout(() => {
                          const el = document.querySelector("#kontak");
                          if (el)
                            el.scrollIntoView({ behavior: "smooth" });
                        }, 300);
                      }}
                      className="bg-blue-700 hover:bg-blue-800 text-white shadow-md hover:shadow-lg transition-all"
                    >
                      Hubungi Kami
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function handleNavClick(href: string) {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
