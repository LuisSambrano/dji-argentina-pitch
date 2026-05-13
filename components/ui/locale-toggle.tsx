"use client";

import { useLocale, type Locale } from "@/lib/locale";
import { clsx } from "@/lib/clsx";

type Variant = "dark" | "light";

const labels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};

export function LocaleToggle({ variant = "dark" }: { variant?: Variant }) {
  const { locale, setLocale } = useLocale();
  const isDark = variant === "dark";
  const base =
    "text-[12px] tracking-[-0.12px] px-1.5 py-1 rounded-sm transition-opacity";
  const activeCls = isDark ? "text-white" : "text-ink";
  const inactiveCls = isDark
    ? "text-white/45 hover:text-white"
    : "text-ink-48 hover:text-ink";

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className={clsx(
        "inline-flex items-center gap-1 rounded-sm",
        isDark ? "bg-white/10" : "bg-ink/5",
      )}
    >
      {(Object.keys(labels) as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={clsx(
            base,
            locale === code ? activeCls : inactiveCls,
            locale === code && "font-semibold",
          )}
        >
          {labels[code]}
        </button>
      ))}
    </div>
  );
}
