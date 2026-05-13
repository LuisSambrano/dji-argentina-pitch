"use client";

import Image from "next/image";
import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function Formats() {
  const { locale } = useLocale();
  const t = content[locale].formats;

  return (
    <Tile variant="canvas" id="formatos">
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

      <ul className="mt-16 grid gap-6 sm:grid-cols-2">
        {t.quadrants.map((q, i) => (
          <Reveal key={q.title} delay={120 + i * 100} as="li">
            <article className="flex h-full flex-col overflow-hidden rounded-lg border border-hairline bg-parchment">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-tile-3">
                <Image
                  src={q.poster}
                  alt={q.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 90vw"
                  className="object-cover"
                />
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-hidden
                >
                  <source src={q.video} type="video/mp4" />
                </video>
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/3"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-[12px] uppercase tracking-[0.16em] text-white/80">
                    {q.tag}
                  </p>
                  <h3 className="mt-1 text-[24px] font-semibold tracking-[-0.01em] md:text-[28px]">
                    {q.title}
                  </h3>
                </div>
              </div>
              <p className="p-6 text-[17px] leading-[1.47] text-ink-80 md:p-7">
                {q.body}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Tile>
  );
}
