if (typeof fetch === "undefined") global.fetch = (await import("node-fetch")).default;

export const useGlobal = async () => {
	try {
		const response = await fetch('http://hp-api.herokuapp.com/api/characters')
		const array = await response.json()
		let bigData = [].concat(array);
		if (response.ok) return bigData;
		throw new Error()
	}
	catch (err) {
		console.log(err, 'Загружен не весь массив персонажей')
		const {data} = await import("../data/hp.js");
		return data;
	}
}


