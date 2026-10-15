"use client";

import { useState } from "react";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Scents", href: "#scents" },
  { label: "Our Craft", href: "#craft" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-ink px-4 py-2 text-center">
        <p className="eyebrow text-[10px] text-ivory/85">
          Complimentary shipping on the White Collection&ensp;·&ensp;8 candles · £22.99
        </p>
      </div>
      <div className="border-b border-line bg-ivory/90 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 py-4 sm:px-6">
          <nav className="hidden items-center gap-7 lg:flex">
            {links.slice(0, 3).map((l) => (
              <a key={l.href} href={l.href} className="eyebrow text-ink/70 transition hover:text-gold-deep">
                {l.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="justify-self-start text-ink lg:hidden"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
          <a href="#top" className="justify-self-center text-center">
            <span className="serif text-[1.7rem] font-semibold tracking-wide text-ink">
              So&rsquo;lit
            </span>
            <span className="eyebrow mt-0.5 block text-[9px] text-stone">
              Luxury Candles
            </span>
          </a>
          <div className="flex items-center justify-end gap-5">
            <nav className="hidden items-center gap-7 lg:flex">
              {links.slice(3).map((l) => (
                <a key={l.href} href={l.href} className="eyebrow text-ink/70 transition hover:text-gold-deep">
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href="#collection"
              className="rounded-full bg-ink px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-ivory transition hover:bg-ink-soft"
            >
              Shop
            </a>
          </div>
        </div>
        {open && (
          <nav className="border-t border-line bg-ivory px-6 py-4 lg:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="eyebrow block py-3 text-ink/75"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
