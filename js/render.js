'use strict';
export let persons = document.createElement('section');
export const clear = document.querySelector('.clear');
persons.classList.add('characters', 'container');

import {finalRender} from "./finalRender.js";

export const render = (data) => {
	let dataClon = JSON.parse(JSON.stringify(data));

	persons.innerHTML = '';

	if (localStorage.getItem('localData')) {
		clear.classList.remove('display-none');
		let newData = JSON.parse(localStorage.getItem('localData'));
		for (name in newData) {
			let index = dataClon.findIndex(obj => obj.name === newData[name].name);
			if (index !== -1) {
				dataClon[index].actor = newData[name].actor;
				dataClon[index].gender = newData[name].gender;
				//dataClon[index].house = newData[name].house;
				dataClon[index].wand.core = newData[name]['wand core'];
				dataClon[index].alive = newData[name].alive;
			}
		}
	}

	if (localStorage.getItem('localData')) {
		finalRender(dataClon);
	} else {
		finalRender(data);
	}
	document.body.append(persons);
}
