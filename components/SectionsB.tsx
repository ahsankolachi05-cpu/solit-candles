import Image from "next/image";

/* ---------- Amazon banner ---------- */
export function Amazon() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] border-2 border-espresso bg-white p-8 shadow-[8px_8px_0_#1d130c] sm:p-12 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-3xl">
            <Image
              src="/images/amazon-large.jpg"
              alt="So'Lit larger candle size available on Amazon UK"
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-3 inline-block rounded-full bg-espresso px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
              Also on Amazon UK
            </p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              NEED IT <span className="text-gold">BIGGER?</span>
            </h2>
            <p className="font-luxe mt-4 text-2xl italic text-espresso/70">
              Our larger size is already out on Amazon UK — same luxury glow, more of it.
            </p>
            <a
              href="https://www.amazon.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-espresso px-8 py-4 font-display text-sm uppercase tracking-wide text-cream transition hover:-translate-y-0.5 hover:bg-espresso-soft"
            >
              Find us on Amazon UK
            </a>
            <p className="mt-3 text-xs text-espresso/50">Search “So&rsquo;Lit Candles” on Amazon UK.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Instagram ---------- */
export function Instagram() {
  return (
    <section className="bg-gradient-to-br from-pop-soft via-cream to-gold-pale py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-pop">Join the glow-up</p>
        <h2 className="font-display text-5xl sm:text-6xl">
          FOLLOW THE <span className="text-stroke-gold">LIT</span> LIFE
        </h2>
        <p className="font-luxe mx-auto mt-4 max-w-xl text-2xl italic text-espresso/70">
          Drops, behind-the-scenes pours and candleTok energy — daily on Instagram.
        </p>
        <a
          href="https://www.instagram.com/solitcandlesuk"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-espresso px-8 py-4 font-display text-sm uppercase tracking-wide text-cream transition hover:-translate-y-0.5"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="17.6" cy="6.4" r="1.4" fill="currentColor" stroke="none" />
          </svg>
          @solitcandlesuk
        </a>
        <div className="relative mx-auto mt-10 h-72 max-w-3xl overflow-hidden rounded-[2rem] border-2 border-espresso shadow-xl">
          <Image
            src="/images/lifestyle-genz.jpg"
            alt="So'Lit candle in a trendy Gen Z styled room"
            width={1200}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews (placeholder) ---------- */
export function Reviews() {
  return (
    <section id="reviews" className="bg-cream-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-pop">Reviews</p>
          <h2 className="font-display text-5xl sm:text-6xl">THE HYPE <span className="text-gold">IS REAL*</span></h2>
          <p className="mt-4 text-sm italic text-espresso/55">* Placeholder reviews for concept — real customer reviews to be added at launch.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { quote: "My whole flat smells insane. The white jars look so expensive on my shelf.", name: "Amara, London*" },
            { quote: "Bought the bundle for £22.99 — honestly the best candle deal I've found.", name: "Jess, Manchester*" },
            { quote: "Burns so clean and the scent actually lasts. Obsessed.", name: "Priya, Birmingham*" },
          ].map((r) => (
            <figure key={r.name} className="rounded-3xl border-2 border-espresso bg-white p-7 shadow-[6px_6px_0_#c9a227]">
              <div className="text-gold">★★★★★</div>
              <blockquote className="font-luxe mt-3 text-xl italic text-espresso/85">“{r.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-bold text-espresso/60">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Image
        src="/images/cta-gold.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-espresso/55" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-5xl leading-none text-cream sm:text-7xl">
          READY TO<br />GET <span className="text-gold-light">LIT?</span>
        </h2>
        <p className="font-luxe mx-auto mt-5 max-w-xl text-2xl italic text-cream/85">
          The White Collection won&rsquo;t stay on the shelf forever.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-gold px-9 py-4 font-display text-sm uppercase tracking-wide text-espresso shadow-xl transition hover:-translate-y-0.5 hover:bg-gold-light"
          >
            Shop £22.99 now
          </a>
          <a
            href="https://www.instagram.com/solitcandlesuk"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-cream/50 px-9 py-4 font-display text-sm uppercase tracking-wide text-cream transition hover:border-gold-light hover:text-gold-light"
          >
            DM us on Insta
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
export function Contact() {
  return (
    <section id="contact" className="bg-espresso py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold-light">Say hey</p>
          <h2 className="font-display text-5xl text-cream sm:text-6xl">LET&rsquo;S TALK CANDLES</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/65">
            Questions about the White Collection, wholesale or collabs — message us, we reply fast.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
          <a
            href="https://www.instagram.com/solitcandlesuk"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-gold/30 bg-espresso-soft p-7 text-center transition hover:border-gold"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-light">Instagram</p>
            <p className="mt-2 font-display text-xl text-cream">@solitcandlesuk</p>
          </a>
          <a
            href="https://wa.me/447733839250"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-gold/30 bg-espresso-soft p-7 text-center transition hover:border-gold"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-light">WhatsApp</p>
            <p className="mt-2 font-display text-xl text-cream">+44 7733 839250</p>
          </a>
        </div>
        <p className="mt-8 text-center text-xs text-cream/40">
          Demo checkout — concept site. Orders and payments to be confirmed at launch.
        </p>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-espresso py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 sm:flex-row sm:px-6">
        <p className="font-display text-2xl text-gold-light">So&rsquo;Lit <span className="text-sm font-body font-semibold text-cream/50">candles</span></p>
        <p className="text-center text-xs text-cream/45">
          © 2026 So&rsquo;Lit Candles · Concept website by Draft by Ryan — content placeholders where marked.
        </p>
        <a href="https://www.instagram.com/solitcandlesuk" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gold-light hover:text-cream">
          @solitcandlesuk
        </a>
      </div>
    </footer>
  );
}
