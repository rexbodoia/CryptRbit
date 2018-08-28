import { combineReducers } from 'redux';
import exchangePricesPerCoinPairReducer from './exchange_prices_per_coin_pair_reducer';

const entitiesReducer = combineReducers({
  exchangePricesPerCoinPair: exchangePricesPerCoinPairReducer
});

export default entitiesReducer;
