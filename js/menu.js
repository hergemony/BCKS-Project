var city = document.getElementById('search-input-city')
var country = document.getElementById('search-input-country')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com',
		'X-RapidAPI-Key': '992635b04amsh3ecf4c948377782p1f271bjsn21129e5c436d'
	}
};

var apiUrl = `https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${city}&country_name=${country}`

fetch(apiUrl, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


alert();

console.log(apiUrl);