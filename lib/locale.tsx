"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Locale = "es" | "en";

const STORAGE_KEY = "dji-pitch-locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
};

const LocaleContext = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "es" || stored === "en") {
        setLocaleState(stored);
        document.documentElement.lang = stored === "es" ? "es-AR" : "en";
        return;
      }
      const browser = (navigator.language || "").toLowerCase();
      if (browser.startsWith("en")) {
        setLocaleState("en");
        document.documentElement.lang = "en";
      }
    } catch {
      // localStorage o navigator no disponibles, mantener default
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l === "es" ? "es-AR" : "en";
    } catch {
      // localStorage bloqueado, el cambio en memoria sigue funcionando
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): Ctx {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale debe usarse dentro de <LocaleProvider>");
  }
  return ctx;
}
