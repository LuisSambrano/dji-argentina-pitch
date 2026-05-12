import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { ButtonPrimary } from "@/components/ui/button-primary";
import { ButtonGhost } from "@/components/ui/button-ghost";
import { cta } from "@/lib/content";

export function CtaTile() {
  return (
    <Tile variant="tile-3" id="contacto" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-6 text-[14px] uppercase tracking-[0.16em] text-white/60">
            {cta.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="whitespace-pre-line font-semibold text-[44px] leading-[1.02] tracking-[-0.025em] md:text-[80px]"
            style={{ letterSpacing: "-0.025em" }}
          >
            {cta.headline}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-7 text-[18px] leading-[1.5] text-white/80 md:text-[21px]">
            {cta.sub}
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonPrimary href={cta.primary.href} size="lg">
              {cta.primary.label}
            </ButtonPrimary>
            <ButtonGhost href={cta.ghost.href} variant="dark">
              {cta.ghost.label}
            </ButtonGhost>
          </div>
        </Reveal>
      </div>
    </Tile>
  );
}
