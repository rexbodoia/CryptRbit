import { setChartData } from '../../actions/selectors';
import {connect} from 'react-redux';
import DonutChart from './donut_chart';
import {
    fetchTopExchangeForDonut,
    fetchTotalVolumeForDonut } from '../../actions/exchange_donut_actions';

//under entitites...

const msp = ( state ) => { 
    const data = state.entities.exchangeDonutData;
    let chartData;
    let coinPair;

    if (data.totalData && data.exchangesData) {
       chartData = setChartData(data.exchangesData, data.totalData)
    } else {
        chartData = {}
    };

    if (state.entities.coinPair) {
        coinPair = state.entities.coinPair
    } else if ( state.session.coin) {
        coinPair = {fsym: state.session.coin, tsym: "USD" }
    } else {
        coinPair = { fsym: "BTC", tsym: "USD"}
    }

    return {
            chartData: chartData,
            coinPair: coinPair
    }
}

const mdp = (dispatch) => {
    return {
        getExchanges: (from,to) => dispatch(fetchTopExchangeForDonut(from,to)),
        getTotal: (to) => dispatch(fetchTotalVolumeForDonut(to))
    }
}

export default connect(msp,mdp)(DonutChart);
