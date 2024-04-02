'use client'
import {useState, useEffect} from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Reservierung() {
	const [minDate, setMinDate] = useState('');
	const [minTime, setMinTime] = useState('');

	const router = useRouter();

	useEffect(() => {
		// Funktion, um das Min-Datum zu setzen
		const setMinDateToday = () => {
			const today = new Date();
			const day = today.getDate();
			const month = today.getMonth() + 1;
			const year = today.getFullYear();

			const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
			setMinDate(formattedDate);
		};

		// Funktion, um die Min-Zeit zu setzen
		const setMinTimeForAfternoon = () => {
			const today = new Date();
			today.setHours(14, 0, 0, 0);

			const hours = today.getHours();
			const minutes = today.getMinutes();

			const roundedMinutes = Math.ceil(minutes / 30) * 30;

			today.setMinutes(roundedMinutes);

			const formattedTime = `${hours < 10 ? '0' + hours : hours}:${roundedMinutes < 10 ? '0' + roundedMinutes : roundedMinutes}`;
			setMinTime(formattedTime);
		};

		setMinDateToday();
		setMinTimeForAfternoon();
	}, []);

	const onSubmit = (event) => {
		event.preventDefault();
		alert('Vielen Dank für Deine Reservierung! Wir freuen uns auf Deinen Besuch.');
		router.push('/');
	}

	return (
		<div className="flex-grow bg-white">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-5xl font-bold m-6">Reserviere Dir hier einen Tisch!</h1>
				<div className="text-2xl mb-6">
					<p><span className="font-bold">Telefon:</span> 030 123456789</p>
					<p><span className="font-bold">Email:</span>&nbsp;
						<Link href="mailto:reservierung@allthefood.de"
									className="text-blue-500 hover:text-blue-700">reservierung@allthefood.de</Link></p>
					<p className="mt-4">Oder mit dem Formular:</p>
				</div>
				<form className="font-bold" onSubmit={onSubmit}>
					<div className="flex flex-col mx-4">
						<label htmlFor="name">Name</label>
						<input className="border rounded-xl p-2" type="text" id="name" name="name"
									 placeholder="Vor- und Nachname" required/>
					</div>
					<div className="flex flex-col mx-4">
						<label htmlFor="count">Anzahl</label>
						<input className="border rounded-xl p-2" type="number" id="count" name="count"
									 min="1" max="12" defaultValue="1" required/>
					</div>
					<div className="flex flex-col mx-4">
						<label htmlFor="date">Datum</label>
						<input className="border rounded-xl p-2" type="date" id="date" name="date"
									 min={minDate} max="2025-12-31" required/>
					</div>
					<div className="flex flex-col mx-4">
						<label htmlFor="time">Uhrzeit</label>
						<input className="border rounded-xl p-2" type="time" id="time" name="time"
									 min={minTime} step="900" required/>
					</div>
					<div className="flex flex-col mt-6">
						<button
							className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 p-4 font-bold text-2xl mx-auto mb-4 rounded-full text-white"
							type="submit" onClick={() => console.log("submitted")}>
							Reservieren
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}