const editButton = document.querySelector('.editButton');
let localData = JSON.parse(localStorage.localData || '{}');
const clearButton = document.querySelector('.clear__button');
clearButton.addEventListener('click', () => {
	localStorage.clear()
	clear.classList.add('display-none');
	//setTimeout(render, 500, data)
	render(data);
//	console.log('cleared')
});

/*const checkLocalStorage = () => {
	for (let i = 0; i < localStorage.length; i++) {
		if (localStorage.key(i) !== 'base') return true;
	}
}*/


persons.addEventListener('click', (event) => {
	let characterBlock = event.target.closest('.character__block');
	let button = event.target.closest('.editButton')
	let characterContent = characterBlock.querySelector('.characters__content');
	let info__edit = characterContent.querySelectorAll('.info__edit');


	const compare = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);


	const finishEdit = () => {
		// console.log('test');
		if (info__edit[0].getAttribute('contenteditable') === 'true') {
			button.click() // функция должна нажимать на кнопку только в случае, если нам нужно убрать атрибут contenteditable
		}
		characterBlock.removeEventListener('pointerleave', finishEdit);
	}

// проверяем нажали ли мы
	if (button) {
		if (info__edit[0].getAttribute('contenteditable') === 'true') { // уже есть атрибут
			//	console.log('remove')
			//	console.log(event.eventPhase)
			// characterBlock.removeEventListener('pointerleave', finishEdit);


			characterContent.querySelector('.editImg').src = 'img/editButton.png'

			info__edit.forEach(el => el.setAttribute('contenteditable', 'false'));
			let objChanged = {
				'name': characterContent.querySelector('.character__name').textContent,
				'actor': characterContent.querySelector('.actor').textContent,
				'gender': characterContent.querySelector('.gender').textContent,
				'house': characterContent.querySelector('.house').textContent,
				'wand core': characterContent.querySelector('.wand').textContent,
				'alive': characterContent.querySelector('.alive').textContent,
			}
			//	localStorage.setItem('changed', JSON.stringify(objChanged));
			//		console.log(objChanged);
			let objBase = JSON.parse(localStorage.getItem('base'));
			// очистим локал стор
			localStorage.removeItem('base');
			//теперь сравним два объекта,
			if (compare(objBase, objChanged)) {
				//		console.log('равны');
			} else {
				//		console.log('не равны');
				localData[objChanged.name] = objChanged;
				localStorage.localData = JSON.stringify(localData);
			}

			// console.log(localStorage.length, 'первый кейс')
			if (localStorage.length) {
				clear.classList.remove('display-none')
			}

		} else {


			//	console.log('add')
			//	console.log(event.eventPhase)
			characterBlock.addEventListener('pointerleave', finishEdit, {once: true});
			// console.log('remove')
			// characterBlock.removeEventListener('pointerleave', finishEdit);
			let objBase = {
				'name': characterContent.querySelector('.character__name').textContent,
				'actor': characterContent.querySelector('.actor').textContent,
				'gender': characterContent.querySelector('.gender').textContent,
				'house': characterContent.querySelector('.house').textContent,
				'wand core': characterContent.querySelector('.wand').textContent,
				'alive': characterContent.querySelector('.alive').textContent,
			}
			localStorage.setItem('base', JSON.stringify(objBase));
			// console.log(objBase);

			characterContent.querySelector('.editImg').src = 'img/ok.png';
			info__edit.forEach(el => el.setAttribute('contenteditable', 'true'));

			// console.log(localStorage.length, 'второй кейс')
			if (localStorage.length > 1) {
				clear.classList.remove('display-none')
			}

		}

	}

})
