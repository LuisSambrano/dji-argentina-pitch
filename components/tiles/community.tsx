import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { community } from "@/lib/content";

export function Community() {
  return (
    <Tile variant="tile-1" id="comunidad">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="mb-5 text-[14px] uppercase tracking-[0.16em] text-white/60">
              {community.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="whitespace-pre-line font-semibold text-[40px] leading-[1.05] tracking-[-0.02em] md:text-[56px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              {community.headline}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-[52ch] text-[18px] leading-[1.5] text-white/80 md:text-[21px]">
              {community.lead}
            </p>
          </Reveal>
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:pt-2">
          {community.metrics.map((m, i) => (
            <Reveal key={m.label} delay={150 + i * 80}>
              <div className="border-t border-white/10 pt-5">
                <dt className="text-[14px] uppercase tracking-[0.16em] text-white/60">
                  {m.label}
                </dt>
                <dd
                  className="mt-2 font-semibold text-[44px] leading-none tracking-[-0.02em] text-primary-on-dark md:text-[56px]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {m.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </Tile>
  );
}
