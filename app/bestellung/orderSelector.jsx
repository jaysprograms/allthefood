'use client'
import {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import {addToCart,removeFromCart} from "@/app/bestellung/functions/functions";


export default function OrderSelector({menu}) {
	const router = useRouter()

	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
	const cart = JSON.parse(sessionStorage.getItem('cart'));
	const totalPrice = JSON.parse(sessionStorage.getItem('totalPrice'));
	if (cart) {
		setCart(cart);
	}
	if (totalPrice) {
		setTotalPrice(totalPrice);
	}
	}, [])

	function handleSubmit() {
		sessionStorage.setItem('cart', JSON.stringify(cart))
		sessionStorage.setItem('totalPrice', JSON.stringify(totalPrice))
		router.push('/bestellung/bezahlung')
	}

	return (
		<div className="flex-grow bg-white">
			<div className="relative grid grid-cols-2 items-start">
				<div className="relative grid grid-cols-3">
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
												onClick={() => addToCart(dish, cart, setCart, totalPrice, setTotalPrice)}>+
											</button>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
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
													onClick={() => removeFromCart(item, cart, setCart, totalPrice, setTotalPrice)}>Entfernen
									</button>
								</li>
							))}
						</ul>
					</div>
					{
						(totalPrice !== 0) ?
							(<div className="flex flex-col items-center justify-center">
									<p className="border-t-2 m-3 p-2 font-bold text-xl">Gesamtpreis: {totalPrice} Euro</p>
									<button
										className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 p-3 rounded-3xl m-2 text-white font-bold"
										onClick={handleSubmit}>
										Bestellen
									</button>
								</div>
							) : (
								<div className="flex flex-col items-center">
									<h2>Ihr Warenkorb ist leer.</h2>
									<h2>Fügen Sie Gerichte hinzu!</h2>
								</div>
							)
					}
				</div>

			</div>
		</div>
	)
}