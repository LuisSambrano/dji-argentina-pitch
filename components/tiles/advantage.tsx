import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { advantage } from "@/lib/content";

export function Advantage() {
  return (
    <Tile
      variant="canvas"
      id="ventaja"
      className="py-24 md:py-32"
      innerClassName="max-w-[1100px]"
    >
      <div className="mx-auto text-center">
        <Reveal>
          <p className="mb-6 text-[14px] uppercase tracking-[0.16em] text-ink-48">
            {advantage.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <blockquote
            className="whitespace-pre-line font-semibold text-[44px] leading-[1.05] tracking-[-0.025em] text-ink md:text-[80px] lg:text-[96px]"
            style={{ letterSpacing: "-0.025em" }}
          >
            {advantage.quote}
          </blockquote>
        </Reveal>
        <Reveal delay={250}>
          <p className="mx-auto mt-10 max-w-[58ch] text-[18px] leading-[1.5] text-ink-80 md:text-[21px]">
            {advantage.attribution}
          </p>
        </Reveal>
      </div>
    </Tile>
  );
}
