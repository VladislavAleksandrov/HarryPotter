/*if (typeof fetch === "undefined") global.fetch = (await import("node-fetch")).default;
console.log(fetch);
fetch('https://promise.ymatuhin.workers.dev', {
	method: 'GET',
}).then(response => response.json())
	.then(comment => console.log('вывод', comment));*/
// Для проекта по Гарри Поттеру:

// 1. вместо использования массива персонажей напрямую, получить их с помощью запроса к серверу:
// http://hp-api.herokuapp.com/api/characters

// 2. (дополнительно, если успевайте) Сделать анимацию (мигание, то есть появление и исчезновение) теней вокруг карточек с помощью промиосов.
// let bigData = [];
if (typeof fetch === "undefined") global.fetch = (await import("node-fetch")).default;
const useGlobal = () => {
	fetch('http://hp-api.herokuapp.com/api/characters')
		.then(response => response.json())
		.then(array => {
			let bigData = [].concat(array);
			console.log(bigData)
			data = bigData;
			searchFilter(input.value, selector.value);
		})
}
useGlobal();

/*
const getData = async () => {
	let response = await fetch('http://hp-api.herokuapp.com/api/characters', {
		method: 'GET',
	})
	let array = await response.json();
return	array;
}
getData();*/
