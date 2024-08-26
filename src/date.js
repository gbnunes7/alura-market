export default function dateNow() {
	const date = new Date();
	const dataCompleta = date.toLocaleDateString("pt-BR");
	const diaDaSemana = date.toLocaleDateString("pt-BR", { weekday: "long" });
	const dateDisplay = `${
		diaDaSemana.charAt(0).toUpperCase() + diaDaSemana.slice(1)
	} (${dataCompleta}) às ${date.toLocaleTimeString("pt-BR", {
		hour: "2-digit",
		minute: "2-digit",
	})}`;

    return dateDisplay
}