import { combineReducers } from 'redux';
import exchangePricesPerCoinPairReducer from './exchange_prices_per_coin_pair_reducer';
import errorsReducer from './errorsReducer';
import exchangeDonutReducer from './exchange_donut_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  exchangePricesPerCoinPair: exchangePricesPerCoinPairReducer,
  exchangeDonutData: exchangeDonutReducer
});

export default rootReducer;
