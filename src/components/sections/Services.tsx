"use client";
import {
  Stethoscope, Smile, Scissors, ScanLine,
  Baby, FlaskConical, Syringe, HeartPulse, ArrowRight,
} from "lucide-react";
import { useLang } from "@/hooks/useLang";

const SERVICE_ICONS = [
  Stethoscope, Smile, Scissors, ScanLine,
  Baby, FlaskConical, Syringe, HeartPulse,
];

const COLORS = [
  "from-blue-500 to-brand-600",
  "from-cyan-500 to-blue-500",
  "from-indigo-500 to-violet-500",
  "from-brand-500 to-sky-500",
  "from-pink-500 to-rose-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-purple-500 to-pink-500",
];

export default function Services() {
  const { t } = useLang();

  return (
    <section
      id="services"
      className="section-pad bg-slate-50 dark:bg-[#0A1525]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800
                           text-brand-600 dark:text-brand-400 text-xs font-semibold mb-4">
            {t.services.badge}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">
            {t.services.headline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.services.sub}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((svc, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <div
                key={svc.title}
                className="group relative bg-white dark:bg-[#0F1F35] rounded-3xl p-6
                           border border-slate-100 dark:border-slate-800
                           hover:border-brand-200 dark:hover:border-brand-800
                           shadow-sm hover:shadow-lg hover:shadow-brand-600/10
                           transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${COLORS[i]}
                                 flex items-center justify-center mb-5 shadow-md
                                 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {svc.desc}
                </p>

                <div className="flex items-center gap-1 text-brand-600 dark:text-brand-400 text-xs font-semibold
                                opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>Learn more</span>
                  <ArrowRight size={12} />
                </div>

                {/* Hover accent */}
                <div className={`absolute inset-x-0 bottom-0 h-1 rounded-b-3xl bg-gradient-to-r ${COLORS[i]}
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
