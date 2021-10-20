module.exports = {
	name: "Selency", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://www.selency.fr/",
		"https://www.selency.fr/meubles.html",
		"https://www.selency.fr/produit/PV4JH5U1/commode-scandinave-vintage.html"
	]
};
