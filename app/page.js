import Link from "next/link"
import Image from "next/image";
import icon from "./icon.png"
import styles from "./Home.module.css"
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function Home() {
	return (
		<div className="flex-grow bg-gradient-to-b from-amber-50 to-cyan-700 opacity-100 row-span-8">
			<div className="absolute left-1/4 top-1/3">
				<h1 className="text-6xl font-bold text-black">
					Willkommen bei <br/>
					<span className="text-cyan-950 flex items-center">
						<Image src={icon} alt="AllTheFood Icon" className="w-12"/>
						AllTheFood
					</span>
				</h1>
				<p className="text-2xl font-bold text-black">Deiner Anlaufstelle für den <span
					className="text-black"> unsättlichen </span>Appetit auf mehr
				</p>
			</div>
		</div>
	);
}
/*
	<div className="bg-cover bg-center min-h-screen relative"
		 style={{backgroundImage: 'url("/pictures/food.jpg")'}}>
</div>
 */