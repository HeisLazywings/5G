import { createFileRoute } from "@tanstack/react-router";
import vip from "@/assets/vip-lounge.jpg";
import bakery from "@/assets/bakery.jpg";
import suya from "@/assets/suya.jpg";
import barber from "@/assets/barber.jpg";
import game from "@/assets/gamehouse.jpg";

export const Route = createFileRoute("/vip-lounge")({
  head: () => ({
    meta: [
      { title: "VIP Lounge — 5G Silver Square Zaria" },
      { name: "description", content: "Arabian-style private dining and seating with premium service at 5G Silver Square, Zaria." },
      { property: "og:title", content: "VIP Lounge — 5G Silver Square" },
      { property: "og:description", content: "Arabian-style seating, private dining, family-friendly premium service." },
      { property: "og:image", content: vip },
      { property: "og:url", content: "/vip-lounge" },
    ],
    links: [{ rel: "canonical", href: "/vip-lounge" }],
  }),
  component: VipPage,
});

const FEATURES = [
  { title: "Arabian-Style Seating", desc: "Plush red velvet majlis, ornate brass tables and warm lantern light." },
  { title: "Private Dining", desc: "Discreet rooms for celebrations, business meetings and intimate gatherings." },
  { title: "Family-Friendly", desc: "Children welcome — comfortable enough for the whole family to enjoy." },
  { title: "Premium Service", desc: "Personal hosts, curated menu and attention to every detail." },
];

const GALLERY = [vip, bakery, suya, barber, game];

function VipPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={vip} alt="Arabian-style VIP lounge interior" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">VIP Lounge</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-6xl">An Arabian escape in the heart of Zaria.</h1>
          <p className="mt-4 max-w-xl text-white/85">Settle into rich velvet seating, savour bespoke service, and make every visit unforgettable.</p>
          <a href="https://wa.me/2349055000737?text=I'd%20like%20to%20reserve%20the%20VIP%20Lounge" className="btn-hero mt-8 inline-flex rounded-md px-6 py-3 text-sm font-semibold">Reserve on WhatsApp</a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h2 className="font-display text-xl font-bold">{f.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Gallery</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
          {GALLERY.map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
              <img src={src} alt={`VIP lounge photo ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
