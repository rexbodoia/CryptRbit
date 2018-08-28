import { combineReducers } from 'redux';
import exchangePricesPerCoinPairReducer from './exchange_prices_per_coin_pair_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  exchangePricesPerCoinPair: exchangePricesPerCoinPairReducer
});

export default rootReducer;
