import { createFileRoute } from "@tanstack/react-router";
import bakeryImg from "@/assets/bakery.jpg";
import suyaImg from "@/assets/suya.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — 5G Silver Square Zaria" },
      { name: "description", content: "Bakery, fast food, main meals and refreshing drinks at 5G Silver Square, Samaru, Zaria." },
      { property: "og:title", content: "Our Menu — 5G Silver Square" },
      { property: "og:description", content: "Meat pies, shawarma, jollof, smoothies and more." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

const CATEGORIES: { name: string; items: { name: string; desc?: string }[] }[] = [
  {
    name: "Bakery",
    items: [
      { name: "Meat Pie", desc: "Flaky pastry, seasoned beef filling." },
      { name: "Sausage Roll", desc: "Golden, savoury, freshly baked." },
      { name: "Donut", desc: "Soft, sweet, dusted to perfection." },
      { name: "Croissant", desc: "Buttery, layered, French-style." },
      { name: "Marble Cake", desc: "Vanilla & chocolate swirl." },
    ],
  },
  {
    name: "Fast Food",
    items: [
      { name: "Pepperoni Pizza", desc: "Stone-baked with melted cheese." },
      { name: "Chicken Shawarma", desc: "Grilled chicken, sauces, soft wrap." },
      { name: "Beef Shawarma", desc: "Tender beef, fresh veggies." },
      { name: "Burgers", desc: "Juicy patty, classic sides." },
    ],
  },
  {
    name: "Main Meals",
    items: [
      { name: "Stir Fry Pasta", desc: "Wok-tossed with sauce and veggies." },
      { name: "Jollof Rice", desc: "Smoky, spicy Nigerian classic." },
      { name: "Fried Rice", desc: "Loaded with mixed vegetables." },
      { name: "Grilled Chicken", desc: "Marinated, charred, juicy." },
    ],
  },
  {
    name: "Drinks",
    items: [
      { name: "Banana Smoothie", desc: "Creamy, refreshing, chilled." },
      { name: "Mocktails", desc: "Signature non-alcoholic blends." },
      { name: "Zobo", desc: "Spiced hibiscus refresher." },
      { name: "Lebanese Tea", desc: "Aromatic, traditional brew." },
    ],
  },
];

function MenuPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[image:var(--gradient-hero)] text-white">
        <img src={bakeryImg} alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">Menu</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-6xl">Taste the best of Zaria</h1>
          <p className="mt-3 max-w-xl text-white/85">Freshly baked, freshly grilled, freshly poured — every single day.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        {CATEGORIES.map((cat) => (
          <div key={cat.name} className="mb-14">
            <div className="flex items-end justify-between gap-4 border-b border-border pb-3">
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{cat.name}</h2>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{cat.items.length} items</span>
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((it) => (
                <li key={it.name} className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5">
                  <h3 className="font-display text-lg font-bold">{it.name}</h3>
                  {it.desc && <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-secondary/60 p-6">
          <div className="flex items-center gap-3">
            <img src={suyaImg} alt="" className="h-14 w-14 rounded-lg object-cover" />
            <div>
              <p className="font-display text-lg font-bold">Hungry already?</p>
              <p className="text-sm text-muted-foreground">Order on WhatsApp — delivered fresh and fast.</p>
            </div>
          </div>
          <a href="https://wa.me/2349055000737" className="btn-hero rounded-md px-5 py-2.5 text-sm font-semibold">Order on WhatsApp</a>
        </div>
      </section>
    </>
  );
}
