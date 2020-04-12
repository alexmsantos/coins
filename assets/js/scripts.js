const ul = document.getElementById('cardContainer');
const liBitcoin = document.getElementById('bitcoin');
const liBtcPrice = document.getElementById("bitcoin").getElementsByClassName("price")[0];
const liBtc1hChange = document.getElementById("bitcoin").getElementsByClassName("1hChange")[0];
const liBtc24hChange = document.getElementById("bitcoin").getElementsByClassName("24hChange")[0];
const liBtc7dChange = document.getElementById("bitcoin").getElementsByClassName("7dChange")[0];
const liBtc14dChange = document.getElementById("bitcoin").getElementsByClassName("14dChange")[0];
const liBtc30dChange = document.getElementById("bitcoin").getElementsByClassName("30dChange")[0];
const liBtc1yChange = document.getElementById("bitcoin").getElementsByClassName("1yChange")[0];
const liEthereum = document.getElementById('ethereum');
const liEthPrice = document.getElementById("ethereum").getElementsByClassName("price")[0];
const liEth1hChange = document.getElementById("ethereum").getElementsByClassName("1hChange")[0];
const liEth24hChange = document.getElementById("ethereum").getElementsByClassName("24hChange")[0];
const liEth7dChange = document.getElementById("ethereum").getElementsByClassName("7dChange")[0];
const liEth14dChange = document.getElementById("ethereum").getElementsByClassName("14dChange")[0];
const liEth30dChange = document.getElementById("ethereum").getElementsByClassName("30dChange")[0];
const liEth1yChange = document.getElementById("ethereum").getElementsByClassName("1yChange")[0];
const liRipple = document.getElementById('ripple');
const liXrpPrice = document.getElementById("ripple").getElementsByClassName("price")[0];
const liXrp1hChange = document.getElementById("ripple").getElementsByClassName("1hChange")[0];
const liXrp24hChange = document.getElementById("ripple").getElementsByClassName("24hChange")[0];
const liXrp7dChange = document.getElementById("ripple").getElementsByClassName("7dChange")[0];
const liXrp14dChange = document.getElementById("ripple").getElementsByClassName("14dChange")[0];
const liXrp30dChange = document.getElementById("ripple").getElementsByClassName("30dChange")[0];
const liXrp1yChange = document.getElementById("ripple").getElementsByClassName("1yChange")[0];
const liLitecoin = document.getElementById('litecoin');
const liLtcPrice = document.getElementById("litecoin").getElementsByClassName("price")[0];
const liLtc1hChange = document.getElementById("litecoin").getElementsByClassName("1hChange")[0];
const liLtc24hChange = document.getElementById("litecoin").getElementsByClassName("24hChange")[0];
const liLtc7dChange = document.getElementById("litecoin").getElementsByClassName("7dChange")[0];
const liLtc14dChange = document.getElementById("litecoin").getElementsByClassName("14dChange")[0];
const liLtc30dChange = document.getElementById("litecoin").getElementsByClassName("30dChange")[0];
const liLtc1yChange = document.getElementById("litecoin").getElementsByClassName("1yChange")[0];
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2Cethereum%2Cripple%2Clitecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C1y';

