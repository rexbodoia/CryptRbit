import merge from 'lodash/merge';

import { RECEIVE_ARTICLES } from '../actions/news_feed_actions';

const newsFeedReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return merge({}, state, action.articles);
    default:
      return state;
  }
};

export default newsFeedReducer;