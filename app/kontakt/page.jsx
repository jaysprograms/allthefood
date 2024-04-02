'use client'
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function Kontakt() {
	const router = useRouter()

	function handleSubmit(event) {
		event.preventDefault()
		alert('Vielen Dank für Deine Nachricht! Wir werden diese umgehend lesen.');
		router.push('/');
	}

	return (
		<div className="flex-grow flex flex-col items-center justify-center bg-white font-bold">
			<h1 className="text-5xl mb-8">Kontaktiere uns hier!</h1>
			<div className="text-xl mb-4 text-center">
				<p>Wir freuen uns über jede Nachricht!</p>
				<p>
					Alternativ auch gern über&nbsp;
					<Link href="mailto:info@allthefood.de" className="text-blue-500 hover:text-blue-700">info@allthefood.de</Link>
				</p>
			</div>
			<div className="">
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col mx-4">
						<label htmlFor="name">Name</label>
						<input className="border rounded-xl p-2" type="text" id="name" name="name" required/>
					</div>
					<div className="flex flex-col mx-4">
						<label htmlFor="email">Email</label>
						<input className="border rounded-xl p-2" type="email" id="email" name="email" required/>
					</div>
					<div className="flex flex-col mx-4">
						<label htmlFor="message">Deine Nachricht</label>
						<textarea className="border rounded-xl p-2 h-60" id="message" name="message" required/>
					</div>
					<div className="flex flex-col mt-6">
						<button
							className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 p-4 font-bold text-2xl mx-auto rounded-full text-white mb-4"
							type="submit">
							Senden
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}