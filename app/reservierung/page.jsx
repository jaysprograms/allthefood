'use client'
import { useState, useEffect } from 'react';

export default function Reservierung() {
	const [minDate, setMinDate] = useState('');
	const [minTime, setMinTime] = useState('');

	useEffect(() => {
		// Funktion, um das Min-Datum zu setzen
		const setMinDateToday = () => {
			const today = new Date();
			const day = today.getDate();
			const month = today.getMonth() + 1; // Januar ist 0!
			const year = today.getFullYear();

			const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
			setMinDate(formattedDate);
		};

		// Funktion, um das Min-Zeit zu setzen
		const setMinTimeForAfternoon = () => {
			const today = new Date();
			today.setHours(14, 0, 0, 0); // Setze die Zeit auf 14:00 Uhr

			const hours = today.getHours();
			const minutes = today.getMinutes();

			const roundedMinutes = Math.ceil(minutes / 30) * 30; // Runde auf die nächste halbe Stunde

			today.setMinutes(roundedMinutes);

			const formattedTime = `${hours < 10 ? '0' + hours : hours}:${roundedMinutes < 10 ? '0' + roundedMinutes : roundedMinutes}`;
			setMinTime(formattedTime);
		};

		// Setze das Min-Datum und Min-Zeit beim Laden der Seite
		setMinDateToday();
		setMinTimeForAfternoon();
	}, []);

	return (
		<div className="flex-grow bg-white">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-3xl font-bold m-6">Reservierung</h1>
				<p className="text-2xl font-bold">Reservieren Sie jetzt Ihren Tisch!</p>
				<p className="text-2xl font-bold">Telefon: 030 123456789</p>
				<p className="text-2xl font-bold">Email: wasgehtsiedasan@thaddäus.com</p>
				<p className="text-2xl font-bold">Oder mit folgendem Formular:</p>
				<form>
					<div className="flex flex-col mx-4">
						<label htmlFor="name">Name</label>
						<input className="border rounded-xl p-2" type="text" id="name" name="name" required/>
					</div>
					<div className="flex flex-col mx-4">
						<label htmlFor="count">Anzahl</label>
						<input className="border rounded-xl p-2" type="number" id="count" name="count" required/>
					</div>
					<div className="flex flex-col mx-4">
						<label htmlFor="date">Datum</label>
						<input className="border rounded-xl p-2" type="date" id="date" name="date"
									 min={minDate} max="2025-12-31" required/>
					</div>
					<div className="flex flex-col mx-4">
						<label htmlFor="time">Uhrzeit</label>
						<input className="border rounded-xl p-2" type="time" id="time" name="time"
									 min={minTime} step="900" value="14:00" required/>
					</div>
					<div className="flex flex-col mt-6">
						<button
							className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 p-4 font-bold text-2xl mx-auto rounded-full text-white"
							type="submit" onClick={() => console.log("submitted")}>
							Reservieren
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}