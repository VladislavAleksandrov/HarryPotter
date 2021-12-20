'use strict';
let persons = document.createElement('section');
const clear = document.querySelector('.clear');
persons.classList.add('characters', 'container');

const finalRender = (data) => {
	data.forEach(person => {

		let image = person.image;


		let imgBlock = document.createElement('img');
		imgBlock.setAttribute('src', image);
		imgBlock.setAttribute('alt', `character-photo`);
		imgBlock.classList.add('characters__image');

		let imgBox = document.createElement('div');
		imgBox.classList.add('box');

		let name = person.name;
		let actor = person.actor;
		let gender = person.gender;
		let house = person.house;
		let wandCore = person.wand.core;
		let alive = (person.alive) ? 'yes' : 'no';

		let characterName = document.createElement('div');
		characterName.classList.add('character__name');
		// characterName.setAttribute('contenteditable', 'true');
		characterName.textContent = name;

		let characterBlock = document.createElement('div');
		characterBlock.classList.add('character__block');

		let characterInfo = document.createElement('div');
		characterInfo.classList.add('character__info');

		let characterContent = document.createElement('div');
		characterContent.classList.add('characters__content');

		let editButton = document.createElement('button');
		editButton.classList.add('editButton');
		let editImg = document.createElement('img');
		editImg.setAttribute('src', 'img/editButton.png');
		editImg.classList.add('editImg');

		let template = document.getElementById('temp');
		let contentClone = template.content.cloneNode(true);

		contentClone.querySelector('.actor').textContent = actor;
		contentClone.querySelector('.gender').textContent = gender;
		contentClone.querySelector('.house').textContent = house;
		contentClone.querySelector('.wand').textContent = wandCore;
		contentClone.querySelector('.alive').textContent = alive;
		characterInfo.append(contentClone);


		/*		characterInfo.textContent = `Actor: ${actor}
			Gender: ${gender}
			House: ${house}
			Wand core ${wandCore}
			Alive: ${alive}`*/


		characterContent.append(characterName);
		editButton.append(editImg);
		characterContent.append(characterInfo);
		characterContent.append(editButton);
		imgBox.append(imgBlock);
		characterBlock.append(imgBox);
		characterBlock.append(characterContent);
		persons.append(characterBlock);

		// <div className="character__block"><img src="http://hp-api.herokuapp.com/images/hermione.jpeg" alt="character-photo" className="characters__image">
		// 	<div className="characters__content">
		// 		<div className="character__name">Hermione Granger</div>
		// 		<div className="character__info">Actor: Emma Watson
		// 			Gender: female
		// 			House: Gryffindor
		// 			Wand core dragon heartstring
		// 			Alive: yes
		// 		</div>
		// 	</div>
		// </div>
		//

	})
}

const render = (data) => {

	let dataClon = JSON.parse(JSON.stringify(data));
// let dataClon = [... data];
// 	let dataClon = data.slice();
// dataClon[0].actor = 'faafa';
	console.log(data);
	console.log('local', localStorage.length)
	console.log('render')
	persons.innerHTML = '';

	if (localStorage.getItem('localData')) {

		console.log('check')
		clear.classList.remove('display-none');
		let newData = JSON.parse(localStorage.getItem('localData'));
		for (name in newData) {
			//	console.log('change', newData[name])
			let index = dataClon.findIndex(obj => obj.name === newData[name].name);
			//	console.log(newData[name].name);
			//	console.log('index', index);
			//	console.log(dataClon[0].name)
			if (index !== -1) {
				dataClon[index].actor = newData[name].actor;
				dataClon[index].gender = newData[name].gender;
				//dataClon[index].house = newData[name].house;
				dataClon[index].wand.core = newData[name]['wand core'];
				dataClon[index].alive = newData[name].alive;
			}
			//		console.log('test', data[index])
			//console.log('f', data);
		}
		//	console.log('data change', data);
	}

	if (localStorage.getItem('localData')) {
		console.log('dataClon');
		console.log(dataClon)
		finalRender(dataClon);
	} else {
		finalRender(data);
		console.log('data');
		console.log(data);
	}

	document.body.append(persons);
}
render(data);