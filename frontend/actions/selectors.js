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
    const targetCurrency = exchangeSlice[0].fromSymbol;

    //calculates total 24h volume of a coin in 'USD'
    const totalVolume24H = (totals, coin) => { 
       let target;
        totals.forEach(obj => {
            if (obj.SYMBOL === coin) {
                target = obj;
            } 
        })    
       return target.VOLUME24HOURTO;
    } 
    

    const donutChartData = exchangeSlice
    //calculate total volume per exchange as % of totalvolume in USD
    const percentageCalc = (data, totalVolume) => {
        let topExchangeSum = 0;
        data.forEach( (exchange) => {
            exchange.percentageTotal = exchange.volume24hTo / totalVolume * 100;
            topExchangeSum += exchange.volume24hTo
        });
        //return sum of all top 5 exchanges total volumes
        return topExchangeSum;
    }

    //create catchall 'other' category for the remaining total 24h volume %
    const createOtherExchange = (totalValue, totalVolume24H) => {
        const otherPercentage = (totalVolume24H - totalValue) / totalVolume24H * 100;
        return  {
            exchange: 'other', 
            percentageTotal: otherPercentage
        }
    }
    //call functions
    const total = totalVolume24H(totalSlice, targetCurrency);
    const otherObj = createOtherExchange(percentageCalc(donutChartData, total), total);
    //return new data array with all the values for chart
    return [...donutChartData,otherObj];
}