import './five.scss';
import '../main-page/menu.scss';

const usdInput = document.querySelector('#js-usd-input');
const output = document.querySelector('#js-output');

const key = '5888f321e45149c7189237658ed2d0ec';
const url = `http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,BYN&format=1`;

document.querySelector('#js-calc-btn').addEventListener('click', async () => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP Error');
    const json = await res.json();
    const result = `На <i>${json.date}:</i> <b>${usdInput.value} USD = ${json.rates.BYN * usdInput.value} BYN</b>`;
    output.innerHTML = result;
});

// { "success": true, "timestamp": 1558207025, "base": "EUR", "date": "2019-05-18", "rates": { "USD": 1.116744, "BYN": 2.327016 } }