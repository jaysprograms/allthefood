'use client'
import Link from "next/link"
import Image from "next/image";
import icon from "../icon.png"

export default function Navbar() {


	return (
		<header className="bg-white">
			<nav className="bg-cyan-700 flex items-center justify-between p-4 font-bold">
				<div className="flex items-center justify-center">
					<Link href="/" className="text-cyan-950 text-lg font-bold flex items-center justify-between">
						<Image src={icon} alt="AllTheFood Icon" className="w-10"/>
						AllTheFood
					</Link>
				</div>
					<div className="flex items-center space-x-4 flex-grow mx-8">
						<Link href="/menu" className="text-black hover:bg-gray-200 bg-white border p-2 rounded-md">
							Zum Menü
						</Link>
						<Link href="/bestellung" className="text-black hover:bg-gray-200 bg-white border p-2 rounded-md">
							Zur Bestellung
						</Link>
						<Link href="/standort" className="text-black hover:bg-gray-200 bg-white border p-2 rounded-md">
							Hier finden Sie uns
						</Link>
					</div>
				<div className="flex items-center space-x-4 mx-4">
					<Link href="/reservierung" className="bg-white text-cyan-950 px-4 py-2 border rounded-md hover:bg-gray-200">
						Reservierung
					</Link>
				</div>
			</nav>
			<div className="bg-white header-img h-10 w-full">
			</div>
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

