const input = document.querySelector('#name');
const selector = document.querySelector('#test');
selector.value = localStorage.getItem('selector')
input.value = localStorage.getItem('input')
// localStorage.selector = selector.value;
// localStorage.input = input.value
selector.addEventListener('change', () => {
localStorage.selector = selector.value;
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
	localStorage.input = input.value
	searchFilter(input.value, selector.value);
});

searchFilter(input.value, selector.value)