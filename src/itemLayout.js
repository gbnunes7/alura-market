export const itemLayout = (nome, date, index, isChecked = false) => {
    const checkedAttribute = isChecked ? 'checked' : ''; // Define o estado do checkbox

    const html = `
    <div class="item-container flex flex-col mb-4">
        <div class="flex text-[#131730] text-base gap-2 justify-between">
            <input type="checkbox" class="checkbox-item" data-index="${index}" ${checkedAttribute}>
            <p class="item-name" data-index="${index}" style="text-decoration: ${isChecked ? 'line-through' : 'none'};">${nome}</p>
            <div class="flex">
                <button id="button__editar" data-index="${index}"><img src='/public/img/edit.svg'></button>
                <button id="button__excluir" data-index="${index}"><img src='/public/img/delete.svg'></button>
            </div>
        </div>
        <div>
            <p class="text-xs text-[#131730]">${date}</p>
        </div>
    </div>`;
    return html;
};