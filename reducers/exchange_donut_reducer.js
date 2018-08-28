import { RECEIVE_EXCHANGES_DONUT_DATA } from '../actions/exchange_donut_actions';

const exchangeDonutReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_EXCHANGES_DONUT_DATA:
            return action.data
        default:
            return state;
    }
}

export default exchangeDonutReducer;