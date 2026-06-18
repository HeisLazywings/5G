import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — 5G Silver Square Zaria" },
      { name: "description", content: "Visit 5G Silver Square opposite Silver Jubilee Quarters, Sokoto Road, Samaru, Zaria. Call, WhatsApp or send a message." },
      { property: "og:title", content: "Contact — 5G Silver Square" },
      { property: "og:description", content: "Address, hours, map and contact form." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const FAQ = [
  { q: "Is parking available?", a: "Yes — free on-site parking for all our guests." },
  { q: "Is it kid friendly?", a: "Absolutely. We have a dedicated kids playground and family seating." },
  { q: "Can I bring a backpack?", a: "Security restrictions may apply at the entrance — please cooperate with our staff." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-[image:var(--gradient-hero)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">Contact</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-6xl">Come hang out with us.</h1>
          <p className="mt-3 max-w-xl text-white/85">We're easy to find — and even easier to reach.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-xl font-bold">Address</h2>
            <p className="mt-2 text-muted-foreground">Opposite Silver Jubilee Quarters,<br />Sokoto Road, Samaru, Zaria, Nigeria.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-xl font-bold">Opening Hours</h2>
            <dl className="mt-2 grid grid-cols-2 gap-y-1 text-sm">
              <dt className="text-muted-foreground">Mon – Fri</dt><dd className="font-medium">7:30 AM – 9:00 PM</dd>
              <dt className="text-muted-foreground">Sat – Sun</dt><dd className="font-medium">7:30 AM – 10:00 PM</dd>
            </dl>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+2349055000737" className="btn-hero rounded-md px-5 py-3 text-sm font-semibold">Call +234 905 500 0737</a>
            <a href="https://wa.me/2349055000737" className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent">WhatsApp Us</a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="5G Silver Square location"
              src="https://www.google.com/maps?q=Samaru+Zaria+Sokoto+Road&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h2 className="font-display text-xl font-bold">Send us a message</h2>
          {sent ? (
            <p className="mt-6 rounded-md bg-accent p-4 text-sm text-accent-foreground">Thanks! We'll get back to you shortly.</p>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="mt-4 space-y-4"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input id="name" name="name" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label htmlFor="msg" className="text-sm font-medium">Message</label>
                <textarea id="msg" name="msg" required rows={5} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <button type="submit" className="btn-hero w-full rounded-md px-5 py-3 text-sm font-semibold">Send Message</button>
            </form>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Frequently asked</h2>
        <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {FAQ.map((f) => (
            <details key={f.q} className="group p-5 open:bg-accent/30">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium">
                {f.q}
                <span className="text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
