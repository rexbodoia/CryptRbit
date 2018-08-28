import { setChartData } from '../../actions/selectors';
import {connect} from 'react-redux';
import DonutChart from './donut_chart';
import { fetchTopExchangeForDonut,
    fetchTotalVolumeForDonut } from '../../actions/exchange_donut_actions';

//under entitites...

const msp = ( state ) => {
    data = state.entitites.exchangeDonutData
    return {
        chartData: setChartData(data.exchangesData, data.totalData)
    }
}

const mdp = (dispatch) => {
    return {
        getExchanges: (from,to) => dispatch(fetchTopExchangeForDonut(from,to)),
        getTotal: (to) => dispatch(fetchTotalVolumeForDonut(to))
    }
}

export default connect(msp,mdp)(DonutChart);