import { t as vip_lounge_default } from "./vip-lounge-Dyuo60r9.js";
import { n as suya_default, t as bakery_default } from "./bakery-BXopYCBu.js";
import { n as gamehouse_default, t as barber_default } from "./barber-DKPiPdAT.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/vip-lounge.tsx?tsr-split=component
var FEATURES = [
	{
		title: "Arabian-Style Seating",
		desc: "Plush red velvet majlis, ornate brass tables and warm lantern light."
	},
	{
		title: "Private Dining",
		desc: "Discreet rooms for celebrations, business meetings and intimate gatherings."
	},
	{
		title: "Family-Friendly",
		desc: "Children welcome — comfortable enough for the whole family to enjoy."
	},
	{
		title: "Premium Service",
		desc: "Personal hosts, curated menu and attention to every detail."
	}
];
var GALLERY = [
	vip_lounge_default,
	bakery_default,
	suya_default,
	barber_default,
	gamehouse_default
];
function VipPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative isolate overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: vip_lounge_default,
					alt: "Arabian-style VIP lounge interior",
					className: "absolute inset-0 -z-10 h-full w-full object-cover"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80" }),
				/* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 py-24 sm:px-6",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-sm font-semibold uppercase tracking-wider text-white/80",
							children: "VIP Lounge"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-2 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-6xl",
							children: "An Arabian escape in the heart of Zaria."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 max-w-xl text-white/85",
							children: "Settle into rich velvet seating, savour bespoke service, and make every visit unforgettable."
						}),
						/* @__PURE__ */ jsx("a", {
							href: "https://wa.me/2349055000737?text=I'd%20like%20to%20reserve%20the%20VIP%20Lounge",
							className: "btn-hero mt-8 inline-flex rounded-md px-6 py-3 text-sm font-semibold",
							children: "Reserve on WhatsApp"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid gap-6 sm:grid-cols-2",
				children: FEATURES.map((f) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-xl font-bold",
						children: f.title
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: f.desc
					})]
				}, f.title))
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-4 pb-20 sm:px-6",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "font-display text-2xl font-extrabold sm:text-3xl",
				children: "Gallery"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-6 grid grid-cols-2 gap-3 md:grid-cols-3",
				children: GALLERY.map((src, i) => /* @__PURE__ */ jsx("div", {
					className: `overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2" : ""}`,
					children: /* @__PURE__ */ jsx("img", {
						src,
						alt: `VIP lounge photo ${i + 1}`,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-500 hover:scale-110"
					})
				}, i))
			})]
		})
	] });
}
//#endregion
export { VipPage as component };
