import {itemLayout} from "./itemLayout.js";

export default function displayCompras(array, date,div) {
	const item = array.map((item,index) => {
		return itemLayout(item, date,index);
	});

	div.innerHTML = item.join("");
}