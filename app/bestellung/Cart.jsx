'use client'
import {addToCart, removeFromCart} from "@/app/bestellung/functions/functions";
import {useRouter} from "next/navigation";
import {useState, useEffect} from "react";

export default function Cart({menu}) {
	const router = useRouter()

	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [selectedCountry, setSelectedCountry] = useState(menu[0]?.country);
	const handleCountryChange = (country) => {
		setSelectedCountry(country);
	};
	const selectedCountryMenu = menu.find(item => item.country === selectedCountry);


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
		<div className="grid grid-cols-2">
			<div className="bg-white col-span-1">
				<div className="flex flex-col md:flex-row justify-center flex-wrap">
					{menu.map((item) => (
						<button
							key={item.country}
							onClick={() => handleCountryChange(item.country)}
							className={`mx-2 mt-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 font-bold rounded-full ${
								selectedCountry === item.country ? 'text-black' : 'text-white'
							}`}
						>
							{item.country}
						</button>
					))}
				</div>
				<div className="p-8">
					<div className="container mx-auto">
						<h1 className="text-4xl font-bold mb-8">Unser Menü</h1>
						<div className="flex flex-wrap -mx-4">
							{selectedCountryMenu.dishes.map((item, index) => (
								<div key={item.id} className="mb-6 px-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
									<h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
									<p className="text-gray-600 mb-2">{item.description}</p>
									<p className="font-bold text-green-600">
										{item.price}
										<button
											className="bg-green-500 text-white px-2 py-1 rounded-md ml-2 hover:bg-green-400 active:bg-green-600"
											onClick={() => addToCart(item, cart, setCart, totalPrice, setTotalPrice)}>+
										</button>
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="sticky flex flex-col top-4 col-start-2 col-span-1 items-center h-fit">
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
	)
}