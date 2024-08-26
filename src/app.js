import displayCompras from "./displayCompras.js";
import dateNow from "./date.js";

const comprasForm = document.getElementById("compras-form");
const divCompras = document.getElementById("divListaDeCompras");
const divComprados = document.getElementById("divComprados")
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
            listaDeCompras[index] = newName; 
            displayCompras(listaDeCompras, dateFormatada, divCompras); 
        } else {
            console.error(`Campo de entrada para edição com data-index="${index}" não encontrado.`);
        }
    }
});

divCompras.addEventListener("change", (event) => {
	if (event.target.classList.contains("checkbox-item")) {
        const index = event.target.getAttribute("data-index");
        const itemContainer = event.target.closest(".item-container"); // A div que contém o item
        const itemName = divCompras.querySelector(`.item-name[data-index="${index}"]`);

        if (itemName && itemContainer) {
            if (event.target.checked) {
                
                itemName.style.textDecoration = "line-through"; 
                divComprados.appendChild(itemContainer); 
            } 
        }
    }
});