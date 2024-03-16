import {revalidatePath} from "next/cache";

export const addToCart = (dish, cart, setCart, totalPrice, setTotalPrice) => {

	const existingItem = cart.find(item => item.id === dish.id);

	if (existingItem) {
		const updatedCart = cart.map(item => (
			item.id === dish.id ? {...item, quantity: item.quantity + 1} : item
		));
		setCart(updatedCart);
	} else {

		const updatedCart = [...cart, {...dish, quantity: 1}];
		setCart(updatedCart);
	}

	const newTotalPrice = totalPrice + parseFloat(dish.price.replace('€', '').replace(',', '.'));
	setTotalPrice(newTotalPrice);
};

export const removeFromCart = (dish, cart, setCart, totalPrice, setTotalPrice) => {

	const updatedCart = cart.map(item => (
		item.id === dish.id ? {...item, quantity: item.quantity - 1} : item
	)).filter(item => item.quantity > 0);

	const newTotalPrice = totalPrice - parseFloat(dish.price.replace('€', '').replace(',', '.'));
	setTotalPrice(newTotalPrice);
	setCart(updatedCart);

};