"use client";

import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { InstagramFrame } from "@/components/ui/instagram-frame";
import { YouTubeShortsFrame } from "@/components/ui/youtube-shorts-frame";
import { MacBookFrame } from "@/components/ui/macbook-frame";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function Formats() {
  const { locale } = useLocale();
  const t = content[locale].formats;
  const { instagram, youtubeShorts, youtube } = t.mock;

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

      <div className="mt-20 flex flex-col gap-24">
        {t.quadrants.map((q, i) => (
          <Reveal key={q.title} delay={120 + i * 60}>
            <div
              className={
                q.device === "macbook"
                  ? "grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]"
                  : "grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]"
              }
            >
              {/* Device frame */}
              <div
                className={
                  q.device === "macbook"
                    ? "order-1 w-full lg:order-1"
                    : "order-1 w-full lg:order-1"
                }
              >
                {q.device === "instagram-reel" ? (
                  <InstagramFrame
                    videoSrc={q.video}
                    posterSrc={q.poster}
                    handle={instagram.handle}
                    location={instagram.location}
                    caption={instagram.caption}
                    followLabel={instagram.followLabel}
                  />
                ) : q.device === "youtube-shorts" ? (
                  <YouTubeShortsFrame
                    videoSrc={q.video}
                    posterSrc={q.poster}
                    channel={youtubeShorts.channel}
                    subscribers={youtubeShorts.subscribers}
                    title={youtubeShorts.title}
                  />
                ) : (
                  <MacBookFrame
                    videoSrc={q.video}
                    posterSrc={q.poster}
                    channel={youtube.channel}
                    views={youtube.views}
                    time={youtube.time}
                    title={youtube.title}
                    shortTitle={youtube.shortTitle}
                  />
                )}
              </div>

              {/* Text */}
              <div className="order-2 max-w-[480px] lg:order-2">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {q.tag}
                </p>
                <h3 className="mt-3 text-[28px] font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
                  {q.title}
                </h3>
                <p className="mt-4 text-[17px] leading-[1.55] text-ink-80 md:text-[18px]">
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
