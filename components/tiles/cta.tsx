"use client";

import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { ButtonPrimary } from "@/components/ui/button-primary";
import { ButtonGhost } from "@/components/ui/button-ghost";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function CtaTile() {
  const { locale } = useLocale();
  const t = content[locale].cta;

  return (
    <Tile variant="tile-3" id="contacto" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-6 text-[14px] uppercase tracking-[0.16em] text-white/60">
            {t.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="whitespace-pre-line font-semibold text-[44px] leading-[1.02] tracking-[-0.025em] md:text-[80px]"
            style={{ letterSpacing: "-0.025em" }}
          >
            {t.headline}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-7 text-[18px] leading-[1.5] text-white/80 md:text-[21px]">
            {t.sub}
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonPrimary href={t.primary.href} size="lg">
              {t.primary.label}
            </ButtonPrimary>
            <ButtonGhost href={t.ghost.href} variant="dark">
              {t.ghost.label}
            </ButtonGhost>
          </div>
        </Reveal>
      </div>
    </Tile>
  );
}
