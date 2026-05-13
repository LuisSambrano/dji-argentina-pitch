"use client";

import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { InstagramFrame } from "@/components/ui/instagram-frame";
import { YouTubeFrame } from "@/components/ui/youtube-frame";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function Formats() {
  const { locale } = useLocale();
  const t = content[locale].formats;
  const { instagram, youtube } = t.mock;

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

      <div className="mt-20 grid gap-x-10 gap-y-20 md:grid-cols-2 md:gap-y-24">
        {t.quadrants.map((q, i) => (
          <Reveal key={q.title} delay={120 + i * 100}>
            <div className="flex flex-col items-center">
              <div className="w-full">
                {q.device === "instagram-reel" ? (
                  <InstagramFrame
                    videoSrc={q.video}
                    posterSrc={q.poster}
                    handle={instagram.handle}
                    location={instagram.location}
                    caption={instagram.caption}
                    followLabel={instagram.followLabel}
                  />
                ) : (
                  <YouTubeFrame
                    videoSrc={q.video}
                    posterSrc={q.poster}
                    channel={youtube.channel}
                    views={youtube.views}
                    time={youtube.time}
                    title={youtube.title}
                  />
                )}
              </div>
              <div className="mt-10 w-full max-w-[480px] text-center">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {q.tag}
                </p>
                <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.01em] text-ink md:text-[28px]">
                  {q.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.5] text-ink-80">
                  {q.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Tile>
  );
}
