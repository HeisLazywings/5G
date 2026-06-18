import { n as suya_default, t as bakery_default } from "./bakery-BXopYCBu.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/menu.tsx?tsr-split=component
var CATEGORIES = [
	{
		name: "Bakery",
		items: [
			{
				name: "Meat Pie",
				desc: "Flaky pastry, seasoned beef filling."
			},
			{
				name: "Sausage Roll",
				desc: "Golden, savoury, freshly baked."
			},
			{
				name: "Donut",
				desc: "Soft, sweet, dusted to perfection."
			},
			{
				name: "Croissant",
				desc: "Buttery, layered, French-style."
			},
			{
				name: "Marble Cake",
				desc: "Vanilla & chocolate swirl."
			}
		]
	},
	{
		name: "Fast Food",
		items: [
			{
				name: "Pepperoni Pizza",
				desc: "Stone-baked with melted cheese."
			},
			{
				name: "Chicken Shawarma",
				desc: "Grilled chicken, sauces, soft wrap."
			},
			{
				name: "Beef Shawarma",
				desc: "Tender beef, fresh veggies."
			},
			{
				name: "Burgers",
				desc: "Juicy patty, classic sides."
			}
		]
	},
	{
		name: "Main Meals",
		items: [
			{
				name: "Stir Fry Pasta",
				desc: "Wok-tossed with sauce and veggies."
			},
			{
				name: "Jollof Rice",
				desc: "Smoky, spicy Nigerian classic."
			},
			{
				name: "Fried Rice",
				desc: "Loaded with mixed vegetables."
			},
			{
				name: "Grilled Chicken",
				desc: "Marinated, charred, juicy."
			}
		]
	},
	{
		name: "Drinks",
		items: [
			{
				name: "Banana Smoothie",
				desc: "Creamy, refreshing, chilled."
			},
			{
				name: "Mocktails",
				desc: "Signature non-alcoholic blends."
			},
			{
				name: "Zobo",
				desc: "Spiced hibiscus refresher."
			},
			{
				name: "Lebanese Tea",
				desc: "Aromatic, traditional brew."
			}
		]
	}
];
function MenuPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden bg-[image:var(--gradient-hero)] text-white",
		children: [/* @__PURE__ */ jsx("img", {
			src: bakery_default,
			alt: "",
			"aria-hidden": true,
			className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 py-20 sm:px-6",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-sm font-semibold uppercase tracking-wider text-white/80",
					children: "Menu"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-2 font-display text-4xl font-extrabold sm:text-6xl",
					children: "Taste the best of Zaria"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 max-w-xl text-white/85",
					children: "Freshly baked, freshly grilled, freshly poured — every single day."
				})
			]
		})]
	}), /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-7xl px-4 py-16 sm:px-6",
		children: [CATEGORIES.map((cat) => /* @__PURE__ */ jsxs("div", {
			className: "mb-14",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-end justify-between gap-4 border-b border-border pb-3",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-2xl font-extrabold sm:text-3xl",
					children: cat.name
				}), /* @__PURE__ */ jsxs("span", {
					className: "text-xs uppercase tracking-wider text-muted-foreground",
					children: [cat.items.length, " items"]
				})]
			}), /* @__PURE__ */ jsx("ul", {
				className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: cat.items.map((it) => /* @__PURE__ */ jsxs("li", {
					className: "rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-lg font-bold",
						children: it.name
					}), it.desc && /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: it.desc
					})]
				}, it.name))
			})]
		}, cat.name)), /* @__PURE__ */ jsxs("div", {
			className: "mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-secondary/60 p-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ jsx("img", {
					src: suya_default,
					alt: "",
					className: "h-14 w-14 rounded-lg object-cover"
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "font-display text-lg font-bold",
					children: "Hungry already?"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground",
					children: "Order on WhatsApp — delivered fresh and fast."
				})] })]
			}), /* @__PURE__ */ jsx("a", {
				href: "https://wa.me/2349055000737",
				className: "btn-hero rounded-md px-5 py-2.5 text-sm font-semibold",
				children: "Order on WhatsApp"
			})]
		})]
	})] });
}
//#endregion
export { MenuPage as component };
