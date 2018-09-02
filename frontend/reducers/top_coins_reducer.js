import merge from "lodash/merge";

import { RECEIVE_TOP_COIN_PAIRS } from "../actions/exchange_prices_per_coin_pair_actions";

const topCoinsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOP_COIN_PAIRS:
      return action.coins;
    default:
      return state;
  }
};

export default topCoinsReducer;
