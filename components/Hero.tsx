import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-espresso pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* refined gold ambience */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-gold-light" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-light">
                The White Collection — now live
              </span>
            </div>

            <h1 className="font-display leading-[0.92]">
              <span className="block text-[clamp(2.8rem,7vw,5rem)] text-cream">LUXURY CANDLES,</span>
              <span className="block bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-[clamp(3.2rem,8vw,5.8rem)] text-transparent">
                HANDCRAFTED IN IRELAND
              </span>
            </h1>

            <p className="font-luxe mt-6 max-w-lg text-2xl italic leading-relaxed text-cream/80">
              100% soy wax. Double cotton wick. High-throw fragrances — poured to fill your whole space.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#collection"
                className="rounded-full bg-gold px-8 py-4 font-display text-sm uppercase tracking-wide text-espresso shadow-lg shadow-gold/25 transition hover:-translate-y-0.5 hover:bg-gold-light"
              >
                Shop — £22.99
              </a>
              <a
                href="#scents"
                className="rounded-full border border-cream/25 px-8 py-4 font-display text-sm uppercase tracking-wide text-cream transition hover:border-gold-light hover:text-gold-light"
              >
                The four scents
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-cream/10 pt-8">
              {[
                ["8", "candles"],
                ["240g", "each"],
                ["£22.99", "free shipping"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl text-gold-light">{v}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-cream/55">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: real product video + real packaging */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-5">
              <div className="overflow-hidden rounded-3xl border border-gold/30 shadow-2xl">
                <video
                  src="/videos/hero-jar.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-[9/16] w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="relative flex-1 overflow-hidden rounded-3xl border border-gold/30 shadow-2xl">
                  <Image
                    src="/images/insta-box.jpg"
                    alt="So'Lit luxury candle gift box"
                    width={512}
                    height={435}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-espresso/85 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-light backdrop-blur">
                    Real product
                  </span>
                </div>
                <div className="overflow-hidden rounded-3xl border border-gold/30 shadow-2xl">
                  <Image
                    src="/images/insta-basket.jpg"
                    alt="So'Lit candle in a cosy gift basket"
                    width={360}
                    height={640}
                    className="aspect-[9/14] w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-6 py-3 font-display text-sm uppercase tracking-wide text-espresso shadow-xl">
              As seen on @solitcandlesuk
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
