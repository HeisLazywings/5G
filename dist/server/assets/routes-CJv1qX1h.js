import { t as vip_lounge_default } from "./vip-lounge-Dyuo60r9.js";
import { t as hero_1_default } from "./hero-1-DnKOnmcv.js";
import { n as suya_default, t as bakery_default } from "./bakery-BXopYCBu.js";
import { n as gamehouse_default, t as barber_default } from "./barber-DKPiPdAT.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/gym.jpg
var gym_default = "/assets/gym-9c-TNxP4.jpg";
//#endregion
//#region src/assets/pitch.jpg
var pitch_default = "/assets/pitch-BtDyi8k9.jpg";
//#endregion
//#region src/assets/playground.jpg
var playground_default = "/assets/playground-DUCxyTVw.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var SLIDES = [
	{
		img: hero_1_default,
		alt: "5G Silver Square at night"
	},
	{
		img: vip_lounge_default,
		alt: "Arabian-style VIP lounge"
	},
	{
		img: pitch_default,
		alt: "5-a-side football pitch under lights"
	}
];
var SERVICES = [
	{
		title: "Restaurant & Bakery",
		desc: "Fresh meat pies, pizzas, jollof and more — baked and served daily.",
		img: bakery_default
	},
	{
		title: "Gym & Fitness Center",
		desc: "Modern equipment, trainers and energy for every fitness level.",
		img: gym_default
	},
	{
		title: "Game House & Pool",
		desc: "Pool tables, arcade games and chill vibes with friends.",
		img: gamehouse_default
	},
	{
		title: "5-a-Side Football Pitch",
		desc: "Floodlit turf for daytime and nighttime matches.",
		img: pitch_default
	},
	{
		title: "Barbershop",
		desc: "Premium cuts and grooming in a relaxed setting.",
		img: barber_default
	},
	{
		title: "Suya Spot",
		desc: "Sizzling, spicy Nigerian suya straight off the grill.",
		img: suya_default
	},
	{
		title: "Kids Playground",
		desc: "Safe, dedicated play area so the whole family can hang.",
		img: playground_default
	}
];
function Index() {
	const [i, setI] = useState(0);
	useEffect(() => {
		const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5e3);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative isolate overflow-hidden",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 -z-10",
				children: [SLIDES.map((s, idx) => /* @__PURE__ */ jsx("img", {
					src: s.img,
					alt: s.alt,
					width: 1920,
					height: 1080,
					className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`
				}, s.img)), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex min-h-[88dvh] max-w-7xl flex-col items-start justify-center px-4 py-24 sm:px-6",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md",
						children: "The Ultimate Hangout · Zaria"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl md:text-7xl animate-fade-in",
						children: ["Everything You Need ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient",
							children: "In One Place"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 max-w-xl text-base text-white/85 sm:text-lg",
						children: "Restaurant, bakery, gym, game house, football pitch, barbershop, suya and a kids playground — all under one roof on Sokoto Road, Samaru."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/order",
							className: "btn-hero rounded-md px-6 py-3 text-sm font-semibold sm:text-base",
							children: "Order Food"
						}), /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:text-base",
							children: "Visit Today"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10 flex gap-2",
						children: SLIDES.map((_, idx) => /* @__PURE__ */ jsx("button", {
							onClick: () => setI(idx),
							"aria-label": `Show slide ${idx + 1}`,
							className: `h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-4 bg-white/40"}`
						}, idx))
					})
				]
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: "What we offer"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-2 font-display text-3xl font-extrabold sm:text-5xl",
						children: "One destination. Endless reasons to stay."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-muted-foreground",
						children: "From a quick suya to a full family day out — built for ABU students, families, young professionals and fitness lovers."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: SERVICES.map((s) => /* @__PURE__ */ jsxs("article", {
					className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1",
					children: [/* @__PURE__ */ jsx("div", {
						className: "aspect-[4/3] overflow-hidden",
						children: /* @__PURE__ */ jsx("img", {
							src: s.img,
							alt: s.title,
							loading: "lazy",
							width: 1280,
							height: 896,
							className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-5",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-display text-lg font-bold",
							children: s.title
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: s.desc
						})]
					})]
				}, s.title))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "relative isolate overflow-hidden bg-[image:var(--gradient-hero)] text-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-extrabold sm:text-4xl",
					children: "Hungry? We deliver."
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-white/85",
					children: "Order on WhatsApp or call us directly. Hot, fresh, fast."
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ jsx("a", {
						href: "https://wa.me/2349055000737",
						className: "rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5",
						children: "WhatsApp Order"
					}), /* @__PURE__ */ jsx("a", {
						href: "tel:+2349055000737",
						className: "rounded-md border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10",
						children: "Call +234 905 500 0737"
					})]
				})]
			})
		})
	] });
}
//#endregion
export { Index as component };
