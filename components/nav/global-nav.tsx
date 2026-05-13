"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { contact } from "@/lib/content";
import { useLocale } from "@/lib/locale";
import { LocaleToggle } from "@/components/ui/locale-toggle";

export function GlobalNav() {
  const { locale } = useLocale();
  const t = content[locale].nav;
  const ctaHref = locale === "es" ? contact.mailtoEs : contact.mailtoEn;

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <div className="mx-auto flex h-11 max-w-[1440px] items-center justify-between gap-4 px-6 md:px-10">
        <Link
          href="/"
          className="text-[12px] tracking-[-0.12px] hover:opacity-70 transition-opacity"
          aria-label={`${t.brand}, ${t.brandTag}`}
        >
          <span className="font-semibold">{t.brand}</span>
          <span className="opacity-50"> · {t.brandTag}</span>
        </Link>
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-5">
            {t.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[12px] tracking-[-0.12px] hover:opacity-70 transition-opacity"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <LocaleToggle variant="dark" />
          <a
            href={ctaHref}
            className="text-[12px] tracking-[-0.12px] rounded-sm bg-white/10 px-3 py-1.5 hover:bg-white/20 transition-colors"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
