/**
 * Silhouettes minimalistas de productos DJI para los cards del Ecosistema.
 * Inline SVG (no fetch, escalable, color-aware vía currentColor).
 * Diseñadas para leerse como "es un drone / cámara de bolsillo / cámara 360"
 * sin pretender ser renders oficiales — premium pero genéricas.
 */

import { clsx } from "@/lib/clsx";

export type ProductSlug = "mini5" | "pocket4" | "osmo360";

type Props = { name: ProductSlug; className?: string };

export function ProductIcon({ name, className }: Props) {
  const cls = clsx("h-full w-full", className);
  switch (name) {
    case "mini5":
      return <DroneTopDown className={cls} />;
    case "pocket4":
      return <PocketGimbal className={cls} />;
    case "osmo360":
      return <Sphere360 className={cls} />;
  }
}

/* ---------- Drone (top-down) ---------- */
function DroneTopDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="DJI Mini 5 Pro — drone aéreo"
    >
      <defs>
        <radialGradient id="drone-shadow" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.18)" />
          <stop offset="80%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="160" rx="70" ry="10" fill="url(#drone-shadow)" />
      {/* Brazos diagonales */}
      <g stroke="#1d1d1f" strokeWidth="6" strokeLinecap="round" fill="none">
        <line x1="60" y1="60" x2="100" y2="100" />
        <line x1="140" y1="60" x2="100" y2="100" />
        <line x1="60" y1="140" x2="100" y2="100" />
        <line x1="140" y1="140" x2="100" y2="100" />
      </g>
      {/* Cuerpo central */}
      <rect x="78" y="78" width="44" height="44" rx="10" fill="#1d1d1f" />
      <circle cx="100" cy="100" r="9" fill="#0066cc" />
      <circle cx="100" cy="100" r="3" fill="#fafafc" />
      {/* Hélices */}
      <g fill="#1d1d1f" opacity="0.9">
        <circle cx="60" cy="60" r="22" opacity="0.18" />
        <circle cx="60" cy="60" r="6" />
        <circle cx="140" cy="60" r="22" opacity="0.18" />
        <circle cx="140" cy="60" r="6" />
        <circle cx="60" cy="140" r="22" opacity="0.18" />
        <circle cx="60" cy="140" r="6" />
        <circle cx="140" cy="140" r="22" opacity="0.18" />
        <circle cx="140" cy="140" r="6" />
      </g>
    </svg>
  );
}

/* ---------- Gimbal de bolsillo (vertical) ---------- */
function PocketGimbal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="DJI Osmo Pocket 4 — gimbal de bolsillo"
    >
      <defs>
        <radialGradient id="pocket-shadow" cx="50%" cy="60%" r="40%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.18)" />
          <stop offset="80%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="180" rx="40" ry="6" fill="url(#pocket-shadow)" />
      {/* Cabezal del gimbal */}
      <rect x="80" y="20" width="40" height="36" rx="6" fill="#1d1d1f" />
      <circle cx="100" cy="38" r="11" fill="#0a0a0a" stroke="#2a2a2c" strokeWidth="2" />
      <circle cx="100" cy="38" r="6" fill="#0066cc" />
      <circle cx="100" cy="38" r="2" fill="#ffffff" />
      {/* Eje del gimbal */}
      <rect x="96" y="56" width="8" height="14" rx="2" fill="#272729" />
      {/* Pantalla */}
      <rect x="70" y="70" width="60" height="80" rx="10" fill="#1d1d1f" />
      <rect x="76" y="78" width="48" height="64" rx="4" fill="#0a0a0a" />
      <rect x="80" y="82" width="40" height="56" rx="3" fill="#0066cc" opacity="0.18" />
      {/* Mango */}
      <rect x="84" y="150" width="32" height="38" rx="6" fill="#272729" />
      <circle cx="100" cy="170" r="4" fill="#fafafc" opacity="0.6" />
    </svg>
  );
}

/* ---------- 360 sphere ---------- */
function Sphere360({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="DJI Osmo 360 — cámara 360"
    >
      <defs>
        <radialGradient id="sphere-shadow" cx="50%" cy="60%" r="45%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.2)" />
          <stop offset="80%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <radialGradient id="sphere-body" cx="35%" cy="35%" r="80%">
          <stop offset="0%" stopColor="#3a3a3d" />
          <stop offset="100%" stopColor="#1d1d1f" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="170" rx="50" ry="8" fill="url(#sphere-shadow)" />
      {/* Mango */}
      <rect x="92" y="130" width="16" height="38" rx="5" fill="#272729" />
      {/* Cuerpo esférico */}
      <circle cx="100" cy="90" r="55" fill="url(#sphere-body)" />
      {/* Lente frontal */}
      <circle cx="100" cy="90" r="32" fill="#0a0a0a" stroke="#3a3a3d" strokeWidth="2" />
      <circle cx="100" cy="90" r="22" fill="#0066cc" opacity="0.85" />
      <circle cx="100" cy="90" r="14" fill="#0a0a0a" />
      <circle cx="92" cy="82" r="5" fill="#fafafc" opacity="0.85" />
      {/* Lente trasera (sugerida con anillo) */}
      <circle
        cx="100"
        cy="90"
        r="48"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="3"
        strokeDasharray="4 8"
        opacity="0.5"
      />
    </svg>
  );
}
