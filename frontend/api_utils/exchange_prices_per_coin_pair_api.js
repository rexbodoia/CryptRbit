export const fetchExchangePricesPerCoinPair = (fsym, tsym, limit) => (
  $.ajax({
    url: `https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${fsym}&tsym=${tsym}&limit=${limit}`,
    method: 'GET'
  })
);

export const fetchTopCoinPairs = () => (
  $.ajax({
    url: `https://min-api.cryptocompare.com/data/top/volumes?tsym=USD&limit=50`,
    method: 'GET'
  })
);
