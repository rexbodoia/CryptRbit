export const aggregateUSDAPI = () => (
  $.ajax({
    url: "https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=BTC&tsym=USD",
    method: 'GET'
  })
);