function loadCoins() {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    liBtcPrice.textContent = data[0].current_price + ' €';
    liBtc1hChange.textContent = data[0].price_change_percentage_1h_in_currency.toFixed(1) + '%';
    liBtc24hChange.textContent = data[0].price_change_percentage_24h_in_currency.toFixed(1) + '%';
    liBtc7dChange.textContent = data[0].price_change_percentage_7d_in_currency.toFixed(1) + '%';
    liBtc14dChange.textContent = data[0].price_change_percentage_14d_in_currency.toFixed(1) + '%';
    liBtc30dChange.textContent = data[0].price_change_percentage_30d_in_currency.toFixed(1) + '%';
    liBtc1yChange.textContent = data[0].price_change_percentage_1y_in_currency.toFixed(1) + '%';
    if (data[0].price_change_percentage_1h_in_currency.toFixed(1) <= 0) {
    	liBtc1hChange.style.color = "#e15241";
        liBtcPrice.style.color = "#e15241";
    } else {
    	liBtc1hChange.style.color = "#4eaf0a";
        liBtcPrice.style.color = "#4eaf0a";
    }
    if (data[0].price_change_percentage_24h_in_currency.toFixed(1) <= 0) {
    	liBtc24hChange.style.color = "#e15241";
    } else {
    	liBtc24hChange.style.color = "#4eaf0a";
    }
    if (data[0].price_change_percentage_7d_in_currency.toFixed(1) <= 0) {
        liBtc7dChange.style.color = "#e15241";
    } else {
        liBtc7dChange.style.color = "#4eaf0a";
    }
    if (data[0].price_change_percentage_14d_in_currency.toFixed(1) <= 0) {
        liBtc14dChange.style.color = "#e15241";
    } else {
        liBtc14dChange.style.color = "#4eaf0a";
    }
    if (data[0].price_change_percentage_30d_in_currency.toFixed(1) <= 0) {
        liBtc30dChange.style.color = "#e15241";
    } else {
        liBtc30dChange.style.color = "#4eaf0a";
    }
    if (data[0].price_change_percentage_1y_in_currency.toFixed(1) <= 0) {
        liBtc1yChange.style.color = "#e15241";
    } else {
        liBtc1yChange.style.color = "#4eaf0a";
    }
    liEthPrice.textContent = data[1].current_price + ' €';
    liEth1hChange.textContent = data[1].price_change_percentage_1h_in_currency.toFixed(1) + '%';
    liEth24hChange.textContent = data[1].price_change_percentage_24h_in_currency.toFixed(1) + '%';
    liEth7dChange.textContent = data[1].price_change_percentage_7d_in_currency.toFixed(1) + '%';
    liEth14dChange.textContent = data[1].price_change_percentage_14d_in_currency.toFixed(1) + '%';
    liEth30dChange.textContent = data[1].price_change_percentage_30d_in_currency.toFixed(1) + '%';
    liEth1yChange.textContent = data[1].price_change_percentage_1y_in_currency.toFixed(1) + '%';
    if (data[1].price_change_percentage_1h_in_currency.toFixed(1) <= 0) {
    	liEth1hChange.style.color = "#e15241";
        liEthPrice.style.color = "#e15241";
    } else {
    	liEth1hChange.style.color = "#4eaf0a";
        liEthPrice.style.color = "#4eaf0a";
    }
    if (data[1].price_change_percentage_24h_in_currency.toFixed(1) <= 0) {
    	liEth24hChange.style.color = "#e15241";
    } else {
    	liEth24hChange.style.color = "#4eaf0a";
    }
    if (data[1].price_change_percentage_7d_in_currency.toFixed(1) <= 0) {
        liEth7dChange.style.color = "#e15241";
    } else {
        liEth7dChange.style.color = "#4eaf0a";
    }
    if (data[1].price_change_percentage_14d_in_currency.toFixed(1) <= 0) {
        liEth14dChange.style.color = "#e15241";
    } else {
        liEth14dChange.style.color = "#4eaf0a";
    }
    if (data[1].price_change_percentage_30d_in_currency.toFixed(1) <= 0) {
        liEth30dChange.style.color = "#e15241";
    } else {
        liEth30dChange.style.color = "#4eaf0a";
    }
    if (data[1].price_change_percentage_1y_in_currency.toFixed(1) <= 0) {
        liEth1yChange.style.color = "#e15241";
    } else {
        liEth1yChange.style.color = "#4eaf0a";
    }
    liXrpPrice.textContent = data[2].current_price + ' €';
    liXrp1hChange.textContent = data[2].price_change_percentage_1h_in_currency.toFixed(1) + '%';
    liXrp24hChange.textContent = data[2].price_change_percentage_24h_in_currency.toFixed(1) + '%';
    liXrp7dChange.textContent = data[2].price_change_percentage_7d_in_currency.toFixed(1) + '%';
    liXrp14dChange.textContent = data[2].price_change_percentage_14d_in_currency.toFixed(1) + '%';
    liXrp30dChange.textContent = data[2].price_change_percentage_30d_in_currency.toFixed(1) + '%';
    liXrp1yChange.textContent = data[2].price_change_percentage_1y_in_currency.toFixed(1) + '%';
    if (data[2].price_change_percentage_1h_in_currency.toFixed(1) <= 0) {
    	liXrp1hChange.style.color = "#e15241";
        liXrpPrice.style.color = "#e15241";
    } else {
    	liXrp1hChange.style.color = "#4eaf0a";
        liXrpPrice.style.color = "#4eaf0a";
    }
    if (data[2].price_change_percentage_24h_in_currency.toFixed(1) <= 0) {
    	liXrp24hChange.style.color = "#e15241";
    } else {
    	liXrp24hChange.style.color = "#4eaf0a";
    }
    if (data[2].price_change_percentage_7d_in_currency.toFixed(1) <= 0) {
        liXrp7dChange.style.color = "#e15241";
    } else {
        liXrp7dChange.style.color = "#4eaf0a";
    }
    if (data[2].price_change_percentage_14d_in_currency.toFixed(1) <= 0) {
        liXrp14dChange.style.color = "#e15241";
    } else {
        liXrp14dChange.style.color = "#4eaf0a";
    }
    if (data[2].price_change_percentage_30d_in_currency.toFixed(1) <= 0) {
        liXrp30dChange.style.color = "#e15241";
    } else {
        liXrp30dChange.style.color = "#4eaf0a";
    }
    if (data[2].price_change_percentage_1y_in_currency.toFixed(1) <= 0) {
        liXrp1yChange.style.color = "#e15241";
    } else {
        liXrp1yChange.style.color = "#4eaf0a";
    }
    liLtcPrice.textContent = data[3].current_price + ' €';
    liLtc1hChange.textContent = data[3].price_change_percentage_1h_in_currency.toFixed(1) + '%';
    liLtc24hChange.textContent = data[3].price_change_percentage_24h_in_currency.toFixed(1) + '%';
    liLtc7dChange.textContent = data[3].price_change_percentage_7d_in_currency.toFixed(1) + '%';
    liLtc14dChange.textContent = data[3].price_change_percentage_14d_in_currency.toFixed(1) + '%';
    liLtc30dChange.textContent = data[3].price_change_percentage_30d_in_currency.toFixed(1) + '%';
    liLtc1yChange.textContent = data[3].price_change_percentage_1y_in_currency.toFixed(1) + '%';
    if (data[3].price_change_percentage_1h_in_currency.toFixed(1) <= 0) {
    	liLtc1hChange.style.color = "#e15241";
        liLtcPrice.style.color = "#e15241";
    } else {
    	liLtc1hChange.style.color = "#4eaf0a";
        liLtcPrice.style.color = "#4eaf0a";
    }
    if (data[3].price_change_percentage_24h_in_currency.toFixed(1) <= 0) {
    	liLtc24hChange.style.color = "#e15241";
    } else {
    	liLtc24hChange.style.color = "#4eaf0a";
    }
    if (data[3].price_change_percentage_7d_in_currency.toFixed(1) <= 0) {
        liLtc7dChange.style.color = "#e15241";
    } else {
        liLtc7dChange.style.color = "#4eaf0a";
    }
    if (data[3].price_change_percentage_14d_in_currency.toFixed(1) <= 0) {
        liLtc14dChange.style.color = "#e15241";
    } else {
        liLtc14dChange.style.color = "#4eaf0a";
    }
    if (data[3].price_change_percentage_30d_in_currency.toFixed(1) <= 0) {
        liLtc30dChange.style.color = "#e15241";
    } else {
        liLtc30dChange.style.color = "#4eaf0a";
    }
    if (data[3].price_change_percentage_1y_in_currency.toFixed(1) <= 0) {
        liLtc1yChange.style.color = "#e15241";
    } else {
        liLtc1yChange.style.color = "#4eaf0a";
    }
  });
}

loadCoins();
setInterval(loadCoins, 60000);