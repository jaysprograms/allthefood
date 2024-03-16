'use client'
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function PayFormular() {
	const router = useRouter()

	function handleAction(event) {
		event.preventDefault();
		const formData = event.target
		console.log('Gesammelte Formulardaten:', formData);
		router.push('/bestellung/bezahlung/erfolgreich');
	}

	return (
		<div className="row-start-1 row-span-4 col-start-1 border border-black rounded mb-4 mx-4 p-8">
			<h2 className="font-bold mb-2 text-2xl">Lieferadresse</h2>
			<form id="contract" onSubmit={handleAction}>
				<div className="flex flex-col xl:flex-row">
					<div className="flex flex-col mx-4 w-full">
						<label htmlFor="street">Straße</label>
						<input className="border rounded-xl p-2" type="tel" id="street" name="street" required/>
					</div>
					<div className="flex flex-col mx-4 w-full">
						<label htmlFor="number">Hausnummer</label>
						<input className="border rounded-xl p-2" type="text" id="number" name="number" required/>
					</div>
				</div>
				<div className="flex flex-col mx-4">
					<label htmlFor="etage">Etage (optional)</label>
					<input className="border rounded-xl p-2" type="text" id="etage" name="etage"/>
				</div>
				<div className="flex flex-col mx-4">
					<label htmlFor="firma">Firma (optional)</label>
					<input className="border rounded-xl p-2" type="text" id="firma" name="firma"/>
				</div>
				<h2 className="font-bold mb-2 text-2xl mt-3">Persönliche Daten</h2>
				<div className="flex flex-col xl:flex-row">
					<div className="flex flex-col mx-4 w-full">
						<label htmlFor="name">Vor- und Nachname</label>
						<input className="border rounded-xl p-2" type="text" id="name" name="name" required/>
					</div>
					<div className="flex flex-col mx-4 w-full">
						<label htmlFor="email">E-Mail</label>
						<input className="border rounded-xl p-2" type="email" id="email" name="email" required/>
					</div>
				</div>
				<div className="flex flex-col mx-4">
					<label htmlFor="telefon">Telefon</label>
					<input className="border rounded-xl p-2" type="tel" id="telefon" name="telefon" required/>
				</div>
				<h2 className="font-bold mb-2 text-2xl mt-3">Zahlungsdaten</h2>
				<div className="flex flex-col mx-4">
					<label htmlFor="kreditkarte">Kreditkartennummer</label>
					<input className="border rounded-xl p-2" type="text" id="kreditkarte" name="kreditkarte" required/>
				</div>
				<div className="flex flex-col mx-4">
					<label htmlFor="cvv">CVV</label>
					<input className="border rounded-xl p-2" type="text" id="cvv" name="cvv" required/>
				</div>
				<div className="flex flex-col mx-4">
					<label htmlFor="ablaufdatum">Ablaufdatum</label>
					<input className="border rounded-xl p-2" type="date" id="ablaufdatum" name="ablaufdatum" required/>
				</div>
				<div className="flex flex-col mx-4">
					<label htmlFor="zahlungsart">Zahlungsart</label>
					<select className="border rounded-xl p-2" id="zahlungsart" name="zahlungsart">
						<option value="visa">Visa</option>
						<option value="mastercard">Mastercard</option>
					</select>
				</div>
				<div className="flex flex-col mt-6">
					<button
						className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 p-4 font-bold text-2xl mx-auto rounded-full text-white"
						type="submit">
						Bestellen und bezahlen
					</button>
				</div>
			</form>
		</div>
	)
}