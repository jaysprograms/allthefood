export default function Standort() {
	return (
		<div className="flex-grow bg-white">
			<div className="grid grid-cols-2">
				<div className="col-span-1 flex flex-col items-center justify-center">
					<h1 className="text-3xl font-bold m-6">Hier finden Sie uns!</h1>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d255.30284458892044!2d13.465605258181448!3d52.499707270812145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1709805574286!5m2!1sde!2sde"
						width="600" height="450" allowFullScreen="" loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<div className="col-span-1 flex flex-col items-center justify-center">
					<h1 className="text-5xl font-bold m-6">Adresse</h1>
					<div className="text-2xl font-bold">
						<p>AllTheFood GmbH</p>
						<p>Markgrafendamm 29</p>
						<p>10245 Berlin</p>
					</div>
					<div className="grid grid-cols-2">
						<div className="flex flex-col justify-center m-8">
							<p>Erreichbar mit den Bussen <span className="font-bold">M43, 194, 347</span></p>
							<p>Station:<span className="font-bold"> Markgrafendamm </span></p>
							<p>Oder den S-Bahn Linien <span className="font-bold">S3, 5, 7, 41, 42, 8, 85</span></p>
							<p>Station:<span className="font-bold"> Ostkreuz (alle S-Bahnen) </span></p>
							<p>Station:<span className="font-bold"> Treptower Park (S41, 42, 8, 85) </span></p>
						</div>
						<div className="flex flex-col justify-center m-8">
							<p>Beachte bitte, dass keine Parkplätze <br/> zur Verfügung gestellt werden können!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}