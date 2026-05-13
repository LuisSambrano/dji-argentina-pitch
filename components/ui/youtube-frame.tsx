"use client";

type Props = {
  videoSrc: string;
  posterSrc: string;
  channel: string;
  views: string;
  time: string;
  title: string;
};

/**
 * Mock de player de YouTube en formato horizontal. Frame ligero,
 * sin chrome de browser para que el foco esté en el video.
 * El contenido es un video autoplay muted loop con poster de fallback.
 */
export function YouTubeFrame({
  videoSrc,
  posterSrc,
  channel,
  views,
  time,
  title,
}: Props) {
  return (
    <div className="mx-auto w-full max-w-[520px]">
      <div className="overflow-hidden rounded-[10px] bg-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45)]">
        {/* Player */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
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

          {/* Bottom progress + controls bar */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-[18%]"
            style={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-3 px-4">
            <div className="flex h-[3px] w-full overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-[34%] bg-[#ff0033]" />
              <div className="h-full w-[10%] bg-white/40" />
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] text-white">
              <div className="flex items-center gap-3">
                <PlayBtn />
                <Speaker />
                <span>1:24 / 4:08</span>
              </div>
              <div className="flex items-center gap-3">
                <CcBtn />
                <Gear />
                <Fullscreen />
              </div>
            </div>
          </div>

          {/* YouTube logo top left */}
          <div
            aria-hidden
            className="absolute left-3 top-3 flex items-center gap-1 text-white"
          >
            <svg width="20" height="14" viewBox="0 0 90 60" aria-hidden>
              <path
                fill="#ff0033"
                d="M85 18s-1-7-3-10c-3-3-6-3-7-3C64 4 45 4 45 4s-19 0-30 1c-1 0-4 0-7 3-2 3-3 10-3 10s-1 8-1 16v3c0 8 1 16 1 16s1 7 3 10c3 3 7 3 9 3 6 1 28 1 28 1s19 0 30-1c1 0 4 0 7-3 2-3 3-10 3-10s1-8 1-16v-3c0-8-1-16-1-16z"
              />
              <path fill="white" d="M35 19v22l20-11z" />
            </svg>
            <span className="text-[10px] font-semibold">YouTube</span>
          </div>
        </div>

        {/* Title + channel meta */}
        <div className="flex gap-3 bg-[#0f0f0f] p-3 text-white">
          <div className="h-9 w-9 flex-shrink-0 rounded-full bg-gradient-to-br from-[#2997ff] to-[#0066cc]" />
          <div className="flex-1 leading-tight">
            <p className="line-clamp-2 text-[13px] font-semibold">{title}</p>
            <p className="mt-1 text-[11px] text-white/70">
              {channel} · {views} · {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayBtn() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 5h3v14H6zM14 5h3v14h-3z" />
    </svg>
  );
}
function Speaker() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 9v6h4l5 5V4L7 9H3zm13 0a3 3 0 010 6v2a5 5 0 000-10v2z" />
    </svg>
  );
}
function CcBtn() {
  return (
    <span className="rounded-[3px] border border-white/60 px-1 text-[9px] font-semibold">
      CC
    </span>
  );
}
function Gear() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4zM21 13v-2l-2-.5-.5-1.5 1-1.5-1.5-1.5-1.5 1-1.5-.5L14.5 5h-3l-.5 2-1.5.5-1.5-1L6.5 8l1 1.5L7 11l-2 .5v2l2 .5.5 1.5-1 1.5L8 18l1.5-1 1.5.5.5 2h3l.5-2 1.5-.5 1.5 1 1.5-1.5-1-1.5.5-1.5 2-.5z" />
    </svg>
  );
}
function Fullscreen() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M5 5h6v2H7v4H5V5zm14 0v6h-2V7h-4V5h6zm0 14h-6v-2h4v-4h2v6zM5 19v-6h2v4h4v2H5z" />
    </svg>
  );
}
