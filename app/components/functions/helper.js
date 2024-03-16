export async function getMenu() {
	const response = await fetch("http://localhost:3000/menu/api", {cache: "no-store"});
	if (!response.ok) {
		throw new Error("Fehler beim Laden der Daten");
	}
	return await response.json();
}