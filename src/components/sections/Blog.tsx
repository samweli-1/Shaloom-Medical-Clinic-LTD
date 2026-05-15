"use client";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const BLOG_IMAGES = [
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80",
  "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80",
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80",
];

const CATEGORY_COLORS: Record<string, string> = {
  "Maternal Health":    "bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300",
  "Disease Prevention": "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300",
  "Dental Health":      "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300",
  "Ubuzima bw'Ababyeyi":"bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300",
  "Gukumira Indwara":   "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300",
  "Ubuzima bw'Amenyo":  "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300",
};

export default function Blog() {
  const { t } = useLang();

  return (
    <section id="blog" className="section-pad bg-white dark:bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800
                           text-brand-600 dark:text-brand-400 text-xs font-semibold mb-4">
            {t.blog.badge}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">
            {t.blog.headline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.blog.sub}</p>
        </div>

        {/* Posts grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.blog.posts.map((post, i) => (
            <article
              key={post.title}
              className="group bg-white dark:bg-[#0F1F35] rounded-3xl overflow-hidden
                         border border-slate-100 dark:border-slate-800
                         hover:border-brand-200 dark:hover:border-brand-800
                         shadow-sm hover:shadow-xl hover:shadow-brand-600/10
                         transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="overflow-hidden h-52">
                <img
                  src={BLOG_IMAGES[i]}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium
                                    ${CATEGORY_COLORS[post.category] ?? "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                    <Tag size={10} />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                    <Calendar size={11} />
                    {post.date}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400
                                   hover:gap-2 transition-all duration-200">
                  {t.blog.readMore}
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
