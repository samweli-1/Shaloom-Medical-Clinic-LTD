"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const inputCls = cn(
    "w-full px-4 py-3 rounded-xl text-sm",
    "bg-white dark:bg-[#132540] border border-slate-200 dark:border-slate-700",
    "text-slate-900 dark:text-slate-100 placeholder:text-slate-400",
    "focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500",
    "transition-colors"
  );

  const INFO = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: t.contact.addressVal,
      href: "https://maps.google.com/?q=Bigogwe,Nyabihu,Rwanda",
    },
    { icon: Phone, label: t.contact.phone, value: "+250 780 000 000", href: "tel:+250780000000" },
    { icon: Mail,  label: t.contact.email, value: "info@shaloomclinic.rw", href: "mailto:info@shaloomclinic.rw" },
    {
      icon: Clock, label: t.contact.hours,
      value: `${t.contact.monFri}\n${t.contact.sat}\n${t.contact.sun}`,
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-pad bg-slate-50 dark:bg-[#0A1525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800
                           text-brand-600 dark:text-brand-400 text-xs font-semibold mb-4">
            {t.contact.badge}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">
            {t.contact.headline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.contact.sub}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* ── Info + Map ── */}
          <div className="flex flex-col gap-6">
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {INFO.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="bg-white dark:bg-[#0F1F35] rounded-2xl p-5
                             border border-slate-100 dark:border-slate-800 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-100 dark:bg-brand-950 flex items-center justify-center mb-3">
                    <Icon size={16} className="text-brand-600 dark:text-brand-400" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed">{value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Embedded map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm h-64 lg:h-auto lg:flex-1">
              <iframe
                title="Shaloom Medical Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63799.41774571278!2d29.439087!3d-1.608523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc6b0001c79c29%3A0x8a6e4d8be4c2efb6!2sNyabihu%20District%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1700000000000"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── Contact form ── */}
          <div className="bg-white dark:bg-[#0F1F35] rounded-3xl p-8
                          border border-slate-100 dark:border-slate-800 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center mb-4">
                  <Send size={24} className="text-emerald-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Message sent!</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">We will get back to you shortly.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm text-brand-600 dark:text-brand-400 underline">
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); setSent(true); }}
                className="flex flex-col gap-5"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Send us a message
                </h3>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.contact.formName} *
                  </label>
                  <input
                    required type="text"
                    className={inputCls}
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.contact.formPhone} *
                  </label>
                  <input
                    required type="tel"
                    className={inputCls}
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.contact.formMsg} *
                  </label>
                  <textarea
                    required rows={5}
                    className={cn(inputCls, "resize-none")}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl
                               bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm
                               shadow-lg shadow-brand-600/30 transition-colors"
                  >
                    <Send size={15} />
                    {t.contact.formSend}
                  </button>
                  <a
                    href="https://wa.me/250780000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl
                               bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm
                               shadow-lg shadow-emerald-500/20 transition-colors"
                  >
                    <MessageSquare size={15} />
                    {t.contact.whatsapp}
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
