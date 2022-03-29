/* Control sliding menu on screens smaller than a specified breakpoint */
(function(menu_button, links, breakpoint) {
	'use strict';
	var menulink = document.getElementById(menu_button),
	    menu = document.getElementById(links);
		
	menu.className = 'start';
	setTimeout(function() {
		menu.className = 'collapsed';
	}, 20);
		
	menulink.onclick = function() {
		if (menu.className === 'displayed') {
			menu.className = 'collapsed';
		} else {
			menu.className = 'displayed';
		}
		return false;
	};
	
	window.onresize = function() {
		if (window.innerWidth < breakpoint) {
			menu.className = 'collapsed';
		}
	};	
})('menulink', 'navlinks', 700);

// testing current affairs api
//https://rapidapi.com/MyAllies/api/breaking-news/
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'myallies-breaking-news-v1.p.rapidapi.com',
		'X-RapidAPI-Key': '992635b04amsh3ecf4c948377782p1f271bjsn21129e5c436d'
	}
};

fetch('https://myallies-breaking-news-v1.p.rapidapi.com/GetCompanyDetailsBySymbol?symbol=twtr', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



// testing Zippotamus API
// http://www.zippopotam.us/#where
<script type="text/javascript">
var client = new XMLHttpRequest();
client.open("GET", "http://api.zippopotam.us/us/90210", true);
client.onreadystatechange = function() {
	if(client.readyState == 4) {
		alert(client.responseText);
	};
};

client.send();
</script>

// anger management api
https://rapidapi.com/blog/how-to-use-an-api-with-javascript/


//boring api

let url = "http://www.boredapi.com/api/activity/"

fetch('http://www.boredapi.com/api/activity/')
.then(response =>{
    return response.json();
}).then(data =>{
    console.log(data);
})


// random useless fact
https://www.programmableweb.com/api/random-useless-facts-rest-api-v10

https://uselessfacts.jsph.pl/




