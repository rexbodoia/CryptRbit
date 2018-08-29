import merge from 'lodash/merge';

import { RECEIVE_NEWS_ARTICLES } from '../actions/news_feed_actions';

const newsArticlesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEWS_ARTICLES:
      return action.newsArticles;
    default:
      return state;
  }
};

export default newsArticlesReducer;