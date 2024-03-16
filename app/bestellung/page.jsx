import OrderSelector from "@/app/bestellung/orderSelector";
import {getMenu, isTimeBetween, reducePrice} from "@/app/components/functions/helper";
import {addToCart, removeFromCart} from "@/app/bestellung/functions/functions";

export default async function Bestellung() {
	let menu;
	try {
		menu = await getMenu();
	} catch (error) {
		console.error(error);
		return <div>Es ist ein Fehler aufgetreten</div>;
	}

	return (
		<OrderSelector menu={menu}/>
	)
}


