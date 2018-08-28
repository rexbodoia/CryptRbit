export const aggregateUSDAPI = (coinPair, limit) => (
  $.ajax({
    url: `https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${coinPair[0]}&tsym=${coinPair[1]}&limit=${limit}`,
    method: 'GET'
  })
);
