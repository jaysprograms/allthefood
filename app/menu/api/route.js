import fs from "fs";

export async function GET(req, res) {
	// Gebe das Menü zurück und reduziere den Preis um 2€ für Hauptgerichte zwischen 10 und 14 Uhr
	try {
		const menu = JSON.parse(fs.readFileSync("app/menu/api/menu.json", "utf8"));
		if (isTimeBetween()) {
			reducePrice(menu);
		}
		return new Response(JSON.stringify(menu));
	} catch (error) {
		console.error(error);
		return new Response([], {status: 500});
	}
}

function isTimeBetween() {
	const now = new Date();
	const currentHour = now.getHours();
	return currentHour >= 10 && currentHour < 14;
}

function reducePrice (menu)  {
	menu.forEach((category) => {
		category.dishes.forEach((item) => {
			if (item.category === "Hauptgericht") {
				const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
				item.price = (price - 2) + '€';
			}
		});
	});
}
