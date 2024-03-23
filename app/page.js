import Link from "next/link"
import Image from "next/image";
import icon from "./icon.png"
import breakfast from "@/public/pictures/food.jpg"
import asian from "@/public/pictures/food_asian.jpg"
import table from "@/public/pictures/food_table.jpg"

export default function Home() {
	return (
		<div className="flex flex-col flex-grow bg-white">
			<div className="xl:grid xl:grid-cols-2 flex-grow">
				<div className="xl:col-span-1 flex justify-center items-center">
					<div className="text-2xl xl:text-6xl flex flex-col items-center font-bold text-black text-center">
						<h1> Willkommen bei </h1>
						<span className="text-cyan-950 flex items-center">
						<Image src={icon} alt="AllTheFood Icon" className="w-10 xl:w-20"/>
						AllTheFood
						</span>
						<p className="text-xl font-bold text-black">
							Deiner Anlaufstelle für den unsättlichen Appetit auf mehr.
							<br></br>
							Finde alles, was Dein&nbsp;
							<span className="text-red-700">Herz&nbsp;</span>
							begehrt.
						</p>
					</div>
				</div>
				<div className="xl:col-span-1 relative flex flex-col items-center">
					<Image src={breakfast} alt="Frühstücksbuffet" className="xl:w-1/3 rounded-xl m-4
					transform transition-transform ease-in-out delay-0 duration-300
					xl:absolute top-0 left-0 xl:hover:translate-x-1/2
					xl:hover:scale-[2] xl:hover:translate-y-20 z-10
					shadow-2xl shadow-neutral-950"/>
					<Image src={asian} alt="Asiatisches Essen" className="xl:w-1/3 rounded-xl m-4
					transform transition-transform ease-in-out delay-0 duration-300
					xl:absolute bottom-0 left-0
					xl:hover:scale-[1.5] xl:hover:translate-x-20 xl:hover:-translate-y-1/2
					shadow-2xl shadow-neutral-950"/>
					<Image src={table} alt="Gedeckter Tisch" className="xl:w-1/3 rounded-xl m-4
					transform transition-transform ease-in-out delay-0 duration-300
					xl:absolute bottom-0 right-0 xl:hover:-translate-x-1/2
					xl:hover:scale-[1.5] xl:hover:-translate-y-20 z-10
					shadow-2xl shadow-neutral-950"/>
				</div>
			</div>
		</div>
	);
}