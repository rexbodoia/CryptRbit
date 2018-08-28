// filter incoming total_data for donut Chart slice of state 
/* incoming data example : 
    exchangeDonutData.total_data: [{
        CoinInfo: {},
        ConversionInfo: {
            ...
            CurrencyFrom: 'BTC',
            CurrencyTo: 'USD',
            TotalVolume24H
        }
       }] 
*/

export const selectDonutTotals = (targetSlice) => {
   const targetObject = Object.values(targetSlice).ConversionInfo
}