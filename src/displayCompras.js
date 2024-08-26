import itemLayout from "./itemLayout.js";

export default function displayCompras(array, date,div) {
	const items = array.map((item) => {
		return itemLayout(item, date);
	});

	div.innerHTML = items.join("");
}