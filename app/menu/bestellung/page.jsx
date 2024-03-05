'use client'
import {useState} from 'react';
import menu from "@/app/menu/api/menu.json";
import Bezahlung from "@/app/menu/bestellung/bezahlen";

export default function Bestellung() {
	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [zahlen, setZahlen] = useState(false);

	if (isTimeBetween()) {
		menu.forEach((item) => {
			item.dishes.forEach((dish) => {
				if (dish.category === "Hauptgericht") {
					const price = parseFloat(dish.price.replace('€', '').replace(',', '.'));
					dish.price = (price - 2) + '€';
				}
			});
		});
	}

	const addToCart = (dish) => {
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

	const removeFromCart = (dish) => {
		// Reduziere die Menge im Warenkorb
		const updatedCart = cart.map(item => (
			item.id === dish.id ? {...item, quantity: item.quantity - 1} : item
		)).filter(item => item.quantity > 0);

		// Aktualisiere den Gesamtpreis
		setTotalPrice(totalPrice - parseFloat(dish.price.replace('€', '').replace(',', '.')));

		// Aktualisiere den Warenkorb
		setCart(updatedCart);
	};

	return (
		<div className="flex-grow bg-amber-50">
			<div className="relative grid grid-cols-2 bg-amber-50 items-start">
				<div className="relative grid grid-cols-3 bg-amber-50">
					{!zahlen &&
						<div className="grid grid-cols-3 col-span-3">
							{menu.map((item) => (
								<div key={item.country} className="flex flex-col items-center col-span-1">
									<h2 className="font-bold text-2xl">{item.country}</h2>
									<ul>
										{item.dishes.map(dish => (
											<li key={dish.id} className="flex flex-col items-center p-4">
												<h3>{dish.name}</h3>
												<span className="text-green-500">{dish.price}</span>
												<button
													className="bg-green-500 text-white px-2 py-1 rounded-md ml-2 hover:bg-green-400 active:bg-green-600"
													onClick={() => addToCart(dish)}>+
												</button>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					}
				</div>
				<div className="sticky flex flex-col top-4 col-start-2 col-span-1 items-center">
					<h2 className="font-bold mb-2 text-2xl">Warenkorb</h2>
					<div className="flex flex-col items-center p-4 overflow-y-auto max-h-[50vh]">
						<ul>
							{cart.map(item => (
								<li key={item.id} className="flex flex-col items-center p-4">
									<h3 className="text-center font-bold">{item.name}</h3>
									<span>{item.price} | Menge: {item.quantity}</span>
									<button className="border-t-2 hover:text-gray-400 active:text-black"
													onClick={() => removeFromCart(item)}>Entfernen
									</button>
								</li>
							))}
						</ul>
					</div>
					{
						(totalPrice !== 0) &&
						(<div className="flex flex-col items-center justify-center">
							<p className="border-t-2 m-3 p-2 font-bold text-xl">Gesamtpreis: {totalPrice} Euro</p>
							{!zahlen ? (
									<button
										className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 p-3 rounded-3xl m-2 text-white font-bold"
										onClick={() => setZahlen(true)}>
										Bestellen
									</button>)
								: (
									<button
										className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 p-3 rounded-3xl m-2 text-white font-bold"
										onClick={() => setZahlen(false)}>
										Zurück
									</button>
								)
							}
						</div>)
					}
				</div>
				{zahlen && <Bezahlung/>}
			</div>
		</div>
	)
}

function isTimeBetween() {
	const now = new Date();
	const currentHour = now.getHours();
	return currentHour >= 10 && currentHour < 14;
}