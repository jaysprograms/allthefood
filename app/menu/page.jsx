import MenuSelector from "@/app/menu/menuSelector";
import MenuSale from "@/app/menu/menuSale";
import {getMenu} from "@/app/components/functions/helper";
export default async function Menu() {
	let menu;
	try {
		menu = await getMenu();
	} catch (error) {
		console.error(error);
		return <div>Es ist ein Fehler aufgetreten</div>;
	}

	return (
		<div className="flex-grow flex flex-col bg-white">
			<div className="xl:absolute bottom-0 right-20 m-auto mb-4">
				<MenuSale/>
			</div>
			<div className="flex justify-center m-auto">
			<MenuSelector menu={menu}></MenuSelector>
			</div>

		</div>
	);
};


