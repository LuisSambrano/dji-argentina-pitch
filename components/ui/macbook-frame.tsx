"use client";

type Props = {
  videoSrc: string;
  posterSrc: string;
  channel: string;
  views: string;
  time: string;
  title: string;
  shortTitle: string;
};

/**
 * Mock de MacBook Pro reproduciendo un video en YouTube dentro del browser.
 * Frame simplificado: solo la pantalla del laptop con bezel negro grueso,
 * notch arriba, chrome de Safari mostrando youtube.com/watch, layout
 * de YouTube con el player horizontal y meta del video debajo.
 */
export function MacBookFrame({
  videoSrc,
  posterSrc,
  channel,
  views,
  time,
  title,
  shortTitle,
}: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[680px]">
      {/* MacBook lid */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] border-[10px] border-[#1a1a1c] bg-[#0a0a0a] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45)]">
        {/* Notch */}
        <div
          aria-hidden
          className="absolute left-1/2 top-0 z-30 h-[14px] w-[110px] -translate-x-1/2 rounded-b-[8px] bg-[#0a0a0a]"
        />

        {/* Screen content */}
        <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#0f0f0f]">
          {/* Browser top bar */}
          <div className="flex items-center gap-2 bg-[#1d1d1d] px-3 py-2 text-white">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            </div>
            <div className="ml-3 flex items-center gap-1 text-white/60">
              <ChevIcon dir="left" />
              <ChevIcon dir="right" />
            </div>
            <div className="ml-2 flex h-5 flex-1 items-center justify-center rounded-md bg-[#0a0a0a] px-3 text-[10px] text-white/70">
              <LockIcon />
              <span className="ml-1 truncate">youtube.com/watch?v=lsX-{channel.toLowerCase().replace(/\s+/g, "")}</span>
            </div>
            <div className="ml-2 flex items-center gap-1.5 text-white/60">
              <PlusIcon />
              <DotsIcon />
            </div>
          </div>

          {/* YouTube layout: player + meta + sidebar */}
          <div className="flex flex-1 gap-3 overflow-hidden bg-[#0f0f0f] p-3 text-white">
            {/* Main column */}
            <div className="flex flex-1 flex-col gap-2">
              {/* Player */}
              <div className="relative aspect-video w-full overflow-hidden rounded-md bg-black">
                <img
                  src={posterSrc}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  aria-hidden
                />
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-hidden
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>

                {/* Progress + controls */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[14%]"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-2 px-3">
                  <div className="flex h-[2px] w-full overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[34%] bg-[#ff0033]" />
                    <div className="h-full w-[8%] bg-white/40" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h4 className="line-clamp-2 text-[12px] font-semibold leading-tight">
                {title}
              </h4>

              {/* Channel row */}
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 flex-shrink-0 rounded-full bg-gradient-to-br from-[#2997ff] to-[#0066cc]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] font-semibold">{channel}</span>
                  <span className="text-[8px] text-white/60">87 mil suscriptores</span>
                </div>
                <button
                  type="button"
                  className="ml-2 rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-black"
                  aria-hidden
                >
                  Suscribirse
                </button>
                <div className="ml-auto flex items-center gap-1.5 text-[10px] text-white/85">
                  <PillBtn label="2,3 mil" />
                  <PillBtn label="Compartir" />
                </div>
              </div>

              {/* Description block */}
              <div className="mt-1 rounded-md bg-white/5 p-2">
                <p className="text-[9px] text-white/75">
                  {views} · {time}
                </p>
              </div>
            </div>

            {/* Sidebar suggested */}
            <aside className="hidden w-[155px] flex-col gap-2 lg:flex">
              <Suggestion title="Tres días en la Puna sin señal" channel="Camino al norte" />
              <Suggestion title="Cómo edito en ruta con un solo SSD" channel="Luis Sambrano" />
              <Suggestion title="El refugio que reabrió después de quince años" channel="Pueblos del sur" />
              <Suggestion title={shortTitle} channel={channel} />
            </aside>
          </div>
        </div>
      </div>

      {/* Hinge / shadow base */}
      <div
        aria-hidden
        className="mx-auto h-[6px] w-[105%] -translate-y-[1px] rounded-b-[14px] bg-gradient-to-b from-[#2a2a2c] to-[#101012]"
      />
      <div
        aria-hidden
        className="absolute -bottom-6 left-1/2 h-6 w-[85%] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
    </div>
  );
}

function ChevIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {dir === "left" ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
    </svg>
  );
}
function LockIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18 8h-1V6a5 5 0 00-10 0v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zm-6 9a2 2 0 110-4 2 2 0 010 4zm3-9H9V6a3 3 0 016 0v2z" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
    </svg>
  );
}
function DotsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
    </svg>
  );
}
function PillBtn({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-white/10 px-2 py-1">{label}</span>
  );
}
function Suggestion({ title, channel }: { title: string; channel: string }) {
  return (
    <div className="flex gap-1.5">
      <div className="h-10 w-16 flex-shrink-0 rounded-sm bg-gradient-to-br from-[#1c2238] to-[#0a0f1c]" />
      <div className="flex flex-col leading-tight">
        <span className="line-clamp-2 text-[8px] font-semibold">{title}</span>
        <span className="mt-0.5 text-[7px] text-white/55">{channel}</span>
      </div>
    </div>
  );
}
