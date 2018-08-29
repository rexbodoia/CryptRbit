import { combineReducers } from 'redux';
import exchangePricesPerCoinPairReducer from './exchange_prices_per_coin_pair_reducer';
import newsArticlesReducer from "./news_articles_reducer";
import newsCategoriesReducer from "./news_categories_reducer";
import newsSourcesReducer from './news_sources_reducer';
import coinPairReducer from "./coin_pair_reducer";

const entitiesReducer = combineReducers({
  exchangePricesPerCoinPair: exchangePricesPerCoinPairReducer,
  newsArticles: newsArticlesReducer,
  newsCategories: newsCategoriesReducer,
  newsSources: newsSourcesReducer,
  coinPair: coinPairReducer
});

export default entitiesReducer;
