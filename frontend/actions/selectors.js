// filter incoming total_data for donut Chart slice of state 
/* incoming data example : 
    exchangeDonutData.total_data = [{
        SYMBOL: "",
        VOLUME24HRTO: 0,
        },...] 
*/


/* exchangeDonutData.exchangesData = [{
                                exchange: "",
                                fromSymbol: "",
                                toSymbol: "",
                                volume24h: 0,
                                volume24hTo: 0,
                        },...]

*/

export const setChartData = (exchangeSlice, totalSlice) => {
    
    targetCurrency = exchangeSlice[0].exchange;
    const totalVolume24H = (totals, coin) => { 
       let target = totals.forEach(obj => {
            if (obj.SYMBOL === coin) return obj
        })    
       return selectDonutTotals(target).VOLUME24HRTO;
    } 
 

    const donutChartData = exchangeSlice

    const percentageCalc = (data) => {
        let topExchangeSum = 0;
        data.forEach( (exchange, total) => {
    //1. calculate precentage of total
        const percentVol = exchange.volume24h/total * 100;
    //2. assign this new percentage of total to a new key
        exchange.percentageTotal = percentVol;
    //3. determine total volume of top five (and subract from the totalVolume24H (in coin))
        topExchangeSum += exchange.volume24h});
    
        return topExchangeSum;
    }

    const createOtherExchange = (totalValue, totalVolume24H) => {
        const otherPercentage = (totalVolume24H - totalValue) / 100;
        return  {
            exchange: 'other', 
            percentageTotal: otherPercentage
        }
    }

    return donutChartData.push(createOtherExchange((percentageCalc(donutChartData)), totalVolume24H(totalSlice,targetCurrency)));
}