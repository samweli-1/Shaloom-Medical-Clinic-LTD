"use client";
import { Cross, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const NAV_LINKS = ["home","about","services","doctors","appointment","blog","faq","gallery","contact"] as const;
const SERVICE_KEYS = [0,1,2,3,4,5,6,7] as const;

const SOCIALS = [
  { icon: Facebook,  href: "#", label: "Facebook" },
  { icon: Twitter,   href: "#", label: "Twitter / X" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const { t } = useLang();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-slate-900 dark:bg-[#030810] text-slate-400">
      {/* ── CTA band ── */}
      <div className="bg-brand-600 dark:bg-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12
                        flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display text-white mb-1">Ready to take care of your health?</h3>
            <p className="text-blue-100 text-sm">Book your appointment today — we are here for you.</p>
          </div>
          <button
            onClick={() => scrollTo("appointment")}
            className="shrink-0 bg-white hover:bg-blue-50 text-brand-700 font-semibold
                       px-8 py-3.5 rounded-2xl transition-colors shadow-lg shadow-brand-900/20"
          >
            {t.nav.bookNow}
          </button>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center">
                <Cross size={16} className="text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">Shaloom</p>
                <p className="text-[10px] text-slate-500 leading-tight">Medical Clinic Ltd</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">{t.footer.tagline}</p>
            {/* Socials */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-slate-800 dark:bg-slate-900 hover:bg-brand-600
                             flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              {t.footer.links}
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(key => (
                <li key={key}>
                  <button
                    onClick={() => scrollTo(key)}
                    className="text-sm hover:text-white hover:translate-x-1 transition-all duration-200 capitalize"
                  >
                    {t.nav[key as keyof typeof t.nav]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              {t.footer.services}
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_KEYS.map(i => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-sm hover:text-white hover:translate-x-1 transition-all duration-200 text-left"
                  >
                    {t.services.items[i].title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              {t.nav.contact}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-400 mt-0.5 shrink-0" />
                <p className="text-sm leading-snug">{t.contact.addressVal}</p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-brand-400 shrink-0" />
                <a href="tel:+250780000000" className="text-sm hover:text-white transition-colors">
                  +250 780 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-brand-400 shrink-0" />
                <a href="mailto:info@shaloomclinic.rw" className="text-sm hover:text-white transition-colors">
                  info@shaloomclinic.rw
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-800 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>{t.footer.legal}</p>
          <p className="text-slate-600">{t.footer.designed}</p>
        </div>
      </div>
    </footer>
  );
}
