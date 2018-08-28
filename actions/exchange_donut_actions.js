import {fetchTopExchangeByVolume} from '../api_utils/exchange_pie_chart_api';

export const RECEIVE_EXCHANGES_DONUT_DATA = "RECEIVE_EXCHANGES_DONUT_DATA"

const receiveExchangesPieData = (data) => {
    return {
        type: RECEIVE_EXCHANGES_DONUT_DATA,
        data
    }
}


//needs testing, specifically if .Response and .Message give intended result
//API returns 200 status for error and success, so need conditional here to determine actions
export const fetchTopExchangeForDonut = () => {
    fetchTopExchangeByVolume().then(
        fetchedDonutsData => {
            if (fetchedDonutsData.Response === "Error") {
                return dispatch({type: RESPONSE_ERROR, error: fetchedDonutsData.Message})
            }
            
            return dispatch(receiveExchangesPieData(fetchedDonutsData))
        }
    )
}