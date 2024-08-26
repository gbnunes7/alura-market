import displayCompras from "./displayCompras.js";
import dateNow from "./date.js";

const comprasForm = document.getElementById("compras-form");
const divCompras = document.getElementById("divListaDeCompras");
const listaDeCompras = [];

const dateFormatada = dateNow();

comprasForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const itemDaLista = document.getElementById("compras-item").value;
	
	listaDeCompras.push(itemDaLista);
	displayCompras(listaDeCompras, dateFormatada, divCompras);
});

divCompras.addEventListener("click", (event) => {
    if (event.target.closest("#button__excluir")) {
        const index = event.target.closest("button").getAttribute("data-index");
        listaDeCompras.splice(index, 1);
        displayCompras(listaDeCompras, dateFormatada, divCompras);
    }

	if (event.target.closest("#button__editar")) {
        const index = event.target.closest("button").getAttribute("data-index");
        const itemName = divCompras.querySelector(`.item-name[data-index="${index}"]`);
        const editContainer = divCompras.querySelector(`.edit-container[data-index="${index}"]`);

        if (itemName && editContainer) {
            // Alterna entre modo de visualização e edição
            itemName.style.display = itemName.style.display === "none" ? "block" : "none";
            editContainer.style.display = editContainer.style.display === "none" ? "block" : "none";
        } else {
            console.error(`Elementos com data-index="${index}" não encontrados.`);
        }
    }

    if (event.target.closest("#button__salvar")) {
        const index = event.target.closest("button").getAttribute("data-index");
        const newNameInput = divCompras.querySelector(`.edit-container[data-index="${index}"] .edit-input`);
        
        if (newNameInput) {
            const newName = newNameInput.value;
            listaDeCompras[index] = newName; // Atualiza o nome do item na lista
            displayCompras(listaDeCompras, dateFormatada, divCompras); // Atualiza a lista exibida
        } else {
            console.error(`Campo de entrada para edição com data-index="${index}" não encontrado.`);
        }
    }
});
