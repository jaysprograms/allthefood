import Link from "next/link"
import Image from "next/image";
import icon from "../icon.png"
export default function Navbar() {
	return (
		<header className="bg-amber-50 p-4">
			<nav className="flex items-center justify-between">
				<div className="flex items-center justify-center">
					<Link href="/" className="text-black text-lg font-bold flex items-center justify-between">
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
						<Link href="/kontakt" className="text-black hover:text-gray-300">
							Kontakt aufnehmen
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

