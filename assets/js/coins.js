const coinImg = document.querySelectorAll(".coin-img");
const coinName = document.querySelectorAll(".coin-name");
const coinSymbol = document.querySelectorAll(".coin-symbol");
const liPrice = document.querySelectorAll(".price");
const liChange24h = document.querySelectorAll(".price_change_24h");
const liPlus = document.querySelectorAll(".plus");
const li1hChange = document.querySelectorAll(".change1h");
const li24hChange = document.querySelectorAll(".change24h");
const li7dChange = document.querySelectorAll(".change7d");
const li14dChange = document.querySelectorAll(".change14d");
const li30dChange = document.querySelectorAll(".change30d");
const li1yChange = document.querySelectorAll(".change1y");
const limarketCap24h = document.querySelectorAll(".market_cap");
//const cbPrice = document.querySelectorAll(".cbprice");
const siteTitle = document.querySelectorAll("title");
const cardUl = document.getElementById("cardContainer");
const liCard = document.querySelectorAll(".card");

var myHeaders = new Headers();
myHeaders.append('pragma', 'no-cache');
myHeaders.append('cache-control', 'no-cache');

var myInit = {
method: 'GET',
headers: myHeaders,
};

var myCoins = {
  coinGeckoData: function() {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2Cethereum%2Cripple%2Clitecoin%2Cbitcoin-cash%2Ceos%2Cstellar%2Cethereum-classic%2C0x&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C1y", myInit)
    .then(response => response.json())
    .then(data => {
      //cardUl.style.visibility = "visible";
      var i;
      for (i = 0; i < data.length; ++i) {
        if(liCard[i].classList.contains('coin-btc')) {
          var myFixed = 2;
        }
        if(liCard[i].classList.contains('coin-eth')) {
          var myFixed = 2;
        }
        if(liCard[i].classList.contains('coin-xrp')) {
          var myFixed = 4;
        }
        if(liCard[i].classList.contains('coin-bch')) {
          var myFixed = 2;
        }
        if(liCard[i].classList.contains('coin-ltc')) {
          var myFixed = 2;
        }
        if(liCard[i].classList.contains('coin-eos')) {
          var myFixed = 3;
        }
        if(liCard[i].classList.contains('coin-xlm')) {
          var myFixed = 6;
        }
        if(liCard[i].classList.contains('coin-etc')) {
          var myFixed = 3;
        }
        if(liCard[i].classList.contains('coin-zrx')) {
          var myFixed = 6;
        }
        //console.log(data);
        //liPrice[i].textContent = '€' + data[i].current_price.toFixed(myFixed);
        coinImg[i].src = data[i].image;
        coinName[i].textContent = data[i].name;
        coinSymbol[i].textContent = data[i].symbol;
        liChange24h[i].textContent = data[i].price_change_24h.toFixed(myFixed) + '€ /24h';
        li1hChange[i].textContent = data[i].price_change_percentage_1h_in_currency.toFixed(1) + '%';
        li24hChange[i].textContent = data[i].price_change_percentage_24h_in_currency.toFixed(1) + '%';
        li7dChange[i].textContent = data[i].price_change_percentage_7d_in_currency.toFixed(1) + '%';
        li14dChange[i].textContent = data[i].price_change_percentage_14d_in_currency.toFixed(1) + '%';
        li30dChange[i].textContent = data[i].price_change_percentage_30d_in_currency.toFixed(1) + '%';
        li1yChange[i].textContent = data[i].price_change_percentage_1y_in_currency.toFixed(1) + '%';
        limarketCap24h[i].textContent = data[i].market_cap_change_percentage_24h.toFixed(2) + '%';

        function sparklines() {
          var btcValues = data[0].sparkline_in_7d.price;
          var ethValues = data[1].sparkline_in_7d.price;
          var xrpValues = data[2].sparkline_in_7d.price;
          var bchValues = data[3].sparkline_in_7d.price;
          var ltcValues = data[4].sparkline_in_7d.price;
          var eosValues = data[5].sparkline_in_7d.price;
          var xlmValues = data[6].sparkline_in_7d.price;
          var etcValues = data[7].sparkline_in_7d.price;
          var zrxValues = data[8].sparkline_in_7d.price;
          var btcData = {
            labels: [],
            series: [btcValues]
          };
          var ethData = {
            labels: [],
            series: [ethValues]
          };
          var xrpData = {
            labels: [],
            series: [xrpValues]
          };
          var bchData = {
            labels: [],
            series: [bchValues]
          };
          var ltcData = {
            labels: [],
            series: [ltcValues]
          };
          var eosData = {
            labels: [],
            series: [eosValues]
          };
          var xlmData = {
            labels: [],
            series: [xlmValues]
          };
          var etcData = {
            labels: [],
            series: [etcValues]
          };
          var zrxData = {
            labels: [],
            series: [zrxValues]
          };
          var options = {
            showPoint: false,
            lineSmooth: false,
            width: '110px',
            height: '60px',
            showArea: true,
            axisX: {
              showGrid: true,
              showLabel: true,
              offset: 0
            },
            axisY: {
              showGrid: false,
              showLabel: false,
              offset: 0
            },
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          };
          var responsiveOptions = [
            ['screen and (min-width: 400px)', {
              width: '156px',
              height: '70px'
              }],
            ['screen and (min-width: 550px)', {
              width: '250px',
              height: '70px'
              }],
            ['screen and (min-width: 650px)', {
              width: '300px',
              height: '70px'
              }],
            ['screen and (min-width: 830px)', {
              width: '156px',
              height: '70px'
              }],
            ['screen and (min-width: 950px)', {
              width: '185px',
              height: '70px'
              }],
            ['screen and (min-width: 1070px)', {
              width: '200px',
              height: '70px'
              }],
            ['screen and (min-width: 1250px)', {
              width: '175px',
              height: '70px'
              }]
            ];
          new Chartist.Line('#chart-btc', btcData, options, responsiveOptions);
          new Chartist.Line('#chart-eth', ethData, options, responsiveOptions);
          new Chartist.Line('#chart-xrp', xrpData, options, responsiveOptions);
          new Chartist.Line('#chart-bch', bchData, options, responsiveOptions);
          new Chartist.Line('#chart-ltc', ltcData, options, responsiveOptions);
          new Chartist.Line('#chart-eos', eosData, options, responsiveOptions);
          new Chartist.Line('#chart-xlm', xlmData, options, responsiveOptions);
          new Chartist.Line('#chart-etc', etcData, options, responsiveOptions);
          new Chartist.Line('#chart-zrx', zrxData, options, responsiveOptions);
        }

        function addColors() {
          if (data[i].price_change_percentage_1h_in_currency.toFixed(1) <= -1.5) {
            li1hChange[i].style.color = "#e15241";
            liPrice[i].classList.add("downColor");
          } else if (data[i].price_change_percentage_1h_in_currency.toFixed(1) > -1.5 && data[i].price_change_percentage_1h_in_currency.toFixed(1) <= 0) {
            li1hChange[i].style.color = "#e15241";
            liPrice[i].style.color = "#e15241";
            if (liPrice[i].classList.contains("downColor")) {
              liPrice[i].classList.remove("downColor");
            }
            if (liPrice[i].classList.contains("upColor")) {
              liPrice[i].classList.remove("upColor");
            }
          } else if (data[i].price_change_percentage_1h_in_currency.toFixed(1) >= 0 && data[i].price_change_percentage_1h_in_currency.toFixed(1) < 1.5) {
            liPrice[i].style.color = "#4eaf0a";
            li1hChange[i].style.color = "#4eaf0a";
            if (liPrice[i].classList.contains("upColor")) {
              liPrice[i].classList.remove("upColor");
            }
            if (liPrice[i].classList.contains("downColor")) {
              liPrice[i].classList.remove("downColor");
            }
          } else {
            li1hChange[i].style.color = "#4eaf0a";
            liPrice[i].classList.add("upColor");
          }
          if (data[i].price_change_percentage_24h_in_currency.toFixed(1) <= 0) {
            li24hChange[i].style.color = "#e15241";
            liPlus[i].style.display = "none";
          } else {
            li24hChange[i].style.color = "#4eaf0a";
            liPlus[i].style.display = "inline";
          }
          if (data[i].price_change_percentage_7d_in_currency.toFixed(1) <= 0) {
            li7dChange[i].style.color = "#e15241";
          } else {
            li7dChange[i].style.color = "#4eaf0a";
          }
          if (data[i].price_change_percentage_14d_in_currency.toFixed(1) <= 0) {
            li14dChange[i].style.color = "#e15241";
          } else {
            li14dChange[i].style.color = "#4eaf0a";
          }
          if (data[i].price_change_percentage_30d_in_currency.toFixed(1) <= 0) {
            li30dChange[i].style.color = "#e15241";
          } else {
            li30dChange[i].style.color = "#4eaf0a";
          }
          if (data[i].price_change_percentage_1y_in_currency.toFixed(1) <= 0) {
            li1yChange[i].style.color = "#e15241";
          } else {
            li1yChange[i].style.color = "#4eaf0a";
          }
          if (data[i].market_cap_change_percentage_24h.toFixed(1) <= 0) {
            limarketCap24h[i].style.color = "#e15241";
          } else {
            limarketCap24h[i].style.color = "#4eaf0a";
          }
        }
        sparklines();
        addColors();
      }
    });
  },
  coinBaseData: function() {
    var btc, eth, xrp, bch, ltc, eos, xlm, etc, zrx;
    fetch('https://api.pro.coinbase.com/products/BTC-EUR/ticker')
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      btc = data;
      return fetch('https://api.pro.coinbase.com/products/ETH-EUR/ticker');
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      eth = data;
      return fetch('https://api.pro.coinbase.com/products/XRP-EUR/ticker');
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      xrp = data;
      return fetch('https://api.pro.coinbase.com/products/BCH-EUR/ticker');
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      bch = data;
      return fetch('https://api.pro.coinbase.com/products/LTC-EUR/ticker');
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      ltc = data;
      return fetch('https://api.pro.coinbase.com/products/EOS-EUR/ticker');
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      eos = data;
      return fetch('https://api.pro.coinbase.com/products/XLM-EUR/ticker');
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      xlm = data;
      return fetch('https://api.pro.coinbase.com/products/ETC-EUR/ticker');
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      etc = data;
      return fetch('https://api.pro.coinbase.com/products/ZRX-EUR/ticker');
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      zrx = data;
      liPrice[0].textContent = '€' + parseFloat(btc.price).toFixed(2);
      liPrice[1].textContent = '€' + parseFloat(eth.price).toFixed(2);
      liPrice[2].textContent = '€' + parseFloat(xrp.price).toFixed(4);
      liPrice[3].textContent = '€' + parseFloat(bch.price).toFixed(2);
      liPrice[4].textContent = '€' + parseFloat(ltc.price).toFixed(2);
      liPrice[5].textContent = '€' + parseFloat(eos.price).toFixed(3);
      liPrice[6].textContent = '€' + parseFloat(xlm.price).toFixed(6);
      liPrice[7].textContent = '€' + parseFloat(etc.price).toFixed(3);
      liPrice[8].textContent = '€' + parseFloat(zrx.price).toFixed(6);
      siteTitle[0].textContent = 'BTC €' + parseFloat(btc.price).toFixed(2) + ' · ETH €' + parseFloat(eth.price).toFixed(2) + ' - Crypto Coins Now';
      }).catch(function (error) {
    });
  }
}

myCoins.coinBaseData();
setInterval(myCoins.coinBaseData, 5000);
myCoins.coinGeckoData();
setInterval(myCoins.coinGeckoData, 20000);

/*
var view = {
  displayData: function() {
    myCoins.coinGeckoData();
    for (i = 0; i < data.length; ++i) {
      var data = myCoins.coinGeckoData.data[i]
      console.log(data[i]);
    }
  }
}
*/