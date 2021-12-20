'use strict';
let persons = document.createElement('section');

persons.classList.add('characters', 'container');
const getFromData = (data) => {
	persons.innerHTML = '';
	data.forEach(pers => {

		let image = pers.image;


		let imgBlock = document.createElement('img');
		imgBlock.setAttribute('src', image);
		imgBlock.setAttribute('alt', `character-photo`);
		imgBlock.classList.add('characters__image');

		let imgBox = document.createElement('div');
		imgBox.classList.add('box');

		let name = pers.name;
		let actor = pers.actor;
		let gender = pers.gender;
		let house = pers.house;
		let wandCore = pers.wand.core;
		let alive = (pers.alive) ? 'yes' : 'no';

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
		editImg.setAttribute('src', '../img/editButton.png');
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

	document.body.append(persons);
}
getFromData(data);