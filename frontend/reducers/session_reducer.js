import {
    RECEIVE_CURRENT_USER,
} from '../api_utils/session_api_util';
import {
    RECEIVE_USER_PREFS,
} from '../api_utils/preferences_api_util';
import {merge} from 'lodash';

const _nullUser = Object.freeze({
    id: null,
    coin: null,
    newsSource: null,
    exchange: null,
});

const sessionReducer = (state = _nullUser, action ) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
        return {
            id: action.payload.id,
            coin: action.payload.prefs.coin,
            newsSource: action.payload.prefs.newsSource,
            newsCategory: action.payload.prefs.newsCategory
        };
        case RECEIVE_USER_PREFS:
        return    merge({}, state, {
            coin: action.payload.data.prefs.coin,
            newsSource: action.payload.data.prefs.newsSource,
            exchange: action.payload.data.prefs.newsCategory,
        })
        default:
           return state;
    }
}

export default sessionReducer;
