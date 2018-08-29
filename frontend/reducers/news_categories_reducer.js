import merge from "lodash/merge";

import { RECEIVE_NEWS_CATEGORIES } from "../actions/news_feed_actions";

const newsCategoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEWS_CATEGORIES:
      return action.newsCategories;
    default:
      return state;
  }
};

export default newsCategoriesReducer;
