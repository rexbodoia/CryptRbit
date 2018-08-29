import { combineReducers } from 'redux';
import exchangePricesPerCoinPairReducer from './exchange_prices_per_coin_pair_reducer';
import newsArticlesReducer from "./news_articles_reducer";
<<<<<<< HEAD
import newsCategoriesReducer from "./news_categories_reducer";
import newsSourcesReducer from './news_sources_reducer';
=======
import exchangeDonutReducer from './exchange_donut_reducer';
>>>>>>> e5c6bd425ffcb81d6925057b6de8f4cd84fbfbec
import coinPairReducer from "./coin_pair_reducer";

const entitiesReducer = combineReducers({
  exchangePricesPerCoinPair: exchangePricesPerCoinPairReducer,
  newsArticles: newsArticlesReducer,
<<<<<<< HEAD
  newsCategories: newsCategoriesReducer,
  newsSources: newsSourcesReducer,
=======
  exchangeDonutData: exchangeDonutReducer,
>>>>>>> e5c6bd425ffcb81d6925057b6de8f4cd84fbfbec
  coinPair: coinPairReducer
});

export default entitiesReducer;
