"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { clsx } from "@/lib/clsx";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li";
};

/**
 * SSR-safe reveal: renderiza visible por defecto.
 * Tras hidratar, si el elemento está debajo del viewport, lo esconde y
 * aplica fade-up al entrar. Si ya está en pantalla al hidratar, no oculta nada.
 * Usuarios sin JS, lectores de pantalla y crawlers ven todo desde el inicio.
 */
export function Reveal({ children, delay = 0, className, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [hidden, setHidden] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const belowFold = rect.top >= (window.innerHeight || 0) - 80;
    if (!belowFold) return; // ya visible al hidratar — no animar

    setHidden(true);
    setVisible(false);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const t = window.setTimeout(() => setVisible(true), delay);
        obs.disconnect();
        return () => window.clearTimeout(t);
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref as never}
      className={clsx(hidden && "reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
