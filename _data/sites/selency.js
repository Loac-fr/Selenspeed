module.exports = {
	name: "Selency", // optional, falls back to object key
	description: "Selency audits",
	options: {
		frequency: !process.env.CONTEXT ? 10 : 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://www.selency.fr/",
		"https://www.selency.fr/meubles.html",
		"https://www.selency.fr/nouveaux-produits.html",
		"https://www.selency.fr/produit/87HPRFFB/commode-style-regence.html",
		"https://www.selency.fr/produit/XVWGZ7ZZ/plat-carre-faience-de-gien-decor-pivoine.html",
		"https://www.selency.fr/selections/design",
		"https://www.selency.fr/designers/aalto-alvar.html",
		"https://www.selency.fr/page/nos-engagements"
	]
};
