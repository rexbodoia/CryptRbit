export const fetchTopExchangeByVolume = (from, to) => {
return $.ajax({
    type: 'GET',
    url: `https://min-api.cryptocompare.com/data/top/exchanges?fsym=${from}&tsym=${to}`
})
}