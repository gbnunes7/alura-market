export const itemLayout = (nome, date) => {
	const html = 
    `<div class="flex flex-col mb-4">
        <div class="flex text-[#131730] text-base gap-2 justify-between">
            <input type="checkbox">
            <p>${nome}</p>
        <div class= "flex" >
            <img src='/public/img/delete.svg'></button>
            <img src='/public/img/edit.svg'></button>
        </div>
        </div>
        <div>
            <p class="text-xs text-[#131730]">${date}</p>
        </div>
    </div>`;

	return html;
};

export default itemLayout;
