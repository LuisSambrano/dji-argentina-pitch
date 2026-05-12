import Link from "next/link";
import type { ReactNode } from "react";
import { clsx } from "@/lib/clsx";

type Variant = "light" | "dark";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center rounded-pill border " +
  "text-[17px] leading-[1.47] tracking-[-0.374px] px-[22px] py-[11px] " +
  "bg-transparent transition-transform active:scale-95 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-focus focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-current";

const variants: Record<Variant, string> = {
  light: "border-primary text-primary",
  dark: "border-primary-on-dark text-primary-on-dark",
};

export function ButtonGhost({
  href,
  children,
  variant = "light",
  external,
  className,
  ariaLabel,
}: Props) {
  const cls = clsx(base, variants[variant], className);
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
