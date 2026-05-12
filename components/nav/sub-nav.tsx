import { ButtonPrimary } from "@/components/ui/button-primary";

export function SubNav() {
  return (
    <div
      className="sticky top-11 z-40 w-full border-b border-black/[0.04] bg-parchment/80"
      style={{
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      <div className="mx-auto flex h-[52px] max-w-[1440px] items-center justify-between px-6 md:px-10">
        <span
          className="text-[21px] font-semibold tracking-[0.231px] text-ink"
          style={{ letterSpacing: "0.231px" }}
        >
          Propuesta DJI
        </span>
        <div className="flex items-center gap-3">
          <span className="hidden text-[14px] tracking-[-0.224px] text-ink-80 sm:inline">
            Argentina · 2026
          </span>
          <ButtonPrimary href="#contacto">Iniciar colaboración</ButtonPrimary>
        </div>
      </div>
    </div>
  );
}
