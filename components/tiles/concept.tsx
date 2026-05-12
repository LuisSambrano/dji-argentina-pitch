import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { concept } from "@/lib/content";

export function Concept() {
  return (
    <Tile variant="tile-1" id="concepto">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="mb-5 text-[14px] uppercase tracking-[0.16em] text-white/60">
              {concept.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="whitespace-pre-line font-semibold text-[40px] leading-[1.05] tracking-[-0.02em] md:text-[56px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              {concept.headline}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-[52ch] text-[18px] leading-[1.5] text-white/80 md:text-[21px]">
              {concept.lead}
            </p>
          </Reveal>
        </div>
        <ul className="flex flex-col gap-8 lg:pt-2">
          {concept.points.map((p, i) => (
            <Reveal key={p.title} delay={150 + i * 100} as="li">
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-primary-on-dark">
                  {p.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.47] text-white/85">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Tile>
  );
}
