export async function GET(req, res) {
	const menu =
		[
			{
				"country": "Italia",
				"dishes": [
					{
						"id": 1,
						"name": "Pizza Margherita",
						"description": "Tomatensauce, Mozzarella, Basilikum",
						"price": "10€",
						"category": "Pizza"
					},
					{
						"id": 2,
						"name": "Pizza Salami",
						"description": "Tomatensauce, Mozzarella, Salami",
						"price": "12€",
						"category": "Pizza"
					},
					{
						"id": 3,
						"name": "Pizza Quattro Formaggi",
						"description": "Tomatensauce, Mozzarella, Gorgonzola, Parmesan, Ricotta",
						"price": "14€",
						"category": "Pizza"
					},
					{
						"id": 4,
						"name": "Spaghetti Carbonara",
						"description": "Spaghetti, Eier, Parmesan, Pancetta, Pecorino Romano",
						"price": "15€",
						"category": "Pasta"
					},
					{
						"id": 5,
						"name": "Lasagne Bolognese",
						"description": "Schichten von Lasagneplatten, Bolognese-Sauce, Béchamel-Sauce, Parmesan",
						"price": "16€",
						"category": "Pasta"
					},
					{
						"id": 6,
						"name": "Saltimbocca alla Romana",
						"description": "Kalbsfleisch mit Parmaschinken und Salbei, Weißwein, Butter",
						"price": "20€",
						"category": "Hauptgericht"
					},
					{
						"id": 7,
						"name": "Ossobuco alla Milanese",
						"description": "Kalbsbeinscheibe mit Gemüse und Gremolata",
						"price": "22€",
						"category": "Hauptgericht"
					},
					{
						"id": 8,
						"name": "Tiramisu",
						"description": "Löffelbiskuit, Kaffee, Mascarpone, Eier, Kakao",
						"price": "8€",
						"category": "Dessert"
					},
					{
						"id": 9,
						"name": "Panna Cotta",
						"description": "Sahnecreme mit Vanille und Beeren",
						"price": "7€",
						"category": "Dessert"
					},
					{
						"id": 10,
						"name": "Verschiedene Eissorten",
						"description": "Schokolade, Vanille, Erdbeere",
						"price": "2,50€ pro Kugel",
						"category": "Dessert"
					}
				]
			},
			{
				"country": "Deutschland",
				"dishes": [
					{
						"id": 1,
						"name": "Sauerbraten",
						"description": "Marinierter und geschmorter Rinderbraten mit saurer Soße",
						"price": "14€"
					},
					{
						"id": 2,
						"name": "Wiener Schnitzel",
						"description": "Paniertes und gebratenes Kalbsschnitzel",
						"price": "16€"
					},
					{
						"id": 3,
						"name": "Bratwurst mit Sauerkraut",
						"description": "Gebratene Wurst mit Sauerkraut",
						"price": "10€"
					},
					{
						"id": 4,
						"name": "Kartoffelsalat",
						"description": "Salat aus gekochten Kartoffeln mit Essig und Öl",
						"price": "8€"
					},
					{
						"id": 5,
						"name": "Königsberger Klopse",
						"description": "Frikadellen in Kapernsauce",
						"price": "12€"
					},
					{
						"id": 6,
						"name": "Brezen",
						"description": "Laugengebäck, oft als Beilage zu Bier",
						"price": "5€"
					},
					{
						"id": 7,
						"name": "Rouladen",
						"description": "Rindfleischrollen gefüllt mit Zwiebeln, Senf und Speck",
						"price": "18€"
					},
					{
						"id": 8,
						"name": "Spätzle",
						"description": "Eierspätzle, eine Art von Nudeln",
						"price": "9€"
					},

					{
						"id": 9,
						"name": "Kartoffelsuppe",
						"description": "Suppe mit Kartoffeln, Gemüse und Gewürzen",
						"price": "6€"
					},
					{
						"id": 10,
						"name": "Apfelstrudel",
						"description": "Gebäck mit Apfel-Füllung",
						"price": "7€"
					},
				]
			},
			{
				"country": "España",
				"dishes": [
					{
						"id": 1,
						"name": "Paella",
						"description": "Reisgericht mit Gemüse, Hühnchen, Meeresfrüchten und/oder Kaninchen",
						"price": "15€"
					},
					{
						"id": 2,
						"name": "Tapas",
						"description": "Verschiedene kleine Vorspeisen und Snacks",
						"price": "12€"
					},
					{
						"id": 3,
						"name": "Gazpacho",
						"description": "Kalte Gemüsesuppe mit Tomaten, Paprika, Gurken und Zwiebeln",
						"price": "8€"
					},
					{
						"id": 4,
						"name": "Patatas Bravas",
						"description": "Gebratene Kartoffelwürfel mit scharfer Tomatensauce und Knoblauchmayonnaise",
						"price": "9€"
					},
					{
						"id": 5,
						"name": "Pulpo a la Gallega",
						"description": "Gebratener Oktopus mit Kartoffeln, Paprika und Olivenöl",
						"price": "18€"
					},
					{
						"id": 6,
						"name": "Tortilla Española",
						"description": "Spanisches Omelett mit Kartoffeln und Zwiebeln",
						"price": "10€"
					},
					{
						"id": 7,
						"name": "Jamón Ibérico",
						"description": "Luftgetrockneter Schinken aus Iberischen Schweinen",
						"price": "20€"
					},
					{
						"id": 8,
						"name": "Salmorejo",
						"description": "Kalte Tomatensuppe mit Brot, Knoblauch und Olivenöl",
						"price": "9€"
					},
					{
						"id": 9,
						"name": "Marmitako",
						"description": "Fisch-Eintopf mit Kartoffeln, Thunfisch, Zwiebeln und Paprika",
						"price": "16€"
					},
					{
						"id": 10,
						"name": "Churros con Chocolate",
						"description": "Frittiertes Teiggebäck mit heißer Schokoladensauce",
						"price": "7€"
					},
				]
			},
			{
				"country": "Thailand",
				"dishes": [
					{
						"id": 1,
						"name": "Pad Thai",
						"description": "Gebratene Reisnudeln mit Garnelen, Tofu, Erdnüssen und Limetten",
						"price": "12€"
					},
					{
						"id": 2,
						"name": "Tom Yum Goong",
						"description": "Würzige Garnelensuppe mit Zitronengras, Chili und Koriander",
						"price": "10€"
					},
					{
						"id": 3,
						"name": "Green Curry",
						"description": "Grünes Curry mit Hühnchen, Gemüse und Kokosmilch",
						"price": "14€"
					},
					{
						"id": 4,
						"name": "Som Tum",
						"description": "Papaya-Salat mit Tomaten, Bohnen, Chili und Erdnüssen",
						"price": "9€"
					},
					{
						"id": 5,
						"name": "Massaman Curry",
						"description": "Erdnuss-Curry mit Rindfleisch, Kartoffeln und Zwiebeln",
						"price": "15€"
					},
					{
						"id": 6,
						"name": "Pad Krapow Moo",
						"description": "Gebratenes Schweinefleisch mit Basilikum, Chili und Knoblauch",
						"price": "13€"
					},
					{
						"id": 7,
						"name": "Khao Pad Gai",
						"description": "Gebratener Hühnchenreis mit Gemüse und Ei",
						"price": "11€"
					},
					{
						"id": 8,
						"name": "Panang Curry",
						"description": "Panang-Curry mit Hühnchen, Erdnüssen und Kokosmilch",
						"price": "16€"
					},
					{
						"id": 9,
						"name": "Pad See Ew",
						"description": "Breite Reisnudeln mit Hühnchen, Brokkoli und Sojasauce",
						"price": "10€"
					},
					{
						"id": 10,
						"name": "Gaeng Keow Wan Gai",
						"description": "Grünes Hühnchencurry mit Auberginen und Bambusstreifen",
						"price": "17€"
					}
				]
			},
			{
				"country": "Vietnam",
				"dishes": [
					{
						"id": 1,
						"name": "Pho",
						"description": "Reisnudelsuppe mit Rindfleisch oder Hühnchen, Kräutern und Gewürzen",
						"price": "12€"
					},
					{
						"id": 2,
						"name": "Banh Mi",
						"description": "Vietnamesisches Sandwich mit Baguette, Fleisch, Gemüse und Sauce",
						"price": "8€"
					},
					{
						"id": 3,
						"name": "Goi Cuon",
						"description": "Frische Sommerrollen mit Reisnudeln, Garnelen, Kräutern und Erdnussdip",
						"price": "10€"
					},
					{
						"id": 4,
						"name": "Bun Cha",
						"description": "Gegrilltes Schweinefleisch mit Reisnudeln, Kräutern und Nuoc Cham Sauce",
						"price": "15€"
					},
					{
						"id": 5,
						"name": "Com tam",
						"description": "Gebrochener Reis mit gegrilltem Schweinefleisch, Ei und Gemüse",
						"price": "13€"
					},
					{
						"id": 6,
						"name": "Ca Kho To",
						"description": "Gekochter Karamell-Fisch mit Sojasauce, Ingwer und Knoblauch",
						"price": "17€"
					},
					{
						"id": 7,
						"name": "Banh Xeo",
						"description": "Knusprige Reispfannkuchen mit Garnelen, Schweinefleisch und Gemüse",
						"price": "14€"
					},
					{
						"id": 8,
						"name": "Pho Bo Kho",
						"description": "Würziger Rindfleisch-Eintopf mit Nudeln",
						"price": "16€"
					},
					{
						"id": 9,
						"name": "Bun Rieu",
						"description": "Tomatensuppennudeln mit Krebspaste und Krabben",
						"price": "11€"
					},
					{
						"id": 10,
						"name": "Ca Ri Ga",
						"description": "Vietnamesisches Hühner-Curry mit Kartoffeln und Karotten",
						"price": "18€"
					}
				]
			}
		];
	return new Response(JSON.stringify(menu))
}
