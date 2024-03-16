'use client'

import {useEffect, useState} from "react";

export default function Erfolgreich() {
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
	return (
		<div className="flex-grow grid grid-cols-2">
			<div className="col-span-1 flex flex-col items-center justify-center font-bold">
				<h1 className="text-3xl">Vielen Dank für Ihre Bestellung!</h1>
				<h2 className="text-2xl">Wir haben Ihre Bestellung erhalten und werden diese umgehend bearbeiten.</h2>
				<p className="">Wir wünschen einen guten Appetit und freuen uns auf Ihren nächsten Besuch oder Ihre nächste Bestellung!</p>
			</div>
			<div className="col-span-1 flex flex-col items-center justify-center">
				<h2 className="font-bold mb-2 text-2xl">Ihre Bestellung</h2>
				<div className="flex flex-col items-center p-4 overflow-y-auto max-h-[50vh]">
					<ul>
						{cart.map(item => (
							<li key={item.id} className="flex flex-col items-center p-4">
								<h3 className="text-center font-bold">{item.name}</h3>
								<span>{item.price} | Menge: {item.quantity}</span>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="border-t-2 m-3 p-2 font-bold text-xl">Gesamtpreis: {totalPrice} Euro</p>
				</div>
			</div>


		</div>
	)
}