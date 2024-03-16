'use client'
import {useRouter} from "next/navigation";

export default function Kontakt() {
	const router = useRouter()
	function handleSubmit(event) {
		event.preventDefault()
		alert('Vielen Dank für Ihre Nachricht! Wir werden diese umgehend lesen.');
		router.push('/');
	}

	return (
		<div className="flex-grow flex flex-col items-center justify-center bg-white font-bold">
			<h1 className="text-3xl mb-8">Kontaktieren Sie uns hier!</h1>
			<p >Wir freuen uns über jede Nachricht!</p>
			<p className="mb-4">Alternativ auch gern über info@allthefood.de</p>
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
						<label htmlFor="message">Ihre Nachricht</label>
						<textarea className="border rounded-xl p-2 h-96" id="message" name="message" required/>
					</div>
					<div className="flex flex-col mt-6">
						<button
							className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 p-4 font-bold text-2xl mx-auto rounded-full text-white"
							type="submit">
							Senden
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}