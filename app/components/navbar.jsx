'use client'
import Link from "next/link"
import Image from "next/image";
import icon from "../icon.png"

export default function Navbar() {


	return (
		<header className="bg-amber-50 p-4">
			<nav className="flex items-center justify-between">
				<div className="flex items-center justify-center">
					<Link href="/" className="text-cyan-950 text-lg font-bold flex items-center justify-between">
						<Image src={icon} alt="AllTheFood Icon" className="w-10"/>
						AllTheFood
					</Link>
				</div>

				{/* Dropdown-Menü für kleine Bildschirme */}

					<div className="flex items-center sm:hidden">
						<button className="text-black hover:text-gray-300 focus:outline-none">
							&#9776; {/* Hamburger-Symbol */}
						</button>
						<div className="hidden absolute right-0 mt-2 bg-white rounded-md shadow-lg">
							<div className="p-2">
								<Link href="/menu" className="block text-black hover:text-gray-300">
									Zum Menü
								</Link>
								<Link href="/menu/bestellung" className="block text-black hover:text-gray-300">
									Zur Bestellung
								</Link>
								<Link href="/standort" className="block text-black hover:text-gray-300">
									Hier finden Sie uns
								</Link>
								<Link href="/reservierung" className="block text-black hover:text-gray-300">
									Tisch reservieren
								</Link>
							</div>
						</div>
					</div>

					<div className="flex items-center space-x-4 flex-grow mx-8 max-sm:hidden">
						<Link href="/menu" className="text-black hover:text-gray-300">
							Zum Menü
						</Link>
						<Link href="/menu/bestellung" className="text-black hover:text-gray-300">
							Zur Bestellung
						</Link>
						<Link href="/standort" className="text-black hover:text-gray-300">
							Hier finden Sie uns
						</Link>
					</div>


				<div className="flex items-center space-x-4 mx-4">
					<Link href="/reservierung" className="bg-white text-cyan-950 px-4 py-2 rounded-md hover:bg-gray-200">
						Tisch reservieren
					</Link>
				</div>
			</nav>
		</header>
	);
}

	/*
	return (
		<header className="bg-amber-50 p-4 row-span-1">
			<nav className="flex items-center justify-between">
				<div className="flex items-center justify-center">
					<Link href="/" className="text-cyan-950 text-lg font-bold flex items-center justify-between">
						<Image src={icon} alt="AllTheFood Icon" className="w-10"/>
						AllTheFood
					</Link>
				</div>
				<div className="flex items-center space-x-4 flex-grow mx-8">
						<Link href="/menu" className="text-black hover:text-gray-300">
							Zum Menü
						</Link>
						<Link href="/bestellung" className="text-black hover:text-gray-300">
							Zur Bestellung
						</Link>
						<Link href="/standort" className="text-black hover:text-gray-300">
							Hier finden Sie uns
						</Link>
				</div>
					<div className="flex items-center space-x-4 mx-4">
						<Link href="/reservierung" className="bg-white text-cyan-950 px-4 py-2 rounded-md hover:bg-gray-200">
							Tisch reservieren
						</Link>
					</div>
			</nav>
		</header>
	);
}
*/

