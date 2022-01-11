module.exports = {
	name: "SelencyLocal", // optional, falls back to object key
	description: "Selency local audits",
  skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: !process.env.CONTEXT ? 10 : 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://www.selency.fr/",
		"https://www.selency.fr/meubles.html",
		"https://www.selency.fr/nouveaux-produits.html",
		"https://www.selency.fr/produit/APJA46W9/commode-annees-50.html",
		"https://www.selency.fr/produit/XVWGZ7ZZ/plat-carre-faience-de-gien-decor-pivoine.html",
		"https://www.selency.fr/selections/design",
		"https://www.selency.fr/designers/aalto-alvar.html",
		"https://www.selency.fr/page/nos-engagements"
	]
};
