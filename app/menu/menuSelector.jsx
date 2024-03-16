'use client'
import {useState, useEffect} from "react";

export default function MenuSelector({menu}) {
	const [selectedCountry, setSelectedCountry] = useState(menu[0]?.country);
	const handleCountryChange = (country) => {
		setSelectedCountry(country);
	};
	const selectedCountryMenu = menu.find(item => item.country === selectedCountry);

	return (
		<div className="bg-white ">
			<div className="flex flex-col md:flex-row justify-center">
				{menu.map((item) => (
					<button
						key={item.country}
						onClick={() => handleCountryChange(item.country)}
						className={`mx-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 font-bold rounded-full ${
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
								<span className="text-right font-bold text-green-600">{item.price}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

