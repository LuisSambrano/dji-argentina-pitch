"use client";

import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function Collaboration() {
  const { locale } = useLocale();
  const t = content[locale].collaboration;

  return (
    <Tile
      variant="canvas"
      id="colaboracion"
      className="py-24 md:py-32"
      innerClassName="max-w-[1200px]"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-5 text-[14px] uppercase tracking-[0.16em] text-ink-48">
            {t.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="whitespace-pre-line font-semibold text-[44px] leading-[1.05] tracking-[-0.025em] text-ink md:text-[64px]"
            style={{ letterSpacing: "-0.025em" }}
          >
            {t.headline}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-7 text-[18px] leading-[1.5] text-ink-80 md:text-[21px]">
            {t.lead}
          </p>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.pillars.map((p, i) => (
          <Reveal key={p.title} delay={120 + i * 80} as="li">
            <article className="flex h-full flex-col rounded-lg border border-hairline bg-parchment p-6 md:p-7">
              <span className="text-[14px] font-semibold uppercase tracking-[0.16em] text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.01em] text-ink md:text-[24px]">
                {p.title}
              </h3>
              <p className="mt-3 text-[17px] leading-[1.47] text-ink-80">
                {p.body}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={300}>
        <blockquote className="mx-auto mt-20 max-w-3xl text-center text-[24px] leading-[1.3] tracking-[-0.01em] text-ink md:text-[32px]">
          {t.quote}
        </blockquote>
      </Reveal>
    </Tile>
  );
}
