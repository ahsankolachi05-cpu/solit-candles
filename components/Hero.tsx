import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-espresso pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* glow blobs */}
      <div className="animate-drift pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="animate-drift pointer-events-none absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-pop/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-pop" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
              The White Collection just dropped
            </span>
          </div>
          <h1 className="font-display text-6xl leading-[0.95] text-cream sm:text-7xl lg:text-8xl">
            STAY
            <br />
            <span className="text-gold-light">SO&rsquo;LIT</span>
          </h1>
          <p className="font-luxe mt-6 max-w-md text-2xl italic text-cream/85">
            Eight luxury candles. One iconic white collection. Zero apologies.
          </p>
          <p className="mt-4 max-w-md text-cream/70">
            High fragrance load, 240&nbsp;g of pure glow — the whole collection
            for <span className="font-bold text-gold-light">£22.99</span> with{" "}
            <span className="font-bold text-gold-light">free UK shipping</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#collection"
              className="rounded-full bg-gold px-8 py-4 font-display text-sm uppercase tracking-wide text-espresso shadow-lg shadow-gold/30 transition hover:-translate-y-0.5 hover:bg-gold-light"
            >
              Shop the drop
            </a>
            <a
              href="#scents"
              className="rounded-full border-2 border-cream/30 px-8 py-4 font-display text-sm uppercase tracking-wide text-cream transition hover:border-gold-light hover:text-gold-light"
            >
              Explore scents
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-cream/60">
            <span><strong className="text-gold-light">8</strong> candles</span>
            <span className="h-4 w-px bg-cream/20" />
            <span><strong className="text-gold-light">240g</strong> each</span>
            <span className="h-4 w-px bg-cream/20" />
            <span><strong className="text-gold-light">4</strong> scents</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-gold/40 via-pop/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 shadow-2xl">
            <Image
              src="/images/hero-candle.jpg"
              alt="Lit So'Lit luxury white candle with gold lid"
              width={1120}
              height={2240}
              className="h-[520px] w-full object-cover sm:h-[620px]"
              priority
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-espresso/80 px-5 py-4 backdrop-blur">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Launch price</p>
                <p className="font-display text-3xl text-cream">£22.99 <span className="text-sm font-body font-semibold text-cream/60">all 8 · free shipping</span></p>
              </div>
              <a href="#collection" className="rounded-full bg-pop px-5 py-3 text-sm font-bold text-white transition hover:bg-pop/90">
                Get lit 🔥
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
