import { RECEIVE_EXCHANGE_PRICES_PER_COIN_PAIR } from '../actions/exchange_prices_per_coin_pair_actions';

import { merge } from 'lodash';

const exchangePricesPerCoinPairReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EXCHANGE_PRICES_PER_COIN_PAIR:
      let payload = {
        exchange: action.payload["MARKET"],
        price: action.payload["PRICE"],
        fsym: action.payload["FROMSYMBOL"],
        tsym: action.payload["TOSYMBOL"]
      }
      return payload;
    default:
      return state;
  }
};

export default exchangePricesPerCoinPairReducer;
