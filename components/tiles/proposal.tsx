"use client";

import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function Proposal() {
  const { locale } = useLocale();
  const t = content[locale].proposal;

  return (
    <Tile variant="tile-1" id="propuesta" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-6 text-[14px] uppercase tracking-[0.16em] text-white/60">
            {t.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="whitespace-pre-line font-semibold text-[44px] leading-[1.05] tracking-[-0.02em] md:text-[68px]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t.headline}
          </h2>
        </Reveal>
        <Reveal delay={250}>
          <p className="mt-10 max-w-[68ch] text-[18px] leading-[1.55] text-white/85 md:text-[22px]">
            {t.lead}
          </p>
        </Reveal>
      </div>
    </Tile>
  );
}
