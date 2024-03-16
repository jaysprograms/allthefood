export default function Kontakt() {
	return (
		<div className="flex-grow bg-white">
			<h1>Hier könnt ihr uns kontaktieren</h1>
			<div className="container">
				<form>
					<div className="flex flex-col mx-4">
						<label htmlFor="name">Name</label>
						<input className="border rounded-xl p-2" type="text" id="name" name="name" required/>
					</div>
					<div className="flex flex-col mx-4">
						<label htmlFor="email">Email</label>
						<input className="border rounded-xl p-2" type="email" id="email" name="email" required/>
					</div>
					<div className="flex flex-col mx-4">
						<label htmlFor="message">Nachricht</label>
						<textarea className="border rounded-xl p-2" id="message" name="message" required/>
					</div>
					<button type="submit">Abschicken</button>
				</form>
			</div>
		</div>
	)
}