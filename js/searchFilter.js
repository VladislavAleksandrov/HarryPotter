const input = document.querySelector('#name');
const selector = document.querySelector('#test');
selector.addEventListener('change', () => {
//	console.log('поле селектора', selector.value);
	//console.log('селектор инклюдс дата', data.filter(obj => selector.value.includes(obj.house)));
	//console.log('дата инклюдс селектор', data.filter(obj => obj.house.includes(selector.value)));
//	console.log('строгое равенство', data.filter(obj => selector.value === (obj.house)));
	//console.log('test на равенство с Hufflepuff', data.filter(obj => obj.house === 'Hufflepuff'));
	return searchFilter(input.value, selector.value);
})


const searchFilter = (name, school) => {
	if (school === 'No') {
		return render(data.filter(obj =>
			obj.name.toLowerCase().includes(name.toLowerCase())).filter(obj => obj.house === ''));
	}
	return render(data.filter(obj =>
		obj.name.toLowerCase().includes(name.toLowerCase())).filter(obj => obj.house.includes(school)));
}


input.addEventListener('input', () => {
//	console.log('input =', input.value);
//	console.log(data.filter(obj => obj.house.includes('Hufflepuff')));
	searchFilter(input.value, selector.value)
});

//console.log(window.onload);

// {
// 	"name": "Cedric Diggory",
// 	"species": "human",
// 	"gender": "male",
// 	"house": "Hufflepuff",
// 	"dateOfBirth": "",
// 	"yearOfBirth": 1977,
// 	"ancestry": "",
// 	"eyeColour": "grey",
// 	"hairColour": "brown",
// 	"wand": {"wood": "ash", "core": "unicorn hair", "length": 12.25},
// 	"patronus": "",
// 	"hogwartsStudent": true,
// 	"hogwartsStaff": false,
// 	"actor": "Robert Pattinson",
// 	"alive": false,
// 	"image": "http://hp-api.herokuapp.com/images/cedric.png"
// }