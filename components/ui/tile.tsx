import { clsx } from "@/lib/clsx";
import type { ReactNode } from "react";

export type TileVariant =
  | "canvas"
  | "parchment"
  | "tile-1"
  | "tile-2"
  | "tile-3";

type TileProps = {
  variant?: TileVariant;
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  as?: "section" | "header" | "footer";
};

const surfaceMap: Record<TileVariant, string> = {
  canvas: "bg-canvas text-ink",
  parchment: "bg-parchment text-ink",
  "tile-1": "bg-tile-1 text-white",
  "tile-2": "bg-tile-2 text-white",
  "tile-3": "bg-tile-3 text-white",
};

export function Tile({
  variant = "canvas",
  id,
  className,
  innerClassName,
  children,
  as: Tag = "section",
}: TileProps) {
  return (
    <Tag
      id={id}
      className={clsx(
        "w-full",
        surfaceMap[variant],
        // padding vertical 80 / 56 mobile — el "section rhythm" de Apple
        "py-14 md:py-20",
        className,
      )}
    >
      <div
        className={clsx(
          "mx-auto w-full max-w-[1440px] px-6 md:px-10",
          innerClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
