"use client";

import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function Audience() {
  const { locale } = useLocale();
  const t = content[locale].audience;

  return (
    <Tile variant="parchment" id="audiencia">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="mb-5 text-[14px] uppercase tracking-[0.16em] text-ink-48">
              {t.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="whitespace-pre-line font-semibold text-[40px] leading-[1.05] tracking-[-0.02em] text-ink md:text-[56px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t.headline}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-[56ch] text-[18px] leading-[1.5] text-ink-80 md:text-[21px]">
              {t.lead}
            </p>
          </Reveal>
        </div>
        <ul className="flex flex-col gap-8 lg:pt-2">
          {t.points.map((p, i) => (
            <Reveal key={p.title} delay={150 + i * 100} as="li">
              <div className="border-t border-ink/10 pt-6">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {p.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.47] text-ink-80">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Tile>
  );
}
