import Image from "next/image";

/* ---------- Amazon ---------- */
export function Amazon() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[1.8rem]">
            <Image
              src="/images/amazon-large.jpg"
              alt="So'Lit larger candle size on Amazon UK"
              width={900}
              height={700}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="lg:pl-6">
            <p className="eyebrow text-gold-deep">Also on Amazon UK</p>
            <h2 className="serif mt-4 text-5xl font-medium leading-tight">
              Need it <em className="font-light">bigger?</em>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink/65">
              Our larger statement size is already live on Amazon UK — the same
              luxury glow and high-throw fragrance, with more of it.
            </p>
            <a
              href="https://www.amazon.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-ink px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ivory transition hover:bg-ink-soft"
            >
              Find us on Amazon UK
            </a>
            <p className="mt-4 text-sm text-ink/45">Search &ldquo;So&rsquo;lit Candles&rdquo; on Amazon UK.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Instagram ---------- */
const instaShots = [
  { src: "/images/insta-box.jpg", alt: "So'Lit candle gift box" },
  { src: "/images/real-jar.jpg", alt: "So'Lit White Collection candle" },
  { src: "/images/insta-basket.jpg", alt: "So'Lit candle styled in a gift basket" },
];

export function Instagram() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-deep">@solitcandlesuk</p>
          <h2 className="serif mt-4 text-5xl font-medium sm:text-6xl">
            Follow the <em className="font-light">glow</em>
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ink/65">
            New pours, behind-the-scenes from the studio and first dibs on every drop.
          </p>
          <a
            href="https://www.instagram.com/solitcandlesuk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full border border-ink/25 px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:border-ink hover:bg-ink hover:text-ivory"
          >
            Follow on Instagram
          </a>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-6">
          {instaShots.map((s) => (
            <div key={s.src} className="overflow-hidden rounded-[1.4rem] bg-cream">
              <Image
                src={s.src}
                alt={s.alt}
                width={600}
                height={600}
                className="aspect-square w-full object-cover transition duration-700 hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews (placeholders, clearly marked) ---------- */
const reviews = [
  { quote: "My whole flat smells incredible — the white jars look so expensive on the shelf.", name: "Amara · London" },
  { quote: "The bundle at £22.99 is honestly the best candle value I've found.", name: "Jess · Manchester" },
  { quote: "Burns clean and the scent genuinely lasts for hours. Obsessed.", name: "Priya · Birmingham" },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <p className="eyebrow text-gold-deep">Reviews</p>
          <h2 className="serif mt-4 text-5xl font-medium sm:text-6xl">
            Loved, <em className="font-light">lit</em> &amp; relit
          </h2>
          <p className="mt-4 text-sm italic text-ink/45">
            Concept placeholders — real customer reviews to be added at launch.
          </p>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="text-center">
              <div className="serif text-lg tracking-[0.3em] text-gold">★★★★★</div>
              <blockquote className="serif mt-4 text-[1.3rem] font-light italic leading-relaxed text-ink/80">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="eyebrow mt-5 text-[10px] text-stone">{r.name}*</figcaption>
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
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <Image src="/images/cta-gold.jpg" alt="" fill className="object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/80" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="eyebrow text-gold-soft/80">The White Collection</p>
        <h2 className="serif mt-5 text-5xl font-medium leading-tight text-ivory sm:text-7xl">
          Begin your <em className="font-light">ritual.</em>
        </h2>
        <p className="serif mx-auto mt-5 max-w-xl text-xl font-light italic text-ivory/70">
          Eight candles, four scents — one unmistakable glow.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-ivory px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-white"
          >
            Shop £22.99
          </a>
          <a
            href="https://www.instagram.com/solitcandlesuk"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ivory/40 px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ivory transition hover:border-ivory hover:bg-ivory/10"
          >
            Message us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
export function Contact() {
  return (
    <section id="contact" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <p className="eyebrow text-gold-deep">Say hello</p>
          <h2 className="serif mt-4 text-5xl font-medium sm:text-6xl">
            Let&rsquo;s talk <em className="font-light">candles</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink/65">
            Questions about the White Collection, wholesale or collaborations —
            we reply quickly.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl gap-5 sm:grid-cols-2">
          <a
            href="https://www.instagram.com/solitcandlesuk"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[1.4rem] border border-line bg-white p-8 text-center transition hover:border-gold"
          >
            <p className="eyebrow text-[10px] text-stone">Instagram</p>
            <p className="serif mt-2 text-2xl font-medium">@solitcandlesuk</p>
          </a>
          <a
            href="https://wa.me/447733839250"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[1.4rem] border border-line bg-white p-8 text-center transition hover:border-gold"
          >
            <p className="eyebrow text-[10px] text-stone">WhatsApp</p>
            <p className="serif mt-2 text-2xl font-medium">+44 7733 839250</p>
          </a>
        </div>
        <p className="mt-10 text-center text-xs text-ink/40">
          Concept website — checkout and order details to be confirmed at launch.
        </p>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="bg-ink py-16 text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <p className="serif text-3xl font-semibold">So&rsquo;lit</p>
          <p className="eyebrow mt-2 text-[9px] text-ivory/50">Luxury Candles</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/55">
            Hand-poured luxury candles from Belfast, Northern Ireland.
            100% soy wax, double cotton wick, unforgettable throw.
          </p>
        </div>
        <div>
          <p className="eyebrow text-[10px] text-ivory/50">Explore</p>
          <nav className="mt-5 space-y-3">
            {[
              ["Collection", "#collection"],
              ["Scents", "#scents"],
              ["Our Craft", "#craft"],
              ["Reviews", "#reviews"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="block text-sm text-ivory/70 transition hover:text-ivory">
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <p className="eyebrow text-[10px] text-ivory/50">Connect</p>
          <div className="mt-5 space-y-3 text-sm text-ivory/70">
            <a href="https://www.instagram.com/solitcandlesuk" target="_blank" rel="noopener noreferrer" className="block transition hover:text-ivory">
              Instagram — @solitcandlesuk
            </a>
            <a href="https://wa.me/447733839250" target="_blank" rel="noopener noreferrer" className="block transition hover:text-ivory">
              WhatsApp — +44 7733 839250
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-ivory/10 px-4 pt-7 sm:px-6">
        <p className="text-center text-xs text-ivory/40">
          © 2026 So&rsquo;lit Candles · Concept website by Draft by Ryan
        </p>
      </div>
    </footer>
  );
}
