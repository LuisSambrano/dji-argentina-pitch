"use client";

type Props = {
  videoSrc: string;
  posterSrc: string;
  channel: string;
  subscribers: string;
  title: string;
};

/**
 * Mock de iPhone reproduciendo un YouTube Short. Mismo chasis que el frame
 * de Instagram pero con la UI especifica de YouTube Shorts: top bar con
 * search/camera, action rail derecha distinto, y caption abajo con titulo
 * + canal + boton suscribir.
 */
export function YouTubeShortsFrame({
  videoSrc,
  posterSrc,
  channel,
  subscribers,
  title,
}: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div
        className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[40px] border-[3px] border-black bg-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45)]"
        style={{ padding: "10px" }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-black">
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

          {/* Top gradient */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[12%]"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)",
            }}
          />

          {/* Status bar */}
          <div className="absolute inset-x-0 top-2 flex items-center justify-between px-4 text-[10px] font-semibold text-white">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <SignalDot />
              <SignalDot />
              <SignalDot />
              <BatteryIcon />
            </div>
          </div>

          {/* Dynamic island */}
          <div
            aria-hidden
            className="absolute left-1/2 top-2 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-black"
          />

          {/* Shorts top bar */}
          <div className="absolute inset-x-0 top-9 flex items-center justify-between px-3 text-white">
            <span className="text-[14px] font-bold tracking-tight">Shorts</span>
            <div className="flex items-center gap-3">
              <ShortsTopIcon path="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" rotated />
              <ShortsTopIcon path="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <ShortsTopIcon path="M12 5.5A2.5 2.5 0 0114.5 8 2.5 2.5 0 0112 10.5 2.5 2.5 0 019.5 8 2.5 2.5 0 0112 5.5zM12 19a7 7 0 01-6-3.39c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08A7 7 0 0112 19z" />
            </div>
          </div>

          {/* Right action rail YouTube Shorts style */}
          <div className="absolute right-2 bottom-32 flex flex-col items-center gap-5 text-white">
            <ShortsAction
              path="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              label="14K"
            />
            <ShortsAction
              path="M14 9V5a3 3 0 00-6 0v4H5l7 7 7-7h-3z"
              label="Dislike"
              rotated
            />
            <ShortsAction
              path="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
              label="312"
            />
            <ShortsAction
              path="M22 12l-4-4v3H6V8l-4 4 4 4v-3h12v3l4-4z"
              label="Share"
            />
            <ShortsAction
              path="M12 8a2 2 0 100-4 2 2 0 000 4zm0 4a2 2 0 100-4 2 2 0 000 4zm0 4a2 2 0 100-4 2 2 0 000 4z"
              label=""
            />
            {/* Audio disc */}
            <div className="mt-1 h-7 w-7 rounded-full bg-gradient-to-br from-white/40 to-black/60" />
          </div>

          {/* Bottom gradient */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-[28%]"
            style={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
            }}
          />

          {/* Bottom caption */}
          <div className="absolute inset-x-0 bottom-10 px-3 pr-14 text-white">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#ff0033] to-[#990022]" />
              <span className="text-[11px] font-semibold">@{channel.replace(/\s+/g, "").toLowerCase()}</span>
              <button
                type="button"
                className="rounded-[3px] bg-white px-2 py-[2px] text-[9px] font-semibold text-black"
                aria-hidden
              >
                Subscribe
              </button>
            </div>
            <p className="line-clamp-2 text-[11px] leading-snug">{title}</p>
            <p className="mt-1 text-[9px] opacity-75">{subscribers}</p>
          </div>

          {/* Bottom nav */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 flex h-[7%] items-center justify-around bg-black/40 backdrop-blur-sm text-[8px] text-white"
          >
            <NavTab label="Home" />
            <NavTab label="Shorts" active />
            <PlusButton />
            <NavTab label="Subs" />
            <NavTab label="You" />
          </div>
        </div>
      </div>
      <div
        aria-hidden
        className="absolute -bottom-6 left-1/2 h-6 w-[80%] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
    </div>
  );
}

function SignalDot() {
  return <span className="h-[5px] w-[5px] rounded-full bg-white" />;
}
function BatteryIcon() {
  return (
    <svg width="18" height="9" viewBox="0 0 24 12" aria-hidden>
      <rect x="1" y="1" width="20" height="10" rx="2" fill="none" stroke="white" strokeWidth="1.2" />
      <rect x="22" y="4" width="1.5" height="4" rx="0.5" fill="white" />
      <rect x="3" y="3" width="16" height="6" rx="1" fill="white" />
    </svg>
  );
}
function ShortsTopIcon({ path, rotated }: { path: string; rotated?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      style={rotated ? { transform: "rotate(180deg)" } : undefined}
    >
      <path d={path} />
    </svg>
  );
}
function ShortsAction({
  path,
  label,
  rotated,
}: {
  path: string;
  label: string;
  rotated?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        style={rotated ? { transform: "rotate(180deg)" } : undefined}
      >
        <path d={path} />
      </svg>
      {label ? <span className="text-[8px] opacity-90">{label}</span> : null}
    </div>
  );
}
function NavTab({ label, active }: { label: string; active?: boolean }) {
  return (
    <span className={active ? "font-semibold" : "opacity-60"}>{label}</span>
  );
}
function PlusButton() {
  return (
    <span className="flex h-5 w-7 items-center justify-center rounded-sm bg-white/15 text-[10px] font-semibold">
      +
    </span>
  );
}
