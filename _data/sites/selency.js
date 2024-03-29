module.exports = {
	name: "Selency", // optional, falls back to object key
	description: "Selency audits",
	options: {
		frequency: !process.env.CONTEXT ? 10 : 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://www.selency.fr/",
		"https://www.selency.co.uk/",
		"https://www.selency.fr/meubles.html",
		"https://www.selency.fr/produit/D6R5GU3W/pouf-berbere.html",
	]
};
