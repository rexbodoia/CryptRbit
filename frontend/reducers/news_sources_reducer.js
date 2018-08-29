import merge from "lodash/merge";

import { RECEIVE_NEWS_SOURCES } from "../actions/news_feed_actions";

const newsSourcesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEWS_SOURCES:
      return action.newsSources;
    default:
      return state;
  }
};

export default newsSourcesReducer;
