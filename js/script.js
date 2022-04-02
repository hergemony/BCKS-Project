const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");

const resultTextEl = document.getElementById('result-text');
const resultContentEl = document.getElementById('result-content');
const form = document.getElementById("search-form");
const city = document.getElementById("search-input-city");
const country = document.getElementById("search-input-country");


// currency-converter
fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

function display(data) {
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = num.value;

  if (currency1 != currency2) {
    convert(currency1, currency2, value);
  } else {
    alert("Choose Different Currencies !!!");
  }
});

function convert(currency1, currency2, value) {
  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
  )
    .then((val) => val.json())
    .then((val) => {
      console.log(Object.values(val.rates)[0]);
      ans.value = Object.values(val.rates)[0];
    });
}



//Cost of living


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com',
    'X-RapidAPI-Key': '992635b04amsh3ecf4c948377782p1f271bjsn21129e5c436d'
  }
};

form.addEventListener('submit', function (event) {

  event.preventDefault();

  const apiUrl = `https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${city.value}&country_name=${country.value}`;

  console.log(apiUrl);

  fetch(apiUrl, options)
    .then(response => response.json())
    .then(response => {
      renderCostOfLivingList(response.prices);
    })
    .catch(err => console.error(err));


})

function renderCostOfLivingList(prices) {

  const ul = document.createElement('ul');

  console.log(prices)

  // Loop through prices data
  for (let index = 0; index < prices.length; index++) {
    const priceData = prices[index];

    // For each price - Generate a li

    const li = document.createElement('li');
    const div = document.createElement('div');
    const title = document.createElement('h4');
    title.textContent = priceData.item_name;
    const p = document.createElement('p')
    p.textContent = "Average Price: " + priceData.avg;

    div.append(title, p);
    li.appendChild(div);
    ul.appendChild(li);

    resultContentEl.append(ul)


  }

}