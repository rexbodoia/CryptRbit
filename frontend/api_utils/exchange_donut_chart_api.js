

//Get top exchanges by volume for a currency pair. 
//The number of exchanges you get is the minimum of the limit you set (default 5) and the total number of exchanges available

export const fetchTopExchangeByVolume = (from = 'BTC', to = 'USD') => {
  return $.ajax({
    type: "GET",
    url: `https://min-api.cryptocompare.com/data/top/exchanges?fsym=${from}&tsym=${to}`
  });
};


//Get a number of top coins by their total volume accross all markets in the last 24 hours. 
//Deafult value is first page (0) and the top 10 coins.

export const fetchTotalCoinVolume = (to = 'USD') => {
  return $.ajax({
    type: "GET",
      url: `https://min-api.cryptocompare.com/data/top/volumes?tsym=${to}`
  });
};

