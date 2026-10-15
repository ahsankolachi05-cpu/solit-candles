import Image from "next/image";

/* ---------- Collection ---------- */
const collectionCards = [
  { n: "01", title: "Citrus Rituals", desc: "A fresh start in a jar — bright, clean, made for slow mornings.", img: "/images/scent-vanilla.jpg" },
  { n: "02", title: "Velvet Coconut", desc: "Smooth and creamy — quiet indulgence for cosy evenings.", img: "/images/scent-rose.jpg" },
  { n: "03", title: "Wild Berry Orchard", desc: "Our signature — raspberry, strawberry and prosecco over warm vanilla.", img: "/images/lifestyle-genz.jpg" },
  { n: "04", title: "Fig Noir", desc: "Bold and after-dark — depth with an unmistakable presence.", img: "/images/cta-gold.jpg" },
];

export function Collection() {
  return (
    <section id="collection" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-deep">The White Collection</p>
          <h2 className="serif mt-4 text-5xl font-medium leading-tight sm:text-6xl">
            Eight candles.<br />
            <em className="font-light">Four scents.</em> One ritual.
          </h2>
          <div className="rule-ornament mx-auto mt-8 max-w-xs">
            <span className="serif text-xl text-gold">✦</span>
          </div>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-ink/65">
            Each scent poured twice in our iconic white glass — 240g of high-throw
            fragrance, hand-finished in Belfast.
          </p>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {collectionCards.map((c) => (
            <div key={c.n} className="group text-center">
              <div className="overflow-hidden rounded-[1.4rem] bg-cream">
                <Image
                  src={c.img}
                  alt={c.title}
                  width={700}
                  height={700}
                  className="aspect-square w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="eyebrow mt-6 text-[10px] text-stone">N° {c.n} — 240g</p>
              <h3 className="serif mt-2 text-[1.65rem] font-medium">{c.title}</h3>
              <p className="mx-auto mt-2 max-w-[26ch] text-sm leading-relaxed text-ink/60">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 overflow-hidden rounded-[2rem] bg-ink">
          <div className="grid items-center gap-10 p-10 sm:p-14 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow text-gold-soft/80">The complete collection</p>
              <p className="serif mt-4 text-4xl font-medium text-ivory sm:text-5xl">
                All eight candles — <em className="font-light">£22.99</em>
              </p>
              <p className="mt-3 max-w-lg leading-relaxed text-ivory/65">
                Complimentary shipping · 240g per candle · Hand-poured in Northern Ireland
              </p>
            </div>
            <a
              href="#contact"
              className="justify-self-start rounded-full bg-ivory px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-white lg:justify-self-end"
            >
              Shop the collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Scents (editorial) ---------- */
const scents = [
  {
    img: "/images/scent-vanilla.jpg",
    name: "Citrus Rituals",
    tag: "The fresh start",
    notes: "Sparkling citrus · clean linen · morning light",
    desc: "The one for a fresh start. Light it while the day is still deciding what it wants to be — bright, clean and quietly energising.",
  },
  {
    img: "/images/scent-rose.jpg",
    name: "Velvet Coconut",
    tag: "The indulgence",
    notes: "Creamy coconut · soft vanilla · warm skin",
    desc: "Smooth as it sounds. A creamy, enveloping scent for slow evenings, long baths and doing absolutely nothing, beautifully.",
  },
  {
    img: "/images/lifestyle-genz.jpg",
    name: "Wild Berry Orchard",
    tag: "The signature",
    notes: "Raspberry · strawberry · prosecco · peach · crisp apple · warm vanilla",
    desc: "Our signature pour. A juicy blend of raspberry, strawberry and prosecco, balanced with peach, crisp apple and warm vanilla.",
  },
  {
    img: "/images/cta-gold.jpg",
    name: "Fig Noir",
    tag: "The after-dark",
    notes: "Dark fig · amber · smoked woods",
    desc: "Bold, rich and unapologetic. For candlelit dinners, late conversations and rooms with the lights turned low.",
  },
];

export function Scents() {
  return (
    <section id="scents" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-deep">Four signature scents</p>
          <h2 className="serif mt-4 text-5xl font-medium sm:text-6xl">
            Find your <em className="font-light">scent</em>
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ink/65">
            High-throw fragrances, poured strong — each one designed to carry
            across the whole room.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {scents.map((s, i) => (
            <div
              key={s.name}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-[1.8rem]">
                <Image
                  src={s.img}
                  alt={s.name}
                  width={900}
                  height={700}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className={i % 2 ? "lg:pr-10" : "lg:pl-10"}>
                <p className="eyebrow text-gold-deep">{s.tag}</p>
                <h3 className="serif mt-3 text-4xl font-medium sm:text-5xl">{s.name}</h3>
                <p className="serif mt-4 text-lg italic text-ink/60">{s.notes}</p>
                <p className="mt-4 max-w-md leading-relaxed text-ink/70">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Our craft ---------- */
const craft = [
  {
    n: "01",
    title: "100% soy wax",
    desc: "A clean, slow burn from natural soy wax — no soot-heavy fillers, just an even melt pool from first light to last.",
  },
  {
    n: "02",
    title: "Double cotton wick",
    desc: "Two natural cotton wicks for a fuller flame and a wider fragrance throw, trimmed and centred by hand.",
  },
  {
    n: "03",
    title: "Poured in Belfast",
    desc: "Every So'Lit candle is hand-poured in small batches in Belfast, Northern Ireland — know exactly where your candle comes from.",
  },
];

export function Why() {
  return (
    <section id="craft" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-gold-deep">Our craft</p>
            <h2 className="serif mt-4 text-5xl font-medium leading-tight sm:text-6xl">
              Poured slowly,<br />
              <em className="font-light">burned beautifully.</em>
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-ink/65 lg:justify-self-end">
            Luxury is in the details you can&rsquo;t see — the wax blend, the wick,
            the cure time. We obsess over all three, so all you have to do is light it.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[1.8rem]">
          <Image
            src="/images/insta-box.jpg"
            alt="So'Lit luxury candle gift box"
            width={1200}
            height={600}
            className="aspect-[21/9] w-full object-cover"
          />
        </div>

        <div className="mt-4 grid sm:grid-cols-3">
          {craft.map((c, i) => (
            <div
              key={c.n}
              className={`px-8 py-10 ${i > 0 ? "sm:border-l sm:border-line" : ""} ${i > 0 ? "border-t border-line sm:border-t-0" : ""}`}
            >
              <p className="serif text-lg italic text-gold-deep">{c.n}</p>
              <h3 className="serif mt-2 text-2xl font-medium">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
