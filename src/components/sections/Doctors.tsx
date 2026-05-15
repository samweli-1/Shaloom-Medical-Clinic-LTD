"use client";
import { Languages, BadgeCheck, CalendarCheck } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const DOCTOR_IMAGES = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/55.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
];

export default function Doctors() {
  const { t } = useLang();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="doctors" className="section-pad bg-white dark:bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800
                           text-brand-600 dark:text-brand-400 text-xs font-semibold mb-4">
            {t.doctors.badge}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">
            {t.doctors.headline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.doctors.sub}</p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.doctors.items.map((doc, i) => (
            <div
              key={doc.name}
              className="group bg-white dark:bg-[#0F1F35] rounded-3xl overflow-hidden
                         border border-slate-100 dark:border-slate-800
                         hover:border-brand-200 dark:hover:border-brand-800
                         shadow-sm hover:shadow-xl hover:shadow-brand-600/10
                         transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={DOCTOR_IMAGES[i]}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full
                                   bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    <BadgeCheck size={12} />
                    Verified
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">{doc.name}</h3>
                <p className="text-sm text-brand-600 dark:text-brand-400 font-medium mb-3 leading-snug">
                  {doc.role}
                </p>
                <div className="flex items-start gap-2 mb-4">
                  <Languages size={13} className="text-slate-400 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-500 dark:text-slate-400">{doc.langs}</p>
                </div>
                <button
                  onClick={() => scrollTo("appointment")}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl
                             bg-brand-50 dark:bg-brand-950 hover:bg-brand-100 dark:hover:bg-brand-900
                             text-brand-600 dark:text-brand-400 text-sm font-semibold transition-colors"
                >
                  <CalendarCheck size={14} />
                  {t.nav.bookNow}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
