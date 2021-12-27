import {persons} from "./render.js";
import {clear} from "./render.js";
import {searchFilter} from "./searchFilter.js";
import {selector} from "./searchFilter.js";
import {input} from "./searchFilter.js";

export const editContent = () => {
	let localData = JSON.parse(localStorage.localData || '{}');
	const clearButton = document.querySelector('.clear__button');
	clearButton.addEventListener('click', () => {
		localStorage.removeItem('localData');
		clear.classList.add('display-none');
		searchFilter(input.value, selector.value);
	});

	persons.addEventListener('click', (event) => {
		let characterBlock = event.target.closest('.character__block');
		let button = event.target.closest('.editButton')
		let characterContent = characterBlock.querySelector('.characters__content');
		let infoEdit = characterContent.querySelectorAll('.info__edit');

		const compare = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

		const finishEdit = () => {
			if (infoEdit[0].getAttribute('contenteditable') === 'true') {
				button.click() // функция должна нажимать на кнопку только в случае, если нам нужно убрать атрибут contenteditable
			}
			characterBlock.removeEventListener('pointerleave', finishEdit);
		}

// проверяем нажатие на кнопку

		if (button) {
			//если уже можно было редактировать

			if (infoEdit[0].getAttribute('contenteditable') === 'true') {
				//меняем картинку внутри кнопки на кнопку редактирования
				characterContent.querySelector('.editImg').src = 'img/editButton.png'
//убираем возможность редактирования
				infoEdit.forEach(el => el.setAttribute('contenteditable', 'false'));
// создадим объект для сравнения
				let objChanged = {
					'name': characterContent.querySelector('.character__name').textContent,
					'actor': characterContent.querySelector('.actor').textContent,
					'gender': characterContent.querySelector('.gender').textContent,
					'house': characterContent.querySelector('.house').textContent,
					'wand core': characterContent.querySelector('.wand').textContent,
					'alive': characterContent.querySelector('.alive').textContent,
				}
// получим объект из локал сторэдж
				let objBase = JSON.parse(localStorage.getItem('base'));
				// очистим локал сторэдж
				localStorage.removeItem('base');
				//теперь сравним два объекта,
				if (!compare(objBase, objChanged)) {
					localData[objChanged.name] = objChanged;
					localStorage.localData = JSON.stringify(localData);
				}

				if (localStorage.localData) {
					clear.classList.remove('display-none')
				}
			} else {
// добавляем возможность закрыть, просто убрав мышь
				characterBlock.addEventListener('pointerleave', finishEdit, {once: true});
// объект, который потом добавим в локал сторэдж, для последующего сравнения
				let objBase = {
					'name': characterContent.querySelector('.character__name').textContent,
					'actor': characterContent.querySelector('.actor').textContent,
					'gender': characterContent.querySelector('.gender').textContent,
					'house': characterContent.querySelector('.house').textContent,
					'wand core': characterContent.querySelector('.wand').textContent,
					'alive': characterContent.querySelector('.alive').textContent,
				}
				localStorage.setItem('base', JSON.stringify(objBase));
				//замена картинки на ОК
				characterContent.querySelector('.editImg').src = 'img/ok.png';

				infoEdit.forEach(el => el.setAttribute('contenteditable', 'true'));

				if (localStorage.localData) {
					clear.classList.remove('display-none')
				}
			}
		}
	})
}

