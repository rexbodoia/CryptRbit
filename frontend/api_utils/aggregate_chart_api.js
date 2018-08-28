export const fetchTopExchangeByVolume = () => {
return $.ajax({
    type: 'GET',
    url: `https://min-api.cryptocompare.com/data/top/exchanges?fsym=${BTC}&tsym=${USD}`,
    success(data) {
        console.log("We have your weather!")
        console.log(data);
    },
})
}