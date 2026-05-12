import Image from "next/image";
import { ButtonPrimary } from "@/components/ui/button-primary";
import { ButtonGhost } from "@/components/ui/button-ghost";
import { Reveal } from "@/components/ui/reveal";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate w-full overflow-hidden bg-black text-white"
    >
      {/* Imagen cinematográfica de fondo — Patagonia */}
      <Image
        src="/images/hero-argentina.jpg"
        alt="Paisaje de Argentina al amanecer"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      {/* Overlay legibilidad — usamos color sólido degradado en máscara, sin gradient decorativo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-black/40"
        style={{
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.9) 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.9) 100%)",
        }}
      />
      <div className="relative mx-auto flex min-h-[88vh] max-w-[1440px] flex-col items-start justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <Reveal>
          <p
            className="mb-5 text-[14px] uppercase tracking-[0.16em] text-white/70"
            style={{ letterSpacing: "0.16em" }}
          >
            {hero.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1
            className="max-w-[18ch] whitespace-pre-line font-semibold text-[44px] leading-[1.02] tracking-[-0.02em] md:text-[72px] lg:text-[88px]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {hero.headline}
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p
            className="mt-7 max-w-[58ch] text-[18px] leading-[1.5] text-white/85 md:text-[21px]"
            style={{ letterSpacing: "-0.01em" }}
          >
            {hero.sub}
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonPrimary href={hero.ctaPrimary.href}>
              {hero.ctaPrimary.label}
            </ButtonPrimary>
            <ButtonGhost href={hero.ctaGhost.href} variant="dark">
              {hero.ctaGhost.label}
            </ButtonGhost>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
