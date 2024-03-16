'use client'

import {useEffect, useState} from "react";
import {removeFromCart} from "@/app/bestellung/functions/functions";
import {useRouter} from "next/navigation";

export default function PayCart({handleSubmit}) {
	const router = useRouter();

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
	}, []);

	const handleBack = () => {
		sessionStorage.setItem('cart', JSON.stringify(cart));
		sessionStorage.setItem('totalPrice', JSON.stringify(totalPrice));
		router.back();

		//router.push('/bestellung')
	}



	return (
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
						</div>
					) : (
						<h2>Ihr Warenkorb ist leer</h2>
					)
			}
			<button
				className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 p-3 rounded-3xl m-2 text-white font-bold mt-3"
				onClick={handleBack}>
				Zurück
			</button>
		</div>
	)
}