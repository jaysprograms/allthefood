import MenuSelector from "@/app/menu/menuSelector";
import MenuSale from "@/app/menu/menuSale";
import menu from "@/app/menu/api/menu.json";

export default async function Menu() {

	if (isTimeBetween()) {
		menu.forEach((category) => {
			category.dishes.forEach((item) => {
				if (item.category === "Hauptgericht") {
					const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
					item.price = (price - 2) + '€';
				}
			});
		});
	}

	return (
		<div className="flex-grow flex flex-col bg-amber-50">
			<div className="sticky top-0 m-auto mb-4">
				<MenuSale/>
			</div>
			<MenuSelector menu={menu}></MenuSelector>

		</div>
	);
};

function isTimeBetween() {
	const now = new Date();
	const currentHour = now.getHours();
	return currentHour >= 10 && currentHour < 14;
}

