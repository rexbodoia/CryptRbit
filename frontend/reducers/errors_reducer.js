import { RESPONSE_ERROR } from '../actions/exchange_prices_per_coin_pair_actions';

import { merge } from 'lodash';

const errorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RESPONSE_ERROR:
      return merge({}, state, action.error);
    default:
      return state;
  }
};

export default errorsReducer;
