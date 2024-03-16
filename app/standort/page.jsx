export default function Standort() {
	return (
		<div className="flex-grow bg-white">
			<div className="grid grid-cols-2">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-3xl font-bold m-6">Hier finden Sie uns!</h1>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d255.30284458892044!2d13.465605258181448!3d52.499707270812145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1709805574286!5m2!1sde!2sde"
						width="600" height="450" allowFullScreen="" loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-3xl font-bold m-6">Adresse</h1>
					<p className="text-2xl font-bold">AllTheFood GmbH</p>
					<p className="text-2xl font-bold">Markgrafendamm 29</p>
					<p className="text-2xl font-bold">10245 Berlin</p>
					</div>
			</div>
		</div>
	)
}