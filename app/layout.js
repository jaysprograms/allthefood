import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Head from "next/head";
import Footer from "@/app/components/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
	title: "AllTheFood",
	description: "Das Restaurant für alle Geschmäcker",
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
		<body className={inter.className}>
		<div className="flex flex-col min-h-screen">
			<Navbar/>
			{children}
			<Footer/>
		</div>
		</body>
		</html>
	);
}

