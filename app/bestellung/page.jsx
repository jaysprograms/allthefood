import MenuSale from "@/app/menu/menuSale";
import {getMenu} from "@/app/components/functions/helper";
import Cart from "@/app/bestellung/Cart";

export default async function Order() {
	let menu;
	try {
		menu = await getMenu();
	} catch (error) {
		console.error(error);
		return <div>Es ist ein Fehler aufgetreten</div>;
	}

	return (
		<div className="flex-grow bg-white">
			<div className="col-span-1 flex flex-col">
				<Cart menu={menu}/>
			</div>
		</div>
	);
};