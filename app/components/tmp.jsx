//Menu based fetching

/* // Server based fetching. Irrelevant
try {
	//menu = await getMenu();
	//console.log(menu);
} catch (error) {
	console.error(error);
	return <div>Es ist ein Fehler aufgetreten</div>;
}*/

/* //Server based fetching. Irrelevant
async function getMenu() {
	const response = await fetch("/menu/api/menu.json", {cache: "no-store"});
	if (!response.ok) {
		throw new Error("Fehler beim Laden der Daten");
	}
	return await response.json();
}*/