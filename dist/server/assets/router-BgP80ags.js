import { t as vip_lounge_default } from "./vip-lounge-Dyuo60r9.js";
import { t as hero_1_default } from "./hero-1-DnKOnmcv.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-CgySeUlu.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "5G Silver Square — The Ultimate Hangout Spot in Zaria" },
			{
				name: "description",
				content: "Restaurant, bakery, gym, game house, football pitch, barbershop, suya & kids playground — all in one premium spot on Sokoto Road, Samaru, Zaria."
			},
			{
				name: "author",
				content: "5G Silver Square"
			},
			{
				name: "theme-color",
				content: "#dc2626"
			},
			{
				property: "og:title",
				content: "5G Silver Square — The Ultimate Hangout Spot in Zaria"
			},
			{
				property: "og:description",
				content: "Everything you need in one place. Food, fitness, fun & family."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "5G Silver Square"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsx(Outlet, {}) })
	});
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-dvh flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(SiteHeader, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ jsx(SiteFooter, {})
		]
	});
}
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/vip-lounge",
		label: "VIP Lounge"
	},
	{
		to: "/order",
		label: "Order"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = useState(false);
	const [dark, setDark] = useState(false);
	useEffect(() => {
		const saved = typeof window !== "undefined" && localStorage.getItem("theme") === "dark";
		setDark(saved);
		document.documentElement.classList.toggle("dark", saved);
	}, []);
	const toggleDark = () => {
		const next = !dark;
		setDark(next);
		document.documentElement.classList.toggle("dark", next);
		localStorage.setItem("theme", next ? "dark" : "light");
	};
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2",
					"aria-label": "5G Silver Square home",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-extrabold",
						children: "5G"
					}), /* @__PURE__ */ jsx("span", {
						className: "hidden font-display text-base font-bold tracking-tight sm:inline",
						children: "Silver Square"
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Primary",
					children: NAV.map((n) => /* @__PURE__ */ jsx(Link, {
						to: n.to,
						activeOptions: { exact: n.to === "/" },
						className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground",
						activeProps: { className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-accent" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: toggleDark,
							"aria-label": "Toggle dark mode",
							className: "grid h-9 w-9 place-items-center rounded-md border border-border text-foreground/80 transition-colors hover:bg-accent",
							children: dark ? "☀" : "☾"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/order",
							className: "hidden btn-hero rounded-md px-4 py-2 text-sm font-semibold sm:inline-flex",
							children: "Order Now"
						}),
						/* @__PURE__ */ jsxs("button", {
							onClick: () => setOpen((v) => !v),
							"aria-label": "Toggle menu",
							"aria-expanded": open,
							className: "grid h-9 w-9 place-items-center rounded-md border border-border md:hidden",
							children: [/* @__PURE__ */ jsx("span", {
								className: "sr-only",
								children: "Menu"
							}), /* @__PURE__ */ jsx("svg", {
								width: "18",
								height: "18",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								children: /* @__PURE__ */ jsx("path", { d: open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18" })
							})]
						})
					]
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "border-t border-border/60 bg-background md:hidden",
			children: /* @__PURE__ */ jsxs("nav", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3",
				"aria-label": "Mobile",
				children: [NAV.map((n) => /* @__PURE__ */ jsx(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-2 text-base font-medium hover:bg-accent",
					children: n.label
				}, n.to)), /* @__PURE__ */ jsx(Link, {
					to: "/order",
					onClick: () => setOpen(false),
					className: "btn-hero mt-2 rounded-md px-3 py-2.5 text-center text-sm font-semibold",
					children: "Order Now"
				})]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "mt-16 border-t border-border bg-secondary/50",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-extrabold",
							children: "5G"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-display text-lg font-bold",
							children: "Silver Square"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-md text-sm text-muted-foreground",
						children: "The Ultimate Hangout Spot in Zaria. Food, fitness, fun & family — all in one premium destination on Sokoto Road, Samaru."
					})]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "font-display text-sm font-bold uppercase tracking-wider",
					children: "Explore"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: NAV.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: n.to,
						className: "text-muted-foreground hover:text-primary",
						children: n.label
					}) }, n.to))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "font-display text-sm font-bold uppercase tracking-wider",
					children: "Contact"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsxs("li", { children: [
							"Opposite Silver Jubilee Quarters,",
							/* @__PURE__ */ jsx("br", {}),
							"Sokoto Road, Samaru, Zaria"
						] }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "tel:+2349055000737",
							className: "hover:text-primary",
							children: "+234 905 500 0737"
						}) }),
						/* @__PURE__ */ jsx("li", { children: "Mon–Fri: 7:30 AM – 9:00 PM" }),
						/* @__PURE__ */ jsx("li", { children: "Sat–Sun: 7:30 AM – 10:00 PM" })
					]
				})] })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "border-t border-border py-5 text-center text-xs text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" 5G Silver Square. All rights reserved."
			]
		})]
	});
}
//#endregion
//#region src/routes/vip-lounge.tsx
var $$splitComponentImporter$4 = () => import("./vip-lounge-BytQKyNf.js");
var Route$4 = createFileRoute("/vip-lounge")({
	head: () => ({
		meta: [
			{ title: "VIP Lounge — 5G Silver Square Zaria" },
			{
				name: "description",
				content: "Arabian-style private dining and seating with premium service at 5G Silver Square, Zaria."
			},
			{
				property: "og:title",
				content: "VIP Lounge — 5G Silver Square"
			},
			{
				property: "og:description",
				content: "Arabian-style seating, private dining, family-friendly premium service."
			},
			{
				property: "og:image",
				content: vip_lounge_default
			},
			{
				property: "og:url",
				content: "/vip-lounge"
			}
		],
		links: [{
			rel: "canonical",
			href: "/vip-lounge"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/order.tsx
var $$splitComponentImporter$3 = () => import("./order-BabL6OBs.js");
var Route$3 = createFileRoute("/order")({
	head: () => ({
		meta: [
			{ title: "Order & Delivery — 5G Silver Square" },
			{
				name: "description",
				content: "Order food from 5G Silver Square via WhatsApp or phone. Fast delivery within Samaru, Zaria."
			},
			{
				property: "og:title",
				content: "Order & Delivery — 5G Silver Square"
			},
			{
				property: "og:description",
				content: "Order via WhatsApp or call +234 905 500 0737."
			},
			{
				property: "og:url",
				content: "/order"
			}
		],
		links: [{
			rel: "canonical",
			href: "/order"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/menu.tsx
var $$splitComponentImporter$2 = () => import("./menu-GiQmsTiC.js");
var Route$2 = createFileRoute("/menu")({
	head: () => ({
		meta: [
			{ title: "Menu — 5G Silver Square Zaria" },
			{
				name: "description",
				content: "Bakery, fast food, main meals and refreshing drinks at 5G Silver Square, Samaru, Zaria."
			},
			{
				property: "og:title",
				content: "Our Menu — 5G Silver Square"
			},
			{
				property: "og:description",
				content: "Meat pies, shawarma, jollof, smoothies and more."
			},
			{
				property: "og:url",
				content: "/menu"
			}
		],
		links: [{
			rel: "canonical",
			href: "/menu"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$1 = () => import("./contact-CEwcHJIs.js");
var Route$1 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — 5G Silver Square Zaria" },
			{
				name: "description",
				content: "Visit 5G Silver Square opposite Silver Jubilee Quarters, Sokoto Road, Samaru, Zaria. Call, WhatsApp or send a message."
			},
			{
				property: "og:title",
				content: "Contact — 5G Silver Square"
			},
			{
				property: "og:description",
				content: "Address, hours, map and contact form."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-CJv1qX1h.js");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "5G Silver Square — The Ultimate Hangout Spot in Zaria" },
			{
				name: "description",
				content: "Restaurant, bakery, gym, game house, 5-a-side pitch, barbershop, suya & kids playground — everything you need in one premium spot in Samaru, Zaria."
			},
			{
				property: "og:title",
				content: "5G Silver Square — Zaria"
			},
			{
				property: "og:description",
				content: "Everything you need in one place. Food, fitness, fun & family."
			},
			{
				property: "og:image",
				content: hero_1_default
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Restaurant",
				name: "5G Silver Square",
				image: hero_1_default,
				address: {
					"@type": "PostalAddress",
					streetAddress: "Opposite Silver Jubilee Quarters, Sokoto Road",
					addressLocality: "Samaru, Zaria",
					addressCountry: "NG"
				},
				telephone: "+2349055000737",
				servesCuisine: [
					"Nigerian",
					"Fast Food",
					"Bakery"
				]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var VipLoungeRoute = Route$4.update({
	id: "/vip-lounge",
	path: "/vip-lounge",
	getParentRoute: () => Route$5
});
var OrderRoute = Route$3.update({
	id: "/order",
	path: "/order",
	getParentRoute: () => Route$5
});
var MenuRoute = Route$2.update({
	id: "/menu",
	path: "/menu",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$1.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	ContactRoute,
	MenuRoute,
	OrderRoute,
	VipLoungeRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
