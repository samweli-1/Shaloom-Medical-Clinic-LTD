"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Menu, X, Sun, Moon, Phone, ChevronDown, Cross,
} from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  "home","about","services","doctors","appointment","blog","faq","gallery","contact",
] as const;

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const { theme, setTheme } = useTheme();
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = NAV_LINKS as readonly string[];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-[#060D1A]/90 backdrop-blur-md shadow-sm border-b border-brand-100 dark:border-brand-950"
          : "bg-transparent"
      )}
    >
      {/* Top bar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 bg-brand-600 dark:bg-brand-800 text-white text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Phone size={11} />
            +250 780 000 000
          </span>
          <span className="opacity-60">|</span>
          <span>{lang === "en" ? "Mon–Fri: 7AM–6PM  |  Sat: 8AM–2PM" : "Ku wa Mbere–Gatanu: 7AM–6PM  |  Ku wa Gatandatu: 8AM–2PM"}</span>
        </div>
        <span className="opacity-80">Bigogwe, Nyabihu District, Western Province, Rwanda</span>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center shadow-md group-hover:bg-brand-700 transition-colors">
            <Cross size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-brand-700 dark:text-brand-300 leading-tight">Shaloom</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Medical Clinic Ltd</p>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((key) => (
            <li key={key}>
              <button
                onClick={() => scrollTo(key)}
                className={cn("nav-link px-3 py-2 capitalize", active === key && "active")}
              >
                {t.nav[key as keyof typeof t.nav]}
              </button>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "rw" : "en")}
            className="hidden sm:flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950 transition-colors"
          >
            {lang === "en" ? "RW" : "EN"}
            <ChevronDown size={11} />
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-brand-50 dark:hover:bg-brand-950 border border-slate-200 dark:border-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Book CTA */}
          <button
            onClick={() => scrollTo("appointment")}
            className="hidden sm:flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-md shadow-brand-600/20"
          >
            {t.nav.bookNow}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden animate-slide-down bg-white dark:bg-[#0A1525] border-t border-slate-100 dark:border-slate-800 px-4 pb-6 pt-2">
          <ul className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map((key) => (
              <li key={key}>
                <button
                  onClick={() => scrollTo(key)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors capitalize",
                    active === key
                      ? "bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  )}
                >
                  {t.nav[key as keyof typeof t.nav]}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setLang(lang === "en" ? "rw" : "en")}
              className="flex-1 py-2.5 rounded-xl border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-sm font-semibold"
            >
              {lang === "en" ? "Kinyarwanda" : "English"}
            </button>
            <button
              onClick={() => scrollTo("appointment")}
              className="flex-1 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold"
            >
              {t.nav.bookNow}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
