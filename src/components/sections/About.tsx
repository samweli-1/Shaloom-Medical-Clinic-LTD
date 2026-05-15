"use client";
import { Heart, Star, ShieldCheck, Accessibility, Target, Eye } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const VALUE_ICONS = [Heart, Star, ShieldCheck, Accessibility];

export default function About() {
  const { t } = useLang();
  const vals = [t.about.val1, t.about.val2, t.about.val3, t.about.val4];

  return (
    <section id="about" className="section-pad bg-white dark:bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800
                           text-brand-600 dark:text-brand-400 text-xs font-semibold">
            {t.about.badge}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Image collage ── */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=400&q=80"
                alt="Clinic interior"
                className="rounded-3xl h-56 w-full object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1559757175-7cb036e0b7a4?w=400&q=80"
                alt="Medical team"
                className="rounded-3xl h-56 w-full object-cover shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&q=80"
                alt="Laboratory"
                className="rounded-3xl h-48 w-full object-cover shadow-lg -mt-4"
              />
              <img
                src="https://images.unsplash.com/photo-1622253694242-abeb37a33e97?w=400&q=80"
                alt="Patient care"
                className="rounded-3xl h-48 w-full object-cover shadow-lg mt-4"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                            glass-card rounded-2xl p-5 shadow-xl text-center">
              <p className="text-4xl font-bold text-brand-600 dark:text-brand-400">5+</p>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1 whitespace-nowrap">
                {t.hero.stat1}
              </p>
            </div>
          </div>

          {/* ── Content ── */}
          <div>
            <h2 className="font-display text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6">
              {t.about.headline}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {t.about.sub}
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-brand-50 dark:bg-brand-950/50 border border-brand-100 dark:border-brand-900">
                <div className="flex items-center gap-2 mb-2">
                  <Target size={16} className="text-brand-600 dark:text-brand-400" />
                  <p className="text-sm font-semibold text-brand-700 dark:text-brand-300">{t.about.mission}</p>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t.about.missionText}</p>
              </div>
              <div className="p-5 rounded-2xl bg-brand-50 dark:bg-brand-950/50 border border-brand-100 dark:border-brand-900">
                <div className="flex items-center gap-2 mb-2">
                  <Eye size={16} className="text-brand-600 dark:text-brand-400" />
                  <p className="text-sm font-semibold text-brand-700 dark:text-brand-300">{t.about.vision}</p>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t.about.visionText}</p>
              </div>
            </div>

            {/* Values */}
            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">
                {t.about.values}
              </p>
              <div className="flex flex-wrap gap-3">
                {vals.map((val, i) => {
                  const Icon = VALUE_ICONS[i];
                  return (
                    <div
                      key={val}
                      className="flex items-center gap-2 px-4 py-2 rounded-full
                                 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700
                                 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm"
                    >
                      <Icon size={14} className="text-brand-600 dark:text-brand-400" />
                      {val}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
