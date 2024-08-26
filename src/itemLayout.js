export const itemLayout = (nome, date, index) => {
    const html = `
    <div class="flex flex-col mb-4">
        <div class="flex text-[#131730] text-base gap-2 justify-between">
            <input type="checkbox">
            <p class="item-name" data-index="${index}">${nome}</p>
            <div class="flex">
                <button id="button__editar" data-index="${index}"><img src='/public/img/edit.svg'></button>
                <button id="button__excluir" data-index="${index}"><img src='/public/img/delete.svg'></button>
            </div>
        </div>
        <div>
            <p class="text-xs text-[#131730]">${date}</p>
        </div>
        <div class="edit-container" data-index="${index}" style="display: none;">
            <input type="text" class="edit-input" value="${nome}">
            <button id="button__salvar" data-index="${index}">Salvar</button>
        </div>
    </div>`;
    return html;
};