"use client";

import { useState } from "react";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Scents", href: "#scents" },
  { label: "Why So'Lit", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-espresso/90 px-5 py-3 shadow-xl shadow-espresso/20 backdrop-blur">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-display text-2xl text-gold-light">
              So&rsquo;Lit
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/70 sm:inline">
              candles
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-cream/80 transition hover:text-gold-light"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#collection"
              className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-espresso transition hover:bg-gold-light sm:inline-block"
            >
              Shop £22.99
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="text-cream md:hidden"
              aria-label="Menu"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <nav className="mt-2 rounded-2xl bg-espresso p-4 shadow-xl md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 font-semibold text-cream/90 hover:bg-white/10"
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
