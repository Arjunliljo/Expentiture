// routes
export const routes = {
	home: "/",
	about: {
		title: "About Us",
		url: "/about-us",
	},
	expedite: {
		title: "Why Expedite Consults?",
		url: "/why-expedite",
	},
	services: "/services",
	insight: {
		title: "Insight",
		url: "/insight",
	},
	incidentResponse: "/incident-response",
	legal: "/legal",
	contact: {
		title: "Contact Us",
		url: "/contact-us",
	},
};

export const subroutes = {
	about: [
		{
			title: "About Us (Overview)",
			url: routes.about.url,
		},
		{
			title: "Why Expedite Consults?",
			url: routes.expedite.url,
		},
	],
	insight: [
		{
			title: "Blogs",
			url: routes.insight.url + "/blogs",
		},

		{
			title: "News",
			url: routes.insight.url + "/news",
		},
		// {
		// 	title: "Case Studies",
		// 	url: routes.insight.url + "/case-studies",
		// },
	],
};
