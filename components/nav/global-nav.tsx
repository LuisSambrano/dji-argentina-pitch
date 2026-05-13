"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/locale";
import { LocaleToggle } from "@/components/ui/locale-toggle";
import { clsx } from "@/lib/clsx";

export function GlobalNav() {
  const { locale } = useLocale();
  const t = content[locale].nav;
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    function onClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) close();
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, [open, close]);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/85 text-white backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-[1440px] items-center justify-between gap-4 px-6 md:px-10">
        <Link
          href="/"
          className="text-[12px] tracking-[-0.12px] hover:opacity-70 transition-opacity"
          aria-label={`${t.brand}, ${t.brandTag}`}
          onClick={close}
        >
          <span className="font-semibold">{t.brand}</span>
        </Link>

        <div className="flex items-center gap-3" ref={menuRef}>
          <LocaleToggle variant="dark" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="global-nav-menu"
            aria-label={t.menuLabel}
            className="inline-flex items-center gap-2 rounded-sm bg-white/10 px-3 py-1.5 text-[12px] tracking-[-0.12px] transition-colors hover:bg-white/20"
          >
            <span className="hidden sm:inline">{t.menuLabel}</span>
            <MenuIcon open={open} />
          </button>

          {open ? (
            <div
              id="global-nav-menu"
              role="menu"
              className="absolute right-6 top-12 z-50 mt-2 w-[280px] overflow-hidden rounded-md border border-white/10 bg-black shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] md:right-10"
            >
              <ul className="flex flex-col py-2">
                {t.links.map((l) => (
                  <li key={l.href}>
                    <a
                      role="menuitem"
                      href={l.href}
                      onClick={close}
                      className="block px-5 py-2.5 text-[14px] tracking-[-0.12px] text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
      className={clsx("transition-transform", open && "rotate-90")}
    >
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}
