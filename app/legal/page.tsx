"use client";

import Link from "next/link";
import { GlobalNav } from "@/components/nav/global-nav";
import { Footer } from "@/components/footer";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export default function LegalPage() {
  const { locale } = useLocale();
  const t = content[locale].legal;

  return (
    <>
      <GlobalNav />
      <main className="bg-canvas text-ink">
        <article className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
          <p className="mb-6 text-[14px] uppercase tracking-[0.16em] text-ink-48">
            {t.eyebrow}
          </p>
          <h1
            className="font-semibold text-[44px] leading-[1.05] tracking-[-0.025em] text-ink md:text-[64px]"
            style={{ letterSpacing: "-0.025em" }}
          >
            {t.title}
          </h1>
          <p className="mt-8 text-[18px] leading-[1.5] text-ink-80 md:text-[21px]">
            {t.intro}
          </p>

          <div className="mt-16 space-y-12">
            {t.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-[24px] font-semibold tracking-[-0.01em] text-ink md:text-[28px]">
                  {section.heading}
                </h2>
                <p className="mt-4 text-[17px] leading-[1.6] text-ink-80">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-16 text-[14px] tracking-[-0.224px] text-ink-48">
            {t.updated}
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 text-[17px] text-primary hover:underline"
          >
            <span aria-hidden>←</span>
            {t.backLabel}
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
