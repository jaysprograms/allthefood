import Link from "next/link";
import Image from "next/image";
import icon from "../icon.png";

export default function Footer() {
	return (
		<footer className="bg-cyan-700 p-4 flex items-center justify-center">
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-center">
					<Link href="/" className="text-cyan-950 text-lg font-bold flex items-center justify-between">
						<Image src={icon} alt="Footer Icon" className="w-10"/>
						AllTheFood
					</Link>
				</div>
				<div className="flex items-center space-x-4 flex-grow mx-8">
					<Link href="/impressum" className="text-white hover:text-gray-300">
						Impressum
					</Link>
					<Link href="/kontakt" className="text-white hover:text-gray-300">
						Kontakt
					</Link>
				</div>
			</div>
		</footer>
	);
}
