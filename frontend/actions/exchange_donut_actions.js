import { fetchTopExchangeByVolume, fetchTotalCoinVolume } from '../api_utils/exchange_donut_chart_api';

export const RECEIVE_EXCHANGES_DONUT_DATA = "RECEIVE_EXCHANGES_DONUT_DATA";
export const RECEIVE_TOTAL_VOLUME_DONUT_DATA = "RECEIVE_TOTAL_VOLUME_DONUT_DATA";
export const RESPONSE_ERROR = "RESPONSE_ERROR";


//reponse is API call result, keying into .Data should assign slice of state to an array, e.g. [{}...{}]

const receiveExchangesDonutData = (response) => {
    return {
        type: RECEIVE_EXCHANGES_DONUT_DATA,
        exchangesData: response.Data
    }
}

const receiveTotalVolumeDonutData = (response) => {
    return {
        type: RECEIVE_TOTAL_VOLUME_DONUT_DATA,
        totalData: response.Data
    }
}


//API returns 200 status for error and success, so need conditional here to determine actions
export const fetchTopExchangeForDonut = (from = "BTC", to="USD") => (dispatch) => {
    fetchTopExchangeByVolume(from, to).then(
        fetchedDonutsData => {
            if (fetchedDonutsData.Response === "Error") {
                return dispatch({type: RESPONSE_ERROR, error: fetchedDonutsData.Message});
            }
            
            return dispatch(receiveExchangesDonutData(fetchedDonutsData));
        }
    )
}

export const fetchTotalVolumeForDonut = (to='USD') => (dispatch) => {
    fetchTotalCoinVolume(to).then(fetchedTotalDonutsData => {
      if (fetchedTotalDonutsData.Response === "Error") {
         dispatch({
          type: RESPONSE_ERROR,
          error: fetchedTotalDonutsData.Message
        });
      }

         dispatch(receiveTotalVolumeDonutData(fetchedTotalDonutsData));
    })
}
