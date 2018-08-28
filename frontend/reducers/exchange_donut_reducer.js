import { RECEIVE_EXCHANGES_DONUT_DATA, 
    RECEIVE_TOTAL_VOLUME_DONUT_DATA } from '../actions/exchange_donut_actions';
import { merge } from 'lodash';

const exchangeDonutReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_EXCHANGES_DONUT_DATA:
            return merge({}, state, {exchangesData: action.exchangesData})
        case RECEIVE_TOTAL_VOLUME_DONUT_DATA:
            return merge({}, state, { totalData: action.totalData })
        default:
            return state;
    }
}

export default exchangeDonutReducer;