import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/contact.tsx?tsr-split=component
var FAQ = [
	{
		q: "Is parking available?",
		a: "Yes — free on-site parking for all our guests."
	},
	{
		q: "Is it kid friendly?",
		a: "Absolutely. We have a dedicated kids playground and family seating."
	},
	{
		q: "Can I bring a backpack?",
		a: "Security restrictions may apply at the entrance — please cooperate with our staff."
	}
];
function ContactPage() {
	const [sent, setSent] = useState(false);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-[image:var(--gradient-hero)] text-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 py-20 sm:px-6",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-sm font-semibold uppercase tracking-wider text-white/80",
						children: "Contact"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 font-display text-4xl font-extrabold sm:text-6xl",
						children: "Come hang out with us."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-xl text-white/85",
						children: "We're easy to find — and even easier to reach."
					})
				]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-display text-xl font-bold",
							children: "Address"
						}), /* @__PURE__ */ jsxs("p", {
							className: "mt-2 text-muted-foreground",
							children: [
								"Opposite Silver Jubilee Quarters,",
								/* @__PURE__ */ jsx("br", {}),
								"Sokoto Road, Samaru, Zaria, Nigeria."
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-display text-xl font-bold",
							children: "Opening Hours"
						}), /* @__PURE__ */ jsxs("dl", {
							className: "mt-2 grid grid-cols-2 gap-y-1 text-sm",
							children: [
								/* @__PURE__ */ jsx("dt", {
									className: "text-muted-foreground",
									children: "Mon – Fri"
								}),
								/* @__PURE__ */ jsx("dd", {
									className: "font-medium",
									children: "7:30 AM – 9:00 PM"
								}),
								/* @__PURE__ */ jsx("dt", {
									className: "text-muted-foreground",
									children: "Sat – Sun"
								}),
								/* @__PURE__ */ jsx("dd", {
									className: "font-medium",
									children: "7:30 AM – 10:00 PM"
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsx("a", {
							href: "tel:+2349055000737",
							className: "btn-hero rounded-md px-5 py-3 text-sm font-semibold",
							children: "Call +234 905 500 0737"
						}), /* @__PURE__ */ jsx("a", {
							href: "https://wa.me/2349055000737",
							className: "rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent",
							children: "WhatsApp Us"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]",
						children: /* @__PURE__ */ jsx("iframe", {
							title: "5G Silver Square location",
							src: "https://www.google.com/maps?q=Samaru+Zaria+Sokoto+Road&output=embed",
							width: "100%",
							height: "320",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
							className: "block"
						})
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-xl font-bold",
					children: "Send us a message"
				}), sent ? /* @__PURE__ */ jsx("p", {
					className: "mt-6 rounded-md bg-accent p-4 text-sm text-accent-foreground",
					children: "Thanks! We'll get back to you shortly."
				}) : /* @__PURE__ */ jsxs("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
					},
					className: "mt-4 space-y-4",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							htmlFor: "name",
							className: "text-sm font-medium",
							children: "Name"
						}), /* @__PURE__ */ jsx("input", {
							id: "name",
							name: "name",
							required: true,
							className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							htmlFor: "email",
							className: "text-sm font-medium",
							children: "Email"
						}), /* @__PURE__ */ jsx("input", {
							id: "email",
							name: "email",
							type: "email",
							required: true,
							className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							htmlFor: "msg",
							className: "text-sm font-medium",
							children: "Message"
						}), /* @__PURE__ */ jsx("textarea", {
							id: "msg",
							name: "msg",
							required: true,
							rows: 5,
							className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
						})] }),
						/* @__PURE__ */ jsx("button", {
							type: "submit",
							className: "btn-hero w-full rounded-md px-5 py-3 text-sm font-semibold",
							children: "Send Message"
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-3xl px-4 pb-24 sm:px-6",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "font-display text-2xl font-extrabold sm:text-3xl",
				children: "Frequently asked"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card",
				children: FAQ.map((f) => /* @__PURE__ */ jsxs("details", {
					className: "group p-5 open:bg-accent/30",
					children: [/* @__PURE__ */ jsxs("summary", {
						className: "flex cursor-pointer items-center justify-between gap-4 font-medium",
						children: [f.q, /* @__PURE__ */ jsx("span", {
							className: "text-primary transition-transform group-open:rotate-45",
							children: "+"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: f.a
					})]
				}, f.q))
			})]
		})
	] });
}
//#endregion
export { ContactPage as component };
