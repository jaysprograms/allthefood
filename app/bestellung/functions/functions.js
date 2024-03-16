export const addToCart = (dish, cart, setCart, totalPrice, setTotalPrice) => {
	// Überprüfen, ob das Gericht bereits im Warenkorb ist
	const existingItem = cart.find(item => item.id === dish.id);

	if (existingItem) {
		// Wenn das Gericht bereits im Warenkorb ist, erhöhe nur die Menge
		const updatedCart = cart.map(item => (
			item.id === dish.id ? {...item, quantity: item.quantity + 1} : item
		));
		setCart(updatedCart);
	} else {
		// Wenn das Gericht nicht im Warenkorb ist, füge es hinzu
		const updatedCart = [...cart, {...dish, quantity: 1}];
		setCart(updatedCart);
	}

	// Aktualisiere den Gesamtpreis
	setTotalPrice(totalPrice + parseFloat(dish.price.replace('€', '').replace(',', '.')));
};

export const removeFromCart = (dish, cart, setCart, totalPrice, setTotalPrice) => {
	// Reduziere die Menge im Warenkorb
	const updatedCart = cart.map(item => (
		item.id === dish.id ? {...item, quantity: item.quantity - 1} : item
	)).filter(item => item.quantity > 0);

	// Aktualisiere den Gesamtpreis
	setTotalPrice(totalPrice - parseFloat(dish.price.replace('€', '').replace(',', '.')));

	// Aktualisiere den Warenkorb
	setCart(updatedCart);
};