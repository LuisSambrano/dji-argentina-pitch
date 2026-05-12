import Link from "next/link";

const links = [
  { href: "#concepto", label: "Concepto" },
  { href: "#ecosistema", label: "Ecosistema" },
  { href: "#recorrido", label: "Recorrido" },
  { href: "#metodo", label: "Método" },
  { href: "#comunidad", label: "Comunidad" },
  { href: "#ventaja", label: "Ventaja" },
  { href: "#contacto", label: "Contacto" },
];

export function GlobalNav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <div className="mx-auto flex h-11 max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="text-[12px] tracking-[-0.12px] hover:opacity-70 transition-opacity"
          aria-label="Inicio — Luis Sambrano, Argentina"
        >
          <span className="font-semibold">Luis Sambrano</span>
          <span className="opacity-50"> · Argentina</span>
        </Link>
        <nav className="hidden md:block" aria-label="Navegación principal">
          <ul className="flex items-center gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[12px] tracking-[-0.12px] hover:opacity-70 transition-opacity"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="mailto:luissambranoarg@gmail.com?subject=Propuesta%20DJI%20Argentina"
          className="text-[12px] tracking-[-0.12px] rounded-sm bg-white/10 px-3 py-1.5 hover:bg-white/20 transition-colors"
        >
          Escribir
        </a>
      </div>
    </header>
  );
}
