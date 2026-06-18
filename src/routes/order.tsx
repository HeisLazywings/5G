import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order & Delivery — 5G Silver Square" },
      { name: "description", content: "Order food from 5G Silver Square via WhatsApp or phone. Fast delivery within Samaru, Zaria." },
      { property: "og:title", content: "Order & Delivery — 5G Silver Square" },
      { property: "og:description", content: "Order via WhatsApp or call +234 905 500 0737." },
      { property: "og:url", content: "/order" },
    ],
    links: [{ rel: "canonical", href: "/order" }],
  }),
  component: OrderPage,
});

function OrderPage() {
  return (
    <>
      <section className="bg-[image:var(--gradient-hero)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">Order & Delivery</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-6xl">Hot, fresh & delivered fast.</h1>
          <p className="mt-3 max-w-xl text-white/85">Two easy ways to order — WhatsApp is fastest, but we always pick up the phone.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2">
        <a
          href="https://wa.me/2349055000737?text=Hi%205G%20Silver%20Square%2C%20I'd%20like%20to%20place%20an%20order."
          className="group rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
        >
          <div className="grid h-14 w-14 place-items-center rounded-xl bg-[#25D366] text-white">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.5 3.5A11.9 11.9 0 0 0 3.2 18.4L2 22l3.7-1.2A11.9 11.9 0 1 0 20.5 3.5Zm-8.5 18a9.5 9.5 0 0 1-4.8-1.3l-.4-.2-2.2.7.7-2.2-.2-.4A9.5 9.5 0 1 1 12 21.5Zm5.4-7.1c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.1-.8.9-1 1.1-.4.2-.7.1a7.7 7.7 0 0 1-3.8-3.3c-.3-.5.3-.5.8-1.5a.5.5 0 0 0 0-.5c-.1-.1-.7-1.6-.9-2.2s-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.3 3.3 0 0 0-1 2.5c0 1.5 1.1 2.9 1.2 3.1s2.1 3.2 5.1 4.5a17 17 0 0 0 1.7.6 4 4 0 0 0 1.9.1 3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.3Z"/></svg>
          </div>
          <h2 className="mt-5 font-display text-2xl font-extrabold">Order on WhatsApp</h2>
          <p className="mt-2 text-muted-foreground">Tap to chat with us. Share your order and address — we'll handle the rest.</p>
          <span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary group-hover:gap-3 transition-all">Open WhatsApp →</span>
        </a>

        <a
          href="tel:+2349055000737"
          className="group rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
        >
          <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-primary-foreground">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
          </div>
          <h2 className="mt-5 font-display text-2xl font-extrabold">Call to Order</h2>
          <p className="mt-2 text-muted-foreground">Prefer to talk? Our team is on the line every day during open hours.</p>
          <span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary group-hover:gap-3 transition-all">+234 905 500 0737 →</span>
        </a>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl border border-border bg-secondary/60 p-8">
          <h2 className="font-display text-2xl font-extrabold">Delivery Information</h2>
          <ul className="mt-4 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
            <li>✓ Delivery available within Samaru and surrounding Zaria areas.</li>
            <li>✓ Average delivery time: 30–45 minutes.</li>
            <li>✓ Delivery fee depends on distance — confirmed at order.</li>
            <li>✓ Cash and bank transfer accepted on delivery.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
