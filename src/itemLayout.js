export const itemLayout = (nome,date) => {
	const html = `<div class="flex flex-col">
    <div class="flex text-[#131730] text-base gap-2">
        <input type="checkbox">
        <p>${nome}</p>
        <button>Excluir</button>
        <button>Editar</button>
    </div>
    <div>
        <p class="text-xs text-[#131730]">${date}</p>
    </div>
</div>`;

	return html;
};

export default itemLayout