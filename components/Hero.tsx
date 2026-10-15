export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      {/* Full-bleed real product film */}
      <video
        src="/videos/hero-jar.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-40 sm:px-6 sm:pb-28">
        <p className="eyebrow text-gold-soft/90">Handcrafted in Belfast, Northern Ireland</p>
        <h1 className="serif mt-5 max-w-3xl text-[clamp(3rem,8vw,5.8rem)] font-medium leading-[1.02] text-ivory">
          The White<br />
          <em className="font-light">Collection</em>
        </h1>
        <p className="serif mt-6 max-w-xl text-[1.35rem] font-light italic leading-relaxed text-ivory/80">
          Eight luxury candles in four signature scents — poured with 100% soy wax,
          a double cotton wick, and a fragrance throw that fills the room.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#collection"
            className="rounded-full bg-ivory px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-white"
          >
            Shop the collection — £22.99
          </a>
          <a
            href="#scents"
            className="rounded-full border border-ivory/40 px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ivory transition hover:border-ivory hover:bg-ivory/10"
          >
            Discover the scents
          </a>
        </div>
        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-ivory/15 pt-6">
          {[
            ["8", "luxury candles"],
            ["240g", "per candle"],
            ["4", "signature scents"],
          ].map(([v, l]) => (
            <div key={l} className="flex items-baseline gap-3">
              <span className="serif text-3xl text-ivory">{v}</span>
              <span className="eyebrow text-[10px] text-ivory/60">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
