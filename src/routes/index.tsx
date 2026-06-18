import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import vipImg from "@/assets/vip-lounge.jpg";
import gymImg from "@/assets/gym.jpg";
import pitchImg from "@/assets/pitch.jpg";
import suyaImg from "@/assets/suya.jpg";
import bakeryImg from "@/assets/bakery.jpg";
import gameImg from "@/assets/gamehouse.jpg";
import playImg from "@/assets/playground.jpg";
import barberImg from "@/assets/barber.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "5G Silver Square — The Ultimate Hangout Spot in Zaria" },
      { name: "description", content: "Restaurant, bakery, gym, game house, 5-a-side pitch, barbershop, suya & kids playground — everything you need in one premium spot in Samaru, Zaria." },
      { property: "og:title", content: "5G Silver Square — Zaria" },
      { property: "og:description", content: "Everything you need in one place. Food, fitness, fun & family." },
      { property: "og:image", content: hero1 },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "5G Silver Square",
        image: hero1,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Opposite Silver Jubilee Quarters, Sokoto Road",
          addressLocality: "Samaru, Zaria",
          addressCountry: "NG",
        },
        telephone: "+2349055000737",
        servesCuisine: ["Nigerian", "Fast Food", "Bakery"],
      }),
    }],
  }),
  component: Index,
});

const SLIDES = [
  { img: hero1, alt: "5G Silver Square at night" },
  { img: vipImg, alt: "Arabian-style VIP lounge" },
  { img: pitchImg, alt: "5-a-side football pitch under lights" },
];

const SERVICES = [
  { title: "Restaurant & Bakery", desc: "Fresh meat pies, pizzas, jollof and more — baked and served daily.", img: bakeryImg },
  { title: "Gym & Fitness Center", desc: "Modern equipment, trainers and energy for every fitness level.", img: gymImg },
  { title: "Game House & Pool", desc: "Pool tables, arcade games and chill vibes with friends.", img: gameImg },
  { title: "5-a-Side Football Pitch", desc: "Floodlit turf for daytime and nighttime matches.", img: pitchImg },
  { title: "Barbershop", desc: "Premium cuts and grooming in a relaxed setting.", img: barberImg },
  { title: "Suya Spot", desc: "Sizzling, spicy Nigerian suya straight off the grill.", img: suyaImg },
  { title: "Kids Playground", desc: "Safe, dedicated play area so the whole family can hang.", img: playImg },
];

function Index() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {SLIDES.map((s, idx) => (
            <img
              key={s.img}
              src={s.img}
              alt={s.alt}
              width={1920}
              height={1080}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="mx-auto flex min-h-[88dvh] max-w-7xl flex-col items-start justify-center px-4 py-24 sm:px-6">
          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md">
            The Ultimate Hangout · Zaria
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl md:text-7xl animate-fade-in">
            Everything You Need <span className="text-gradient">In One Place</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Restaurant, bakery, gym, game house, football pitch, barbershop, suya and a kids playground — all under one roof on Sokoto Road, Samaru.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/order" className="btn-hero rounded-md px-6 py-3 text-sm font-semibold sm:text-base">Order Food</Link>
            <Link to="/contact" className="rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:text-base">Visit Today</Link>
          </div>
          <div className="mt-10 flex gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-4 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What we offer</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-5xl">One destination. Endless reasons to stay.</h2>
          <p className="mt-4 text-muted-foreground">From a quick suya to a full family day out — built for ABU students, families, young professionals and fitness lovers.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1280} height={896} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative isolate overflow-hidden bg-[image:var(--gradient-hero)] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Hungry? We deliver.</h2>
            <p className="mt-2 text-white/85">Order on WhatsApp or call us directly. Hot, fresh, fast.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/2349055000737" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5">WhatsApp Order</a>
            <a href="tel:+2349055000737" className="rounded-md border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">Call +234 905 500 0737</a>
          </div>
        </div>
      </section>
    </>
  );
}
