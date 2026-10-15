import Image from "next/image";

/* ---------- Marquee ---------- */
export function Marquee() {
  const items = [
    "Handcrafted in Ireland",
    "100% soy wax",
    "High-throw fragrance",
    "240g of glow",
    "Free shipping",
    "8 candles · £22.99",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-4 border-espresso bg-gold py-4">
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-lg uppercase text-espresso">
            {t} <span className="text-pop">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Collection ---------- */
const collectionCards = [
  { n: "01", title: "Citrus Rituals ×2", desc: "The fresh-start scent, doubled — for mornings that mean business. 🍊", tag: "Bestseller" },
  { n: "02", title: "Velvet Coconut ×2", desc: "Smooth, creamy indulgence — your cosy-night essential. 🥥", tag: "Loved" },
  { n: "03", title: "Wild Berry Orchard ×2", desc: "The signature: raspberry, strawberry & prosecco. Juicy. 🍓", tag: "Signature" },
  { n: "04", title: "Fig Noir ×2", desc: "Bold after-dark fragrance with main-character energy. 🌒", tag: "Bold" },
];

export function Collection() {
  return (
    <section id="collection" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-pop">Fresh drop</p>
            <h2 className="font-display text-5xl leading-none sm:text-6xl">
              THE WHITE<br />COLLECTION<span className="text-gold">.</span>
            </h2>
            <p className="font-luxe mt-5 max-w-lg text-2xl italic text-espresso/75">
              Eight luxury 240g candles, four signature scents — one unmissable bundle.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-espresso shadow-xl">
            <Image
              src="/images/real-jar.jpg"
              alt="Real So'Lit White Collection candle jar — straight from the studio"
              width={720}
              height={1280}
              className="h-72 w-full object-cover sm:h-80"
            />
            <span className="absolute left-4 top-4 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-espresso">
              Real product
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {collectionCards.map((c) => (
            <div
              key={c.n}
              className="group rounded-3xl border-2 border-espresso bg-white p-6 shadow-[6px_6px_0_#1d130c] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#c9a227]"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl text-stroke-gold">{c.n}</span>
                <span className="rounded-full bg-pop-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-pop">{c.tag}</span>
              </div>
              <h3 className="mt-4 font-display text-lg leading-tight">{c.title}</h3>
              <p className="mt-2 text-sm text-espresso/65">{c.desc}</p>
              <p className="mt-4 text-xs italic text-espresso/45">Each scent ×2 — the full White Collection.</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-espresso p-8 sm:flex-row sm:p-10">
          <div>
            <p className="font-display text-3xl text-cream sm:text-4xl">
              All 8 for <span className="text-gold-light">£22.99</span>
            </p>
            <p className="mt-2 text-cream/70">Free UK shipping · 240g each · High fragrance load</p>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-pop px-8 py-4 font-display text-sm uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-pop/90"
          >
            Claim the bundle
          </a>
        </div>
        <p className="mt-4 text-center text-xs text-espresso/50">* Real So&rsquo;Lit scents, from @solitcandlesuk.</p>
      </div>
    </section>
  );
}

/* ---------- Scents ---------- */
const scents = [
  { img: "/images/scent-vanilla.jpg", name: "Citrus Rituals", mood: "Fresh · Morning · Energising", note: "The fresh-start one 🍊" },
  { img: "/images/scent-rose.jpg", name: "Velvet Coconut", mood: "Smooth · Creamy · Dreamy", note: "Pure indulgence 🥥" },
  { img: "/images/lifestyle-genz.jpg", name: "Wild Berry Orchard", mood: "Signature · Juicy · Vibrant", note: "Raspberry · strawberry · prosecco 🍓" },
  { img: "/images/cta-gold.jpg", name: "Fig Noir", mood: "Bold · Rich · After-dark", note: "Main-character energy 🌒" },
];

export function Scents() {
  return (
    <section id="scents" className="bg-cream-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-pop">Four signature scents</p>
          <h2 className="font-display text-5xl sm:text-6xl">PICK YOUR <span className="text-gold">VIBE</span></h2>
          <p className="font-luxe mx-auto mt-4 max-w-xl text-2xl italic text-espresso/70">
            Every candle is poured with a high fragrance load — your room will smell expensive.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scents.map((s) => (
            <div key={s.name} className="overflow-hidden rounded-3xl border-2 border-espresso bg-white shadow-[6px_6px_0_#1d130c]">
              <div className="relative h-64">
                <Image src={s.img} alt={s.name} width={800} height={800} className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-espresso/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-light backdrop-blur">
                  {s.note}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl">{s.name}</h3>
                <p className="mt-1 text-sm font-semibold text-pop">{s.mood}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-espresso/55">
          The four signature So&rsquo;Lit scents — as loved on @solitcandlesuk.
        </p>
      </div>
    </section>
  );
}

/* ---------- Why So'Lit ---------- */
const perks = [
  { emoji: "🕯️", title: "High-throw fragrance", desc: "High fragrance load poured strong — the scent actually fills your room, not a whisper, a statement." },
  { emoji: "🌱", title: "100% soy wax", desc: "Hand-poured in Ireland with 100% natural soy wax and a double cotton wick for a clean, even burn." },
  { emoji: "👑", title: "Luxury brand feel", desc: "Gold lids, clean white glass, gift-ready boxes that look expensive on your shelf." },
  { emoji: "⚖️", title: "240g of glow", desc: "A proper, weighty candle with hours of burn time in every jar." },
  { emoji: "🚚", title: "Free shipping", desc: "The full White Collection — all 8 candles — delivered free at £22.99." },
  { emoji: "🇮🇪", title: "Handcrafted in Ireland", desc: "Every So'Lit candle is hand-poured in Belfast, Northern Ireland — know exactly where your candle comes from." },
];

export function Why() {
  return (
    <section id="why" className="bg-espresso py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold-light">Why So&rsquo;Lit</p>
          <h2 className="font-display text-5xl text-cream sm:text-6xl">
            LUXURY THAT <span className="text-pop">HITS</span> DIFFERENT
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="rounded-3xl border border-gold/25 bg-espresso-soft p-7 transition hover:border-gold/60">
              <span className="text-4xl">{p.emoji}</span>
              <h3 className="mt-4 font-display text-lg text-cream">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
