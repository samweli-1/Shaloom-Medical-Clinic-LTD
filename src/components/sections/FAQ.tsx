"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-slate-50 dark:bg-[#0A1525]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800
                           text-brand-600 dark:text-brand-400 text-xs font-semibold mb-4">
            {t.faq.badge}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">
            {t.faq.headline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.faq.sub}</p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "bg-white dark:bg-[#0F1F35] rounded-2xl border transition-all duration-200 overflow-hidden",
                open === i
                  ? "border-brand-300 dark:border-brand-700 shadow-md shadow-brand-600/10"
                  : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
              )}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className={cn(
                  "text-sm font-semibold leading-snug transition-colors",
                  open === i
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-slate-800 dark:text-slate-100"
                )}>
                  {item.q}
                </span>
                <div className={cn(
                  "shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors",
                  open === i
                    ? "bg-brand-600 dark:bg-brand-700 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                )}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
