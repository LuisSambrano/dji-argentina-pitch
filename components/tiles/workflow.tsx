"use client";

import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { content } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function Workflow() {
  const { locale } = useLocale();
  const t = content[locale].workflow;

  return (
    <Tile variant="parchment" id="flujo">
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

      <ol className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.steps.map((step, i) => (
          <Reveal key={step.number} delay={120 + i * 100} as="li">
            <article className="relative flex h-full flex-col rounded-lg border border-hairline bg-canvas p-6 md:p-7">
              <span className="text-[14px] font-semibold uppercase tracking-[0.16em] text-primary">
                {step.number}
              </span>
              <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.01em] text-ink md:text-[26px]">
                {step.title}
              </h3>
              <p className="mt-3 text-[17px] leading-[1.5] text-ink-80">
                {step.body}
              </p>
            </article>
          </Reveal>
        ))}
      </ol>
    </Tile>
  );
}
