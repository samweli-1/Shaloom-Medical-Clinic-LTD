"use client";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const GALLERY_ITEMS = [
  { src: "https://images.unsplash.com/photo-1666214280391-8ff5bd3d1e3a?w=800&q=80", label: "Consultation Room" },
  { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80", label: "Laboratory" },
  { src: "https://images.unsplash.com/photo-1559757175-7cb036e0b7a4?w=800&q=80", label: "Medical Team" },
  { src: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=800&q=80", label: "Reception Area" },
  { src: "https://images.unsplash.com/photo-1622253694242-abeb37a33e97?w=800&q=80", label: "Patient Care" },
  { src: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80", label: "Pharmacy" },
  { src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80", label: "Dental Suite" },
  { src: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80", label: "Ultrasound Room" },
];

export default function Gallery() {
  const { t } = useLang();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-pad bg-white dark:bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800
                           text-brand-600 dark:text-brand-400 text-xs font-semibold mb-4">
            {t.gallery.badge}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">
            {t.gallery.headline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.gallery.sub}</p>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl
                          transition-all duration-300 hover:-translate-y-1 cursor-zoom-in
                          ${i === 0 || i === 4 ? "row-span-2" : ""}`}
              style={{ aspectRatio: i === 0 || i === 4 ? "3/4" : "4/3" }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <p className="text-white text-xs font-semibold">{item.label}</p>
                  <ZoomIn size={16} className="text-white" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
                       flex items-center justify-center text-white transition-colors"
          >
            <X size={20} />
          </button>
          <img
            src={GALLERY_ITEMS[selected].src}
            alt={GALLERY_ITEMS[selected].label}
            className="max-w-4xl max-h-[85vh] w-full object-contain rounded-2xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium">
            {GALLERY_ITEMS[selected].label}
          </p>
        </div>
      )}
    </section>
  );
}
