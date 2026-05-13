"use client";

import Image from "next/image";
import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function Route() {
  const { locale } = useLocale();
  const t = content[locale].route;

  return (
    <Tile variant="tile-2" id="recorrido">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-5 text-[14px] uppercase tracking-[0.16em] text-white/60">
            {t.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="whitespace-pre-line font-semibold text-[40px] leading-[1.05] tracking-[-0.02em] md:text-[56px]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t.headline}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-[18px] leading-[1.5] text-white/80 md:text-[21px]">
            {t.lead}
          </p>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-6 sm:grid-cols-2">
        {t.pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={150 + i * 100} as="li">
            <article className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-tile-3 sm:aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.85) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-[28px] font-semibold tracking-[-0.01em] md:text-[34px]">
                  {pillar.title}
                </h3>
                <p className="mt-2 max-w-[42ch] text-[15px] leading-[1.5] text-white/85 md:text-[17px]">
                  {pillar.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Tile>
  );
}
