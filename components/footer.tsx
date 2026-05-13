"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function Footer() {
  const { locale } = useLocale();
  const t = content[locale].footer;

  return (
    <footer className="w-full bg-parchment text-ink-80">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="text-[14px] font-semibold tracking-[-0.224px] text-ink">
              Luis Sambrano
            </p>
            <p className="mt-2 text-[12px] tracking-[-0.12px] text-ink-48">
              {t.tagline}
            </p>
          </div>
          {t.columns.map((col) => (
            <div key={col.heading}>
              <p className="text-[14px] font-semibold tracking-[-0.224px] text-ink">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-1">
                {col.links.map((l) => {
                  const isAnchor = l.href.startsWith("#");
                  const isInternal = l.href.startsWith("/") && !l.href.startsWith("//");
                  const isMail = l.href.startsWith("mailto:");
                  const isExternal =
                    l.href.startsWith("http") || isMail;
                  const showArrow = isExternal && l.href.startsWith("http");

                  if (isInternal && !isAnchor) {
                    return (
                      <li
                        key={l.href}
                        className="text-[17px] leading-[2.41] tracking-[-0.374px]"
                      >
                        <Link
                          href={l.href}
                          className="hover:text-primary transition-colors"
                        >
                          {l.label}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li
                      key={l.href}
                      className="text-[17px] leading-[2.41] tracking-[-0.374px]"
                    >
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          l.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="hover:text-primary transition-colors"
                      >
                        {l.label}
                        {showArrow ? (
                          <span aria-hidden className="ml-1 text-ink-48">
                            ↗
                          </span>
                        ) : null}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] tracking-[-0.12px] text-ink-48">
            {t.signature}
          </p>
          <p className="max-w-2xl text-[12px] leading-[1.5] tracking-[-0.12px] text-ink-48">
            {t.legal}
          </p>
        </div>
      </div>
    </footer>
  );
}
