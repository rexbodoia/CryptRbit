import { fetchTopExchangeByVolume, fetchTotalCoinVolume} from '../api_utils/exchange_pie_chart_api';

export const RECEIVE_EXCHANGES_DONUT_DATA = "RECEIVE_EXCHANGES_DONUT_DATA"
export const RECEIVE_TOTAL_VOLUME_DONUT_DATA = "RECEIVE_TOTAL_VOLUME_DONUT_DATA"

const receiveExchangesDonutData = (exchanges_data) => {
    return {
        type: RECEIVE_EXCHANGES_DONUT_DATA,
        exchanges_data
    }
}

const receiveTotalVolumeDonutData = (total_data) => {
    return {
        type: RECEIVE_TOTAL_VOLUME_DONUT_DATA,
        total_data
    }
}


//needs testing, specifically if .Response and .Message give intended result
//API returns 200 status for error and success, so need conditional here to determine actions
export const fetchTopExchangeForDonut = (from, to) => {
    fetchTopExchangeByVolume(from, to).then(
        fetchedDonutsData => {
            if (fetchedDonutsData.Response === "Error") {
                return dispatch({type: RESPONSE_ERROR, error: fetchedDonutsData.Message})
            }
            
            return dispatch(receiveExchangesDonutData(fetchedDonutsData));
        }
    )
}

export const fetchTotalVolumeForDonut = (to) => {
    fetchTotalCoinVolume(to).then(fetchedTotalDonutsData => {
      if (fetchedTotalDonutsData.Response === "Error") {
        return dispatch({
          type: RESPONSE_ERROR,
          error: fetchedTotalDonutsData.Message
        });
      }

        return dispatch(receiveTotalVolumeDonutData(fetchedTotalDonutsData));
    });
}
