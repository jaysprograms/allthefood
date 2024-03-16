import fs from 'fs';

export async function POST(req) {
	async function streamToString(stream) {
		const chunks = [];
		for await (const chunk of stream) {
			chunks.push(chunk);
		}
		return Buffer.concat(chunks).toString('utf8');
	}

	const orderData = streamToString(req.body)

	console.log('orderData:', orderData);
	const orderId = generateOrderId();
	try {
		// Lese die vorhandenen Daten aus der Datei
		const filePath = 'app/bestellung/api/allOrders.json';
		let existingData = [];
		await fs.readFile(filePath, (err, data) => {
			if (err) {
				// Handle read error
				if (err.code !== 'ENOENT') {
					throw err;
				}
				// File doesn't exist, proceed with empty data
				existingData = [];
			} else {
				existingData = JSON.parse(data.toString());
			}
		});

		// Füge die neuen Daten hinzu
		existingData.push({id: orderId, ...orderData});
		//console.log('existingData:', existingData)

		// Schreibe die aktualisierten Daten zurück in die Datei
		await fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
			if (err) throw err;
		});

		return new Response(JSON.stringify({orderId}));
	} catch (error) {
		console.error('Error saving order:', error);
		return new Response([], {status: 500});
	}
}

function generateOrderId() {
	// Hier implementieren Sie eine Logik zur Generierung eindeutiger IDs
	return Math.floor(Math.random() * 1000).toString();
}


