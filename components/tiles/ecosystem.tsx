"use client";

import Image from "next/image";
import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function Ecosystem() {
  const { locale } = useLocale();
  const t = content[locale].ecosystem;

  return (
    <Tile variant="canvas" id="equipo">
      <div className="mx-auto max-w-3xl text-center">
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
          <p className="mt-6 text-[18px] leading-[1.5] text-ink-80 md:text-[21px]">
            {t.lead}
          </p>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-6 md:grid-cols-3">
        {t.cards.map((card, i) => (
          <Reveal key={card.name} delay={150 + i * 120} as="li">
            <article className="flex h-full flex-col rounded-lg border border-hairline bg-parchment p-6 md:p-7">
              <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-sm bg-white">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-contain p-6 [filter:drop-shadow(3px_5px_30px_rgba(0,0,0,0.10))]"
                />
              </div>
              <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-primary">
                {card.role}
              </p>
              <h3 className="mt-2 text-[24px] font-semibold tracking-[-0.01em] text-ink md:text-[28px]">
                {card.name}
              </h3>
              <p className="mt-3 text-[17px] leading-[1.47] text-ink-80">
                {card.body}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Tile>
  );
}
