import {persons} from "./render.js";

export const finalRender = (data) => {
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

		characterContent.append(characterName);
		editButton.append(editImg);
		characterContent.append(characterInfo);
		characterContent.append(editButton);
		imgBox.append(imgBlock);
		characterBlock.append(imgBox);
		characterBlock.append(characterContent);
		persons.append(characterBlock);
	})
}