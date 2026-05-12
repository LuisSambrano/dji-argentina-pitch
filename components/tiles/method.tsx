import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { method } from "@/lib/content";

export function Method() {
  return (
    <Tile variant="parchment" id="metodo">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="mb-5 text-[14px] uppercase tracking-[0.16em] text-ink-48">
              {method.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="whitespace-pre-line font-semibold text-[40px] leading-[1.05] tracking-[-0.02em] text-ink md:text-[56px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              {method.headline}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-[44ch] text-[18px] leading-[1.5] text-ink-80 md:text-[21px]">
              {method.lead}
            </p>
          </Reveal>
        </div>
        <ul className="grid gap-10 sm:grid-cols-3 lg:gap-6">
          {method.columns.map((col, i) => (
            <Reveal key={col.title} delay={150 + i * 120} as="li">
              <div className="border-t border-ink/15 pt-6">
                <span className="text-[14px] font-semibold uppercase tracking-[0.16em] text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.01em] text-ink md:text-[28px]">
                  {col.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.47] text-ink-80">
                  {col.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Tile>
  );
}
