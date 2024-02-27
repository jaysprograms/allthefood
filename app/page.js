import Link from "next/link"
import Navbar from "@/app/components/navbar";

export default function Home() {
	return (
		<div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-cyan-700 opacity-100 min-h-screen relative">
			<div className="absolute left-1/4 top-1/3">
				<h1 className="text-6xl font-bold text-white">
					Willkommen bei <span className="text-black"> AllTheFood </span> &nbsp;</h1>
				<p className="text-2xl font-bold text-white">Deiner Anlaufstelle für den <span
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