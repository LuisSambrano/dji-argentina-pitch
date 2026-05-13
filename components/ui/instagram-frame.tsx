"use client";

import { useId } from "react";

type Props = {
  videoSrc: string;
  posterSrc: string;
  handle: string;
  location: string;
  caption: string;
  followLabel: string;
};

/**
 * Mock de iPhone reproduciendo un Reel de Instagram. El frame del telefono
 * y la UI de Instagram estan dibujados en CSS+SVG, el contenido es un video
 * autoplay muted loop o un poster image como fallback.
 */
export function InstagramFrame({
  videoSrc,
  posterSrc,
  handle,
  location,
  caption,
  followLabel,
}: Props) {
  const gradId = useId();
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div
        className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[40px] border-[3px] border-black bg-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45)]"
        style={{ padding: "10px" }}
      >
        {/* Pantalla */}
        <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-black">
          {/* Fallback image */}
          <img
            src={posterSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            aria-hidden
          />
          {/* Video Reel */}
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

          {/* Top gradient + status bar */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[16%]"
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

          {/* Instagram top bar */}
          <div className="absolute inset-x-0 top-9 flex items-center justify-between px-3 text-white">
            <div className="flex items-center gap-2">
              <div
                className="h-7 w-7 rounded-full border-[1.5px] border-white"
                style={{
                  background: `conic-gradient(from 180deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #f09433)`,
                  padding: "1.5px",
                }}
              >
                <div className="h-full w-full rounded-full bg-gray-700" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-semibold">{handle}</span>
                <span className="text-[8px] opacity-80">{location}</span>
              </div>
            </div>
            <button
              type="button"
              className="rounded-[4px] border border-white px-2 py-[2px] text-[9px] font-semibold text-white"
              aria-hidden
            >
              {followLabel}
            </button>
          </div>

          {/* Right action rail */}
          <div className="absolute right-2 bottom-24 flex flex-col items-center gap-4 text-white">
            <ActionIcon path="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            <ActionIcon path="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
            <ActionIcon path="M2 21v-7l11-9 11 9v7h-7v-6h-8v6H2z" rotated />
            <ActionIcon path="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
          </div>

          {/* Bottom gradient + caption */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-[32%]"
            style={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-3 px-3 pr-12 text-white">
            <p className="text-[11px] font-semibold leading-tight">{handle}</p>
            <p className="mt-1 line-clamp-2 text-[10px] leading-snug opacity-90">
              {caption}
            </p>
            <div className="mt-2 flex items-center gap-2 text-[9px] opacity-85">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M9 18V5l12-2v13M9 18a3 3 0 11-3-3 3 3 0 013 3zm12-3a3 3 0 11-3-3 3 3 0 013 3z" />
              </svg>
              <span>audio original · {handle}</span>
            </div>
          </div>

          {/* Bottom nav placeholder */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 flex h-[7%] items-center justify-around bg-black/30 backdrop-blur-sm"
          >
            <NavDot active />
            <NavDot />
            <NavDot />
            <NavDot />
            <NavDot />
          </div>

          {/* Hidden gradient marker to satisfy useId hook */}
          <span className="hidden" data-gradient-id={gradId} aria-hidden />
        </div>
      </div>
      {/* Sombra debajo del telefono */}
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

function ActionIcon({ path, rotated }: { path: string; rotated?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        style={rotated ? { transform: "rotate(0deg)" } : undefined}
      >
        <path d={path} />
      </svg>
    </div>
  );
}

function NavDot({ active }: { active?: boolean }) {
  return (
    <span
      className={`h-1.5 w-1.5 rounded-full ${active ? "bg-white" : "bg-white/40"}`}
    />
  );
}
