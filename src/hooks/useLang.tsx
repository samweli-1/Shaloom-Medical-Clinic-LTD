"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "@/lib/translations";

type TranslationsType = typeof translations.en | typeof translations.rw;

interface LangContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: TranslationsType;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);