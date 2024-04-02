import Link from "next/link";

export default function Impressum() {
	return (
		<div className="flex-grow flex justify-center bg-white">
			<div className="mt-20">
				<h1 className="text-5xl font-bold text-center">Impressum</h1>
				<div className="mt-10 text-xl">
					<div className="m-4">
						<h2 className="font-bold">AllTheFood GmbH</h2>
						<p>Markgrafendamm 29</p>
						<p>10245 Berlin</p>
					</div>
					<div className="m-4">
						<p>Handelsregister: Amtsgericht Berlin-Friedrichshain</p>
						<p>Registernummer: HRB 123456B</p>
					</div>
					<p className="m-4">Vertreten durch: Jason Piyasron</p>
					<div className="m-4">
						<p className="font-bold">Kontakt:</p>
						<p>Telefon: 030 123456789</p>
						<p>Email: <Link href="mailto:info@allthefood.de"
														className="text-blue-500 hover:text-blue-700">info@allthefood.de</Link></p>
					</div>

				</div>
			</div>
		</div>
	)
}