'use strict'


function createForm(cost) {
    let popup = document.createElement('div');
    popup.classList.add('popup');
    let container = document.createElement('div');
    container.classList.add('container');
    let form = document.createElement('form');
    form.classList.add('popup__form');
    let header = document.createElement('h1');
    header.classList.add('popup__header');
    header.textContent = 'Добавить товар';
    let button = document.createElement('div');
    button.classList.add('popup__button');
    button.innerHTML = '<button data-back type="submit">Добавить</button>';
    form.prepend(header);
    form.append(...getListField(cost));
    form.append(button);
    container.prepend(form);
    popup.prepend(container);
    document.body.prepend(popup);
    document.body.style.overflow = 'hidden';
}


function getListField(cost) {
    let result = [];
    let arrField = [];

    arrField[0] = `<p>Стоимость товара</p><input type="text" name="cost" value="${cost}" required>`;
    arrField[1] = '<p>Имя</p><input type="text" name="username" value=""  required tabindex="1" placeholder="Имя">';
    arrField[2] = '<p>Номер телефона</p><input type="tel" name="phoneNumber" value=""  required tabindex="2" placeholder="+7(___) ___ __ __">';

    for (let i = 0; i <= 2; i++) {
        let field = document.createElement('div');
        field.classList.add('popup__field');
        field.innerHTML = arrField[i];
        result.push(field);
    }
    return result;
}

document.addEventListener('click', function(event){

	if(event.target.dataset.cost != undefined) {
		let cost = parseInt((event.target.textContent));
		createForm(cost);
	}
});


