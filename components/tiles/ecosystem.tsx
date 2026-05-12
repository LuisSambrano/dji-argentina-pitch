import { Tile } from "@/components/ui/tile";
import { Reveal } from "@/components/ui/reveal";
import { ProductIcon } from "@/components/ui/product-icon";
import { ecosystem } from "@/lib/content";

export function Ecosystem() {
  return (
    <Tile variant="canvas" id="ecosistema">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-5 text-[14px] uppercase tracking-[0.16em] text-ink-48">
            {ecosystem.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="whitespace-pre-line font-semibold text-[40px] leading-[1.05] tracking-[-0.02em] text-ink md:text-[56px]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {ecosystem.headline}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-[18px] leading-[1.5] text-ink-80 md:text-[21px]">
            {ecosystem.lead}
          </p>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-6 md:grid-cols-3">
        {ecosystem.cards.map((card, i) => (
          <Reveal key={card.name} delay={150 + i * 120} as="li">
            <article className="flex h-full flex-col rounded-lg border border-hairline bg-parchment p-6 md:p-7">
              <div className="relative mb-6 aspect-square w-full rounded-sm bg-white p-6 [filter:drop-shadow(3px_5px_30px_rgba(0,0,0,0.10))]">
                <ProductIcon name={card.icon} />
              </div>
              <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-primary">
                {card.role}
              </p>
              <h3 className="mt-2 text-[24px] font-semibold tracking-[-0.01em] text-ink md:text-[28px]">
                {card.name}
              </h3>
              <p className="mt-3 text-[17px] leading-[1.47] text-ink-80">
                {card.body}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Tile>
  );
}
