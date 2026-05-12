import Link from "next/link";
import type { ReactNode } from "react";
import { clsx } from "@/lib/clsx";

type Size = "md" | "lg";

type Props = {
  href: string;
  children: ReactNode;
  size?: Size;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center rounded-pill bg-primary text-white " +
  "font-normal transition-transform active:scale-95 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-focus focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-current";

const sizes: Record<Size, string> = {
  md: "text-[17px] leading-[1.47] tracking-[-0.374px] px-[22px] py-[11px]",
  lg: "text-[18px] leading-none font-light px-7 py-[14px]",
};

export function ButtonPrimary({
  href,
  children,
  size = "md",
  external,
  className,
  ariaLabel,
}: Props) {
  const cls = clsx(base, sizes[size], className);
  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
