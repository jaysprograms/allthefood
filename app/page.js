import Link from "next/link"
import Image from "next/image";
import icon from "./icon.png"
import breakfast from "@/public/pictures/food.jpg"
import asian from "@/public/pictures/food_asian.jpg"

export default function Home() {
	return (
		<div className="flex flex-col flex-grow bg-white">
			<div className="xl:grid xl:grid-cols-2 h-full">
				<div className="xl:col-span-1 flex justify-center xl:mt-60">
					<div className="text-2xl xl:text-6xl font-bold text-black">
						<h1> Willkommen bei </h1>
						<span className="text-cyan-950 flex items-center">
						<Image src={icon} alt="AllTheFood Icon" className="w-10 xl:w-20"/>
						AllTheFood
						</span>
						<p className="text-xl font-bold text-black">
							Deiner Anlaufstelle für den unsättlichen Appetit auf mehr.
							<br></br>
							Finde alles, was dein&nbsp;
							<span className="text-red-700">Herz&nbsp;</span>
							begehrt.
						</p>
					</div>
				</div>
				<div className="xl:col-span-1 flex flex-col justify-center items-center pt-20">
					<Image src={breakfast} alt="Frühstücksbuffet" className="xl:w-1/2 rounded-xl m-4 shadow-xl"/>
					<Image src={asian} alt="Asiatisches Essen" className="xl:w-1/2 rounded-xl m-4 shadow-xl"/>
				</div>
			</div>
		</div>
	);
}