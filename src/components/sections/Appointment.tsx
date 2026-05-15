"use client";
import { useState } from "react";
import { CalendarCheck, MessageSquare, Clock, CheckCircle } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { cn } from "@/lib/utils";

export default function Appointment() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", service: "", doctor: "", date: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls = cn(
    "w-full px-4 py-3 rounded-xl text-sm",
    "bg-white dark:bg-[#132540] border border-slate-200 dark:border-slate-700",
    "text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500",
    "focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 dark:focus:border-brand-400",
    "transition-colors duration-200"
  );

  return (
    <section
      id="appointment"
      className="section-pad bg-slate-50 dark:bg-[#0A1525]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800
                           text-brand-600 dark:text-brand-400 text-xs font-semibold mb-4">
            {t.appointment.badge}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">
            {t.appointment.headline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.appointment.sub}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* ── Form ── */}
          <div className="lg:col-span-2 bg-white dark:bg-[#0F1F35] rounded-3xl p-8
                          border border-slate-100 dark:border-slate-800 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {t.appointment.success}
                </h3>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-brand-600 dark:text-brand-400 underline"
                >
                  Book another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.appointment.name} *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={t.appointment.namePh}
                    className={inputCls}
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.appointment.phone} *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder={t.appointment.phonePh}
                    className={inputCls}
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                {/* Service */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.appointment.service} *
                  </label>
                  <select
                    required
                    className={inputCls}
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">{t.appointment.servicePh}</option>
                    {t.services.items.map(s => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                {/* Doctor */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.appointment.doctor}
                  </label>
                  <select
                    className={inputCls}
                    value={form.doctor}
                    onChange={e => setForm({ ...form, doctor: e.target.value })}
                  >
                    <option value="">{t.appointment.doctorPh}</option>
                    {t.doctors.items.map(d => (
                      <option key={d.name} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>
                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.appointment.date} *
                  </label>
                  <input
                    required
                    type="date"
                    className={inputCls}
                    value={form.date}
                    onChange={e => setForm({ ...form, date: e.target.value })}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                {/* Spacer */}
                <div className="hidden sm:block" />
                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.appointment.message}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={t.appointment.messagePh}
                    className={cn(inputCls, "resize-none")}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {/* Submit */}
                <div className="sm:col-span-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl
                               bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm
                               shadow-lg shadow-brand-600/30 transition-all duration-200"
                  >
                    <CalendarCheck size={16} />
                    {t.appointment.submit}
                  </button>

                  <span className="text-slate-400 text-sm">{t.appointment.or}</span>

                  <a
                    href="https://wa.me/250780000000?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Shaloom%20Medical%20Clinic."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl
                               bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm
                               shadow-lg shadow-emerald-500/30 transition-all duration-200"
                  >
                    <MessageSquare size={16} />
                    {t.appointment.whatsapp}
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* ── Hours sidebar ── */}
          <div className="flex flex-col gap-4">
            <div className="bg-brand-600 dark:bg-brand-800 rounded-3xl p-7 text-white">
              <div className="flex items-center gap-2 mb-6">
                <Clock size={18} />
                <h3 className="font-semibold">{t.appointment.hours}</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: t.appointment.mon, time: t.appointment.monH },
                  { label: t.appointment.sat, time: t.appointment.satH },
                  { label: t.appointment.sun, time: t.appointment.sunH },
                ].map(row => (
                  <div key={row.label} className="flex justify-between items-start gap-2">
                    <p className="text-blue-100 text-sm leading-snug">{row.label}</p>
                    <p className="text-white font-semibold text-sm text-right leading-snug whitespace-nowrap">{row.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-[#0F1F35] rounded-3xl p-7
                            border border-slate-100 dark:border-slate-800 shadow-sm">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Emergency Contact</h3>
              <p className="text-2xl font-bold text-brand-600 dark:text-brand-400">+250 780 000 000</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Available 24/7 for emergencies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
