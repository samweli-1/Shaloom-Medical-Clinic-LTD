"use client";
import { ArrowRight, CalendarCheck, Phone, ShieldCheck, Users, Stethoscope, FlaskConical } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const STATS = [
  { icon: ShieldCheck,   keyEn: "stat1", val: "5+" },
  { icon: Users,         keyEn: "stat2", val: "10K+" },
  { icon: Stethoscope,   keyEn: "stat3", val: "8" },
  { icon: FlaskConical,  keyEn: "stat4", val: "8" },
];

export default function Hero() {
  const { t } = useLang();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
                 bg-gradient-to-br from-brand-50 via-white to-blue-50
                 dark:from-[#060D1A] dark:via-[#0A1525] dark:to-[#0D1B2E]
                 grid-bg pt-28 pb-20"
    >
      {/* Decorative blobs */}
      <div className="absolute top-24 right-0 w-[600px] h-[600px] rounded-full
                      bg-brand-400/10 dark:bg-brand-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full
                      bg-blue-300/10 dark:bg-blue-800/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left copy ── */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                            bg-brand-100 dark:bg-brand-950 border border-brand-200 dark:border-brand-800
                            text-brand-700 dark:text-brand-300 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-slow" />
              {t.hero.badge}
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6
                           text-slate-900 dark:text-white">
              {t.hero.headline}
              <br />
              <span className="gradient-text">{t.hero.highlight}</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              {t.hero.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => scrollTo("appointment")}
                className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white
                           font-semibold px-7 py-3.5 rounded-2xl transition-all duration-200
                           shadow-lg shadow-brand-600/30 hover:shadow-brand-600/40 hover:-translate-y-0.5"
              >
                <CalendarCheck size={18} />
                {t.hero.cta1}
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="flex items-center gap-2 font-semibold px-7 py-3.5 rounded-2xl
                           border-2 border-brand-200 dark:border-brand-800
                           text-brand-700 dark:text-brand-300
                           hover:bg-brand-50 dark:hover:bg-brand-950 transition-colors"
              >
                {t.hero.cta2}
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map(({ icon: Icon, keyEn, val }) => (
                <div
                  key={keyEn}
                  className="glass-card rounded-2xl p-4 text-center shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-100 dark:bg-brand-950 flex items-center justify-center mx-auto mb-2">
                    <Icon size={16} className="text-brand-600 dark:text-brand-400" />
                  </div>
                  <p className="text-2xl font-bold text-brand-600 dark:text-brand-400">{val}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                    {t.hero[keyEn as keyof typeof t.hero]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right visual ── */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Main image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-brand-600/20 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1666214280391-8ff5bd3d1e3a?w=600&q=80"
                  alt="Medical professional at Shaloom Clinic"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
              </div>

              {/* Floating card — phone */}
              <div className="absolute -left-10 top-10 z-20 glass-card rounded-2xl p-4 shadow-xl
                              flex items-center gap-3 max-w-[180px]">
                <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">Emergency</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">+250 780 000 000</p>
                </div>
              </div>

              {/* Floating card — availability */}
              <div className="absolute -right-8 bottom-16 z-20 glass-card rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                    Open Today
                  </p>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">7:00 AM – 6:00 PM</p>
              </div>

              {/* Decorative ring */}
              <div className="absolute inset-0 -m-4 rounded-3xl border-2 border-brand-200/50 dark:border-brand-800/30 -z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
