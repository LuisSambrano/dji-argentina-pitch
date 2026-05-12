import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="w-full bg-parchment text-ink-80">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="text-[14px] font-semibold tracking-[-0.224px] text-ink">
              Luis Sambrano
            </p>
            <p className="mt-2 text-[12px] tracking-[-0.12px] text-ink-48">
              Argentina · Proyecto nómada 2026
            </p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <p className="text-[14px] font-semibold tracking-[-0.224px] text-ink">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-1">
                {col.links.map((l) => {
                  const isExternal =
                    l.href.startsWith("http") || l.href.startsWith("mailto:");
                  return (
                    <li
                      key={l.href}
                      className="text-[17px] leading-[2.41] tracking-[-0.374px]"
                    >
                      <a
                        href={l.href}
                        target={
                          l.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          l.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="hover:text-primary transition-colors"
                      >
                        {l.label}
                        {isExternal && l.href.startsWith("http") ? (
                          <span aria-hidden className="ml-1 text-ink-48">
                            ↗
                          </span>
                        ) : null}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] tracking-[-0.12px] text-ink-48">
            {footer.signature}
          </p>
          <p className="max-w-2xl text-[12px] leading-[1.5] tracking-[-0.12px] text-ink-48">
            {footer.legal}
          </p>
        </div>
      </div>
    </footer>
  );
}
