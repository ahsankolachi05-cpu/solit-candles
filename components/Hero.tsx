export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* vibrant background shapes */}
      <div className="animate-drift pointer-events-none absolute -top-20 right-[10%] h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
      <div className="animate-drift pointer-events-none absolute bottom-10 -left-20 h-80 w-80 rounded-full bg-pop/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-[8%] hidden text-5xl lg:block animate-bounce">✨</div>
      <div className="pointer-events-none absolute bottom-1/4 right-[6%] hidden text-4xl lg:block animate-bounce" style={{ animationDelay: "0.6s" }}>🔥</div>
      <div className="pointer-events-none absolute top-24 left-[45%] hidden text-3xl lg:block animate-bounce" style={{ animationDelay: "1.1s" }}>💛</div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: type */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex rotate-[-2deg] items-center gap-2 rounded-full border-2 border-espresso bg-pop px-5 py-2 shadow-[4px_4px_0_#1d130c]">
              <span className="text-sm">🔥</span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                The White Collection just dropped
              </span>
            </div>

            <h1 className="font-display leading-[0.9]">
              <span className="block text-[clamp(3.5rem,10vw,7.5rem)] text-espresso">STAY</span>
              <span className="block bg-gradient-to-r from-gold via-[#f0c94e] to-gold bg-clip-text text-[clamp(4.5rem,13vw,10rem)] text-transparent drop-shadow-[3px_3px_0_rgba(29,19,12,1)]">
                SO&rsquo;LIT
              </span>
            </h1>

            <p className="font-luxe mx-auto mt-6 max-w-md text-2xl italic text-espresso/75 sm:text-[1.7rem] lg:mx-0">
              Eight luxury candles. One iconic white collection. Zero apologies.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#collection"
                className="rotate-[-1deg] rounded-2xl border-2 border-espresso bg-gold px-8 py-4 font-display text-sm uppercase tracking-wide text-espresso shadow-[6px_6px_0_#1d130c] transition hover:-translate-y-1 hover:rotate-0 hover:shadow-[8px_8px_0_#1d130c]"
              >
                Shop the drop — £22.99
              </a>
              <a
                href="#scents"
                className="rotate-[1deg] rounded-2xl border-2 border-espresso bg-white px-8 py-4 font-display text-sm uppercase tracking-wide text-espresso shadow-[6px_6px_0_#1d130c] transition hover:-translate-y-1 hover:rotate-0"
              >
                Pick your vibe 👇
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["8 candles", "240g each", "4 scents", "Free UK shipping"].map((t) => (
                <span key={t} className="rounded-full border-2 border-espresso bg-gold-pale px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-espresso">
                  ✓ {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: real product video in tilted frame */}
          <div className="relative mx-auto w-full max-w-[340px]">
            <div className="absolute -inset-6 rotate-3 rounded-[2.5rem] bg-gold/50 blur-2xl" />
            <div className="relative rotate-3 overflow-hidden rounded-[2rem] border-4 border-espresso bg-espresso shadow-[10px_10px_0_#1d130c]">
              <video
                src="/videos/hero-jar.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[9/16] w-full object-cover"
              />
              <div className="absolute left-4 top-4 rotate-[-4deg] rounded-full bg-pop px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                Real product 🎬
              </div>
            </div>
            {/* sticker badges */}
            <div className="absolute -left-10 top-8 rotate-[-10deg] rounded-2xl border-2 border-espresso bg-white px-4 py-2 shadow-[4px_4px_0_#1d130c]">
              <p className="font-display text-2xl text-espresso">£22.99</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-espresso/60">all 8 candles</p>
            </div>
            <div className="absolute -right-8 bottom-10 rotate-[8deg] rounded-2xl border-2 border-espresso bg-gold px-4 py-2 shadow-[4px_4px_0_#1d130c]">
              <p className="font-display text-lg text-espresso">FREE</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-espresso/70">UK shipping</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
